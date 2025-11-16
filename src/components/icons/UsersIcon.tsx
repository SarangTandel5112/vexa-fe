export default function UsersIcon({
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
                cx="20.25"
                cy="15.75"
                r="9"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.75 47.25V42.75C6.75 37.7794 10.7794 33.75 15.75 33.75H24.75C29.7206 33.75 33.75 37.7794 33.75 42.75V47.25"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M36 7.04297C39.9823 8.0626 42.7676 11.6509 42.7676 15.7617C42.7676 19.8725 39.9823 23.4608 36 24.4805"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M47.25 47.2504V42.7504C47.2265 38.6657 44.4551 35.109 40.5 34.0879"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
