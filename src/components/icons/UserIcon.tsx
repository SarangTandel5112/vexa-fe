import React from "react";

interface UserIconProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    stroke?: string;
    strokeWidth?: string | number;
}

export function UserIcon({
    className = "",
    width = 24,
    height = 24,
    stroke = "#776F69",
    strokeWidth = 2,
}: UserIconProps) {
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
                d="M7.07028 21.0008C5.55126 21.0008 4.63334 20.0152 4.56836 18.6424C4.56836 15.848 7.59287 14.8841 12.1499 14.8516C16.7152 14.8949 19.7478 15.8588 19.7315 18.6424C19.6584 20.0152 18.7459 21.0008 17.2296 21.0008H7.07028Z"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
            />
            <path
                d="M12.1576 11.6628C14.2736 11.6628 15.989 9.94744 15.989 7.83141C15.989 5.71538 14.2736 4 12.1576 4C10.0416 4 8.32617 5.71538 8.32617 7.83141C8.32617 9.94744 10.0416 11.6628 12.1576 11.6628Z"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
            />
        </svg>
    );
}
