export default function SearchIcon({
    className = "",
    stroke = "#4B465C",
}: {
    className?: string;
    stroke?: string;
}) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle
                cx="10"
                cy="10"
                r="7"
                stroke={stroke}
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21 21L15 15"
                stroke={stroke}
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
