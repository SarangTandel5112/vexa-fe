import React from "react";
import { LogoProps } from "@/components/types";

const LOGO_URL =
    "https://api.builder.io/api/v1/image/assets/TEMP/69a9d52834073e8742f4a7a054493121bbccaeec?width=96";

export function Logo({
    size = "md",
    showText = true,
    className = "",
}: LogoProps) {
    const textSize =
        size === "sm"
            ? "text-[16px]"
            : size === "lg"
            ? "text-[24px]"
            : "text-[20px]";
    const sizeClasses = {
        sm: "w-7 h-7",
        md: "w-[26px] h-[26px] md:w-10 md:h-10",
        lg: "w-14 h-14",
    };

    return (
        <div className={`flex items-center gap-1 sm:gap-3 ${className}`}>
            <img src={LOGO_URL} alt="Vexa Logo" className={sizeClasses[size]} />
            {showText && (
                <span
                    className={`font-bricolage font-bold leading-tight text-[#612A74] ${textSize}`}
                >
                    Vexa
                </span>
            )}
        </div>
    );
}
