/**
 * DashboardHeader Component
 * Header for dashboard pages
 * Follows Single Responsibility Principle
 */

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/icons";
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
                            <span>Need Help</span>
                        </button>
                    </Link>
                </div>
            </div>
            <style jsx>{`
                .need-help-button {
                    display: flex;
                    padding: 10px 20px;
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
            `}</style>
        </BaseHeader>
    );
}
