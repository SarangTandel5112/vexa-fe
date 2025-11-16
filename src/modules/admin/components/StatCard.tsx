interface StatCardProps {
    icon: React.ReactNode;
    count: number;
    label: string;
    variant?: "default" | "highlighted";
}

export function StatCard({
    icon,
    count,
    label,
    variant = "default",
}: StatCardProps) {
    return (
        <div
            className={`flex items-start gap-4 sm:gap-5 flex-1 min-w-0 p-4 sm:p-6 rounded-[20px] sm:rounded-[30px] border transition-all ${
                variant === "highlighted"
                    ? "bg-gradient-to-b from-white/80 to-[#E95D3C]/5 border-[#E95D3C]/20"
                    : "bg-white border-[#E7E7E7]"
            }`}
        >
            <div className="flex-shrink-0">{icon}</div>
            <div className="flex flex-col gap-1 sm:gap-2 min-w-0">
                <div className="font-bricolage text-2xl sm:text-3xl font-semibold leading-none tracking-tight text-[#1E1E1E]">
                    {count}
                </div>
                <div className="font-roboto text-base sm:text-xl text-[#444]">
                    {label}
                </div>
            </div>
        </div>
    );
}
