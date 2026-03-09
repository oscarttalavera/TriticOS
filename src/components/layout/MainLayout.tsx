import React from "react";
import { Navbar } from "./Navbar";

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex flex-col h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <Navbar />
            <main className="flex-1 overflow-y-auto pt-20 p-4 md:pt-20 md:p-6 lg:p-8">
                <div className="max-w-7xl mx-auto space-y-6">
                    {children}
                </div>
            </main>
        </div>
    );
}
