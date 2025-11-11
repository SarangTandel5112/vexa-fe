import React from "react";

interface PhoneIconProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    stroke?: string;
    strokeWidth?: string | number;
}

export function PhoneIcon({
    className = "",
    width = 24,
    height = 24,
    stroke = "#141414",
    strokeWidth = 1.75,
}: PhoneIconProps) {
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
                d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 20.1046 19.1046 21 18 21C9.92765 20.5094 3.49056 14.0724 3 6C3 4.89543 3.89543 4 5 4"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default PhoneIcon;
