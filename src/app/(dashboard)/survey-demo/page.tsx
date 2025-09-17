"use client";
import { Button, CenteredContent, ConversationControls } from "@/components";
import CallIcon from "@/components/icons/CallIcon";
import { useConversation } from "@elevenlabs/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import orbAnimation from "@/assets/orb.json";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

export default function SurveyDemoPage() {
    const [isConversationActive, setIsConversationActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [micMuted, setMicMuted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(5 * 60); // 5 minutes in seconds
    const [prePauseMuteState, setPrePauseMuteState] = useState(false); // Remember mute state before pause
    const [isDemoCompleted, setIsDemoCompleted] = useState(false); // Track if demo has been completed
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

    const router = useRouter();

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
            // If conversation is active when disconnect happens, it means bot ended it
            if (isConversationActiveRef.current) {
                stopDemoConversation();
                console.log("Bot initiated conversation end detected");
            }
        },
        onMessage: () => {
            // Voice detection is handled by Web Audio API
            // ElevenLabs message events may not contain the type property we need
        },
        onError: (error) => console.error("Error:", error),
    });

    // Function to stop demo conversation and stay on page
    const stopDemoConversation = useCallback(async () => {
        // Clear the timer
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }

        try {
            // End the ElevenLabs conversation session
            await conversation.endSession();
        } catch (error) {
            console.error("Error ending conversation:", error);
        } finally {
            // Clean up voice activity detection
            cleanupVoiceActivityDetection();

            // Reset conversation state and mark demo as completed
            setIsConversationActive(false);
            setIsPaused(false);
            setMicMuted(false);
            setTimeRemaining(5 * 60); // Reset timer for potential restart
            setIsDemoCompleted(true); // Mark demo as completed
        }
    }, [conversation, cleanupVoiceActivityDetection]);

    // Function to redirect to survey page
    const startSurvey = useCallback(() => {
        router.push("/survey/29e2b734-cad3-4a35-94a5-81dcd3c4f364");
    }, [router]);

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
            stopDemoConversation();
        }
    }, [isConversationActive, timeRemaining, stopDemoConversation]);

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
                (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
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
            await conversation.startSession({
                agentId: "XabqnwlhQf0xe3M4Ew7p",
                connectionType: "websocket",
            });
            setIsConversationActive(true);
        } catch (error) {
            console.error("Failed to start conversation:", error);
        } finally {
            setIsLoading(false);
        }
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

    return (
        <main className="flex-1 flex flex-col justify-center items-center px-4 py-12">
            <CenteredContent className="mb-12">
                <h1 className="font-bricolage text-[28px] md:text-[40px] font-bold text-[#401A4D] leading-[1] mb-4">
                    Start a Quick Demo
                </h1>
                <h1 className="font-bricolage text-[28px] md:text-[40px] font-bold text-[#401A4D] leading-[1] mb-4">
                    With Vexa AI Chatbot
                </h1>
                <p className="font-sf-pro text-[16px] md:text-[20px] text-[#401A4D] leading-[1.6] md:leading-[2]">
                    Think of it as a practice round — just 5 minutes, totally
                    optional. Get a feel for how the chat works before we dive
                    into the real session.
                </p>
            </CenteredContent>

            {/* Center Image with Glow Effect */}
            <div className="relative mb-12">
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
                                          1.02 + (voiceIntensity / 100) * 0.08
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
                                              2 - (voiceIntensity / 100) * 0.8
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
                                              2.3 - (voiceIntensity / 100) * 0.8
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
                                              2.5 - (voiceIntensity / 100) * 0.7
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
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center gap-4 mb-12">
                {!isConversationActive ? (
                    <>
                        {/* Only show Skip button if demo hasn't been completed */}
                        {!isDemoCompleted && (
                            <Link href="/survey/29e2b734-cad3-4a35-94a5-81dcd3c4f364">
                                <Button
                                    variant="secondary"
                                    icon={
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M18.5 8.5L22.5 12.5L18.5 16.5"
                                                stroke="#612A74"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M2.5 12.5H22.5"
                                                stroke="#612A74"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    }
                                >
                                    Skip
                                </Button>
                            </Link>
                        )}

                        <Button
                            variant="gradient"
                            size="sm"
                            className="px-16 py-3"
                            onClick={
                                isDemoCompleted
                                    ? startSurvey
                                    : startConversation
                            }
                            icon={<CallIcon />}
                            loading={isLoading}
                        >
                            {isLoading
                                ? "Starting..."
                                : isDemoCompleted
                                ? "Start Survey"
                                : "Start Demo"}
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
                            {timeRemaining <= 120 && ( // Show warning when 2 minutes or less
                                <p className="text-xs text-[#DE737A] mt-1 text-center">
                                    Demo will end automatically when time
                                    expires
                                </p>
                            )}
                        </div>

                        <ConversationControls
                            onPause={handlePause}
                            onMute={handleMute}
                            onEndConversation={stopDemoConversation}
                            isPaused={isPaused}
                            isMuted={micMuted}
                        />
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
        </main>
    );
}
