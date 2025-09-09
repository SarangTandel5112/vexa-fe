import React from 'react'
import { LogoProps } from '@/components/types'

const LOGO_URL =
  'https://api.builder.io/api/v1/image/assets/TEMP/69a9d52834073e8742f4a7a054493121bbccaeec?width=96'

export function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const textSize = size === 'sm' ? 'text-[20px]' : size === 'lg' ? 'text-[32px]' : 'text-[28px]'
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12', 
    lg: 'w-16 h-16'
  }

  return (
    <div className={`flex items-center gap-[14px] ${className}`}>
      <img src={LOGO_URL} alt="Vexa Logo" className={sizeClasses[size]} />
      {showText && (
        <span className={`font-bricolage font-bold leading-8 text-[#612A74] ${textSize}`}>Vexa</span>
      )}
    </div>
  )
}

