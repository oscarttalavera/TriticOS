import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface SectionCardProps {
    title: string;
    icon: LucideIcon;
    /** Contenido alineado a la derecha del título (botones, indicadores). */
    action?: ReactNode;
    className?: string;
    children: ReactNode;
}

export function SectionCard({ title, icon: Icon, action, className = "", children }: SectionCardProps) {
    return (
        <div className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm ${className}`}>
            <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] font-semibold font-mono uppercase tracking-widest text-azul-700 dark:text-verde-500 flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5" />
                    {title}
                </p>
                {action}
            </div>
            {children}
        </div>
    );
}
