import React from "react";

interface PasswordIconProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    stroke?: string;
    strokeWidth?: string | number;
}

export function PasswordIcon({
    className = "",
    width = 28,
    height = 28,
    stroke = "#776F69",
    strokeWidth = 1.5,
}: PasswordIconProps) {
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
                d="M18.4151 11.0642C18.4513 12.225 18.2226 13.3159 17.791 14.2994L23.2545 19.7628C24.0466 20.5655 24.4993 21.6471 24.4993 22.7788V23.3083C24.4993 24.1402 23.825 24.8157 22.992 24.8157H20.2445C19.4115 24.8157 18.7371 24.1402 18.7371 23.3083C18.7371 22.4917 18.0873 21.8243 17.2706 21.8022L17.1773 21.7998C16.349 21.7765 15.6956 21.0918 15.712 20.2634L15.733 19.1667L14.4566 17.8904C13.0181 18.6616 11.2809 18.9765 9.46792 18.6183C6.49992 18.0338 4.1246 15.6048 3.6136 12.624C2.7876 7.82086 6.58042 3.65818 11.2751 3.85301C15.1158 4.01168 18.2938 7.22355 18.4151 11.0642Z"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.7498 11.3076C12.7498 10.3183 11.9483 9.51562 10.9577 9.51562C9.96722 9.51562 9.16455 10.3183 9.16455 11.3076C9.16455 12.2982 9.96722 13.1008 10.9577 13.1008C11.9483 13.1008 12.7498 12.2982 12.7498 11.3076Z"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
