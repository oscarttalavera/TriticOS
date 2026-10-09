import type { LucideIcon } from "lucide-react";

interface PageHeaderProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export function PageHeader({ icon: Icon, title, description }: PageHeaderProps) {
    return (
        <div className="mb-8 flex items-center gap-3">
            <div className="p-2 bg-brand-50 dark:bg-brand-500/10 rounded-xl border border-brand-100 dark:border-brand-500/20">
                <Icon className="w-6 h-6 text-brand-500" />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{title}</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">{description}</p>
            </div>
        </div>
    );
}
