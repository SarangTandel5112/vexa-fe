'use client'

import React from "react";
import { HeaderProps } from '@/components/types'
import { Logo } from '@/components/icons/Logo'
import { Button } from '@/components/ui/Button'
import Link from "next/link";

const ContactIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
      stroke="#F3EEE9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Header({
  variant = "landing",
  showNewTopic = false,
  showDemo = true,
  className = "",
}: HeaderProps) {
  const renderButtons = () => {
    switch (variant) {
      case "landing":
        return (
          <div className="flex items-center gap-3">
            {showDemo && <Button variant="secondary">Get a demo</Button>}
            <Link href="/contact">
              <Button variant="primary" icon={<ContactIcon />}>
                Contact us
              </Button>
            </Link>
          </div>
        );

      case "dashboard":
        return (
          <div className="flex justify-between items-center w-full">
            {/* Left: Empty space to maintain center alignment */}
            <div className="flex-1"></div>

            {/* Center: Brand */}
            <div className="">
              <Logo size="md" />
            </div>

            {/* Right: Contact us */}
            <div className="flex justify-end flex-1">
              <Link href="/contact">
                <Button variant="primary" icon={<ContactIcon />}>
                  Contact us
                </Button>
              </Link>
            </div>
          </div>
        );

      case "auth":
        return (
          <div className="flex items-center gap-3">
            {showDemo && <Button variant="secondary">Get a demo</Button>}
            <Link href="/contact">
              <Button variant="primary" icon={<ContactIcon />}>
                Contact us
              </Button>
            </Link>
          </div>
        );

      default:
        return null;
    }
  };

  if (variant === "dashboard") {
    return (
      <header className={`w-full px-4 py-6 md:px-8 border-b border-[#D0CAC5] ${className}`}>
        <div className=" flex justify-between items-center max-w-[1200px] mx-auto">
          {renderButtons()}
        </div>
      </header>
    );
  }

  return (
    <header
      className={`w-full px-4 py-6 border-b border-[#D0CAC5] ${className}`}
    >
      <div className="flex justify-between items-center max-w-[1200px] mx-auto">
        <Logo size="md" />
        {renderButtons()}
      </div>
    </header>
  );
}
