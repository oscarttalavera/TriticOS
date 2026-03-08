import { FileSpreadsheet, ArrowRight } from "lucide-react";

export function PurchaseOrders() {
    const actions = [
        {
            title: "Registro POs Compartido",
            icon: <FileSpreadsheet className="w-5 h-5 text-amber-500" />,
            url: "https://docs.google.com/spreadsheets/d/1yLWPsZnfxTHGRtHdqoCeEF22fJX88Rt4chJohETiUSQ",
        },
        {
            title: "Registro Principal POs",
            icon: <FileSpreadsheet className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
            url: "https://docs.google.com/spreadsheets/d/1jqWTtQ3j_tqXBVSKOKO6a8TF4-ZgLgvwosSEDKCj5YY",
        },
    ];

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            {/* Section Header */}
            <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-500 flex items-center gap-1.5 mb-4">
                <FileSpreadsheet className="w-3.5 h-3.5" />
                Órdenes de Compra
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
                        <div className="p-2 bg-amber-50 dark:bg-amber-500/10 rounded-lg flex-shrink-0">
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
