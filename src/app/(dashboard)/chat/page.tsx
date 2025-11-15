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
        <div className="flex flex-col gap-[10px] md:gap-8 h-[calc(100svh-90px)] md:h-[calc(100svh-120px)]">
            <div className="flex-1 min-h-0 overflow-hidden">
                <ChatParticipants
                    participants={[defaultModerator, defaultUser]}
                />
            </div>

            <div className="flex-shrink-0">
                <ChatControls
                    onMicrophoneToggle={handleMicrophoneToggle}
                    onVideoToggle={handleVideoToggle}
                    onPause={handlePause}
                    onStartConversation={handleStartConversation}
                />
            </div>
        </div>
    );
}
