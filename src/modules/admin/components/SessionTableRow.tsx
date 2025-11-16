import { type Session } from "@/modules/admin/data";
import EditIcon from "@/components/icons/EditIcon";
import TrashIcon from "@/components/icons/TrashIcon";
import { StatusBadge } from "./StatusBadge";

interface SessionTableRowProps {
    session: Session;
    isLast: boolean;
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
}

export function SessionTableRow({
    session,
    isLast,
    onEdit,
    onDelete,
}: SessionTableRowProps) {
    return (
        <div
            className={`grid grid-cols-7 gap-4 p-6 border-x border-b border-[#DBDADE] ${
                isLast ? "rounded-b-3xl" : ""
            }`}
        >
            <div className="text-base text-[#72346A] font-sf-pro">
                {session.sessionName}
            </div>
            <div className="text-base text-[#282C34] font-sf-pro">
                {session.createdOn}
            </div>
            <div className="text-base text-[#8D8D8D] font-sf-pro">
                {session.completedOn}
            </div>
            <div className="text-base text-[#8D8D8D] font-sf-pro">
                {session.respondents}
            </div>
            <div className="text-base text-[#8D8D8D] font-sf-pro">
                {session.listenerId}
            </div>
            <div>
                <StatusBadge status={session.status} />
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
    );
}
