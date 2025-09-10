'use client'

import { useState } from 'react'
import {
  CenteredContent,
  Stepper,
  Button,
  Step
} from "@/components"
import Link from "next/link"

const steps: Step[] = [
  {
    id: 1,
    label: "AI Guided Q & A",
    description:
      "We will ask concise, targeted questions to learn your goals and context. This helps the agent tailor its responses to your use case.",
  },
  {
    id: 2,
    label: "Knowledge Upload",
    description:
      "Add documents, links, and notes. The agent securely indexes them to ground answers with your domain knowledge.",
  },
  {
    id: 3,
    label: "Report Review",
    description:
      "Preview a clean summary of findings and next steps. Tweak inputs and re-run if needed before you begin the full session.",
  },
]

export default function SurveyPage() {
  const [active, setActive] = useState(0)

  return (
    <>
      <section className="px-4 md:px-8 lg:px-[120px]">
        <CenteredContent className="py-10">
          <h1 className="font-bricolage text-[28px] md:text-[40px] font-bold text-[#401A4D] leading-[1]">
            AI Research Agent
          </h1>
          <p className="font-bricolage text-[18px] md:text-[26px] text-[#401A4D] mt-2">
            Here&apos;s a quick preview of what will happen in your session
          </p>
        </CenteredContent>
      </section>

      <section className="px-4 md:px-8 lg:px-[120px]">
        <Stepper steps={steps} currentStep={active} onStepChange={setActive} />
      </section>

      <section className="px-4 md:px-8 lg:px-[120px]">
        <CenteredContent className="py-10">
          <h4 className="font-bricolage text-[24px] md:text-[30px] font-bold text-[#612A74] tracking-[-0.03em]">
            Want a Quick Demo?
          </h4>
          <p className="font-sf-pro text-[16px] md:text-[20px] text-[#776F69] leading-8 mt-2">
            Not sure what to expect? Try a short 5-min demo before we begin.
          </p>
          <Button
            variant="secondary"
            className="mt-4"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8.5L22 12.5L18 16.5"
                  stroke="#612A74"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12.5H22"
                  stroke="#612A74"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          >
            Get a demo
          </Button>
        </CenteredContent>
      </section>

      <section className="px-4 md:px-8 lg:px-[120px] pb-16">
        <CenteredContent>
          <Link href="/survey/demo">
            <Button
              variant="gradient"
              size="lg"
              className="w-full md:w-auto text-[22px] md:text-[33px] px-28 py-3 rounded-full"
            >
              Start Survey
            </Button>
          </Link>
        </CenteredContent>
      </section>
    </>
  )
}
