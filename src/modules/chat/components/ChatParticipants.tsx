"use client";

import Image from "next/image";
import { Participant } from "../types";

interface ChatParticipantsProps {
    participants: Participant[];
}

interface ParticipantCardProps {
    participant: Participant;
    index: number;
    isModerator: boolean;
}

function ParticipantCard({
    participant,
    index: _index,
    isModerator,
}: ParticipantCardProps) {
    const cardStyles = isModerator
        ? "border-2 border-[#F9D2D2] bg-[rgba(255,241,241,0.20)]"
        : "border-2 border-[#F9E7D2] bg-[#FBF8F7] shadow-[inset_0_4px_100px_rgba(255,146,142,0.20)]";

    return (
        <div
            className={`relative flex flex-col items-center justify-center h-full w-full px-4 py-3 md:px-8 md:py-6 lg:px-[30px] lg:py-8 rounded-[36px] ${cardStyles}`}
        >
            {isModerator ? (
                <>
                    {participant.avatar ? (
                        <Image
                            src={participant.avatar}
                            alt={`${participant.name} avatar`}
                            width={140}
                            height={140}
                            className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] rounded-full object-cover flex-shrink-0"
                            unoptimized
                        />
                    ) : (
                        <div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="font-bricolage text-3xl lg:text-4xl font-semibold text-gray-600">
                                {participant.initial ||
                                    participant.name.charAt(0)}
                            </span>
                        </div>
                    )}
                </>
            ) : (
                <div className="flex items-center justify-center p-4 lg:p-5 rounded-full bg-[rgba(255,146,142,0.38)]">
                    <div className="flex items-center justify-center w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] p-3 lg:p-4 rounded-full bg-[#E9733C]">
                        <span className="font-bricolage text-[50px] lg:text-[60px] font-semibold leading-[50px] lg:leading-[60px] text-white">
                            {participant.initial ||
                                participant.name.charAt(0).toLowerCase()}
                        </span>
                    </div>
                </div>
            )}
            <div className="absolute bottom-3 left-4 md:bottom-6 md:left-8 lg:bottom-6 lg:left-[30px] font-bricolage text-base md:text-2xl font-bold text-[#1E1E1E] capitalize">
                {participant.name} - {participant.role}
            </div>
        </div>
    );
}

export function ChatParticipants({ participants }: ChatParticipantsProps) {
    const total = participants.length;
    const moderatorIndex = participants.findIndex(
        (p) => p.role?.toLowerCase() === "moderator"
    );

    // For 3 users on small screens: separate moderator from others
    const isThreeUsers = total === 3;
    const nonModerators =
        isThreeUsers && moderatorIndex !== -1
            ? participants.filter((p) => p.role?.toLowerCase() !== "moderator")
            : [];
    const moderator =
        isThreeUsers && moderatorIndex !== -1
            ? participants[moderatorIndex]
            : null;

    // Small screens (sm and xs): Vertical layout
    if (total === 2) {
        // 2 users: 50-50 vertically on small, 35-65 horizontally on md+
        return (
            <div className="flex flex-col md:flex-row items-center justify-center gap-[10px] md:gap-9 w-full h-full">
                {participants.map((participant, index) => {
                    const isModerator =
                        participant.role?.toLowerCase() === "moderator";
                    const widthClass =
                        index === 0
                            ? "w-full md:w-[35%] h-1/2 md:h-full"
                            : "w-full md:w-[65%] h-1/2 md:h-full";
                    const moderatorClasses = isModerator
                        ? "max-h-[500px] mx-auto flex items-center justify-center"
                        : "";

                    return (
                        <div
                            key={index}
                            className={`${widthClass} ${moderatorClasses}`}
                        >
                            <ParticipantCard
                                participant={participant}
                                index={index}
                                isModerator={isModerator}
                            />
                        </div>
                    );
                })}
            </div>
        );
    } else if (total === 3) {
        // 3 users: Special layout for small screens
        return (
            <>
                {/* Small screens: Top row with 2 users (50-50), Bottom row with moderator (full width) */}
                <div className="flex flex-col md:hidden w-full h-full gap-[10px]">
                    <div className="flex flex-row w-full h-1/2 gap-[10px]">
                        {nonModerators.map((participant, index) => {
                            const originalIndex = participants.findIndex(
                                (p) => p === participant
                            );
                            return (
                                <div key={index} className="w-1/2 h-full">
                                    <ParticipantCard
                                        participant={participant}
                                        index={originalIndex}
                                        isModerator={false}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    {moderator && (
                        <div className="w-full h-1/2 max-w-[500px] max-h-[600px] mx-auto flex items-center justify-center">
                            <ParticipantCard
                                participant={moderator}
                                index={moderatorIndex}
                                isModerator={true}
                            />
                        </div>
                    )}
                </div>

                {/* Medium+ screens: Horizontal layout with equal widths */}
                <div className="hidden md:flex md:flex-row items-center justify-center w-full h-full gap-9">
                    {participants.map((participant, index) => {
                        const isModerator =
                            participant.role?.toLowerCase() === "moderator";
                        const moderatorClasses = isModerator
                            ? "max-w-[500px] max-h-[600px] flex items-center justify-center"
                            : "";
                        return (
                            <div
                                key={index}
                                className={`w-[33.33%] h-full ${moderatorClasses}`}
                            >
                                <ParticipantCard
                                    participant={participant}
                                    index={index}
                                    isModerator={isModerator}
                                />
                            </div>
                        );
                    })}
                </div>
            </>
        );
    } else {
        // 4+ users: Equal width on all screen sizes
        // For 4 users: 25% each, for 5: 20% each, etc.
        const widthClass =
            total === 4
                ? "md:w-1/4"
                : total === 5
                ? "md:w-1/5"
                : total === 6
                ? "md:w-1/6"
                : "md:w-auto";
        const widthStyle = total > 6 ? { width: `${100 / total}%` } : undefined;

        return (
            <div className="flex flex-col md:flex-row items-center justify-center gap-[10px] md:gap-9 w-full h-full">
                {participants.map((participant, index) => {
                    const isModerator =
                        participant.role?.toLowerCase() === "moderator";
                    const moderatorClasses = isModerator
                        ? "max-w-[500px] max-h-[600px] flex items-center justify-center"
                        : "";
                    return (
                        <div
                            key={index}
                            className={`w-full ${widthClass} h-full ${moderatorClasses}`}
                            style={widthStyle}
                        >
                            <ParticipantCard
                                participant={participant}
                                index={index}
                                isModerator={isModerator}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}
