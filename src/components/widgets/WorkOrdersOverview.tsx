import { ExternalLink } from "lucide-react";

export function WorkOrdersOverview() {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm mt-8 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Dashboard de Órdenes de Trabajo</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Vista en tiempo real del estado de las órdenes</p>
                </div>
                <a
                    href="https://docs.google.com/spreadsheets/d/14y5sb60SMEx3Q5m0B-pTBfU0An0QmV7ouJ-HWaQjipw/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                    <span>Abrir Archivo</span>
                    <ExternalLink className="w-4 h-4" />
                </a>
            </div>
            <div className="w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 h-[600px]">
                <iframe
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRcD2aIjnTA62MTju6dtSlkMICgrt4-dAqyQb4PKVRi9ZbMoNzKKjx80inUblbL1ujpTGQh8Xl4hLAX/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
                    className="w-full h-full border-0"
                    title="Dashboard de Ordenes de Trabajo"
                />
            </div>
        </div>
    );
}
