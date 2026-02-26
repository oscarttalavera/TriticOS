import { FileSpreadsheet, HardDrive, BookOpen, ChevronRight, Calculator, Wrench } from "lucide-react";

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
            title: "Órdenes de Trabajo",
            description: "Seguimiento de OT en Sheets.",
            icon: <Wrench className="w-6 h-6 text-brand-500" />,
            url: "https://docs.google.com/spreadsheets/d/14y5sb60SMEx3Q5m0B-pTBfU0An0QmV7ouJ-HWaQjipw",
            color: "bg-brand-50 dark:bg-brand-500/10",
            borderColor: "border-brand-100 dark:border-brand-500/20"
        },
        {
            title: "Calculadora de Impresión 3D",
            description: "Cálculos de costos y tiempo para 3D.",
            icon: <Calculator className="w-6 h-6 text-purple-500" />,
            url: "https://docs.google.com/spreadsheets/d/1fVFBXBFU8Xk4DtUKjNdxpM6qoOHAnYtZnkvGW8BMkMo",
            color: "bg-purple-50 dark:bg-purple-500/10",
            borderColor: "border-purple-100 dark:border-purple-500/20"
        },
        {
            title: "Registro de POs",
            description: "Control compartido Oscar/Ramón.",
            icon: <FileSpreadsheet className="w-6 h-6 text-yellow-500" />,
            url: "https://docs.google.com/spreadsheets/d/1yLWPsZnfxTHGRtHdqoCeEF22fJX88Rt4chJohETiUSQ",
            color: "bg-yellow-50 dark:bg-yellow-500/10",
            borderColor: "border-yellow-100 dark:border-yellow-500/20"
        },
        {
            title: "Assets de Clientes",
            description: "Directorio raíz en Google Drive.",
            icon: <HardDrive className="w-6 h-6 text-blue-500" />,
            url: "#",
            color: "bg-blue-50 dark:bg-blue-500/10",
            borderColor: "border-blue-100 dark:border-blue-500/20"
        },
        {
            title: "Docs Interna",
            description: "Manuales y procesos operativos.",
            icon: <BookOpen className="w-6 h-6 text-orange-500" />,
            url: "#",
            color: "bg-orange-50 dark:bg-orange-500/10",
            borderColor: "border-orange-100 dark:border-orange-500/20"
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
