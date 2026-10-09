import { ArrowRight, ExternalLink } from "lucide-react";
import type { LinkItem, Tone } from "../../data/links";

const TONES: Record<Tone, { bg: string; text: string }> = {
    brand: { bg: "bg-brand-50 dark:bg-brand-500/10", text: "text-brand-500" },
    green: { bg: "bg-green-50 dark:bg-green-500/10", text: "text-green-500" },
    purple: { bg: "bg-purple-50 dark:bg-purple-500/10", text: "text-purple-500" },
    blue: { bg: "bg-blue-50 dark:bg-blue-500/10", text: "text-blue-500" },
    orange: { bg: "bg-orange-50 dark:bg-orange-500/10", text: "text-orange-500" },
    indigo: { bg: "bg-indigo-50 dark:bg-indigo-500/10", text: "text-indigo-500" },
    teal: { bg: "bg-teal-50 dark:bg-teal-500/10", text: "text-teal-500" },
    amber: { bg: "bg-amber-50 dark:bg-amber-500/10", text: "text-amber-500" },
    red: { bg: "bg-red-50 dark:bg-red-500/10", text: "text-red-500" },
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
                            <p className="text-sm font-medium text-slate-800 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                {item.title}
                            </p>
                            {item.subtitle && (
                                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 truncate">
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
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
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
                        className={`group ${ROW} hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:border-slate-200 dark:hover:border-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 transition-all duration-150`}
                    >
                        {body}
                        {trailing === "external" ? (
                            <ExternalLink className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 group-hover:text-brand-400 transition-colors" />
                        ) : (
                            <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-brand-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                        )}
                    </a>
                );
            })}
        </div>
    );
}
