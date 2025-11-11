"use client";

import { MainContent } from "@/components";
import { LoginHero, LoginForm } from "@/modules/auth/components";

export default function LoginPage() {
    return (
        <MainContent>
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
                    <LoginHero />
                    <LoginForm />
                </div>
            </div>
        </MainContent>
    );
}
