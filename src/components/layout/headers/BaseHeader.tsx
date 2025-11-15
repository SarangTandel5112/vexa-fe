/**
 * BaseHeader Component
 * Base header wrapper following SRP
 */

import React from "react";

interface BaseHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export function BaseHeader({ children, className = "" }: BaseHeaderProps) {
    return (
        <header
            className={`w-full px-2 py-2 md:px-4 md:py-4 border-b border-[#D0CAC5] bg-[#FAFAF9] ${className}`}
        >
            <div className="flex justify-between items-center max-w-[1200px] mx-auto">
                {children}
            </div>
        </header>
    );
}
