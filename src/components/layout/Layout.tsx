import React from "react";
import { ContainerProps, SectionProps } from "@/components/types";

export function Container({
    children,
    size = "lg",
    className = "",
}: ContainerProps) {
    const sizeClasses = {
        sm: "max-w-[600px]",
        md: "max-w-[800px]",
        lg: "max-w-[1200px]",
        xl: "max-w-[1400px]",
    };

    return (
        <div className={`${sizeClasses[size]} mx-auto ${className}`}>
            {children}
        </div>
    );
}

export function Section({ children, className = "" }: SectionProps) {
    return (
        <section className={`py-8 lg:py-16 ${className}`}>{children}</section>
    );
}

export function PageWrapper({ children }: { children: React.ReactNode }) {
    return <div className="min-h-screen bg-[#F3EEE9]">{children}</div>;
}

export function MainContent({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className="w-full py-4 sm:py-6 border-b border-[#FAFAF9] bg-[#FAFAF9] px-4 sm:px-6 md:px-8">
            <main className={`max-w-[1200px] mx-auto`}>
                <div className={`py-1 sm:py-4 lg:py-6 ${className}`}>
                    {children}
                </div>
            </main>
        </div>
    );
}

export function CenteredContent({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`text-center max-w-[900px] mx-auto ${className}`}>
            {children}
        </div>
    );
}
