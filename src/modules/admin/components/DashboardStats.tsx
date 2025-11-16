import { type DashboardStats } from "@/modules/admin/data";
import { StatCard } from "./StatCard";
import CalendarTimeIcon from "@/components/icons/CalendarTimeIcon";
import UsersIcon from "@/components/icons/UsersIcon";
import UserCircleIcon from "@/components/icons/UserCircleIcon";

interface DashboardStatsProps {
    stats: DashboardStats;
}

export function DashboardStats({ stats }: DashboardStatsProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full mb-8">
            <StatCard
                icon={
                    <CalendarTimeIcon
                        stroke="black"
                        className="w-12 h-12 sm:w-[54px] sm:h-[54px]"
                    />
                }
                count={stats.activeSessions}
                label="Active Sessions"
                variant="highlighted"
            />
            <StatCard
                icon={
                    <UsersIcon
                        stroke="black"
                        className="w-12 h-12 sm:w-[54px] sm:h-[54px]"
                    />
                }
                count={stats.respondents}
                label="Respondents"
            />
            <StatCard
                icon={
                    <UserCircleIcon
                        stroke="black"
                        className="w-12 h-12 sm:w-[54px] sm:h-[54px]"
                    />
                }
                count={stats.listeners}
                label="Listeners"
            />
        </div>
    );
}
