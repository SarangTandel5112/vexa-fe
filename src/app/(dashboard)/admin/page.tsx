"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { AddIcon } from "@/components/icons";
import { mockSessions, mockStats } from "@/modules/admin/data";
import {
    PageHeader,
    SearchBar,
    DashboardStats,
    DashboardSessionsTable,
    Pagination,
} from "@/modules/admin/components";

export default function AdminDashboard() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const totalPages = 3;

    const handleEdit = (id: string) => {
        // TODO: Implement edit functionality
        console.log("Edit session:", id);
    };

    const handleDelete = (id: string) => {
        // TODO: Implement delete functionality
        console.log("Delete session:", id);
    };

    const handleFilter = () => {
        // TODO: Implement filter functionality
        console.log("Apply filters");
    };

    const handleExport = () => {
        // TODO: Implement export functionality
        console.log("Export sessions");
    };

    return (
        <>
            <PageHeader
                title="Dashboard"
                titleColor="text-[#E95D3C]"
                actions={
                    <Button
                        variant="primary"
                        icon={<AddIcon />}
                        className="w-full sm:w-auto"
                    >
                        Create Session
                    </Button>
                }
            />

            <DashboardStats stats={mockStats} />

            <div className="bg-white/70 backdrop-blur-[15px] border border-[#776F69]/28 rounded-[36px] p-6 lg:p-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
                    <h2 className="text-heading2 font-bricolage text-[#444]">
                        All Sessions
                    </h2>

                    <SearchBar
                        searchQuery={searchQuery}
                        onSearchChange={setSearchQuery}
                        filterBy="Session Name"
                        onFilter={handleFilter}
                        onExport={handleExport}
                    />
                </div>

                <DashboardSessionsTable
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
