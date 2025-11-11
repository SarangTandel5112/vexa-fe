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
        <div className="flex justify-center py-[45px] px-5 md:py-[30px] md:px-4 pb-[60px] md:pb-10">
            <div className="w-full max-w-[1440px] flex flex-col items-center gap-[33px]">
                <HomeHero />
                <HomeSteps steps={homeSteps} />
                <HomeQuestions questions={sampleQuestions} />
                <HomeActions />
            </div>
        </div>
    );
}
