import React from "react";

interface DocumentIconProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    stroke?: string;
    strokeWidth?: string | number;
}

export function DocumentIcon({
    className = "",
    width = 24,
    height = 24,
    stroke = "#776F69",
    strokeWidth = 2,
}: DocumentIconProps) {
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
                d="M15.7161 16.7234H8.49609"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.7161 12.5369H8.49609"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.2511 8.36011H8.49609"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9085 3.24976C15.9085 3.24976 8.23149 3.25376 8.21949 3.25376C5.45949 3.27076 3.75049 5.08676 3.75049 7.85676V17.0528C3.75049 19.8368 5.47249 21.6598 8.25649 21.6598C8.25649 21.6598 15.9325 21.6568 15.9455 21.6568C18.7055 21.6398 20.4155 19.8228 20.4155 17.0528V7.85676C20.4155 5.07276 18.6925 3.24976 15.9085 3.24976Z"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
