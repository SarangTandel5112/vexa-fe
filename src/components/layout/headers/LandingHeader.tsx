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
            <div className="flex items-center sm:gap-3">
                {showDemo && (
                    <Button
                        variant="secondary"
                        className="!px-2 !py-1 md:!px-4 md:!py-2"
                    >
                        Get a demo
                    </Button>
                )}
                <Link href="/contact">
                    <Button
                        variant="primary"
                        icon={
                            <ContactIcon
                                stroke="#F3EEE9"
                                className="w-4 h-4 md:w-6 md:h-6"
                            />
                        }
                        className="!px-3 !py-2 md:!px-4 md:!py-2"
                    >
                        Contact us
                    </Button>
                </Link>
            </div>
        </BaseHeader>
    );
}
