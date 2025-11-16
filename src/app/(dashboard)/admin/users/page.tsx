"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { AddIcon, ExportIcon } from "@/components/icons";
import { mockSessions } from "@/modules/admin/data";
import {
    PageHeader,
    TableFilters,
    SessionsTable,
    Pagination,
} from "@/modules/admin/components";

export default function AdminUsersPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;

    const handleEdit = (id: string) => {
        // TODO: Implement edit functionality
        console.log("Edit session:", id);
    };

    const handleDelete = (id: string) => {
        // TODO: Implement delete functionality
        console.log("Delete session:", id);
    };

    const handleExport = () => {
        // TODO: Implement export functionality
        console.log("Export sessions");
    };

    return (
        <>
            <PageHeader
                title="User Sessions"
                subtitle={`Showing ${mockSessions.length} sessions`}
                actions={
                    <>
                        <Button variant="social" className="w-full sm:w-auto">
                            <ExportIcon />
                            Export
                        </Button>
                        <Button
                            variant="primary"
                            icon={<AddIcon />}
                            className="w-full sm:w-auto"
                        >
                            Add Session
                        </Button>
                    </>
                }
            />

            <div className="bg-white/70 backdrop-blur-[15px] border border-[#776F69]/28 rounded-[36px] p-6 lg:p-10">
                <TableFilters
                    title="Sessions"
                    showFilters={false}
                    onExport={handleExport}
                />

                <SessionsTable
                    sessions={mockSessions}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </>
    );
}
