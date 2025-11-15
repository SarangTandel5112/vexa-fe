import React from "react";
import { FeatureCardProps, DashboardCardProps } from "@/components/types";
import Link from "next/link";
import {
    PersonalizedConversationsIcon,
    SmartModerationIcon,
    ActionableInsightsIcon,
} from "../icons";

export function FeatureCard({
    icon,
    title,
    description,
    className = "",
}: FeatureCardProps) {
    return (
        <div
            className={`p-4 rounded-3xl border border-[#D0CAC5] backdrop-blur-[15px] space-y-3 ${className}`}
        >
            <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full border border-[#776F69]/28 bg-[#E95D3C] flex items-center justify-center">
                    {icon}
                </div>
            </div>
            <h3 className="text-heading3 font-bricolage text-[#0A0A0A] text-center">
                {title}
            </h3>
            <p className="text-body2 font-sf-pro text-[#776F69] text-center">
                {description}
            </p>
        </div>
    );
}

export function DashboardCard({
    id,
    title,
    description,
    avatar = "https://api.builder.io/api/v1/image/assets/TEMP/026ee58f5165999d206ca459948fd10634e658af?width=128",
    languages = ["English", "Hindi"],
    onStartConversation,
    className = "",
}: DashboardCardProps) {
    return (
        <article
            className={`rounded-3xl border border-[#D0CAC5] bg-white/50 backdrop-blur-[15px] p-4 flex flex-col gap-4 ${className}`}
        >
            {/* Header row */}
            <div className="flex items-center gap-3">
                <img
                    src={avatar}
                    alt="Agent avatar"
                    className="w-12 h-12 rounded-full border border-[#776F69]/30"
                />
                <h4 className="text-heading3 font-bricolage text-[#0A0A0A]">
                    {title}
                </h4>
            </div>

            <div className="h-px bg-[#776F69]/30" />

            {/* Languages */}
            <div className="flex items-center gap-2 text-[#776F69] font-sf-pro">
                <span className="text-[14px]">🌐 {languages.join(", ")}</span>
            </div>

            {/* Description */}
            <p className="text-body2 font-sf-pro text-[#776F69] line-clamp-4">
                {description}
            </p>

            {/* Footer controls */}
            <div className="flex items-center gap-2">
                <Link href="/chat">
                    <button
                        onClick={onStartConversation}
                        className="px-4 py-2 rounded-full text-[13px] text-white font-normal bg-gradient-to-r from-[#E8A089] to-[#612A74] flex items-center gap-1.5 cursor-pointer"
                    >
                        📞 Start Conversation
                    </button>
                </Link>

                <div className="ml-auto flex items-center gap-1.5 bg-[#F7F4F2] rounded-lg min-h-[32px] px-2 py-1 shadow-[inset_0_0_0_1px_rgba(103,48,117,0.20),0_1px_2px_rgba(103,48,117,0.05)] cursor-pointer">
                    <span className="text-sm">🇺🇸</span>
                    <span className="text-xs">▼</span>
                </div>
            </div>
        </article>
    );
}

// Feature card icons
export const FeatureIcons = {
    PersonalizedConversations: PersonalizedConversationsIcon,
    SmartModeration: SmartModerationIcon,
    ActionableInsights: ActionableInsightsIcon,
};
