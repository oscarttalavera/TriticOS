import { FileSpreadsheet, Calculator, HardDrive, Ruler, ArrowRight } from "lucide-react";

export function QuickActions() {
    const actions = [
        {
            title: "Nueva Cotización",
            icon: <FileSpreadsheet className="w-5 h-5 text-green-500" />,
            iconBg: "bg-green-50 dark:bg-green-500/10",
            url: "https://docs.google.com/spreadsheets/d/1n8C5HXRL-HGFSptkOSpJIPK6BfdAsCfO4ndFjJAkwlE",
        },
        {
            title: "Calculadora de Impresión 3D",
            icon: <Calculator className="w-5 h-5 text-purple-500" />,
            iconBg: "bg-purple-50 dark:bg-purple-500/10",
            url: "https://docs.google.com/spreadsheets/d/1fVFBXBFU8Xk4DtUKjNdxpM6qoOHAnYtZnkvGW8BMkMo",
        },
        {
            title: "Assets de Clientes",
            icon: <HardDrive className="w-5 h-5 text-blue-500" />,
            iconBg: "bg-blue-50 dark:bg-blue-500/10",
            url: "#",
        },
        {
            title: "Tablas de Barrenación",
            icon: <Ruler className="w-5 h-5 text-brand-500" />,
            iconBg: "bg-brand-50 dark:bg-brand-500/10",
            url: "https://docs.google.com/spreadsheets/d/1EG4I-Iz51zZtcHpQ-k69xV6Y58S4O6tnI39EEcvDc3g/edit?usp=sharing",
        },
    ];

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-500 flex items-center gap-1.5 mb-4">
                <FileSpreadsheet className="w-3.5 h-3.5" />
                Acciones Rápidas
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
