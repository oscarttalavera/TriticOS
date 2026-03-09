import React from "react";
import { Navbar } from "./Navbar";

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex flex-col h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <Navbar />
            <main className="flex-1 overflow-y-auto px-4 pt-24 pb-4 md:px-6 md:pt-24 md:pb-6 lg:px-8 lg:pt-24 lg:pb-8">
                <div className="max-w-7xl mx-auto space-y-6">
                    {children}
                </div>
            </main>
        </div>
    );
}
