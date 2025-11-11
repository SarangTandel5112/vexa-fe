"use client";

import { Step } from "../types";

interface HomeStepsProps {
    steps: Step[];
}

export function HomeSteps({ steps }: HomeStepsProps) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-[1100px] justify-items-center">
            {steps.map((step) => (
                <div
                    key={step.id}
                    className="flex flex-col gap-[10px] p-[13px_15px_27px] rounded-[36px] border border-[#d0cac5] bg-transparent w-full max-w-[343px]"
                >
                    <div className="flex justify-between items-center gap-[14px]">
                        <div className="flex w-[65.804px] h-[65.804px] shrink-0 justify-center items-center rounded-full bg-[#e95d3c] text-white font-bricolage text-[40px] font-semibold leading-none">
                            {step.id}
                        </div>
                        <div className="flex-1 h-[10px] rounded-[50px] bg-gradient-to-b from-[#e95d3c] to-[#e95d3c]"></div>
                    </div>
                    <div className="flex flex-col gap-3 text-right">
                        <h3 className="text-[#0a0a0a] font-bricolage text-2xl font-semibold leading-[1.33] tracking-[-0.96px]">
                            {step.label}
                        </h3>
                        <p className="text-[#776f69] font-sf-pro text-base font-normal leading-[1.5] overflow-hidden line-clamp-8 text-ellipsis">
                            {step.description}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}
