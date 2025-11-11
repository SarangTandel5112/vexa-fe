"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CenteredContent, Stepper, Button, Step } from "@/components";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import Link from "next/link";
import NextArrow from "@/components/icons/NextArrow";

const steps: Step[] = [
    {
        id: 1,
        label: "AI Guided Q & A",
        description:
            "We will ask concise, targeted questions to learn your goals and context. This helps the agent tailor its responses to your use case.",
    },
    {
        id: 2,
        label: "Approx. 1 hr",
        description:
            "Add documents, links, and notes. The agent securely indexes them to ground answers with your domain knowledge.",
    },
    {
        id: 3,
        label: "100% Confidential",
        description:
            "Preview a clean summary of findings and next steps. Tweak inputs and re-run if needed before you begin the full session.",
    },
];

export default function SurveyPage() {
    const [active, setActive] = useState(0);
    const router = useRouter();

    const handleNext = () => {
        if (active < steps.length - 1) {
            setActive(active + 1);
        }
    };

    const handlePrevious = () => {
        if (active > 0) {
            setActive(active - 1);
        }
    };

    const handleStart = () => {
        router.push("/chat");
    };

    return (
        <>
            <section className="px-4 md:px-8 lg:px-[120px]">
                <CenteredContent className="py-10">
                    <h1 className="font-bricolage text-[28px] md:text-[40px] font-bold text-[#401A4D] leading-[1]">
                        AI Research Agent
                    </h1>
                    <p className="font-bricolage text-[18px] md:text-[26px] text-[#401A4D] mt-2">
                        Here&apos;s a quick preview of what will happen in your
                        session
                    </p>
                </CenteredContent>
            </section>

            <section className="px-4 md:px-8 lg:px-[120px]">
                <Stepper
                    steps={steps}
                    currentStep={active}
                    onStepChange={setActive}
                />
            </section>

            <section className="px-4 md:px-8 lg:px-[120px]">
                <CenteredContent className="py-10">
                    <h4 className="font-bricolage text-[24px] md:text-[30px] font-bold text-[#612A74] tracking-[-0.03em]">
                        Want a Quick Demo?
                    </h4>
                    <p className="font-sf-pro text-[16px] md:text-[20px] text-[#776F69] leading-8 mt-2">
                        Not sure what to expect? Try a short 5-min demo before
                        we begin.
                    </p>
                    <Link href="/survey">
                        <Button
                            variant="secondary"
                            className="mt-4"
                            icon={<ArrowRightIcon stroke="#612A74" />}
                        >
                            Get a demo
                        </Button>
                    </Link>
                </CenteredContent>
            </section>

            <section className="px-4 md:px-8 lg:px-[120px] pb-16">
                <CenteredContent>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        {/* Previous Button - only show if not on first step */}
                        {active > 0 && (
                            <Button
                                variant="secondary"
                                onClick={handlePrevious}
                                className="w-full md:w-auto px-8 py-3"
                                icon={<ArrowLeftIcon stroke="#612A74" />}
                            >
                                Previous
                            </Button>
                        )}

                        {/* Next Button - show on first two steps */}
                        {active < steps.length - 1 ? (
                            <Button
                                variant="gradient"
                                size="sm"
                                onClick={handleNext}
                                className="w-full md:w-auto text-[18px] md:text-[24px] px-12 py-3 rounded-full"
                                icon={<NextArrow />}
                            >
                                Next
                            </Button>
                        ) : (
                            /* Start Button - show on last step */
                            <Button
                                variant="gradient"
                                size="sm"
                                onClick={handleStart}
                                className="w-full md:w-auto text-[18px] md:text-[24px] px-12 py-3 rounded-full"
                            >
                                Start Survey
                            </Button>
                        )}
                    </div>
                </CenteredContent>
            </section>
        </>
    );
}
