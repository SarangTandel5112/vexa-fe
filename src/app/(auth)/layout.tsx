"use client";

import { LandingHeader } from "@/components/layout/headers";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <LandingHeader />
            {children}
        </>
    );
}
