import { type Session } from "@/modules/admin/data";
import EditIcon from "@/components/icons/EditIcon";
import TrashIcon from "@/components/icons/TrashIcon";
import { StatusBadge } from "./StatusBadge";

interface DashboardSessionsTableProps {
    sessions: Session[];
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
}

const TABLE_HEADERS = [
    "Session Name",
    "Created On",
    "Completed On",
    "Respondents",
    "Listener ID",
    "Status",
    "Actions",
];

export function DashboardSessionsTable({
    sessions,
    onEdit,
    onDelete,
}: DashboardSessionsTableProps) {
    return (
        <div className="overflow-x-auto">
            <div className="min-w-[900px]">
                {/* Table Header */}
                <div className="grid grid-cols-7 gap-4 p-6 bg-[#F8F9FA] border border-[#E3E3E3] rounded-t-3xl">
                    {TABLE_HEADERS.map((header) => (
                        <div
                            key={header}
                            className="text-sm text-[#444] font-sf-pro"
                        >
                            {header}
                        </div>
                    ))}
                </div>

                {/* Table Rows */}
                {sessions.map((session, index) => (
                    <div
                        key={session.id}
                        className={`grid grid-cols-7 gap-4 p-6 border-x border-b border-[#E3E3E3] bg-white ${
                            index === sessions.length - 1 ? "rounded-b-3xl" : ""
                        }`}
                    >
                        <div className="text-base text-[#E95D3C] font-sf-pro font-semibold">
                            {session.sessionName}
                        </div>
                        <div className="text-base text-[#282C34] font-sf-pro">
                            {session.createdOn}
                        </div>
                        <div className="text-base text-[#282C34] font-sf-pro">
                            {session.completedOn}
                        </div>
                        <div className="text-base text-[#282C34] font-sf-pro">
                            {session.respondents}
                        </div>
                        <div className="text-base text-[#282C34] font-sf-pro">
                            {session.listenerId}
                        </div>
                        <div>
                            <StatusBadge
                                status={session.status}
                                variant="solid"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => onEdit?.(session.id)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                aria-label="Edit session"
                            >
                                <EditIcon />
                            </button>
                            <button
                                onClick={() => onDelete?.(session.id)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                aria-label="Delete session"
                            >
                                <TrashIcon />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
