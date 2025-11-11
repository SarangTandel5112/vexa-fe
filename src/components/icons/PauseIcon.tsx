import React from "react";

interface PauseIconProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    stroke?: string;
    strokeWidth?: string | number;
}

export function PauseIcon({
    className = "",
    width = 24,
    height = 24,
    stroke = "#141414",
    strokeWidth = 1.75,
}: PauseIconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect
                x="6"
                y="5"
                width="4"
                height="14"
                rx="1"
                stroke={stroke}
                strokeWidth={strokeWidth}
            />
            <rect
                x="14"
                y="5"
                width="4"
                height="14"
                rx="1"
                stroke={stroke}
                strokeWidth={strokeWidth}
            />
        </svg>
    );
}

export default PauseIcon;
