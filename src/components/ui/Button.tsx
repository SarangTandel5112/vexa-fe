import React from "react";
import Link from "next/link";
import { ButtonProps } from "@/components/types";
import { GoogleIcon, FacebookIcon } from "@/components/icons";

export function Button({
    children,
    variant = "primary",
    size = "md",
    icon,
    onClick,
    type = "button",
    disabled = false,
    loading = false,
    className = "",
    href,
}: ButtonProps) {
    const baseClasses =
        "inline-flex items-center justify-center gap-2 font-sf-pro font-bold transition-colors rounded-[36px] cursor-pointer";

    const variantClasses = {
        primary:
            "text-[#F3EEE9] bg-gradient-to-r from-[#E95D3C] to-[#833422] hover:opacity-90",
        secondary: "text-[#E95D3C] hover:bg-[#D0CAC5]/20",
        gradient:
            "text-white bg-gradient-to-r from-[#E8A089] to-[#E95D3C] hover:shadow-lg",
        outline:
            "text-[#E95D3C] border border-[#E95D3C] hover:bg-[#E95D3C] hover:text-white",
        social: "text-[#0A0A0A] bg-[#776F69]/12 hover:bg-[#776F69]/20",
    };

    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-base",
        lg: "px-6 py-3 text-lg",
    };

    // Special rounded corners for primary and secondary variants on md size
    const roundedClasses =
        (variant === "primary" || variant === "secondary") && size === "md"
            ? "rounded-[36px_36px_8px_36px]"
            : "rounded-[36px]";

    const isDisabled = disabled || loading;
    const classes = `${baseClasses} ${variantClasses[variant]} ${
        sizeClasses[size]
    } ${roundedClasses} ${className} ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
    }`;

    // Loading spinner component
    const LoadingSpinner = () => (
        <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
    );

    const content = (
        <>
            {loading ? <LoadingSpinner /> : icon && icon}
            {children}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={classes}>
                {content}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            className={classes}
        >
            {content}
        </button>
    );
}

// Social login button component
export function SocialButton({
    provider,
    onClick,
    className = "",
}: {
    provider: "google" | "facebook";
    onClick?: () => void;
    className?: string;
}) {
    const providerData = {
        google: {
            name: "Google",
            icon: <GoogleIcon />,
        },
        facebook: {
            name: "Facebook",
            icon: <FacebookIcon />,
        },
    };

    const { name, icon } = providerData[provider];

    return (
        <Button
            variant="social"
            onClick={onClick}
            icon={icon}
            className={className}
        >
            {name}
        </Button>
    );
}
