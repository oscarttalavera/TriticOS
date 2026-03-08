import { useState, useEffect } from "react";
import { ShieldCheck, Landmark, FileDigit, CreditCard, ExternalLink, RefreshCw, AlertCircle } from "lucide-react";

export function BillingActions() {
    const billingLinks = [
        {
            title: "Portal Facturación SAT",
            icon: <ShieldCheck className="w-5 h-5 text-brand-500" />,
            url: "https://www.sat.gob.mx/portal/public/tramites/factura-electronica",
        },
        {
            title: "Declaraciones SAT",
            icon: <Landmark className="w-5 h-5 text-brand-500" />,
            url: "https://www.sat.gob.mx/portal/public/tramites/declaraciones-pf",
        },
        {
            title: "Validación de CFDI",
            icon: <FileDigit className="w-5 h-5 text-brand-500" />,
            url: "https://portalcfdi.facturaelectronica.sat.gob.mx/",
        },
        {
            title: "Cargar Facturas Vallen",
            icon: <CreditCard className="w-5 h-5 text-brand-500" />,
            url: "https://recepcion.facturaxion.com/?san=PSI8906083F8#",
        },
    ];

    const [rate, setRate] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchRate = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent('https://www.banxico.org.mx/tipcamb/tipCamMIAction.do')}`);
            if (!response.ok) throw new Error("Error fetching data from proxy");
            const html = await response.text();
            const matches = [...html.matchAll(/(\d{2}\.\d{4})/g)].map(m => m[1]);
            const uniqueRates = Array.from(new Set(matches));
            if (uniqueRates.length > 0) {
                const hour = new Date().getHours();
                setRate(hour < 12 ? uniqueRates[0] : (uniqueRates[1] || uniqueRates[0]));
            } else {
                throw new Error("No rates found.");
            }
        } catch (err) {
            setError("Error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchRate(); }, []);

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm flex flex-col h-full">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-500 flex items-center gap-1.5">
                    <FileDigit className="w-3.5 h-3.5" />
                    Portales de Facturación
                </p>
                {/* Exchange rate pill */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-brand-50 dark:bg-brand-500/10 rounded-lg border border-brand-100 dark:border-brand-500/20 text-xs">
                    <span className="font-semibold text-brand-600 dark:text-brand-400">USD DOF</span>
                    {loading ? (
                        <div className="h-3.5 w-10 bg-brand-200/50 dark:bg-brand-800/50 rounded animate-pulse" />
                    ) : error ? (
                        <span className="flex items-center text-red-500 font-medium gap-0.5">
                            <AlertCircle className="w-3 h-3" /> Error
                        </span>
                    ) : (
                        <span className="font-bold text-slate-900 dark:text-white">${rate}</span>
                    )}
                    <button
                        onClick={fetchRate}
                        disabled={loading}
                        className="text-slate-400 hover:text-brand-500 transition-colors disabled:opacity-50"
                        title="Actualizar tipo de cambio"
                    >
                        <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2 flex-1">
                {billingLinks.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-150"
                    >
                        <div className="p-2 bg-brand-50 dark:bg-brand-500/10 rounded-lg flex-shrink-0">
                            {link.icon}
                        </div>
                        <span className="flex-1 text-sm font-medium text-slate-800 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                            {link.title}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 group-hover:text-brand-400 transition-colors" />
                    </a>
                ))}
            </div>
        </div>
    );
}
