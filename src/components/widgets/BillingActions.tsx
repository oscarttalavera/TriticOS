import { FileDigit, RefreshCw, AlertCircle } from "lucide-react";
import { SectionCard } from "../ui/SectionCard";
import { LinkList } from "../ui/LinkList";
import { useUsdRate } from "../../hooks/useUsdRate";
import { billingLinks } from "../../data/links";

function RatePill() {
    const { data, outdatedSince, loading, error, refresh } = useUsdRate();

    return (
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-azul-50 dark:bg-azul-700/30 rounded-lg border border-azul-100 dark:border-azul-700 text-xs">
            <span className="font-semibold text-azul-700 dark:text-verde-500">USD DOF</span>
            {loading && !data ? (
                <div className="h-3.5 w-10 bg-azul-100 dark:bg-azul-700 rounded animate-pulse" />
            ) : data ? (
                <span className="font-mono font-medium text-slate-900 dark:text-white" title={`Publicado el ${data.date}`}>
                    ${data.rate}
                </span>
            ) : outdatedSince ? (
                <span
                    className="flex items-center text-estado-aviso dark:text-amber-400 font-medium gap-0.5"
                    title={`Banxico aún no publica el tipo de cambio de hoy (último dato: ${outdatedSince}). No uses un valor anterior para facturar.`}
                >
                    <AlertCircle className="w-3 h-3" /> Sin dato de hoy
                </span>
            ) : (
                <span className="flex items-center text-estado-peligro dark:text-red-400 font-medium gap-0.5" title={error ?? undefined}>
                    <AlertCircle className="w-3 h-3" /> Error
                </span>
            )}
            <button
                onClick={refresh}
                disabled={loading}
                className="text-slate-500 hover:text-azul-600 dark:hover:text-verde-500 transition-colors disabled:opacity-50"
                title="Actualizar tipo de cambio"
                aria-label="Actualizar tipo de cambio"
            >
                <RefreshCw className={`w-3 h-3 ${loading ? "animate-spin" : ""}`} />
            </button>
        </div>
    );
}

export function BillingActions() {
    return (
        <SectionCard
            title="Facturar"
            icon={FileDigit}
            action={<RatePill />}
            className="flex flex-col h-full"
        >
            <LinkList items={billingLinks} trailing="external" />
        </SectionCard>
    );
}
