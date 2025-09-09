import React from 'react'
import Link from 'next/link'
import { ButtonProps } from '@/components/types'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  href
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-sf-pro font-bold transition-colors rounded-[36px]'

  const variantClasses = {
    primary: 'text-[#F3EEE9] bg-[#612A74] hover:bg-[#612A74]/90',
    secondary: 'text-[#612A74] hover:bg-[#D0CAC5]/20',
    gradient: 'text-white bg-gradient-to-r from-[#E8A089] to-[#612A74] hover:shadow-lg',
    outline: 'text-[#612A74] border border-[#612A74] hover:bg-[#612A74] hover:text-white',
    social: 'text-[#0A0A0A] bg-[#776F69]/12 hover:bg-[#776F69]/20'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-4 text-base',
    lg: 'px-8 py-5 text-lg'
  }

  // Special rounded corners for primary and secondary variants on md size
  const roundedClasses = (variant === 'primary' || variant === 'secondary') && size === 'md' 
    ? 'rounded-[36px_36px_8px_36px]' 
    : 'rounded-[36px]'

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${roundedClasses} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`

  const content = (
    <>
      {icon && icon}
      {children}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  )
}

// Social login button component
export function SocialButton({ provider, onClick, className = '' }: { provider: 'google' | 'facebook', onClick?: () => void, className?: string }) {
  const providerData = {
    google: {
      name: 'Google',
      icon: (
        <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_347_564)">
            <path d="M24.2449 12.27C24.2449 11.48 24.1749 10.73 24.0549 10H12.7549V14.51H19.2249C18.9349 15.99 18.0849 17.24 16.8249 18.09V21.09H20.6849C22.9449 19 24.2449 15.92 24.2449 12.27Z" fill="#4285F4"/>
            <path d="M12.7549 24C15.9949 24 18.7049 22.92 20.6849 21.09L16.8249 18.09C15.7449 18.81 14.3749 19.25 12.7549 19.25C9.62492 19.25 6.97492 17.14 6.02492 14.29H2.04492V17.38C4.01492 21.3 8.06492 24 12.7549 24Z" fill="#34A853"/>
            <path d="M6.02488 14.2901C5.77488 13.5701 5.64488 12.8001 5.64488 12.0001C5.64488 11.2001 5.78488 10.4301 6.02488 9.71012V6.62012H2.04488C1.22488 8.24012 0.754883 10.0601 0.754883 12.0001C0.754883 13.9401 1.22488 15.7601 2.04488 17.3801L6.02488 14.2901Z" fill="#FBBC05"/>
            <path d="M12.7549 4.75C14.5249 4.75 16.1049 5.36 17.3549 6.55L20.7749 3.13C18.7049 1.19 15.9949 0 12.7549 0C8.06492 0 4.01492 2.7 2.04492 6.62L6.02492 9.71C6.97492 6.86 9.62492 4.75 12.7549 4.75Z" fill="#EA4335"/>
          </g>
          <defs>
            <clipPath id="clip0_347_564">
              <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
            </clipPath>
          </defs>
        </svg>
      )
    },
    facebook: {
      name: 'Facebook',
      icon: (
        <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 17.9895 4.88822 22.954 10.625 23.8542V15.4688H7.57813V12H10.625V9.35626C10.625 6.34875 12.4165 4.68751 15.1576 4.68751C16.4705 4.68751 17.8438 4.92188 17.8438 4.92188V7.875H16.3306C14.8399 7.875 14.375 8.80002 14.375 9.74901V12H17.7031L17.1711 15.4688H14.375V23.8542C20.1118 22.954 24.5 17.9895 24.5 12Z" fill="#1877F2"/>
          <path d="M17.1711 15.4687L17.7031 12H14.375V9.74898C14.375 8.80001 14.8399 7.875 16.3306 7.875H17.8438V4.92187C17.8438 4.92187 16.4705 4.6875 15.1576 4.6875C12.4165 4.6875 10.625 6.34874 10.625 9.35625V12H7.57812V15.4687H10.625V23.8542C11.2453 23.9514 11.8722 24.0002 12.5 24C13.1379 24 13.764 23.9501 14.375 23.8542V15.4687H17.1711Z" fill="white"/>
        </svg>
      )
    }
  }

  const { name, icon } = providerData[provider]

  return (
    <Button
      variant="social"
      onClick={onClick}
      icon={icon}
      className={className}
    >
      {name}
    </Button>
  )
}
