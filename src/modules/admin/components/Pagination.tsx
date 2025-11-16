import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex items-center gap-4">
                {/* Previous Button */}
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className="flex items-center gap-2 text-[#8D8D8D] font-sf-pro hover:text-[#444] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                    <ChevronLeftIcon />
                    <span>Previous</span>
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => onPageChange(i + 1)}
                            className={`px-3 py-1 rounded-sm text-sm font-sf-pro cursor-pointer transition-colors ${
                                currentPage === i + 1
                                    ? "bg-[#612A74] text-white"
                                    : "bg-[#E5E0DA] text-[#979797] hover:bg-[#D0CAC5]"
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2 text-[#444] font-sf-pro hover:text-[#612A74] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                    <span>Next</span>
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    );
}
