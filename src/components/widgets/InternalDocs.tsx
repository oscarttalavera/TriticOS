import { FileText, Download, FolderOpen } from "lucide-react";
import { SectionCard } from "../ui/SectionCard";
import { internalDocs, type InternalDoc } from "../../data/links";
import { asset } from "../../lib/assets";

/** Agrupa por `category` respetando el orden en que aparece cada una en `internalDocs`. */
function groupByCategory(docs: InternalDoc[]) {
    const groups = new Map<string, InternalDoc[]>();
    for (const doc of docs) {
        groups.set(doc.category, [...(groups.get(doc.category) ?? []), doc]);
    }
    return [...groups];
}

export function InternalDocs() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {groupByCategory(internalDocs).map(([category, docs]) => (
                <SectionCard key={category} title={category} icon={FolderOpen}>
                    <div className="flex flex-col gap-2">
                        {docs.map((doc) => (
                            <div
                                key={doc.filename}
                                className="group flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-azul-200 dark:hover:border-azul-600 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-150"
                            >
                                <div className="p-2 bg-azul-50 dark:bg-azul-700/30 rounded-lg flex-shrink-0">
                                    <FileText className="w-5 h-5 text-azul-700 dark:text-verde-500" />
                                </div>
                                <a
                                    href={asset(doc.filename)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-azul-600 rounded"
                                    title="Abrir"
                                >
                                    <p className="text-sm font-medium text-slate-800 dark:text-slate-100 group-hover:text-azul-600 dark:group-hover:text-verde-500 transition-colors">
                                        {doc.title}
                                    </p>
                                    {doc.subtitle && (
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                            {doc.subtitle}
                                        </p>
                                    )}
                                    <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-1">
                                        {doc.code} · {doc.version} · {doc.size}
                                    </p>
                                </a>
                                <a
                                    href={asset(doc.filename)}
                                    download={doc.filename}
                                    className="p-1.5 text-slate-500 hover:text-azul-600 dark:hover:text-verde-500 hover:bg-azul-50 dark:hover:bg-azul-700/30 rounded-lg transition-colors"
                                    title="Descargar"
                                    aria-label={`Descargar ${doc.title}`}
                                >
                                    <Download className="w-4 h-4" />
                                </a>
                            </div>
                        ))}
                    </div>
                </SectionCard>
            ))}
        </div>
    );
}
