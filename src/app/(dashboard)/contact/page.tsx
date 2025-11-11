"use client";

import Image from "next/image";
import { MainContent } from "@/components";
import { ContactHero, ContactForm } from "@/modules/contact/components";

export default function ContactPage() {
    return (
        <MainContent>
            <div className="grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-6 items-start">
                {/* Left Content - Contact Form */}
                <div className="w-full col-span-12 lg:col-span-4 order-1 lg:order-1">
                    <div className="space-y-6 md:space-y-10">
                        <ContactHero />
                        <ContactForm />
                    </div>
                </div>

                {/* Right Content - Decorative Image */}
                <div className="w-full col-span-12 lg:col-span-8 relative order-2 lg:order-2">
                    <Image
                        src="https://api.builder.io/api/v1/image/assets/TEMP/01cf05c651bf4040ebcb9409c9344e308462621e?width=1496"
                        alt="Abstract swirl graphic"
                        width={1496}
                        height={1000}
                        className="w-full h-auto rounded-lg shadow-sm"
                        unoptimized
                    />
                </div>
            </div>
        </MainContent>
    );
}
