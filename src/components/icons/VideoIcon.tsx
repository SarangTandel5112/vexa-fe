import React from "react";

interface VideoIconProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    stroke?: string;
    strokeWidth?: string | number;
}

export function VideoIcon({
    className = "",
    width = 24,
    height = 24,
    stroke = "#141414",
    strokeWidth = 1.75,
}: VideoIconProps) {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 10.0001L19.553 7.72412C19.8629 7.56926 20.2309 7.58583 20.5256 7.76792C20.8203 7.95002 20.9998 8.27168 21 8.61812V15.3821C20.9998 15.7286 20.8203 16.0502 20.5256 16.2323C20.2309 16.4144 19.8629 16.431 19.553 16.2761L15 14.0001V10.0001Z"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <rect
                x="3"
                y="6"
                width="12"
                height="12"
                rx="2"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default VideoIcon;
