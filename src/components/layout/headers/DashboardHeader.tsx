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
                        <button className="need-help-button">
                            <ContactIcon
                                stroke="#F3EEE9"
                                className="w-4 h-4 md:w-6 md:h-6"
                            />
                            <span>Need Help</span>
                        </button>
                    </Link>
                </div>
            </div>
            <style jsx>{`
                .need-help-button {
                    display: flex;
                    padding: 12px 12px;
                    justify-content: center;
                    align-items: center;
                    gap: 6px;
                    border-radius: 36px 36px 8px 36px;
                    background: linear-gradient(
                        91deg,
                        #e95d3c 49.74%,
                        #833422 88.73%
                    );
                    color: #f3eee9;
                    font-family: "SF Pro Rounded", -apple-system, Roboto,
                        Helvetica, sans-serif;
                    font-size: 14px;
                    font-weight: 700;
                    line-height: 18px;
                    border: none;
                    cursor: pointer;
                    transition: transform 0.2s ease;
                }
                .need-help-button:hover {
                    transform: translateY(-1px);
                }
                .need-help-button:active {
                    transform: translateY(0);
                }
                @media (min-width: 768px) {
                    .need-help-button {
                        padding: 10px 20px;
                    }
                }
            `}</style>
        </BaseHeader>
    );
}
