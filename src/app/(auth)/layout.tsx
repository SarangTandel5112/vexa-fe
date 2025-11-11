"use client";

import { LandingHeader } from "@/components/layout/headers";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <LandingHeader />
            <main className="flex-1 bg-[#FAFAF9]">
                {children}
            </main>
        </div>
    );
}
