import { Ruler, ChevronRight } from "lucide-react";

export function EngineeringAssets() {
    const resources = [
        {
            title: "Tablas de Barrenación",
            description: "Referencia para diseño de piezas (insertos y machuelos).",
            icon: <Ruler className="w-6 h-6 text-brand-500" />,
            url: "https://docs.google.com/spreadsheets/d/1EG4I-Iz51zZtcHpQ-k69xV6Y58S4O6tnI39EEcvDc3g/edit?usp=sharing",
            color: "bg-brand-50 dark:bg-brand-500/10",
            borderColor: "border-brand-100 dark:border-brand-500/20"
        }
    ];

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recursos de Ingeniería</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {resources.map((resource, idx) => (
                    <a
                        key={idx}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-start p-4 rounded-xl border ${resource.borderColor} ${resource.color} hover:shadow-md transition-all duration-200 cursor-pointer`}
                    >
                        <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm mr-4 flex-shrink-0">
                            {resource.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors truncate">
                                {resource.title}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">
                                {resource.description}
                            </p>
                        </div>
                        <ChevronRight className="w-5 h-5 flex-shrink-0 self-center text-slate-400 group-hover:translate-x-1 group-hover:text-brand-500 transition-all" />
                    </a>
                ))}
            </div>
        </div>
    );
}
