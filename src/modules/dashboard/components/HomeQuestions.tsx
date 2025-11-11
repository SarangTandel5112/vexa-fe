"use client";

import { useState } from "react";
import { PlusIcon } from "@/components/icons";
import { Question } from "../types";

interface HomeQuestionsProps {
    questions: Question[];
}

export function HomeQuestions({ questions }: HomeQuestionsProps) {
    const [_expandedQuestions, setExpandedQuestions] = useState<number[]>([]);

    const toggleQuestion = (index: number) => {
        setExpandedQuestions((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section className="flex flex-col items-center gap-[31px] w-full max-w-[707px]">
            <h2 className="text-[#e95d3c] text-center font-bricolage text-[clamp(24px,4vw,30px)] font-semibold leading-[1.07] tracking-[-1.2px]">
                Sample Questions
            </h2>
            <div className="flex flex-col gap-[11px] w-full">
                {questions.map((question, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center p-[9px_19px_9px_22px] rounded-xl border border-[#d0cac5] bg-transparent cursor-pointer transition-colors duration-200 hover:bg-[rgba(208,202,197,0.1)]"
                        onClick={() => toggleQuestion(index)}
                    >
                        <span className="text-[#0a0a0a] font-bricolage text-[clamp(18px,3vw,24px)] font-semibold leading-[1.33] tracking-[-0.96px] flex-1">
                            {question.text}
                        </span>
                        <PlusIcon className="shrink-0 w-[30px] h-[30px]" />
                    </div>
                ))}
            </div>
        </section>
    );
}
