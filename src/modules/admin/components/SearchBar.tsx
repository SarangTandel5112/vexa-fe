import { ChevronDownIcon } from "@/components/icons";
import SearchIcon from "@/components/icons/SearchIcon";
import FilterIcon from "@/components/icons/FilterIcon";
import { ExportIcon } from "@/components/icons";

interface SearchBarProps {
    searchQuery: string;
    onSearchChange: (value: string) => void;
    filterBy?: string;
    onFilter?: () => void;
    onExport?: () => void;
}

export function SearchBar({
    searchQuery,
    onSearchChange,
    filterBy = "Session Name",
    onFilter,
    onExport,
}: SearchBarProps) {
    return (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border border-[#E7E7E7] bg-white w-full sm:w-auto sm:min-w-[300px]">
                <div className="flex items-center gap-2.5">
                    <SearchIcon
                        stroke="#4B465C"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="font-sf-pro text-sm text-[#444] bg-transparent outline-none flex-1 min-w-0"
                    />
                </div>
                <div className="flex items-center gap-2.5 flex-shrink-0">
                    <span className="font-sf-pro text-xs text-[#444] whitespace-nowrap">
                        by {filterBy}
                    </span>
                    <ChevronDownIcon className="w-4 h-4" stroke="#4B465C" />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
                <button
                    onClick={onFilter}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#E7E7E7] bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                >
                    <span className="font-sf-pro text-sm text-[#444]">
                        Filters
                    </span>
                    <FilterIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={onExport}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#E7E7E7] bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                >
                    <span className="font-sf-pro text-sm text-[#444]">
                        Export
                    </span>
                    <ExportIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
