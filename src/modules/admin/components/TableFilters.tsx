import { ExportIcon } from "@/components/icons";

interface TableFiltersProps {
    title: string;
    showFilters?: boolean;
    onExport?: () => void;
}

export function TableFilters({
    title,
    showFilters = false,
    onExport,
}: TableFiltersProps) {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">
            <h2 className="text-heading2 font-bricolage text-[#444]">
                {title}
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* Filter Toggle */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 bg-[#E7E7E7] rounded-full p-1 w-8 h-5">
                        <div className="w-3 h-3 bg-[#8D8D8D] rounded-full"></div>
                    </div>
                    <span className="text-sm text-[#8D8D8D] font-sf-pro">
                        Filters {showFilters ? "On" : "Off"}
                    </span>
                </div>

                {/* Export Button */}
                <button
                    onClick={onExport}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E7E7E7] rounded-xl text-sm text-[#444] font-sf-pro hover:bg-gray-50 transition-colors cursor-pointer"
                >
                    <span>Export</span>
                    <ExportIcon />
                </button>
            </div>
        </div>
    );
}
