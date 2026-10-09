import { ArrowRight, ExternalLink } from "lucide-react";
import type { LinkItem, Tone } from "../../data/links";

const TONES: Record<Tone, { bg: string; text: string }> = {
    brand: { bg: "bg-azul-50 dark:bg-azul-700/30", text: "text-azul-700 dark:text-verde-500" },
    green: { bg: "bg-verde-100 dark:bg-azul-700/30", text: "text-verde-700 dark:text-verde-500" },
    purple: { bg: "bg-azul-50 dark:bg-azul-700/30", text: "text-azul-700 dark:text-azul-200" },
    blue: { bg: "bg-azul-50 dark:bg-azul-700/30", text: "text-azul-600 dark:text-azul-200" },
    orange: { bg: "bg-[#FFF4E0] dark:bg-azul-700/30", text: "text-estado-aviso dark:text-amber-400" },
    indigo: { bg: "bg-azul-100 dark:bg-azul-700/30", text: "text-azul-700 dark:text-azul-200" },
    teal: { bg: "bg-azul-50 dark:bg-azul-700/30", text: "text-azul-600 dark:text-azul-200" },
    amber: { bg: "bg-[#FFF4E0] dark:bg-azul-700/30", text: "text-estado-aviso dark:text-amber-400" },
    red: { bg: "bg-[#FDECEA] dark:bg-azul-700/30", text: "text-estado-peligro dark:text-red-400" },
};

const ROW = "flex items-center gap-3 p-3 rounded-xl border border-transparent";

interface LinkListProps {
    items: LinkItem[];
    trailing?: "arrow" | "external";
}

export function LinkList({ items, trailing = "arrow" }: LinkListProps) {
    return (
        <div className="flex flex-col gap-2 flex-1">
            {items.map((item) => {
                const tone = TONES[item.tone];
                const Icon = item.icon;
                const body = (
                    <>
                        <div className={`p-2 ${tone.bg} rounded-lg flex-shrink-0`}>
                            <Icon className={`w-5 h-5 ${tone.text}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-slate-800 dark:text-slate-100 group-hover:text-azul-600 dark:group-hover:text-verde-500 transition-colors">
                                {item.title}
                            </p>
                            {item.subtitle && (
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                                    {item.subtitle}
                                </p>
                            )}
                        </div>
                    </>
                );

                if (!item.url) {
                    return (
                        <div key={item.title} className={`${ROW} opacity-60 cursor-not-allowed`} aria-disabled="true">
                            {body}
                            <span className="text-[10px] font-semibold font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Próximamente
                            </span>
                        </div>
                    );
                }

                return (
                    <a
                        key={item.title}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group ${ROW} hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:border-slate-200 dark:hover:border-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-azul-600 transition-all duration-150`}
                    >
                        {body}
                        {trailing === "external" ? (
                            <ExternalLink className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 group-hover:text-azul-600 dark:group-hover:text-verde-500 transition-colors" />
                        ) : (
                            <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-azul-600 dark:group-hover:text-verde-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                        )}
                    </a>
                );
            })}
        </div>
    );
}
