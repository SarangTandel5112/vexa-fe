"use client";

import { DashboardHeader } from "@/components/layout/headers";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <DashboardHeader />
            {children}
        </>
    );
}
