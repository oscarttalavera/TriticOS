import { FileText, Download } from "lucide-react";
import { prospectFiles } from "../../data/links";
import { asset } from "../../lib/assets";

interface ProspectAssetsProps {
    compact?: boolean;
}

export function ProspectAssets({ compact = false }: ProspectAssetsProps) {
    return (
        <div className={`bg-white dark:bg-slate-900 ${compact ? 'rounded-xl p-4' : 'rounded-2xl p-5'} border border-slate-200 dark:border-slate-800 shadow-sm`}>
            {/* Section Header */}
            <p className={`text-[10px] font-semibold font-mono uppercase tracking-widest text-azul-700 dark:text-verde-500 flex items-center gap-1.5 ${compact ? 'mb-3' : 'mb-4'}`}>
                <FileText className="w-3.5 h-3.5" />
                4 · Material para prospectos
            </p>

            <div className={`flex flex-col ${compact ? 'gap-1.5' : 'gap-2'}`}>
                {prospectFiles.map((file) => (
                    <div
                        key={file.filename}
                        className={`flex items-center gap-3 ${file.legacy ? 'opacity-60 hover:opacity-100' : ''} ${compact ? 'p-2.5' : 'p-3'} rounded-xl border border-slate-100 dark:border-slate-800 hover:border-azul-200 dark:hover:border-azul-600 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-150`}
                    >
                        <div className={`${compact ? 'p-1.5' : 'p-2'} bg-azul-50 dark:bg-azul-700/30 rounded-lg flex-shrink-0`}>
                            <FileText className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} text-azul-700 dark:text-verde-500`} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className={`font-medium text-slate-800 dark:text-slate-100 ${compact ? 'text-xs' : 'text-sm'} truncate`}>
                                {file.title}
                            </p>
                            <p className={`text-slate-500 dark:text-slate-400 ${compact ? 'text-[10px]' : 'text-xs'} mt-0.5`}>
                                {file.size}
                            </p>
                        </div>
                        <a
                            href={asset(file.filename)}
                            download={file.filename}
                            className="p-1.5 text-slate-500 hover:text-azul-600 dark:hover:text-verde-500 hover:bg-azul-50 dark:hover:bg-azul-700/30 rounded-lg transition-colors"
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
