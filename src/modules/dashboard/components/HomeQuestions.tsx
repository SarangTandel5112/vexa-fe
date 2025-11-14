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
        <section className="flex flex-col items-center gap-5 w-full max-w-[650px]">
            <h2 className="text-heading2 text-center font-bricolage text-[#e95d3c]">
                Sample Questions
            </h2>
            <div className="flex flex-col gap-2.5 w-full">
                {questions.map((question, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center p-3 md:p-4 rounded-xl border border-[#d0cac5] bg-transparent cursor-pointer transition-colors duration-200 hover:bg-[rgba(208,202,197,0.1)]"
                        onClick={() => toggleQuestion(index)}
                    >
                        <span className="text-heading3 font-bricolage text-[#0a0a0a] flex-1 font-semibold">
                            {question.text}
                        </span>
                        <PlusIcon className="shrink-0 w-6 h-6" />
                    </div>
                ))}
            </div>
        </section>
    );
}
