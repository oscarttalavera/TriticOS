import { FileSpreadsheet, HardDrive, ChevronRight } from "lucide-react";

export function QuickActions() {
    const actions = [
        {
            title: "Nueva Cotización",
            description: "Abre el template maestro en Google Sheets.",
            icon: <FileSpreadsheet className="w-6 h-6 text-green-500" />,
            url: "https://docs.google.com/spreadsheets/d/1n8C5HXRL-HGFSptkOSpJIPK6BfdAsCfO4ndFjJAkwlE",
            color: "bg-green-50 dark:bg-green-500/10",
            borderColor: "border-green-100 dark:border-green-500/20"
        },
        {
            title: "Assets de Clientes",
            description: "Directorio raíz en Google Drive.",
            icon: <HardDrive className="w-6 h-6 text-blue-500" />,
            url: "#",
            color: "bg-blue-50 dark:bg-blue-500/10",
            borderColor: "border-blue-100 dark:border-blue-500/20"
        }
    ];

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Acciones Rápidas</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {actions.map((action, idx) => (
                    <a
                        key={idx}
                        href={action.url}
                        className={`group flex items-start p-4 rounded-xl border ${action.borderColor} ${action.color} hover:shadow-md transition-all duration-200 cursor-pointer`}
                    >
                        <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm mr-4">
                            {action.icon}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                {action.title}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">
                                {action.description}
                            </p>
                        </div>
                        <ChevronRight className="w-5 h-5 self-center text-slate-400 group-hover:translate-x-1 group-hover:text-brand-500 transition-all" />
                    </a>
                ))}
            </div>
        </div>
    );
}
