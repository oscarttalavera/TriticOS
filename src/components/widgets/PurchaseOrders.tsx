import { FileSpreadsheet, ChevronRight } from "lucide-react";

export function PurchaseOrders() {
    const actions = [
        {
            title: "Registro POs Compartido",
            description: "Control compartido Oscar/Ramón.",
            icon: <FileSpreadsheet className="w-6 h-6 text-yellow-500" />,
            url: "https://docs.google.com/spreadsheets/d/1yLWPsZnfxTHGRtHdqoCeEF22fJX88Rt4chJohETiUSQ",
            color: "bg-yellow-50 dark:bg-yellow-500/10",
            borderColor: "border-yellow-100 dark:border-yellow-500/20"
        },
        {
            title: "Registro Principal POs",
            description: "Directorio general de Órdenes de Compra.",
            icon: <FileSpreadsheet className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
            url: "https://docs.google.com/spreadsheets/d/1jqWTtQ3j_tqXBVSKOKO6a8TF4-ZgLgvwosSEDKCj5YY",
            color: "bg-yellow-100 dark:bg-yellow-500/20",
            borderColor: "border-yellow-200 dark:border-yellow-500/30"
        }
    ];

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Órdenes de Compra</h2>
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
