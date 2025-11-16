import { type Session } from "@/modules/admin/data";
import { SessionTableRow } from "./SessionTableRow";

interface SessionsTableProps {
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

export function SessionsTable({
    sessions,
    onEdit,
    onDelete,
}: SessionsTableProps) {
    return (
        <div className="overflow-x-auto">
            <div className="min-w-[800px]">
                {/* Table Header */}
                <div className="grid grid-cols-7 gap-4 p-6 bg-[#E7E7E7] border border-[#DBDADE] rounded-t-3xl">
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
                    <SessionTableRow
                        key={session.id}
                        session={session}
                        isLast={index === sessions.length - 1}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
}
