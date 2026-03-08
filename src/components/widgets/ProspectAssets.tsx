import { FileText, Download } from "lucide-react";

interface ProspectAssetsProps {
    compact?: boolean;
}

export function ProspectAssets({ compact = false }: ProspectAssetsProps) {
    const assets = [
        {
            filename: "Tritic-Folletoservicios.pdf",
            title: "Folleto de Servicios",
            size: "PDF · 2.4 MB",
        },
        {
            filename: "Tritic-servicios.pdf",
            title: "Catálogo de Servicios",
            size: "PDF · 5.1 MB",
        },
        {
            filename: "Tritic-Impresion3D.pdf",
            title: "Folleto de Impresión 3D",
            size: "PDF · 3.8 MB",
        },
    ];

    return (
        <div className={`bg-white dark:bg-slate-900 ${compact ? 'rounded-xl p-4' : 'rounded-2xl p-5'} border border-slate-200 dark:border-slate-800 shadow-sm`}>
            {/* Section Header */}
            <p className={`text-[10px] font-semibold uppercase tracking-widest text-brand-500 flex items-center gap-1.5 ${compact ? 'mb-3' : 'mb-4'}`}>
                <FileText className="w-3.5 h-3.5" />
                Material Prospectos
            </p>

            <div className={`flex flex-col ${compact ? 'gap-1.5' : 'gap-2'}`}>
                {assets.map((asset, idx) => (
                    <div
                        key={idx}
                        className={`flex items-center gap-3 ${compact ? 'p-2.5' : 'p-3'} rounded-xl border border-slate-100 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-150`}
                    >
                        <div className={`${compact ? 'p-1.5' : 'p-2'} bg-red-50 dark:bg-red-500/10 rounded-lg flex-shrink-0`}>
                            <FileText className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} text-red-500`} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className={`font-medium text-slate-800 dark:text-slate-100 ${compact ? 'text-xs' : 'text-sm'} truncate`}>
                                {asset.title}
                            </p>
                            <p className={`text-slate-400 dark:text-slate-500 ${compact ? 'text-[10px]' : 'text-xs'} mt-0.5`}>
                                {asset.size}
                            </p>
                        </div>
                        <a
                            href={`/${asset.filename}`}
                            download={asset.filename}
                            className="p-1.5 text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-500/10 rounded-lg transition-colors"
                            title="Descargar"
                        >
                            <Download className={`${compact ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
