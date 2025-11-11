/**
 * LandingHeader Component
 * Header for landing pages
 * Follows Single Responsibility Principle
 */

import React from "react";
import Link from "next/link";
import { Logo, ContactIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { BaseHeader } from "./BaseHeader";

interface LandingHeaderProps {
    showDemo?: boolean;
    className?: string;
}

export function LandingHeader({
    showDemo = true,
    className = "",
}: LandingHeaderProps) {
    return (
        <BaseHeader className={className}>
            <Logo size="md" />
            <div className="flex items-center gap-3">
                {showDemo && <Button variant="secondary">Get a demo</Button>}
                <Link href="/contact">
                    <Button
                        variant="primary"
                        icon={<ContactIcon stroke="#F3EEE9" />}
                    >
                        Contact us
                    </Button>
                </Link>
            </div>
        </BaseHeader>
    );
}
