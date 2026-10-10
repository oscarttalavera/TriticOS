import { Type } from "lucide-react";

const FONTS = [
    { name: "IBM Plex Sans", role: "Todo el texto y los títulos. SemiBold 600 para títulos, Regular 400 para cuerpo.", cls: "font-sans font-semibold" },
    { name: "IBM Plex Mono", role: "Índices, datos con unidades, código y etiquetas.", cls: "font-mono font-medium" },
    { name: "IBM Plex Sans Condensed", role: "Solo tablas de más de 5 columnas.", cls: "font-condensed" },
    { name: "Syncopate Bold", role: "Identidad: nombre de serie en MAYÚSCULAS, ≤ 5 palabras. Nunca párrafos ni datos.", cls: "font-display font-bold uppercase" },
];

export function TypographyAsset() {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
            <p className="text-[10px] font-semibold font-mono uppercase tracking-widest text-azul-700 dark:text-verde-500 flex items-center gap-1.5 mb-4">
                <Type className="w-3.5 h-3.5" />
                Tipografía
            </p>

            <div className="flex flex-col gap-2">
                {FONTS.map((font) => (
                    <div key={font.name} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                        <span className={`${font.cls} text-2xl text-azul-700 dark:text-white w-16 flex-shrink-0`}>Aa</span>
                        <div>
                            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{font.name}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{font.role}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
                Alineado a la izquierda, nunca justificado. Respaldo: Arial / Arial Narrow / Consolas.
            </p>
        </div>
    );
}
