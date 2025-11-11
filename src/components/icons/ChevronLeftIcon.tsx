import React from "react";

interface ChevronLeftIconProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    stroke?: string;
    strokeWidth?: string | number;
}

export function ChevronLeftIcon({
    className = "",
    width = 16,
    height = 16,
    stroke = "#8D8D8D",
    strokeWidth = 1,
}: ChevronLeftIconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M10.5 3.0105C8.54738 5.06155 7.45262 6.2115 5.5 8.26255L10.5 12.9894"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
