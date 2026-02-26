import { FileDigit, CreditCard, ExternalLink, ShieldCheck, Landmark } from "lucide-react";

export function BillingActions() {
    const billingLinks = [
        {
            title: "Portal Facturación SAT",
            description: "Acceso al portal oficial CFDI del SAT.",
            icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
            url: "https://www.sat.gob.mx/portal/public/tramites/factura-electronica",
            color: "bg-emerald-50 dark:bg-emerald-500/10",
            borderColor: "border-emerald-100 dark:border-emerald-500/20"
        },
        {
            title: "Declaraciones SAT",
            description: "Portal de declaraciones de PF.",
            icon: <Landmark className="w-5 h-5 text-emerald-600" />,
            url: "https://www.sat.gob.mx/portal/public/tramites/declaraciones-pf",
            color: "bg-emerald-50 dark:bg-emerald-500/10",
            borderColor: "border-emerald-200 dark:border-emerald-500/30"
        },
        {
            title: "Cargar Facturas Safran MXN",
            description: "Portal SEM CFDI Seguro para Safran.",
            icon: <FileDigit className="w-5 h-5 text-indigo-500" />,
            url: "https://sem.cfdiseguro.com/cfdi/EnviaFactura",
            color: "bg-indigo-50 dark:bg-indigo-500/10",
            borderColor: "border-indigo-100 dark:border-indigo-500/20"
        },
        {
            title: "Cargar Facturas Vallen",
            description: "Portal Recepción Facturación Vallen.",
            icon: <CreditCard className="w-5 h-5 text-sky-500" />,
            url: "https://recepcion.facturaxion.com/?san=PSI8906083F8#",
            color: "bg-sky-50 dark:bg-sky-500/10",
            borderColor: "border-sky-100 dark:border-sky-500/20"
        }
    ];

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center">
                    <FileDigit className="w-5 h-5 mr-2 text-brand-500" />
                    Portales de Facturación
                </h2>
            </div>
            <div className="space-y-4 flex-1">
                {billingLinks.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center p-3.5 rounded-xl border ${link.borderColor} ${link.color} hover:shadow-md transition-all duration-200 cursor-pointer`}
                    >
                        <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm mr-4">
                            {link.icon}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                {link.title}
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                {link.description}
                            </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                ))}
            </div>
        </div>
    );
}
