import { BookOpen, Calculator, PackageSearch, Wrench, ChevronRight } from "lucide-react";

export function OperationsResources() {
    const actions = [
        {
            title: "Calculadora de Impresión 3D",
            description: "Cálculos de costos y tiempo para 3D.",
            icon: <Calculator className="w-6 h-6 text-purple-500" />,
            url: "https://docs.google.com/spreadsheets/d/1fVFBXBFU8Xk4DtUKjNdxpM6qoOHAnYtZnkvGW8BMkMo",
            color: "bg-purple-50 dark:bg-purple-500/10",
            borderColor: "border-purple-100 dark:border-purple-500/20"
        },
        {
            title: "Docs Interna",
            description: "Manuales y procesos operativos.",
            icon: <BookOpen className="w-6 h-6 text-orange-500" />,
            url: "#",
            color: "bg-orange-50 dark:bg-orange-500/10",
            borderColor: "border-orange-100 dark:border-orange-500/20"
        },
        {
            title: "Control de Inventario",
            description: "Gestión de filamentos y materiales.",
            icon: <PackageSearch className="w-6 h-6 text-indigo-500" />,
            url: "#",
            color: "bg-indigo-50 dark:bg-indigo-500/10",
            borderColor: "border-indigo-100 dark:border-indigo-500/20"
        },
        {
            title: "Mantenimiento",
            description: "Bitácora de mantenimiento de equipos.",
            icon: <Wrench className="w-6 h-6 text-teal-500" />,
            url: "#",
            color: "bg-teal-50 dark:bg-teal-500/10",
            borderColor: "border-teal-100 dark:border-teal-500/20"
        }
    ];

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recursos y Herramientas</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {actions.map((action, idx) => (
                    <a
                        key={idx}
                        href={action.url}
                        className={`group flex items-start p-4 rounded-xl border ${action.borderColor} ${action.color} hover:shadow-md transition-all duration-200 cursor-pointer`}
                    >
                        <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm mr-4 flex-shrink-0">
                            {action.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors truncate">
                                {action.title}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">
                                {action.description}
                            </p>
                        </div>
                        <ChevronRight className="w-5 h-5 flex-shrink-0 self-center text-slate-400 group-hover:translate-x-1 group-hover:text-brand-500 transition-all" />
                    </a>
                ))}
            </div>
        </div>
    );
}
