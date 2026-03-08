import { useState } from "react";
import { Copy, CheckCircle2, Palette } from "lucide-react";

export function BrandAssets() {
    const [copiedHex, setCopiedHex] = useState<string | null>(null);

    const colors = [
        { name: "Accent", hex: "#00ffc7" },
        { name: "Accent Dark", hex: "#00d6a7" },
        { name: "Dark Base", hex: "#00476a" },
        { name: "Light Base", hex: "#f8fafc" },
    ];

    const handleCopy = (hex: string) => {
        navigator.clipboard.writeText(hex);
        setCopiedHex(hex);
        setTimeout(() => setCopiedHex(null), 2000);
    };

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            {/* Section Header */}
            <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-500 flex items-center gap-1.5 mb-5">
                <Palette className="w-3.5 h-3.5" />
                Visual Assets
            </p>

            {/* Color palette */}
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                Colores Corporativos
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
                {colors.map((color) => (
                    <button
                        key={color.hex}
                        onClick={() => handleCopy(color.hex)}
                        className="group flex flex-col items-start p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 transition-all bg-slate-50 dark:bg-slate-800/50"
                    >
                        <div
                            className="w-full h-12 rounded-lg mb-3 shadow-inner ring-1 ring-black/5 dark:ring-white/10"
                            style={{ backgroundColor: color.hex }}
                        />
                        <div className="flex items-center justify-between w-full">
                            <div className="text-left">
                                <p className="text-xs font-medium text-slate-900 dark:text-slate-200">{color.name}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">{color.hex}</p>
                            </div>
                            {copiedHex === color.hex ? (
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                            ) : (
                                <Copy className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                        </div>
                    </button>
                ))}
            </div>

            {/* Typography */}
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                Tipografía
            </p>
            <div className="flex flex-col gap-3">
                {[
                    { name: "Inter", role: "Primary Font — Weights: 300, 400, 500, 600, 700", fontFamily: undefined },
                    { name: "Syncopate", role: "Heading & Hero Font — Weights: 400, 700", fontFamily: "'Syncopate', sans-serif" },
                    { name: "Montserrat", role: "Secondary Font — Weights: 300–700", fontFamily: "'Montserrat', sans-serif" },
                ].map((font) => (
                    <div
                        key={font.name}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800"
                    >
                        <span
                            className="text-2xl font-bold text-slate-900 dark:text-white w-10 flex-shrink-0"
                            style={font.fontFamily ? { fontFamily: font.fontFamily } : undefined}
                        >
                            Aa
                        </span>
                        <div>
                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{font.name}</p>
                            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{font.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
