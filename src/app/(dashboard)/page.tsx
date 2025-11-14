"use client";

import {
    HomeHero,
    HomeSteps,
    HomeQuestions,
    HomeActions,
} from "@/modules/dashboard/components";
import { homeSteps, sampleQuestions } from "@/modules/dashboard/data";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center gap-6 md:gap-8">
            <HomeHero />
            <HomeSteps steps={homeSteps} />
            <HomeQuestions questions={sampleQuestions} />
            <HomeActions />
        </div>
    );
}
