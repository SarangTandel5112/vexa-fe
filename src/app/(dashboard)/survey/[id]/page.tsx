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

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleMute = () => {
    setMicMuted(!micMuted);
  };

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
                <div className="w-3 h-3 bg-[#DE737A] rounded-full animate-pulse"></div>
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
