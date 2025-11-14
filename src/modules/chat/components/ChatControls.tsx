"use client";

import {
    MicrophoneIcon,
    VideoIcon,
    PauseIcon,
    PhoneIcon,
} from "@/components/icons";

interface ChatControlsProps {
    onMicrophoneToggle?: () => void;
    onVideoToggle?: () => void;
    onPause?: () => void;
    onStartConversation?: () => void;
    isMuted?: boolean;
    isVideoOff?: boolean;
    isPaused?: boolean;
}

export function ChatControls({
    onMicrophoneToggle,
    onVideoToggle,
    onPause,
    onStartConversation,
    isMuted = false,
    isVideoOff = false,
    isPaused = false,
}: ChatControlsProps) {
    return (
        <div className="flex items-center justify-center gap-[10px] md:gap-[26px] px-2 py-2 md:px-4 md:py-4 rounded-[40px] bg-gradient-to-r from-[#E95D3C] via-[#833422] to-[#833422] w-full max-w-[1360px] mx-auto">
            {/* Microphone Button */}
            <button
                onClick={onMicrophoneToggle}
                className="flex items-center justify-center w-[40px] h-[40px] rounded-[30px] bg-white hover:bg-gray-50 transition-colors"
                aria-label={isMuted ? "Unmute microphone" : "Mute microphone"}
            >
                <MicrophoneIcon stroke={isMuted ? "#999" : "#141414"} />
            </button>

            {/* Video Button */}
            <button
                onClick={onVideoToggle}
                className="flex items-center justify-center w-[40px] h-[40px] rounded-[30px] bg-white hover:bg-gray-50 transition-colors"
                aria-label={isVideoOff ? "Turn on video" : "Turn off video"}
            >
                <VideoIcon stroke={isVideoOff ? "#999" : "#141414"} />
            </button>

            {/* Pause Button */}
            <button
                onClick={onPause}
                className="flex items-center justify-center w-[40px] h-[40px] rounded-[30px] bg-white hover:bg-gray-50 transition-colors"
                aria-label={
                    isPaused ? "Resume conversation" : "Pause conversation"
                }
            >
                <PauseIcon stroke={isPaused ? "#999" : "#141414"} />
            </button>

            {/* Start Conversation Button */}
            <button
                onClick={onStartConversation}
                className="flex items-center justify-center gap-1 md:gap-[10px] px-4 py-[10px] rounded-[30px] bg-white hover:bg-gray-50 transition-colors"
            >
                <PhoneIcon />
                <span className="font-bricolage text-sm font-semibold text-black capitalize">
                    Start Conversation
                </span>
            </button>
        </div>
    );
}
