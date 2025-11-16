export default function CalendarTimeIcon({
    className = "",
    stroke = "black",
}: {
    className?: string;
    stroke?: string;
}) {
    return (
        <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M26.5388 47.25H11.25C8.76472 47.25 6.75 45.2353 6.75 42.75V15.75C6.75 13.2647 8.76472 11.25 11.25 11.25H38.25C40.7353 11.25 42.75 13.2647 42.75 15.75V24.75"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle
                cx="40.5"
                cy="40.5"
                r="9"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M33.75 6.75V15.75"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.75 6.75V15.75"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.75 24.75H42.75"
                stroke={stroke}
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M40.5 37.1152V40.4992L42.75 42.7492"
                stroke={stroke}
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
