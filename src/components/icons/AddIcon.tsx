import React from "react";

interface AddIconProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    stroke?: string;
    strokeWidth?: string | number;
}

export function AddIcon({
    className = "",
    width = 16,
    height = 16,
    stroke = "#F3EEE9",
    strokeWidth = 1,
}: AddIconProps) {
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
                d="M2 7.6665H8M8 7.6665H14M8 7.6665V13.6665M8 7.6665V1.6665"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
