"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components";
import { ArrowRightIcon } from "@/components/icons";

export default function SurveyPage() {
    const router = useRouter();

    const handleStartDemo = () => {
        router.push("/chat");
    };

    const handleSkip = () => {
        router.push("/chat");
    };

    return (
        <div className="flex flex-col justify-between items-center px-4 sm:px-8 py-8 pb-36 sm:pb-36">
            <div className="flex flex-col items-center gap-14 sm:gap-[3.3125rem] w-full">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center gap-5 sm:gap-2.5 px-4 max-w-[90rem] pt-0 sm:pt-[2.8125rem]">
                    <h1 className="font-bricolage text-[2rem] sm:text-[2.5rem] font-semibold leading-[1] sm:leading-[2.5rem] text-[#1e1e1e]">
                        Want to give Vexa a Quick try?
                    </h1>
                    <p className="font-sf-pro text-base sm:text-xl font-normal leading-[1.6] sm:leading-[2.5rem] text-[#1e1e1e] max-w-[50rem]">
                        Think of it as a practice round — just 5 minutes,
                        totally optional. Get a feel for how the chat works
                        before we dive into the real session.
                    </p>
                </div>

                {/* Visual Section */}
                <div className="flex flex-col items-center gap-14">
                    {/* Orb Container */}
                    <div className="flex items-center justify-center p-1.5 rounded-full shadow-[0_0_10px_0_rgba(222,115,122,0.5)]">
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/52290337a21828f23fc4fe5ab811d59a3ccc3f26?width=596"
                            alt="Vexa Demo Orb"
                            className="block w-full max-w-[18.5rem] sm:max-w-[23.5rem] lg:max-w-[37.25rem] h-auto"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col items-center gap-3.5 w-full max-w-[26.375rem]">
                        <button
                            onClick={handleSkip}
                            className="flex items-center justify-center gap-2 px-6 py-4 border-0 bg-transparent cursor-pointer transition-opacity hover:opacity-80 rounded-[211px_211px_183px_211px]"
                        >
                            <ArrowRightIcon stroke="#E15A3A" />
                            <span className="font-sf-pro text-base font-bold leading-5 text-[#e15a3a]">
                                Skip
                            </span>
                        </button>

                        <Button
                            variant="primary"
                            onClick={handleStartDemo}
                            className="font-[Arial,_-apple-system,_Roboto,_Helvetica,_sans-serif] text-lg font-bold capitalize py-2 px-6 rounded-full w-[13.5rem]"
                        >
                            Start Demo
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
