import React from "react";

interface ArrowLeftIconProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    stroke?: string;
    strokeWidth?: string | number;
}

export function ArrowLeftIcon({
    className = "",
    width = 20,
    height = 20,
    stroke = "#612A74",
    strokeWidth = 2,
}: ArrowLeftIconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M15 18L9 12L15 6"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
