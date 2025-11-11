"use client";

import { Header } from "@/components/layout/Header";
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
        <div className="h-screen bg-background flex flex-col">
            <Header variant="dashboard" />

            <div className="w-full flex-1 px-4 py-3 md:py-6 border-b border-[#FAFAF9] bg-[#FAFAF9] overflow-hidden flex flex-col">
                <div className="flex-1 flex flex-col items-center justify-center px-2 py-2 md:px-8 md:py-12 min-h-0">
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
            </div>
        </div>
    );
}
