"use client";

import { useRouter } from "next/navigation";
import { MainContent, Container } from "@/components";
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
        <MainContent>
            <Container
                size="xl"
                className="flex flex-col items-center gap-6 md:gap-8"
            >
                <TermsHero />
                <TermsContent />
                <TermsActions onBackToLogin={handleBackToLogin} />
            </Container>
        </MainContent>
    );
}
