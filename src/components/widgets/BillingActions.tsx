import { FileDigit, RefreshCw, AlertCircle } from "lucide-react";
import { SectionCard } from "../ui/SectionCard";
import { LinkList } from "../ui/LinkList";
import { useUsdRate } from "../../hooks/useUsdRate";
import { billingLinks } from "../../data/links";

function RatePill() {
    const { data, loading, stale, error, refresh } = useUsdRate();

    return (
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-brand-50 dark:bg-brand-500/10 rounded-lg border border-brand-100 dark:border-brand-500/20 text-xs">
            <span className="font-semibold text-brand-600 dark:text-brand-400">USD DOF</span>
            {loading && !data ? (
                <div className="h-3.5 w-10 bg-brand-200/50 dark:bg-brand-800/50 rounded animate-pulse" />
            ) : data ? (
                <span
                    className="font-bold text-slate-900 dark:text-white"
                    title={stale ? `Dato del ${data.date}: puede estar desactualizado` : `Publicado el ${data.date}`}
                >
                    ${data.rate}{stale && <span className="text-amber-500">*</span>}
                </span>
            ) : (
                <span className="flex items-center text-red-500 font-medium gap-0.5" title={error ?? undefined}>
                    <AlertCircle className="w-3 h-3" /> Error
                </span>
            )}
            <button
                onClick={refresh}
                disabled={loading}
                className="text-slate-400 hover:text-brand-500 transition-colors disabled:opacity-50"
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
            title="Portales de Facturación"
            icon={FileDigit}
            action={<RatePill />}
            className="flex flex-col h-full"
        >
            <LinkList items={billingLinks} trailing="external" />
        </SectionCard>
    );
}
