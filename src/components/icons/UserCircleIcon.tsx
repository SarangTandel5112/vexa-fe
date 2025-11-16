export default function UserCircleIcon({
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
            <circle
                cx="27"
                cy="27"
                r="20.25"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle
                cx="27"
                cy="22.5"
                r="6.75"
                stroke={stroke}
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.8789 42.4103C15.0224 38.6043 18.5268 35.9988 22.5009 36H31.5009C35.4803 35.9986 38.9883 38.6108 40.1274 42.4238"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
