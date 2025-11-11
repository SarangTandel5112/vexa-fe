import React from "react";

interface PasswordToggleIconProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    stroke?: string;
    strokeWidth?: string | number;
}

export function PasswordToggleIcon({
    className = "",
    width = 28,
    height = 28,
    stroke = "#E95D3C",
    strokeWidth = 1.75,
}: PasswordToggleIconProps) {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6886 14.0026C17.6886 16.0396 16.0366 17.6905 13.9996 17.6905C11.9626 17.6905 10.3117 16.0396 10.3117 14.0026C10.3117 11.9645 11.9626 10.3136 13.9996 10.3136C16.0366 10.3136 17.6886 11.9645 17.6886 14.0026Z"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.9978 22.5214C18.4405 22.5214 22.504 19.3271 24.7918 14.0024C22.504 8.67773 18.4405 5.4834 13.9978 5.4834H14.0025C9.55983 5.4834 5.49633 8.67773 3.2085 14.0024C5.49633 19.3271 9.55983 22.5214 14.0025 22.5214H13.9978Z"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
