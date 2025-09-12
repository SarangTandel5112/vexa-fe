import React from "react";
import { FeatureCardProps, DashboardCardProps } from "@/components/types";
import Link from "next/link";
import LanguageIcon from "../icons/LanguageIcon";
import CallIcon from "../icons/CallIcon";
import USFlagIcon from "../icons/USFlagIcon";
import DropdownIcon from "../icons/DropdownIcon";
import PersonalizedConversationsIcon from "../icons/PersonalizedConversationsIcon";
import SmartModerationIcon from "../icons/SmartModerationIcon";
import ActionableInsightsIcon from "../icons/ActionableInsightsIcon";

export function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`p-6 rounded-[36px] border border-[#D0CAC5] backdrop-blur-[15px]  space-y-5 ${className}`}
    >
      <div className="flex justify-center">
        <div className="w-[60px] h-[58px] rounded-full border border-[#776F69]/28 bg-[#683075] flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="font-bricolage text-[22px] font-bold text-[#0A0A0A] text-center leading-[1.45] tracking-[-0.04em]">
        {title}
      </h3>
      <p className="font-sf-pro text-[20px] font-normal text-[#776F69] text-center leading-[1.5]">
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
      className={`rounded-[36px] border border-[#D0CAC5] bg-white/50 backdrop-blur-[15px] p-6 flex flex-col gap-6 ${className}`}
    >
      {/* Header row */}
      <div className="flex items-center gap-5">
        <img
          src={avatar}
          alt="Agent avatar"
          className="w-16 h-16 rounded-full border border-[#776F69]/30"
        />
        <h4 className="font-bricolage text-[24px] font-bold text-[#0A0A0A] tracking-[-0.04em]">
          {title}
        </h4>
      </div>

      <div className="h-px bg-[#776F69]/30" />

      {/* Languages */}
      <div className="flex items-center gap-2 text-[#776F69] font-sf-pro">
        <LanguageIcon />
        <span className="text-[16px]">{languages.join(", ")}</span>
      </div>

      {/* Description */}
      <p className="font-sf-pro text-[16px] leading-[1.5] text-[#776F69] line-clamp-6">
        {description}
      </p>

      {/* Footer controls */}
      <div className="flex items-center gap-3">
        <Link href={`/survey?id=${id}`}>
          <button
            onClick={onStartConversation}
            className="px-6 py-2.5 rounded-full text-[14px] text-white font-normal bg-gradient-to-r from-[#E8A089] to-[#612A74] flex items-center gap-2"
          >
            <CallIcon />
            Start Conversation
          </button>
        </Link>

        <div className="ml-auto flex items-center gap-2 bg-[#F7F4F2] rounded-[12px] min-h-[36px] px-2 shadow-[inset_0_0_0_1px_rgba(103,48,117,0.20),0_1px_2px_rgba(103,48,117,0.05)]">
          {/* US flag */}
          <div className="w-6 h-6 rounded-[12px] border border-[#E1E1E1] overflow-hidden grid place-items-center">
            <USFlagIcon />
          </div>
          <DropdownIcon />
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
