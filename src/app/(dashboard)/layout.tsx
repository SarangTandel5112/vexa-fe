"use client";

import { DashboardHeader } from "@/components/layout/headers";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <DashboardHeader />
            <main className="flex-1 bg-[#FAFAF9]">
                {children}
            </main>
        </div>
    );
}
