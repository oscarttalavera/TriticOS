import { ExternalLink, TableProperties } from "lucide-react";

export function WorkOrdersOverview() {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm w-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-500 flex items-center gap-1.5">
                    <TableProperties className="w-3.5 h-3.5" />
                    Dashboard de Órdenes de Trabajo
                </p>
                <a
                    href="https://docs.google.com/spreadsheets/d/14y5sb60SMEx3Q5m0B-pTBfU0An0QmV7ouJ-HWaQjipw/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500 hover:bg-brand-600 text-slate-900 text-sm font-semibold rounded-xl transition-colors"
                >
                    <span>Abrir Archivo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                </a>
            </div>
            {/* Embed */}
            <div className="w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 h-[600px]">
                <iframe
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRcD2aIjnTA62MTju6dtSlkMICgrt4-dAqyQb4PKVRi9ZbMoNzKKjx80inUblbL1ujpTGQh8Xl4hLAX/pubhtml?gid=321065360&single=true&widget=true&headers=false"
                    className="w-full h-full border-0"
                    title="Dashboard de Ordenes de Trabajo"
                />
            </div>
        </div>
    );
}
