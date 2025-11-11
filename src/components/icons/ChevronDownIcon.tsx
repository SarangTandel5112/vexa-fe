import React from "react";

interface ChevronDownIconProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    stroke?: string;
    strokeWidth?: string | number;
}

export function ChevronDownIcon({
    className = "",
    width = 24,
    height = 24,
    stroke = "#8D8D8D",
    strokeWidth = 1.5,
}: ChevronDownIconProps) {
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
                d="M8 10L12 14L16 10"
                stroke={stroke}
                strokeWidth={strokeWidth}
            />
        </svg>
    );
}
