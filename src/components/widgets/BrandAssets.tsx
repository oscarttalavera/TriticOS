import { useState } from "react";
import { Copy, CheckCircle2, Palette } from "lucide-react";

interface Swatch { name: string; token: string; hex: string; use: string; }

const GROUPS: { title: string; colors: Swatch[] }[] = [
    {
        title: "Identidad",
        colors: [
            { name: "Azul Tritic", token: "azul-700", hex: "#00476A", use: "Bloques, chips, H1/H2" },
            { name: "Verde Tritic", token: "verde-500", hex: "#00FFC7", use: "Acento, solo sobre azul" },
            { name: "Azul noche", token: "azul-950", hex: "#04202F", use: "Fondo oscuro, nunca negro" },
            { name: "Verde legible", token: "verde-700", hex: "#006B53", use: "Único verde como texto sobre claro" },
        ],
    },
    {
        title: "Escala azul",
        colors: [
            { name: "Azul profundo", token: "azul-900", hex: "#002F47", use: "Bandas, hover" },
            { name: "Azul activo", token: "azul-600", hex: "#0A6E9C", use: "Enlaces, cotas, info" },
            { name: "Azul 400", token: "azul-400", hex: "#5B9BBF", use: "Serie 2 de gráficas" },
            { name: "Azul 200", token: "azul-200", hex: "#B7CCD8", use: "Texto secundario sobre azul" },
            { name: "Azul 100", token: "azul-100", hex: "#D6E6EE", use: "Relleno destacado" },
            { name: "Azul 50", token: "azul-50", hex: "#EEF5F8", use: "Bandas suaves" },
            { name: "Verde 100", token: "verde-100", hex: "#CCFFF3", use: "Resaltar un dato" },
        ],
    },
    {
        title: "Texto y filetes",
        colors: [
            { name: "Grafito 900", token: "grafito-900", hex: "#0E1B24", use: "Texto principal" },
            { name: "Grafito 700", token: "grafito-700", hex: "#3A4A55", use: "Texto secundario" },
            { name: "Grafito 500", token: "grafito-500", hex: "#5A6973", use: "Captions (mín. 8 pt)" },
            { name: "Grafito 200", token: "grafito-200", hex: "#D5DDE1", use: "Filete fino" },
            { name: "Grafito 50", token: "grafito-50", hex: "#F4F7F8", use: "Cajas, fichas, código" },
        ],
    },
    {
        title: "Estados (siempre con etiqueta)",
        colors: [
            { name: "Info", token: "info", hex: "#0A6E9C", use: "Fondo #E6F0F5" },
            { name: "Correcto", token: "ok", hex: "#006B53", use: "Fondo #E0FBF4" },
            { name: "Precaución", token: "aviso", hex: "#A15300", use: "Fondo #FFF4E0" },
            { name: "Peligro", token: "peligro", hex: "#B3261E", use: "Fondo #FDECEA" },
        ],
    },
];

const LABEL = "text-[10px] font-semibold font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3";

export function BrandAssets() {
    const [copiedHex, setCopiedHex] = useState<string | null>(null);

    const handleCopy = (hex: string) => {
        navigator.clipboard.writeText(hex);
        setCopiedHex(hex);
        setTimeout(() => setCopiedHex(null), 2000);
    };

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
            <p className="text-[10px] font-semibold font-mono uppercase tracking-widest text-azul-700 dark:text-verde-500 flex items-center gap-1.5 mb-5">
                <Palette className="w-3.5 h-3.5" />
                Color
            </p>

            {GROUPS.map((group) => (
                <div key={group.title} className="mb-6">
                    <p className={LABEL}>{group.title}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {group.colors.map((c) => (
                            <button
                                key={c.token}
                                onClick={() => handleCopy(c.hex)}
                                className="group text-left border border-slate-200 dark:border-slate-800 hover:border-azul-700 dark:hover:border-verde-500 transition-colors bg-slate-50 dark:bg-slate-800/50"
                                title={`Copiar ${c.hex}`}
                            >
                                <div className="h-10 border-b border-slate-200 dark:border-slate-700" style={{ backgroundColor: c.hex }} />
                                <div className="p-2">
                                    <div className="flex items-center justify-between gap-1">
                                        <p className="text-xs font-medium text-slate-900 dark:text-slate-100">{c.name}</p>
                                        {copiedHex === c.hex ? (
                                            <CheckCircle2 className="w-3.5 h-3.5 text-verde-700 dark:text-verde-500" />
                                        ) : (
                                            <Copy className="w-3.5 h-3.5 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        )}
                                    </div>
                                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">{c.hex}</p>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{c.use}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            ))}

            <p className="text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-3">
                <span className="font-mono font-medium">REGLA DEL VERDE</span> — #00FFC7 solo sobre azul (#00476A, #002F47, #04202F) o como relleno detrás de texto oscuro. Nunca como texto o línea sobre blanco (1.3:1). Un solo acento verde por vista, sin degradados.
            </p>
        </div>
    );
}
