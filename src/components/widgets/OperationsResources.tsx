import { BookOpen, PackageSearch, Wrench, ArrowRight } from "lucide-react";

export function OperationsResources() {
    const actions = [
        {
            title: "Docs Interna",
            icon: <BookOpen className="w-5 h-5 text-orange-500" />,
            iconBg: "bg-orange-50 dark:bg-orange-500/10",
            url: "#",
        },
        {
            title: "Control de Inventario",
            icon: <PackageSearch className="w-5 h-5 text-indigo-500" />,
            iconBg: "bg-indigo-50 dark:bg-indigo-500/10",
            url: "#",
        },
        {
            title: "Mantenimiento",
            icon: <Wrench className="w-5 h-5 text-teal-500" />,
            iconBg: "bg-teal-50 dark:bg-teal-500/10",
            url: "#",
        },
    ];

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-500 flex items-center gap-1.5 mb-4">
                <Wrench className="w-3.5 h-3.5" />
                Recursos y Herramientas
            </p>
            <div className="flex flex-col gap-2">
                {actions.map((action, idx) => (
                    <a
                        key={idx}
                        href={action.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-150"
                    >
                        <div className={`p-2 ${action.iconBg} rounded-lg flex-shrink-0`}>
                            {action.icon}
                        </div>
                        <span className="flex-1 text-sm font-medium text-slate-800 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                            {action.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-brand-400 group-hover:translate-x-0.5 transition-all" />
                    </a>
                ))}
            </div>
        </div>
    );
}
