"use client";

import { Button } from "@/components/ui/Button";

interface TermsActionsProps {
    onBackToLogin: () => void;
}

export function TermsActions({ onBackToLogin }: TermsActionsProps) {
    return (
        <div className="w-full max-w-3xl">
            <div className="flex justify-center">
                <Button
                    variant="primary"
                    size="md"
                    onClick={onBackToLogin}
                    className="px-8 text-base font-bold font-sans rounded-full"
                >
                    Back to Login
                </Button>
            </div>
        </div>
    );
}
