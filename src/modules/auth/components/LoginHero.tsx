"use client";

import { FeatureCard, FeatureIcons } from "@/components";

export function LoginHero() {
    return (
        <div className="col-span-12 lg:col-span-7 space-y-12 lg:pr-8">
            {/* Hero Text */}
            <div className="space-y-12">
                <div className="space-y-6">
                    <h2 className="font-bricolage text-[32px] md:text-[40px] font-bold text-[#0A0A0A] leading-[1.2] tracking-[-0.04em]">
                        Hello, I am Vexa,
                        <br />
                        Let&apos;s get you ready for the interview!
                    </h2>
                    <p className="font-roboto text-[20px] md:text-[27px] font-normal text-[#776F69] leading-[1.26]">
                        I turn surveys into real conversations - natural,
                        unbiased, and smart. Helping you uncover insights that
                        truly matter.
                    </p>
                </div>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
                <FeatureCard
                    icon={<FeatureIcons.PersonalizedConversations />}
                    title="Personalised Conversations"
                    description="Chats that adapt to each user, making surveys feel natural."
                />

                <FeatureCard
                    icon={<FeatureIcons.SmartModeration />}
                    title="Smart Moderation"
                    description="Keeps discussions unbiased, clear, and easy to follow."
                />

                <FeatureCard
                    icon={<FeatureIcons.ActionableInsights />}
                    title="Actionable Insights"
                    description="Delivers clean reports with the insights that matter most."
                />
            </div>
        </div>
    );
}
