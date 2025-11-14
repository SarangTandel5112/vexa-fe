"use client";

import { usePathname } from "next/navigation";
import { DashboardHeader } from "@/components/layout/headers";
import { MainContent } from "@/components";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isFullHeightPage = pathname === "/chat";

    return (
        <div className="min-h-screen flex flex-col">
            <DashboardHeader />
            <main className="flex-1 bg-[#FAFAF9]">
                {isFullHeightPage ? (
                    <div className="h-full w-full py-4 sm:py-6 px-4 sm:px-6 md:px-8">
                        <div className="max-w-[1200px] mx-auto h-full">
                            {children}
                        </div>
                    </div>
                ) : (
                    <MainContent>{children}</MainContent>
                )}
            </main>
        </div>
    );
}
