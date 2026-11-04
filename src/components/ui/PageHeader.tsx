import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface PageHeaderProps {
    icon: LucideIcon;
    title: string;
    description: string;
    /** Contenido alineado a la derecha del encabezado (p. ej. un enlace al portal de la sección). */
    action?: ReactNode;
}

export function PageHeader({ icon: Icon, title, description, action }: PageHeaderProps) {
    return (
        <div className="mb-8 flex flex-wrap items-center gap-3">
            <div className="p-2 bg-azul-50 dark:bg-azul-700/30 rounded-xl border border-azul-100 dark:border-azul-700">
                <Icon className="w-6 h-6 text-azul-700 dark:text-verde-500" />
            </div>
            <div className="flex-1 min-w-0">
                <h1 className="text-2xl font-semibold text-azul-700 dark:text-white tracking-tight">{title}</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">{description}</p>
            </div>
            {action}
        </div>
    );
}
