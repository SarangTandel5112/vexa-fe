import React from "react";

interface ArrowRightIconProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    stroke?: string;
    strokeWidth?: string | number;
}

export function ArrowRightIcon({
    className = "",
    width = 24,
    height = 24,
    stroke = "#612A74",
    strokeWidth = 2,
}: ArrowRightIconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M18 8.5L22 12.5L18 16.5"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2 12.5H22"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
