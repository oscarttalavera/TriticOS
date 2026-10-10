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
    /** Columnas en pantallas medianas o mayores. */
    columns?: 1 | 2;
}

/** Los enlaces sin `url` se agrupan al final en un bloque plegado para que no ocupen lugar. */
export function LinkList({ items, trailing = "arrow", columns = 1 }: LinkListProps) {
    const active = items.filter((item) => item.url);
    const pending = items.filter((item) => !item.url);

    return (
        <div className="flex flex-col gap-2 flex-1">
            <div className={columns === 2 ? "grid grid-cols-1 md:grid-cols-2 gap-2" : "flex flex-col gap-2"}>
                {active.map((item) => {
                    const tone = TONES[item.tone];
                    const Icon = item.icon;
                    return (
                        <a
                            key={item.title}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group ${ROW} hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:border-slate-200 dark:hover:border-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-azul-600 transition-all duration-150`}
                        >
                            <ItemBody item={item} tone={tone} Icon={Icon} />
                            {trailing === "external" ? (
                                <ExternalLink className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 group-hover:text-azul-600 dark:group-hover:text-verde-500 transition-colors" />
                            ) : (
                                <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-azul-600 dark:group-hover:text-verde-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                            )}
                        </a>
                    );
                })}
            </div>

            {pending.length > 0 && (
                <details className="mt-1">
                    <summary className="cursor-pointer select-none px-3 py-1.5 text-[10px] font-semibold font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-azul-700 dark:hover:text-verde-500 transition-colors">
                        Próximamente · {pending.length}
                    </summary>
                    <div className={`mt-1 ${columns === 2 ? "grid grid-cols-1 md:grid-cols-2 gap-2" : "flex flex-col gap-2"}`}>
                        {pending.map((item) => (
                            <div key={item.title} className={`${ROW} opacity-60 cursor-not-allowed`} aria-disabled="true">
                                <ItemBody item={item} tone={TONES[item.tone]} Icon={item.icon} />
                            </div>
                        ))}
                    </div>
                </details>
            )}
        </div>
    );
}

function ItemBody({ item, tone, Icon }: { item: LinkItem; tone: { bg: string; text: string }; Icon: LinkItem["icon"] }) {
    return (
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
}
