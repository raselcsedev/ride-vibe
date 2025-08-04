import { ReactNode } from "react";

export type DashboardProps = {
    title: string;
    icon: React.ReactNode;
    path: string;
    section?: string;
    component: ReactNode;
};
export type SidebarProps = {
    title: string;
    icon: React.ReactNode;
    path: string;
    section?: string;
};