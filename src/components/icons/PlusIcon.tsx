import React from "react";

interface PlusIconProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    stroke?: string;
    strokeWidth?: string | number;
}

export function PlusIcon({
    className = "",
    width = 30,
    height = 30,
    stroke = "black",
    strokeWidth = 3,
}: PlusIconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M6.25 15H23.75"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15 6.25V23.75"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
