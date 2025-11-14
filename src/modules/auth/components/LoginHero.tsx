"use client";

import { FeatureCard, FeatureIcons } from "@/components";

export function LoginHero() {
    return (
        <div className="col-span-12 lg:col-span-7 space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8 lg:pr-6">
            {/* Hero Text */}
            <div className="space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8">
                <div className="space-y-3 space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8">
                    <h2 className="text-heading1 font-bricolage text-[#0A0A0A]">
                        Hello, I am Vexa,
                        <br />
                        Let&apos;s get you ready for the interview!
                    </h2>
                    <p className="text-body1 font-roboto text-[#776F69]">
                        I turn surveys into real conversations - natural,
                        unbiased, and smart. Helping you uncover insights that
                        truly matter.
                    </p>
                </div>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-3">
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
