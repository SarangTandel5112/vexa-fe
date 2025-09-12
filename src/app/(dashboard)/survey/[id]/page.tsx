"use client";
import { Button, CenteredContent, ConversationControls } from "@/components";
import { EndConversationModal } from "@/components/ui/EndConversationModal";
import { ThankYouModal } from "@/components/ui/ThankYouModal";
import { useConversation } from "@elevenlabs/react";
import { useState, useEffect, useRef, useCallback } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

export default function SurveyDemoPage({ params }: PageProps) {
  const [isConversationActive, setIsConversationActive] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [micMuted, setMicMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60 * 60); // 60 minutes in seconds
  const [prePauseMuteState, setPrePauseMuteState] = useState(false); // Remember mute state before pause
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const conversation = useConversation({
    overrides: {
      agent: {
        language: "en",
      },
    },
    micMuted,
    onConnect: () => console.log("Connected"),
    onDisconnect: () => console.log("Disconnected"),
    onMessage: (message) => console.log("Message:", message),
    onError: (error) => console.error("Error:", error),
  });

  const endConversation = useCallback(async () => {
    // Clear the timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    await conversation.endSession();
    setIsConversationActive(false);
    setShowEndModal(false);
    setIsPaused(false);
    setMicMuted(false);
    setTimeRemaining(60 * 60); // Reset timer for next session
    setShowThankYouModal(true);
  }, [conversation]);

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

  // Format time as MM:SS
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
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
      console.log('Conversation paused - microphone muted');
    } else {
      // When resuming, restore the previous mute state
      setMicMuted(prePauseMuteState); // Restore previous mute state
      setIsPaused(false);
      console.log(`Conversation resumed - microphone ${prePauseMuteState ? 'muted' : 'unmuted'}`);
    }
  }, [isPaused, micMuted, prePauseMuteState]);

  const handleMute = useCallback(() => {
    const newMutedState = !micMuted;
    setMicMuted(newMutedState);
    
    console.log(newMutedState ? 'Microphone muted' : 'Microphone unmuted');
  }, [micMuted]);

  return (
    <main className="flex-1 flex flex-col justify-center items-center px-4 py-12">
      <CenteredContent className="mb-12">
        <h1 className="font-bricolage text-[28px] md:text-[40px] font-bold text-[#401A4D] leading-[1] mb-4">
          Want to give Vexa a Quick try?
        </h1>
        <p className="font-sf-pro text-[16px] md:text-[20px] text-[#401A4D] leading-[1.6] md:leading-[2]">
          Think of it as a practice round — just 5 minutes, totally optional.
          Get a feel for how the chat works before we dive into the real
          session.
        </p>
      </CenteredContent>

      {/* Center Image with Glow Effect */}
      <div className="relative mb-12">
        <div className="w-[280px] md:w-[298px] h-[280px] md:h-[298px] rounded-full flex items-center justify-center relative">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(222,115,122,0.3)]" />
          {/* Image */}
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <img
              src="/survey.png"
              alt="Pink swirl decoration"
              className="w-full h-full object-cover scale-150"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col items-center gap-4 mb-12">
        {!isConversationActive ? (
          <>
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
            <Button
              variant="gradient"
              size="sm"
              className="px-16 py-3"
              onClick={startConversation}
              loading={isLoading}
            >
              {isLoading ? "Starting..." : "Start Demo"}
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
                  Survey will end automatically when time expires
                </p>
              )}
            </div>
            
            <ConversationControls
              onPause={handlePause}
              onMute={handleMute}
              onEndConversation={() => setShowEndModal(true)}
              isPaused={isPaused}
              isMuted={micMuted}
            />
          </div>
        )}
      </div>

      <CenteredContent>
        <p className="font-sf-pro text-[14px] md:text-[16px] text-[#827487] underline">
          For any help during the conversation you can pause and{" "}
          <span className="cursor-pointer hover:text-[#612A74] transition-colors">
            contact us
          </span>
        </p>
      </CenteredContent>

      <EndConversationModal
        isOpen={showEndModal}
        onClose={() => setShowEndModal(false)}
        onConfirm={endConversation}
      />

      <ThankYouModal isOpen={showThankYouModal} onClose={closeThankYouModal} />
    </main>
  );
}
