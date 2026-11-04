import { FileDigit, RefreshCw, AlertCircle, Building2, BookOpen, ExternalLink } from "lucide-react";
import { SectionCard } from "../ui/SectionCard";
import { LinkList } from "../ui/LinkList";
import { useUsdRate } from "../../hooks/useUsdRate";
import { billingClients, billingProcedureLinks, documentHref, satLinks, type BillingClient } from "../../data/links";

const GROUP = "px-3 mb-1 text-[10px] font-semibold font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400";
const CHIP = "flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-medium text-azul-700 dark:text-slate-100 hover:border-azul-600 dark:hover:border-verde-500 hover:text-azul-600 dark:hover:text-verde-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-azul-600 transition-colors";

function ClientRow({ client }: { client: BillingClient }) {
    return (
        <div className="flex items-center gap-3 p-3 rounded-xl">
            <div className="p-2 bg-azul-50 dark:bg-azul-700/30 rounded-lg flex-shrink-0">
                <Building2 className="w-5 h-5 text-azul-700 dark:text-verde-500" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{client.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate" title={client.detail}>
                    {client.detail}
                </p>
            </div>
            <div className="flex gap-1.5 flex-shrink-0">
                <a
                    href={documentHref(client.guide)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={CHIP}
                    title={`${client.guide.code} · ${client.guide.title}`}
                >
                    <BookOpen className="w-3.5 h-3.5" />
                    Guía
                </a>
                {client.portalUrl && (
                    <a href={client.portalUrl} target="_blank" rel="noopener noreferrer" className={CHIP} title={`Portal de facturas de ${client.name}`}>
                        Portal
                        <ExternalLink className="w-3 h-3" />
                    </a>
                )}
            </div>
        </div>
    );
}

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
            <div className="flex flex-col gap-4">
                <div>
                    <p className={GROUP}>SAT</p>
                    <LinkList items={satLinks} trailing="external" />
                </div>
                <div>
                    <p className={GROUP}>Por cliente</p>
                    <div className="flex flex-col gap-2">
                        {billingClients.map((client) => (
                            <ClientRow key={client.name} client={client} />
                        ))}
                    </div>
                </div>
                <div>
                    <p className={GROUP}>Procedimientos</p>
                    <LinkList items={billingProcedureLinks} trailing="external" />
                </div>
            </div>
        </SectionCard>
    );
}
