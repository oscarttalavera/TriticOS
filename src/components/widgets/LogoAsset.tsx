import { Image as ImageIcon, Download } from "lucide-react";

export function LogoAsset() {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm h-full flex flex-col">
            {/* Section Header */}
            <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-500 flex items-center gap-1.5 mb-4">
                <ImageIcon className="w-3.5 h-3.5" />
                Logotipo Oficial
            </p>

            {/* Logo preview */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                <img
                    src="/tritic-logo.png"
                    alt="Tritic Logo"
                    className="max-w-full h-auto max-h-32 object-contain"
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                    }}
                />
                <p className="text-xs text-slate-400 mt-4 text-center">
                    Formatos transparentes recomendados para fondos oscuros.
                </p>
            </div>

            {/* CTA */}
            <div className="flex justify-end">
                <a
                    href="/tritic-logo.png"
                    download="Tritic-Logo.png"
                    className="flex items-center gap-2 px-4 py-2 bg-brand-500 hover:bg-brand-600 text-slate-900 font-semibold text-sm rounded-xl transition-colors"
                >
                    <Download className="w-4 h-4" />
                    Descargar .PNG
                </a>
            </div>
        </div>
    );
}
