"use client";

import { ChatParticipants, ChatControls } from "@/modules/chat/components";
import { defaultModerator, defaultUser } from "@/modules/chat/data";

export default function ChatPage() {
    const handleMicrophoneToggle = () => {
        // Handle microphone toggle
        console.log("Microphone toggled");
    };

    const handleVideoToggle = () => {
        // Handle video toggle
        console.log("Video toggled");
    };

    const handlePause = () => {
        // Handle pause
        console.log("Paused");
    };

    const handleStartConversation = () => {
        // Handle start conversation
        console.log("Start conversation");
    };

    return (
        <div className="h-[calc(100vh-140px)] flex flex-col items-center justify-center px-4 py-6 md:py-8">
            <div className="w-full max-w-[1440px] h-full flex flex-col gap-4 md:gap-10">
                <div className="flex-1 flex items-center min-h-0 overflow-hidden">
                    <ChatParticipants
                        participants={[defaultModerator, defaultUser]}
                    />
                </div>

                <div className="flex-shrink-0 pb-2 md:pb-0">
                    <ChatControls
                        onMicrophoneToggle={handleMicrophoneToggle}
                        onVideoToggle={handleVideoToggle}
                        onPause={handlePause}
                        onStartConversation={handleStartConversation}
                    />
                </div>
            </div>
        </div>
    );
}
