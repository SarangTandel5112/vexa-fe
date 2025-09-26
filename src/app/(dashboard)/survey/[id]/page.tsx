"use client";
import { Button, CenteredContent, VideoRecorder } from "@/components";
import CallIcon from "@/components/icons/CallIcon";
import { EndConversationModal } from "@/components/ui/EndConversationModal";
import { ThankYouModal } from "@/components/ui/ThankYouModal";
import { useConversation } from "@elevenlabs/react";
import { useAuth } from "@/contexts/AuthContext";
import { conversationService } from "@/services/conversation.service";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import orbAnimation from "@/assets/orb.json";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface PageProps {
    params: {
        id: string;
    };
}

export default function SurveyDemoPage({}: PageProps) {
    const [isConversationActive, setIsConversationActive] = useState(false);
    const [showEndModal, setShowEndModal] = useState(false);
    const [showThankYouModal, setShowThankYouModal] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [micMuted, setMicMuted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(60 * 60); // 60 minutes in seconds
    const [prePauseMuteState, setPrePauseMuteState] = useState(false); // Remember mute state before pause
    // Voice activity detection states
    const [isUserSpeaking, setIsUserSpeaking] = useState(false);
    const [isAISpeaking, setIsAISpeaking] = useState(false);
    const [voiceIntensity, setVoiceIntensity] = useState(0); // 0-100 voice intensity level
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const isConversationActiveRef = useRef(isConversationActive);
    const lottieRef = useRef<LottieRefCurrentProps>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const videoPreviewRef = useRef<HTMLVideoElement | null>(null);
    const [isRecording, setIsRecording] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);

    // Get user and logout function from auth context
    const { user, logout } = useAuth();

    // Update ref whenever isConversationActive changes
    useEffect(() => {
        isConversationActiveRef.current = isConversationActive;
    }, [isConversationActive]);

    // Voice activity detection cleanup function
    const cleanupVoiceActivityDetection = useCallback(() => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }

        if (microphoneRef.current) {
            microphoneRef.current.disconnect();
            microphoneRef.current = null;
        }

        if (
            audioContextRef.current &&
            audioContextRef.current.state !== "closed"
        ) {
            audioContextRef.current.close();
            audioContextRef.current = null;
        }

        analyserRef.current = null;
        setIsUserSpeaking(false);
        setIsAISpeaking(false);
    }, []);

    const conversation = useConversation({
        overrides: {
            agent: {
                language: "en",
            },
        },
        micMuted,
        onConnect: () => console.log("Connected"),
        onDisconnect: () => {
            console.log(
                isConversationActiveRef.current,
                "Disconnected - Bot ended conversation"
            );
            // If conversation is active when disconnect happens, it means bot ended it
            if (isConversationActiveRef.current) {
                endConversation();
                console.log("Bot initiated conversation end detected");
            }
        },
        onMessage: () => {
            // Voice detection is handled by Web Audio API
            // ElevenLabs message events may not contain the type property we need
        },
        onError: (error) => console.error("Error:", error),
    });

    const endConversation = useCallback(async () => {
        // Clear the timer
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }

        try {
            // End the ElevenLabs conversation session
            await conversation.endSession();

            // Call mark_unusable API if user is available
            if (user?.username) {
                console.log(
                    "Calling mark_unusable API for user:",
                    user.username
                );
                // const markUnusableResponse =
                //     await conversationService.markUnusable(user.username);

                // if (markUnusableResponse.error) {
                //     console.error(
                //         "Failed to mark user as unusable:",
                //         markUnusableResponse.error
                //     );
                //     // Don't block the UI flow even if the API call fails
                // } else {
                //     console.log(
                //         "Successfully marked user as unusable:",
                //         markUnusableResponse.data
                //     );
                // }

                // Call logout API after 5 seconds
                console.log("Scheduling logout API call for 5 seconds...");
                setTimeout(async () => {
                    try {
                        console.log("Calling logout API after 5 second delay");
                        const logoutResponse =
                            await conversationService.logout();

                        if (logoutResponse.error) {
                            console.error(
                                "Failed to logout:",
                                logoutResponse.error
                            );
                            // Don't block the UI flow even if the logout API call fails
                        } else {
                            console.log(
                                "Successfully logged out:",
                                logoutResponse.data
                            );
                            // Call the auth context logout to update the UI state
                            await logout();
                        }
                    } catch (error) {
                        console.error("Error during delayed logout:", error);
                    }
                }, 3000); // 5 seconds delay
            } else {
                console.warn(
                    "No user found, skipping mark_unusable and logout API calls"
                );
            }
        } catch (error) {
            console.error("Error during conversation end process:", error);
            // Continue with UI flow even if there are errors
        } finally {
            console.log("====Message=====");

            // Clean up voice activity detection
            cleanupVoiceActivityDetection();

            // Always update the UI state regardless of API call results
            setIsConversationActive(false);
            setShowEndModal(false);
            setIsPaused(false);
            setMicMuted(false);
            setTimeRemaining(60 * 60); // Reset timer for next session
            setShowThankYouModal(true);
        }
    }, [conversation, user, logout, cleanupVoiceActivityDetection]);

    // Timer useEffect
    useEffect(() => {
        if (isConversationActive && !isPaused && timeRemaining > 0) {
            timerRef.current = setInterval(() => {
                setTimeRemaining((prev) => {
                    if (prev <= 1) {
                        // Time's up - set flag to end conversation
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [isConversationActive, isPaused, timeRemaining]);

    // Separate useEffect to handle timer expiry
    useEffect(() => {
        if (isConversationActive && timeRemaining === 0) {
            endConversation();
        }
    }, [isConversationActive, timeRemaining, endConversation]);

    // Voice activity detection using Web Audio API
    const setupVoiceActivityDetection = useCallback(async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true,
                },
            });

            audioContextRef.current = new (window.AudioContext ||
                (
                    window as unknown as {
                        webkitAudioContext: typeof AudioContext;
                    }
                ).webkitAudioContext)();
            analyserRef.current = audioContextRef.current.createAnalyser();
            microphoneRef.current =
                audioContextRef.current.createMediaStreamSource(stream);

            analyserRef.current.fftSize = 256;
            analyserRef.current.smoothingTimeConstant = 0.8;
            microphoneRef.current.connect(analyserRef.current);

            // Voice detection will be handled by the detectVoiceActivity useCallback
        } catch (error) {
            console.error("Failed to setup voice activity detection:", error);
        }
    }, []);

    const detectVoiceActivity = useCallback(() => {
        if (
            !analyserRef.current ||
            !isConversationActive ||
            isPaused ||
            micMuted
        ) {
            setIsUserSpeaking(false);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            return;
        }

        const bufferLength = analyserRef.current.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const checkAudioLevel = () => {
            if (
                !analyserRef.current ||
                !isConversationActive ||
                isPaused ||
                micMuted
            ) {
                setIsUserSpeaking(false);
                return;
            }

            analyserRef.current.getByteFrequencyData(dataArray);

            // Calculate RMS (Root Mean Square) for volume level
            let sum = 0;
            for (let i = 0; i < bufferLength; i++) {
                sum += dataArray[i] * dataArray[i];
            }
            const rms = Math.sqrt(sum / bufferLength);

            // Calculate voice intensity (0-100 scale)
            const intensity = Math.min(100, Math.max(0, (rms / 80) * 100));
            setVoiceIntensity(intensity);

            // Adjust threshold as needed (15-25 works well for most microphones)
            const threshold = 15;
            const speaking = rms > threshold;

            setIsUserSpeaking(speaking);

            animationFrameRef.current = requestAnimationFrame(checkAudioLevel);
        };

        checkAudioLevel();
    }, [isConversationActive, isPaused, micMuted]);

    // Setup voice activity detection when conversation starts
    useEffect(() => {
        if (isConversationActive && !isPaused) {
            setupVoiceActivityDetection();
        } else {
            cleanupVoiceActivityDetection();
        }

        return () => cleanupVoiceActivityDetection();
    }, [
        isConversationActive,
        isPaused,
        setupVoiceActivityDetection,
        cleanupVoiceActivityDetection,
    ]);

    // Start voice activity detection when not muted
    useEffect(() => {
        if (isConversationActive && !isPaused) {
            detectVoiceActivity();
        }
    }, [micMuted, detectVoiceActivity, isConversationActive, isPaused]);

    // Control Lottie animation based on voice activity and intensity
    useEffect(() => {
        if (!lottieRef.current) return;

        const isSomeoneElseSpeaking = isUserSpeaking || isAISpeaking;

        if (isSomeoneElseSpeaking) {
            // Dynamic speed based on voice intensity (1.5x - 3x speed)
            const intensityMultiplier = isUserSpeaking
                ? Math.max(1.5, Math.min(3, 1.5 + (voiceIntensity / 100) * 1.5))
                : 2.5; // AI speaking gets consistent higher speed

            lottieRef.current.setSpeed(intensityMultiplier);
        } else {
            // Gentle animation when not speaking (0.8x speed)
            lottieRef.current.setSpeed(0.8);
        }
    }, [isUserSpeaking, isAISpeaking, voiceIntensity]);

    // Format time as MM:SS
    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`;
    };

    const startConversation = async () => {
        try {
            setIsLoading(true);
            await navigator.mediaDevices.getUserMedia({ audio: true });

            // Use agent_id from user object, fallback to default if not available
            const agentId = user?.agent_id || "XabqnwlhQf0xe3M4Ew7p";

            await conversation.startSession({
                agentId: agentId,
                connectionType: "websocket",
            });
            setIsConversationActive(true);
            console.log(
                isConversationActive,
                "----------isConversationActive========"
            );
        } catch (error) {
            console.error("Failed to start conversation:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const closeThankYouModal = () => {
        setShowThankYouModal(false);
    };

    const handlePause = useCallback(() => {
        const newPausedState = !isPaused;

        // When pausing, store current mute state and mute the microphone
        if (newPausedState) {
            setPrePauseMuteState(micMuted); // Remember current mute state
            setMicMuted(true); // Always mute when pausing
            setIsPaused(true);
            console.log("Conversation paused - microphone muted");
        } else {
            // When resuming, restore the previous mute state
            setMicMuted(prePauseMuteState); // Restore previous mute state
            setIsPaused(false);
            console.log(
                `Conversation resumed - microphone ${
                    prePauseMuteState ? "muted" : "unmuted"
                }`
            );
        }
    }, [isPaused, micMuted, prePauseMuteState]);

    const handleMute = useCallback(() => {
        const newMutedState = !micMuted;
        setMicMuted(newMutedState);

        console.log(newMutedState ? "Microphone muted" : "Microphone unmuted");
    }, [micMuted]);

    // Format recording time as MM:SS
    const formatRecordingTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`;
    };

    // Recording timer effect
    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isRecording) {
            interval = setInterval(() => {
                setRecordingTime((prev) => prev + 1);
            }, 1000);
        } else {
            setRecordingTime(0);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRecording]);

    return (
        <main className="flex-1 flex flex-col justify-center items-center px-4 py-12">
            <CenteredContent className="mb-12">
                <h1 className="font-bricolage text-[28px] md:text-[40px] font-bold text-[#401A4D] leading-[1] mb-4">
                    Start a new chat
                </h1>
                <h1 className="font-bricolage text-[28px] md:text-[40px] font-bold text-[#401A4D] leading-[1] mb-4">
                    With Vexa AI chatbot
                </h1>
                {/* <p className="font-sf-pro text-[16px] md:text-[20px] text-[#401A4D] leading-[1.6] md:leading-[2]">
          Think of it as a practice round — just 5 minutes, totally optional.
          Get a feel for how the chat works before we dive into the real
          session.
        </p> */}
            </CenteredContent>

            {/* Center Image with Glow Effect or Video Preview */}
            <div className="relative mb-12">
                {isRecording ? (
                    // Video Preview when recording - 16:9 aspect ratio
                    <div className="w-[320px] md:w-[600px] h-[180px] md:h-[338px] rounded-2xl flex items-center justify-center relative overflow-hidden">
                        <video
                            ref={videoPreviewRef}
                            className="w-full h-full object-cover rounded-2xl"
                            muted
                            playsInline
                            autoPlay
                            controls={false}
                        />
                        {/* Recording timer overlay - bottom right */}
                        <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-red-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <span className="text-white text-xs font-medium">
                                REC {formatRecordingTime(recordingTime)}
                            </span>
                        </div>
                    </div>
                ) : (
                    // Original orb when not recording
                    <div className="w-[280px] md:w-[298px] h-[280px] md:h-[298px] rounded-full flex items-center justify-center relative">
                        {/* Dynamic glow effect that responds to voice intensity */}
                        <div
                            className="absolute inset-0 rounded-full transition-all duration-200"
                            style={{
                                boxShadow:
                                    isUserSpeaking || isAISpeaking
                                        ? `0 0 ${Math.max(
                                              40,
                                              40 + (voiceIntensity / 100) * 40
                                          )}px rgba(222, 115, 122, ${Math.max(
                                              0.4,
                                              0.4 + (voiceIntensity / 100) * 0.4
                                          )})`
                                        : "0 0 30px rgba(222, 115, 122, 0.25)",
                                transform:
                                    isUserSpeaking || isAISpeaking
                                        ? `scale(${Math.max(
                                              1.02,
                                              1.02 +
                                                  (voiceIntensity / 100) * 0.08
                                          )})`
                                        : "scale(1)",
                            }}
                        />

                        {/* Animated rings when someone is speaking - respond to voice intensity */}
                        {(isUserSpeaking || isAISpeaking) && (
                            <>
                                {/* Ring 1 - innermost, contained within the orb */}
                                <div
                                    className="absolute inset-[10px] rounded-full border-2 animate-pulse"
                                    style={{
                                        borderColor: `rgba(222, 115, 122, ${Math.max(
                                            0.3,
                                            0.3 + (voiceIntensity / 100) * 0.4
                                        )})`,
                                        transform: `scale(${Math.max(
                                            0.95,
                                            0.95 + (voiceIntensity / 100) * 0.1
                                        )})`,
                                        animationDuration: isUserSpeaking
                                            ? `${Math.max(
                                                  1.2,
                                                  2 -
                                                      (voiceIntensity / 100) *
                                                          0.8
                                              )}s`
                                            : "1.8s",
                                    }}
                                />
                                {/* Ring 2 - middle ring, still within bounds */}
                                <div
                                    className="absolute inset-[5px] rounded-full border-2 animate-pulse"
                                    style={{
                                        borderColor: `rgba(222, 115, 122, ${Math.max(
                                            0.2,
                                            0.2 + (voiceIntensity / 100) * 0.3
                                        )})`,
                                        transform: `scale(${Math.max(
                                            0.98,
                                            0.98 + (voiceIntensity / 100) * 0.05
                                        )})`,
                                        animationDelay: "0.4s",
                                        animationDuration: isUserSpeaking
                                            ? `${Math.max(
                                                  1.5,
                                                  2.3 -
                                                      (voiceIntensity / 100) *
                                                          0.8
                                              )}s`
                                            : "2.1s",
                                    }}
                                />
                                {/* Ring 3 - outer ring, stays within container */}
                                <div
                                    className="absolute inset-[2px] rounded-full border-[1px] animate-pulse"
                                    style={{
                                        borderColor: `rgba(222, 115, 122, ${Math.max(
                                            0.15,
                                            0.15 + (voiceIntensity / 100) * 0.25
                                        )})`,
                                        transform: `scale(${Math.max(
                                            0.99,
                                            0.99 + (voiceIntensity / 100) * 0.02
                                        )})`,
                                        animationDelay: "0.8s",
                                        animationDuration: isUserSpeaking
                                            ? `${Math.max(
                                                  1.8,
                                                  2.5 -
                                                      (voiceIntensity / 100) *
                                                          0.7
                                              )}s`
                                            : "2.4s",
                                    }}
                                />
                            </>
                        )}

                        {/* Lottie Animation */}
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                            <Lottie
                                lottieRef={lottieRef}
                                animationData={orbAnimation}
                                loop={true}
                                className={`transition-transform duration-300 ${
                                    isUserSpeaking || isAISpeaking
                                        ? "scale-110"
                                        : "scale-100"
                                }`}
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center gap-4 mb-12">
                {!isConversationActive ? (
                    <>
                        {/* <Button
              variant="secondary"
              icon={
               <NextIcon />
              }
            >
              Skip
            </Button> */}
                        <Button
                            variant="gradient"
                            size="sm"
                            className="px-16 py-3"
                            onClick={startConversation}
                            icon={<CallIcon />}
                            loading={isLoading}
                        >
                            {isLoading ? "Starting..." : "Start Conversation"}
                        </Button>
                    </>
                ) : (
                    <div className="flex flex-col items-center gap-4">
                        {/* Timer Display */}
                        <div className="bg-white/70 backdrop-blur-[15px] border border-[#776F69]/28 rounded-2xl px-6 py-3">
                            <div className="flex items-center gap-3">
                                {isPaused ? (
                                    // Pause Icon when paused
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="flex-shrink-0"
                                    >
                                        <path
                                            d="M13.5 3.66675V13.6667C13.5 13.932 13.3946 14.1863 13.2071 14.3739C13.0196 14.5614 12.7652 14.6667 12.5 14.6667H10C9.73478 14.6667 9.48043 14.5614 9.29289 14.3739C9.10536 14.1863 9 13.932 9 13.6667V3.66675C9 3.40153 9.10536 3.14718 9.29289 2.95964C9.48043 2.7721 9.73478 2.66675 10 2.66675H12.5C12.7652 2.66675 13.0196 2.7721 13.2071 2.95964C13.3946 3.14718 13.5 3.40153 13.5 3.66675ZM6 2.66675H3.5C3.23478 2.66675 2.98043 2.7721 2.79289 2.95964C2.60536 3.14718 2.5 3.40153 2.5 3.66675V13.6667C2.5 13.932 2.60536 14.1863 2.79289 14.3739C2.98043 14.5614 3.23478 14.6667 3.5 14.6667H6C6.26522 14.6667 6.51957 14.5614 6.70711 14.3739C6.89464 14.1863 7 13.932 7 13.6667V3.66675C7 3.40153 6.89464 3.14718 6.70711 2.95964C6.51957 2.7721 6.26522 2.66675 6 2.66675Z"
                                            fill="#401A4D"
                                        />
                                    </svg>
                                ) : (
                                    // Pulsing dot when active
                                    <div className="w-3 h-3 bg-[#DE737A] rounded-full animate-pulse"></div>
                                )}
                                <span className="font-sf-pro text-lg font-semibold text-[#401A4D]">
                                    Time Remaining: {formatTime(timeRemaining)}
                                </span>
                            </div>
                            {timeRemaining <= 300 && ( // Show warning when 5 minutes or less
                                <p className="text-xs text-[#DE737A] mt-1 text-center">
                                    Survey will end automatically when time
                                    expires
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto">
                            {/* Pause and Mute Controls */}
                            <div className="flex justify-center items-center gap-2 w-full">
                                {/* Pause/Resume Button */}
                                <button
                                    onClick={handlePause}
                                    className="flex-1 max-w-40 flex items-center justify-center gap-1 px-6 py-2 bg-gradient-to-r from-[#E8A089] to-[#612A74] rounded-full text-white font-sf-pro text-sm font-normal capitalize transition-all hover:shadow-lg cursor-pointer"
                                >
                                    {isPaused ? (
                                        // Resume/Play Icon
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="flex-shrink-0"
                                        >
                                            <path
                                                d="M3.5 3.16675C3.5 2.7525 3.83579 2.41675 4.25 2.41675C4.44891 2.41675 4.63968 2.49576 4.78033 2.63641L12.2803 10.1364C12.4877 10.3438 12.4877 10.6798 12.2803 10.8872L4.78033 18.3872C4.63968 18.5278 4.44891 18.6068 4.25 18.6068C3.83579 18.6068 3.5 18.271 3.5 17.8568V3.16675Z"
                                                fill="white"
                                            />
                                        </svg>
                                    ) : (
                                        // Pause Icon
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="flex-shrink-0"
                                        >
                                            <path
                                                d="M13.5 3.66675V13.6667C13.5 13.932 13.3946 14.1863 13.2071 14.3739C13.0196 14.5614 12.7652 14.6667 12.5 14.6667H10C9.73478 14.6667 9.48043 14.5614 9.29289 14.3739C9.10536 14.1863 9 13.932 9 13.6667V3.66675C9 3.40153 9.10536 3.14718 9.29289 2.95964C9.48043 2.7721 9.73478 2.66675 10 2.66675H12.5C12.7652 2.66675 13.0196 2.7721 13.2071 2.95964C13.3946 3.14718 13.5 3.40153 13.5 3.66675ZM6 2.66675H3.5C3.23478 2.66675 2.98043 2.7721 2.79289 2.95964C2.60536 3.14718 2.5 3.40153 2.5 3.66675V13.6667C2.5 13.932 2.60536 14.1863 2.79289 14.3739C2.98043 14.5614 3.23478 14.6667 3.5 14.6667H6C6.26522 14.6667 6.51957 14.5614 6.70711 14.3739C6.89464 14.1863 7 13.932 7 13.6667V3.66675C7 3.40153 6.89464 3.14718 6.70711 2.95964C6.51957 2.7721 6.26522 2.66675 6 2.66675Z"
                                                fill="white"
                                            />
                                        </svg>
                                    )}
                                    <span className="text-[#F3EEE9]">
                                        {isPaused ? "Resume" : "Pause"}
                                    </span>
                                </button>

                                {/* Mute/Unmute Button */}
                                <button
                                    onClick={handleMute}
                                    className="flex-1 max-w-40 flex items-center justify-center gap-1 px-6 py-2 bg-gradient-to-r from-[#E8A089] to-[#612A74] rounded-full text-white font-sf-pro text-sm font-normal capitalize transition-all hover:shadow-lg cursor-pointer"
                                >
                                    {micMuted ? (
                                        // Muted Icon (with slash)
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="flex-shrink-0"
                                        >
                                            <g clipPath="url(#clip0_313_3121)">
                                                <path
                                                    d="M13.3361 15.0368C13.238 15.126 13.1085 15.1726 12.976 15.1662C12.8436 15.1599 12.7191 15.1012 12.6299 15.0031L10.6974 12.8781C10.0363 13.3042 9.28279 13.5659 8.49988 13.6412V15.6668C8.49988 15.7994 8.4472 15.9266 8.35343 16.0204C8.25966 16.1142 8.13248 16.1668 7.99988 16.1668C7.86727 16.1668 7.74009 16.1142 7.64632 16.0204C7.55255 15.9266 7.49988 15.7994 7.49988 15.6668V13.6418C6.26715 13.5164 5.12473 12.9383 4.29353 12.0194C3.46233 11.1004 3.0014 9.90593 2.99988 8.66684C2.99988 8.53423 3.05255 8.40706 3.14632 8.31329C3.24009 8.21952 3.36727 8.16684 3.49988 8.16684C3.63248 8.16684 3.75966 8.21952 3.85343 8.31329C3.9472 8.40706 3.99988 8.53423 3.99988 8.66684C4.00103 9.72735 4.42283 10.7441 5.17273 11.494C5.92262 12.2439 6.93936 12.6657 7.99988 12.6668C8.70731 12.6689 9.40241 12.4816 10.013 12.1243L9.31925 11.3618C8.86182 11.5858 8.3549 11.6897 7.84624 11.6636C7.33759 11.6375 6.84395 11.4824 6.41183 11.2128C5.97972 10.9431 5.62336 10.568 5.37634 10.1225C5.12931 9.67714 4.99976 9.17617 4.99988 8.66684V6.60997L2.62988 4.00309C2.54256 3.90467 2.49756 3.7758 2.50463 3.64442C2.5117 3.51304 2.57026 3.38974 2.66763 3.30125C2.765 3.21276 2.89332 3.16622 3.02478 3.17171C3.15623 3.17721 3.28023 3.23429 3.36987 3.33059L13.3699 14.3306C13.459 14.4287 13.5056 14.5583 13.4993 14.6907C13.4929 14.8231 13.4342 14.9477 13.3361 15.0368ZM11.8243 11.0912C11.8924 11.125 11.9675 11.1426 12.0436 11.1425C12.1373 11.1425 12.2291 11.1162 12.3085 11.0666C12.388 11.017 12.4519 10.946 12.493 10.8618C12.8285 10.1789 13.002 9.42775 12.9999 8.66684C12.9999 8.53423 12.9472 8.40706 12.8534 8.31329C12.7597 8.21952 12.6325 8.16684 12.4999 8.16684C12.3673 8.16684 12.2401 8.21952 12.1463 8.31329C12.0526 8.40706 11.9999 8.53423 11.9999 8.66684C12.0017 9.27541 11.8631 9.87618 11.5949 10.4225C11.5366 10.5416 11.5281 10.6789 11.5711 10.8043C11.6141 10.9297 11.7052 11.0329 11.8243 11.0912ZM10.1161 9.26497C10.1811 9.33647 10.2654 9.38763 10.3588 9.41224C10.4522 9.43685 10.5508 9.43387 10.6426 9.40366C10.7343 9.37344 10.8154 9.31729 10.8759 9.24199C10.9364 9.16668 10.9738 9.07546 10.9836 8.97934C10.9943 8.87552 10.9997 8.77122 10.9999 8.66684V4.66684C10.9991 3.97781 10.7612 3.31004 10.3261 2.77576C9.89098 2.24149 9.28522 1.87327 8.61062 1.733C7.93601 1.59272 7.23369 1.68894 6.62167 2.00549C6.00965 2.32203 5.52525 2.8396 5.24988 3.47122C5.21143 3.5595 5.19929 3.65701 5.21492 3.75203C5.23056 3.84705 5.27329 3.93553 5.338 4.00684L10.1161 9.26497Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_313_3121">
                                                    <rect
                                                        width="16"
                                                        height="16"
                                                        fill="white"
                                                        transform="translate(0 0.666748)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    ) : (
                                        // Unmuted Icon (microphone)
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="flex-shrink-0"
                                        >
                                            <path
                                                d="M8 11.6667C9.10457 11.6667 10 10.7713 10 9.66673V4.66673C10 3.56216 9.10457 2.66673 8 2.66673C6.89543 2.66673 6 3.56216 6 4.66673V9.66673C6 10.7713 6.89543 11.6667 8 11.6667ZM13 9.66673C13 12.6667 10.76 15.0001 8 15.0001C5.24 15.0001 3 12.6667 3 9.66673H4.5C4.5 11.8334 6.18 13.5001 8 13.5001C9.82 13.5001 11.5 11.8334 11.5 9.66673M8 13.5001V16.1667M5 16.1667H11"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    )}
                                    <span className="text-[#F3EEE9]">
                                        {micMuted ? "Unmute" : "Mute"}
                                    </span>
                                </button>
                            </div>

                            {/* Video Recording Component */}
                            <VideoRecorder
                                showVideoPreview={true}
                                videoPreviewRef={videoPreviewRef}
                                username={user?.username} // Pass username for backend API call
                                onRecordingStart={() => {
                                    console.log("🎬 Video recording started!");
                                    setIsRecording(true);
                                    setRecordingTime(0);
                                }}
                                onRecordingStop={(videoBlob) => {
                                    console.log(
                                        "🎬 Video recording stopped!",
                                        videoBlob
                                    );
                                    setIsRecording(false);
                                }}
                                onUploadComplete={(assetId, playbackUrl) => {
                                    console.log(
                                        "🎬 Video uploaded successfully!",
                                        { assetId, playbackUrl }
                                    );
                                }}
                                onError={(error) => {
                                    console.error(
                                        "🎬 Video recording error:",
                                        error
                                    );
                                }}
                            />

                            {/* End Conversation Button */}
                            <button
                                onClick={() => setShowEndModal(true)}
                                className="w-full max-w-[328px] px-6 py-2 flex items-center justify-center border border-[#401A4D] rounded-full bg-transparent text-[#401A4D] font-sf-pro text-sm font-bold capitalize transition-all hover:bg-[#401A4D] hover:text-white cursor-pointer"
                            >
                                End Conversation
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <CenteredContent>
                <p className="font-sf-pro text-[14px] md:text-[16px] text-[#827487]">
                    For any help during the conversation you can pause and{" "}
                    <Link
                        href={"/contact"}
                        className="cursor-pointer hover:text-[#612A74] transition-colors underline"
                    >
                        contact us
                    </Link>
                </p>
            </CenteredContent>

            <EndConversationModal
                isOpen={showEndModal}
                onClose={() => setShowEndModal(false)}
                onConfirm={endConversation}
            />

            <ThankYouModal
                isOpen={showThankYouModal}
                onClose={closeThankYouModal}
            />
        </main>
    );
}
