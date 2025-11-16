import { type Session } from "@/modules/admin/data";

interface StatusBadgeProps {
    status: Session["status"];
    variant?: "light" | "solid";
}

const LIGHT_STYLES: Record<
    Session["status"],
    { bg: string; text: string; label: string }
> = {
    completed: {
        bg: "bg-green-100",
        text: "text-green-800",
        label: "Completed",
    },
    active: {
        bg: "bg-blue-100",
        text: "text-blue-800",
        label: "Active",
    },
    pending: {
        bg: "bg-yellow-100",
        text: "text-yellow-800",
        label: "Pending",
    },
};

const SOLID_STYLES: Record<
    Session["status"],
    { bg: string; text: string; label: string }
> = {
    completed: {
        bg: "bg-[#34C759]",
        text: "text-white",
        label: "Completed",
    },
    active: {
        bg: "bg-[#E95D3C]",
        text: "text-white",
        label: "Active",
    },
    pending: {
        bg: "bg-[#8D8D8D]",
        text: "text-white",
        label: "Pending",
    },
};

export function StatusBadge({ status, variant = "light" }: StatusBadgeProps) {
    const styles = variant === "solid" ? SOLID_STYLES : LIGHT_STYLES;
    const style = styles[status] || {
        bg: "bg-gray-100",
        text: "text-gray-800",
        label: "Unknown",
    };

    return (
        <span
            className={`inline-flex px-3 py-1 ${
                variant === "solid" ? "rounded-full px-4" : "rounded-xl"
            } text-xs font-sf-pro ${variant === "light" ? "font-medium" : ""} ${
                style.bg
            } ${style.text}`}
        >
            {style.label}
        </span>
    );
}
