import { FileText, Download, ExternalLink } from "lucide-react";

interface ProspectAssetsProps {
    compact?: boolean;
}

export function ProspectAssets({ compact = false }: ProspectAssetsProps) {
    const assets = [
        {
            filename: "Tritic-Folletoservicios.pdf",
            title: "Folleto de Servicios",
            description: "Presentación general de Tritic.",
        },
        {
            filename: "Tritic-servicios.pdf",
            title: "Catálogo de Servicios",
            description: "Servicios detallados para prospectos.",
        },
        {
            filename: "Tritic-Impresion3D.pdf",
            title: "Folleto de Impresión 3D",
            description: "Detalles sobre el servicio de impresión 3D.",
        }
    ];

    return (
        <div className={`bg-white dark:bg-slate-900 ${compact ? 'rounded-xl p-4' : 'rounded-2xl p-6'} border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden`}>
            <div className={`flex items-center justify-between ${compact ? 'mb-4' : 'mb-6'}`}>
                <h2 className={`${compact ? 'text-base' : 'text-lg'} font-semibold text-slate-900 dark:text-white`}>Material para Prospectos</h2>
            </div>
            <div className={`flex flex-col ${compact ? 'gap-2' : 'gap-4'}`}>
                {assets.map((asset, idx) => (
                    <div key={idx} className={`flex flex-col sm:flex-row sm:items-center justify-between ${compact ? 'p-3' : 'p-4'} rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-brand-300 dark:hover:border-brand-700 transition-colors`}>
                        <div className={`flex items-start ${compact ? 'mb-3' : 'mb-4'} sm:mb-0`}>
                            <div className={`${compact ? 'p-1.5 mr-3' : 'p-2 mr-4'} bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex-shrink-0`}>
                                <FileText className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} text-red-500`} />
                            </div>
                            <div>
                                <h3 className={`font-medium text-slate-900 dark:text-slate-100 ${compact ? 'text-xs' : 'text-sm'}`}>
                                    {asset.title}
                                </h3>
                                <p className={`text-slate-500 dark:text-slate-400 mt-0.5 ${compact ? 'text-[10px]' : 'text-xs'}`}>
                                    {asset.description}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2 self-end sm:self-auto">
                            <a
                                href={`/${asset.filename}`}
                                target="_blank"
                                rel="noreferrer"
                                className={`p-1.5 text-slate-500 hover:text-brand-600 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700`}
                                title="Abrir en nueva pestaña"
                            >
                                <ExternalLink className={`${compact ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
                            </a>
                            <a
                                href={`/${asset.filename}`}
                                download={asset.filename}
                                className={`flex items-center px-3 py-1.5 bg-brand-50 hover:bg-brand-100 dark:bg-brand-500/10 dark:hover:bg-brand-500/20 text-brand-600 dark:text-brand-400 rounded-lg ${compact ? 'text-[10px]' : 'text-xs'} font-medium transition-colors border border-brand-100 dark:border-brand-500/20`}
                            >
                                <Download className={`${compact ? 'w-3.5 h-3.5 mr-1' : 'w-4 h-4 mr-1.5'}`} />
                                Descargar
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
