import React from "react";

interface EmailIconProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    stroke?: string;
    strokeWidth?: string | number;
}

export function EmailIcon({
    className = "",
    width = 28,
    height = 28,
    stroke = "#776F69",
    strokeWidth = 1.5,
}: EmailIconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M24.5 17.6102C24.5 20.8363 22.3477 23.4585 19.1547 23.4505H8.84535C5.65222 23.4585 3.5 20.8363 3.5 17.6102V10.3988C3.5 7.17611 5.65222 4.55054 8.84535 4.55054H19.1547C22.3477 4.55054 24.5 7.17611 24.5 10.3988V17.6102Z"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.1889 10.3953L15.5235 14.1888C14.6449 14.887 13.3997 14.887 12.5211 14.1888L7.81592 10.3953"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.6228 13.4656L7.81104 17.6054M20.1897 17.606L16.4199 13.4662"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
