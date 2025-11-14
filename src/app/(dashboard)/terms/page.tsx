"use client";

import { useRouter } from "next/navigation";
import { Container } from "@/components";
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
        <Container
            size="lg"
            className="flex flex-col items-center gap-4 md:gap-6"
        >
            <TermsHero />
            <TermsContent />
            <TermsActions onBackToLogin={handleBackToLogin} />
        </Container>
    );
}
