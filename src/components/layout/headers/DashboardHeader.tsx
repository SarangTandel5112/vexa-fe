/**
 * DashboardHeader Component
 * Header for dashboard pages
 * Follows Single Responsibility Principle
 */

import React from "react";
import Link from "next/link";
import { Logo, ContactIcon } from "@/components/icons";
import { BaseHeader } from "./BaseHeader";

interface DashboardHeaderProps {
    className?: string;
}

export function DashboardHeader({ className = "" }: DashboardHeaderProps) {
    return (
        <BaseHeader className={className}>
            <div className="flex items-center w-full justify-between">
                {/* Left: Brand */}
                <div className="flex items-center">
                    <Logo size="md" />
                </div>

                {/* Right: Buttons */}
                <div className="flex items-center gap-6">
                    <Link href="/contact">
                        <button className="flex items-center justify-center gap-1.5 px-3 py-3 md:px-5 md:py-2.5 rounded-[36px_36px_8px_36px] bg-gradient-to-r from-[#E95D3C] to-[#833422] text-[#F3EEE9] font-sf-pro text-sm font-bold leading-[18px] border-none cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0">
                            <ContactIcon
                                stroke="#F3EEE9"
                                className="w-4 h-4 md:w-6 md:h-6"
                            />
                            <span>Need Help</span>
                        </button>
                    </Link>
                </div>
            </div>
        </BaseHeader>
    );
}
