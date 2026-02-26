import { Image as ImageIcon, Download } from "lucide-react";

export function LogoAsset() {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center">
                    <ImageIcon className="w-5 h-5 mr-2 text-brand-500" />
                    Logotipo Oficial
                </h2>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                <img
                    src="/Tritic logo.png"
                    alt="Tritic Logo"
                    className="max-w-full h-auto max-h-32 object-contain"
                    onError={(e) => {
                        // Failsafe in case logo isn't uploaded yet
                        (e.target as HTMLImageElement).style.display = 'none';
                    }}
                />
                <p className="text-xs text-slate-400 mt-4 text-center">
                    Formatos transparentes recomendados para fondos oscuros.
                </p>
            </div>

            <div className="mt-6 flex justify-end">
                <a
                    href="/Tritic logo.png"
                    download="Tritic-Logo.png"
                    className="flex items-center px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-medium transition-colors shadow-sm text-sm cursor-pointer"
                >
                    <Download className="w-4 h-4 mr-2" />
                    Descargar .PNG
                </a>
            </div>
        </div>
    );
}
