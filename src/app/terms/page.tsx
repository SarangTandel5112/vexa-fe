"use client";

import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import {
    TermsHero,
    TermsContent,
    TermsActions,
} from "@/modules/terms/components";

export default function TermsPage() {
    const router = useRouter();

    const handleBackToLogin = () => {
        router.push("/login");
    };

    return (
        <div className="min-h-screen bg-background">
            <Header variant="dashboard" />

            <div className="w-full px-4 py-6 border-b border-[#FAFAF9] bg-[#FAFAF9]">
                <main className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
                    <div className="flex flex-col items-center gap-6 md:gap-8">
                        <TermsHero />
                        <TermsContent />
                        <TermsActions onBackToLogin={handleBackToLogin} />
                    </div>
                </main>
            </div>
        </div>
    );
}
