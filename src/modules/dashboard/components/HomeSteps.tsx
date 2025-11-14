"use client";

import { Step } from "../types";

interface HomeStepsProps {
    steps: Step[];
}

export function HomeSteps({ steps }: HomeStepsProps) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[1100px] justify-items-center">
            {steps.map((step) => (
                <div
                    key={step.id}
                    className="flex flex-col gap-2 p-4 rounded-3xl border border-[#d0cac5] bg-transparent w-full max-w-[320px]"
                >
                    <div className="flex justify-between items-center gap-3">
                        <div className="flex w-12 h-12 shrink-0 justify-center items-center rounded-full bg-[#e95d3c] text-white font-bricolage text-2xl font-semibold leading-none">
                            {step.id}
                        </div>
                        <div className="flex-1 h-2 rounded-full bg-gradient-to-b from-[#e95d3c] to-[#e95d3c]"></div>
                    </div>
                    <div className="flex flex-col gap-2 text-right">
                        <h3 className="text-heading3 font-bricolage text-[#0a0a0a]">
                            {step.label}
                        </h3>
                        <p className="text-[14px] md:text-[16px] font-sf-pro text-[#776f69] leading-relaxed overflow-hidden line-clamp-6">
                            {step.description}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}
