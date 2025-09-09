'use client'

import React from 'react'
import { StepperProps } from '@/components/types'

export function Stepper({ steps, currentStep, onStepChange, className = '' }: StepperProps) {
  return (
    <div className={`max-w-[800px] mx-auto rounded-[36px] border border-[#D0CAC5] p-6 md:p-8 bg-white/50 ${className}`}>
      {/* Stepper */}
      <div className="flex items-center gap-4 md:gap-6 justify-center">
        {steps.map((step, i) => (
          <div key={step.id} className="flex items-center gap-4 md:gap-5">
            <button
              className={
                (i === currentStep
                  ? 'bg-[#612A74] text-white'
                  : 'bg-[#E4DED9] text-white') +
                ' rounded-full px-4 md:px-6 py-1.5 font-bricolage text-[20px] md:text-[32px] font-bold leading-[40px]'
              }
              onClick={() => onStepChange(i)}
              aria-current={i === currentStep}
            >
              {step.id}
            </button>
            {i < steps.length - 1 && (
              <div
                className={
                  'h-2 rounded-[50px] w-[90px] md:w-[126px] ' +
                  (i < currentStep ? 'bg-[#612A74]' : 'bg-[#E4DED9]')
                }
              />
            )}
          </div>
        ))}
      </div>

      {/* Dynamic content */}
      <div className="mt-8 md:mt-10 text-center space-y-3">
        <h3 className="font-bricolage text-[22px] md:text-[24px] font-bold text-[#0A0A0A] tracking-[-0.04em]">
          {steps[currentStep].label}
        </h3>
        <p className="font-sf-pro text-[18px] md:text-[20px] text-[#776F69] leading-[1.5] max-w-[640px] mx-auto">
          {steps[currentStep].description}
        </p>
      </div>
    </div>
  )
}
