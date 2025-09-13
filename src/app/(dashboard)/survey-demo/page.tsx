"use client";
import { Button, CenteredContent } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function SurveyDemoPage() {
  return (
    <main className="flex-1 flex flex-col justify-center items-center px-4 py-12">
      <CenteredContent className="mb-12">
        <h1 className="font-bricolage text-[28px] md:text-[40px] font-bold text-[#401A4D] leading-[1] mb-4">
          Want to give Vexa a Quick try?
        </h1>
        <p className="font-sf-pro text-[16px] md:text-[20px] text-[#401A4D] leading-[1.6] md:leading-[2]">
          Think of it as a practice round — just 5 minutes, totally optional.
          Get a feel for how the chat works before we dive into the real
          session.
        </p>
      </CenteredContent>

      {/* Center Image with Glow Effect */}
      <div className="relative mb-12">
        <div className="w-[280px] md:w-[298px] h-[280px] md:h-[298px] rounded-full flex items-center justify-center relative">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(222,115,122,0.3)]" />
          {/* Image */}
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              width={400}
              height={400}
              src="/survey.png"
              alt="Pink swirl decoration"
              className="w-full h-full object-cover scale-150"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col items-center gap-4 mb-12">
        <Link href="/survey/29e2b734-cad3-4a35-94a5-81dcd3c4f364">
          <Button
            variant="secondary"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 8.5L22.5 12.5L18.5 16.5"
                  stroke="#612A74"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 12.5H22.5"
                  stroke="#612A74"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          >
            Skip
          </Button>
        </Link>

        <Button variant="gradient" size="sm" className="px-16 py-3">
          Start Demo
        </Button>
      </div>

      <CenteredContent>
        <p className="font-sf-pro text-[14px] md:text-[16px] text-[#827487]">
          For any help during the conversation you can pause and{" "}
          <Link
            href={"/contact"}
            className="cursor-pointer hover:text-[#612A74] transition-colors underline"
          >
            contact us
          </Link>
        </p>
      </CenteredContent>
    </main>
  );
}
