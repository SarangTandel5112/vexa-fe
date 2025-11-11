import React from "react";

interface ChevronRightIconProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    stroke?: string;
    strokeWidth?: string | number;
}

export function ChevronRightIcon({
    className = "",
    width = 16,
    height = 16,
    stroke = "#444444",
    strokeWidth = 1,
}: ChevronRightIconProps) {
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
                d="M5.5 3.0105C7.45262 5.06155 8.54738 6.2115 10.5 8.26255L5.5 12.9894"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
