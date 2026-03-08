import { Ruler, ArrowRight } from "lucide-react";

export function EngineeringAssets() {
    const resources = [
        {
            title: "Tablas de Barrenación",
            subtitle: "Referencia para diseño de piezas (insertos y machuelos).",
            icon: <Ruler className="w-5 h-5 text-brand-500" />,
            iconBg: "bg-brand-50 dark:bg-brand-500/10",
            url: "https://docs.google.com/spreadsheets/d/1EG4I-Iz51zZtcHpQ-k69xV6Y58S4O6tnI39EEcvDc3g/edit?usp=sharing",
        },
    ];

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-500 flex items-center gap-1.5 mb-4">
                <Ruler className="w-3.5 h-3.5" />
                Recursos de Ingeniería
            </p>
            <div className="flex flex-col gap-2">
                {resources.map((r, idx) => (
                    <a
                        key={idx}
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-150"
                    >
                        <div className={`p-2 ${r.iconBg} rounded-lg flex-shrink-0`}>
                            {r.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-slate-800 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                {r.title}
                            </p>
                            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 truncate">
                                {r.subtitle}
                            </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-brand-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    </a>
                ))}
            </div>
        </div>
    );
}
