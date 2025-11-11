"use client";

import { Button } from "@/components/ui/Button";

interface TermsActionsProps {
    onBackToLogin: () => void;
}

export function TermsActions({ onBackToLogin }: TermsActionsProps) {
    return (
        <div className="w-full max-w-4xl">
            <div className="flex justify-center">
                <Button
                    variant="primary"
                    size="lg"
                    onClick={onBackToLogin}
                    className="px-12 py-4 text-xl font-bold font-sans rounded-full"
                >
                    Back to Login
                </Button>
            </div>
        </div>
    );
}
