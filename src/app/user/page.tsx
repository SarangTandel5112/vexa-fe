import React from "react";
import { Header } from "@/components/layout/Header";
import { PageWrapper, MainContent } from "@/components/layout/Layout";
import { Button } from "@/components/ui/Button";
import {
    AddIcon,
    ExportIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@/components/icons";

interface UserData {
    id: string;
    name: string;
    projects: number;
    agentUsed: string;
    plan: string;
}

const userData: UserData[] = [
    {
        id: "BG6767",
        name: "User Name 1",
        projects: 1,
        agentUsed: "1",
        plan: "Free Trial",
    },
    {
        id: "BG6767",
        name: "User Name 1",
        projects: 1,
        agentUsed: "AI Moderator",
        plan: "Free Trial",
    },
    {
        id: "BG6767",
        name: "User Name 1",
        projects: 25,
        agentUsed: "AI Moderator",
        plan: "Free Trial",
    },
    {
        id: "BG6767",
        name: "User Name 1",
        projects: 25,
        agentUsed: "AI Moderator",
        plan: "Free Trial",
    },
    {
        id: "BG6767",
        name: "User Name 1",
        projects: 25,
        agentUsed: "AI Moderator",
        plan: "Free Trial",
    },
    {
        id: "BG6767",
        name: "User Name 1",
        projects: 25,
        agentUsed: "AI Moderator",
        plan: "Free Trial",
    },
    {
        id: "BG6767",
        name: "User Name 1",
        projects: 25,
        agentUsed: "AI Moderator",
        plan: "Free Trial",
    },
    {
        id: "BG6767",
        name: "User Name 1",
        projects: 25,
        agentUsed: "AI Moderator",
        plan: "Free Trial",
    },
    {
        id: "BG6767",
        name: "User Name 1",
        projects: 25,
        agentUsed: "AI Moderator",
        plan: "Free Trial",
    },
];

export default function UserPage() {
    return (
        <PageWrapper>
            <Header variant="dashboard" />

            <MainContent className="py-4">
                {/* Company Info Section */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-8">
                    <div className="flex flex-col">
                        <h1 className="text-2xl lg:text-4xl font-bricolage font-bold text-[#401A4D] mb-2">
                            Oral B
                        </h1>
                        <p className="text-base text-[#827487] font-sf-pro">
                            Showing 10 of 120 users
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <Button variant="social" className="w-full sm:w-auto">
                            Edit Company
                        </Button>
                        <Button
                            variant="primary"
                            icon={<AddIcon />}
                            className="w-full sm:w-auto"
                        >
                            Add Company
                        </Button>
                    </div>
                </div>

                {/* Table Card */}
                <div className="bg-white/70 backdrop-blur-[15px] border border-[#776F69]/28 rounded-[36px] p-6 lg:p-10">
                    {/* Table Header with Filters */}
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">
                        <h2 className="text-lg font-bricolage text-[#444]">
                            Company
                        </h2>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            {/* Filter Toggle */}
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-2 bg-[#E7E7E7] rounded-full p-1 w-8 h-5">
                                    <div className="w-3 h-3 bg-[#8D8D8D] rounded-full"></div>
                                </div>
                                <span className="text-sm text-[#8D8D8D] font-sf-pro">
                                    Filters Off
                                </span>
                            </div>

                            {/* Export Button */}
                            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E7E7E7] rounded-xl text-sm text-[#444] font-sf-pro hover:bg-gray-50 transition-colors cursor-pointer">
                                <span>Export</span>
                                <ExportIcon />
                            </button>
                        </div>
                    </div>

                    {/* Responsive Table */}
                    <div className="overflow-x-auto">
                        <div className="min-w-[640px]">
                            {/* Table Header */}
                            <div className="grid grid-cols-5 gap-4 p-6 bg-[#E7E7E7] border border-[#DBDADE] rounded-t-3xl">
                                <div className="text-sm text-[#444] font-sf-pro">
                                    User Id
                                </div>
                                <div className="text-sm text-[#444] font-sf-pro">
                                    User Name
                                </div>
                                <div className="text-sm text-[#444] font-sf-pro">
                                    Project(s)
                                </div>
                                <div className="text-sm text-[#444] font-sf-pro">
                                    Agent Used
                                </div>
                                <div className="text-sm text-[#444] font-sf-pro">
                                    Plan
                                </div>
                            </div>

                            {/* Table Rows */}
                            {userData.map((user, index) => (
                                <div
                                    key={index}
                                    className={`grid grid-cols-5 gap-4 p-6 border-x border-b border-[#DBDADE] ${
                                        index === userData.length - 1
                                            ? "rounded-b-3xl"
                                            : ""
                                    }`}
                                >
                                    <div className="text-base text-[#72346A] font-sf-pro">
                                        {user.id}
                                    </div>
                                    <div className="text-base text-[#282C34] font-sf-pro">
                                        {user.name}
                                    </div>
                                    <div className="text-base text-[#8D8D8D] font-sf-pro">
                                        {user.projects}
                                    </div>
                                    <div className="text-base text-[#8D8D8D] font-sf-pro">
                                        {user.agentUsed}
                                    </div>
                                    <div>
                                        <button className="flex items-center gap-2 px-3 py-1 bg-white border border-[#612A74] rounded-xl text-xs text-[#612A74] font-sf-pro hover:bg-gray-50 transition-colors cursor-pointer">
                                            <span>{user.plan}</span>
                                            <ChevronDownIcon />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="flex flex-col items-center gap-4 mt-8">
                        <div className="flex items-center gap-4">
                            {/* Previous Button */}
                            <button className="flex items-center gap-2 text-[#8D8D8D] font-sf-pro hover:text-[#444] transition-colors cursor-pointer">
                                <ChevronLeftIcon />
                                <span>Previous</span>
                            </button>

                            {/* Page Numbers */}
                            <div className="flex items-center gap-2">
                                <button className="px-3 py-1 bg-[#612A74] text-white rounded-sm text-sm font-sf-pro cursor-pointer">
                                    1
                                </button>
                                <button className="px-3 py-1 bg-[#E5E0DA] text-[#979797] rounded-sm text-sm font-sf-pro hover:bg-[#D0CAC5] transition-colors cursor-pointer">
                                    2
                                </button>
                                <button className="px-3 py-1 bg-[#E5E0DA] text-[#979797] rounded-sm text-sm font-sf-pro hover:bg-[#D0CAC5] transition-colors cursor-pointer">
                                    3
                                </button>
                            </div>

                            {/* Next Button */}
                            <button className="flex items-center gap-2 text-[#444] font-sf-pro hover:text-[#612A74] transition-colors cursor-pointer">
                                <span>Next</span>
                                <ChevronRightIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </MainContent>
        </PageWrapper>
    );
}
