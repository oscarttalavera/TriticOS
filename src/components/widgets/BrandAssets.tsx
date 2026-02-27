import { useState } from "react";
import { Copy, CheckCircle2 } from "lucide-react";

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
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Visual Assets</h2>

            <div className="mb-6">
                <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">Colores Corporativos</h3>
                <div className="grid grid-cols-2 gap-3">
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
            </div>

            <div>
                <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">Tipografía</h3>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 mb-4">
                    <div className="flex items-baseline mb-2">
                        <span className="text-3xl font-bold font-sans text-slate-900 dark:text-white mr-3">Aa</span>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Inter</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Primary Font Family (Weights: 300, 400, 500, 600, 700)</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 mb-4">
                    <div className="flex items-baseline mb-2" style={{ fontFamily: "'Syncopate', sans-serif" }}>
                        <span className="text-2xl font-bold text-slate-900 dark:text-white mr-3">Aa</span>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Syncopate</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Heading & Hero Font (Weights: 400, 700)</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-baseline mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        <span className="text-3xl font-bold text-slate-900 dark:text-white mr-3">Aa</span>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Montserrat</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Secondary Font Family (Weights: 300, 400, 500, 600, 700)</p>
                </div>
            </div>
        </div>
    );
}
