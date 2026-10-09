import { Image as ImageIcon, Download } from "lucide-react";
import { asset } from "../../lib/assets";

interface Logo {
    file: string;
    name: string;
    use: string;
    bg: string;
    dots?: boolean;
}

const LOGOS: Logo[] = [
    { file: "tritic-logo-bloque", name: "Bloque (principal)", use: "Sobre azul, azul noche o foto. Nunca sobre blanco.", bg: "#00476A", dots: true },
    { file: "tritic-logo-azul", name: "Azul", use: "Fondos claros: cajetín, encabezados, portadas técnicas.", bg: "#FFFFFF" },
    { file: "tritic-logo-blanco", name: "Blanco", use: "Sobre azul Tritic #00476A.", bg: "#00476A", dots: true },
    { file: "tritic-logo-verde", name: "Verde", use: "Solo sobre azul profundo o azul noche.", bg: "#04202F", dots: true },
];

export function LogoAsset() {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
            <p className="text-[10px] font-semibold font-mono uppercase tracking-widest text-azul-700 dark:text-verde-500 flex items-center gap-1.5 mb-4">
                <ImageIcon className="w-3.5 h-3.5" />
                Logotipo oficial
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {LOGOS.map((logo) => (
                    <div key={logo.file} className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden flex flex-col">
                        <div
                            className="h-32 flex items-center justify-center p-6"
                            style={{
                                backgroundColor: logo.bg,
                                backgroundImage: logo.dots
                                    ? "radial-gradient(circle, rgba(183,204,216,0.28) 1px, transparent 1.5px)"
                                    : undefined,
                                backgroundSize: logo.dots ? "16px 16px" : undefined,
                            }}
                        >
                            <img src={asset(`logos/${logo.file}.svg`)} alt={`Logotipo Tritic ${logo.name}`} className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="p-3 flex-1 flex flex-col gap-2">
                            <div>
                                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{logo.name}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{logo.use}</p>
                            </div>
                            <div className="flex gap-2 mt-auto">
                                {(["svg", "png"] as const).map((ext) => (
                                    <a
                                        key={ext}
                                        href={asset(`logos/${logo.file}.${ext}`)}
                                        download={`${logo.file}.${ext}`}
                                        className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono uppercase border border-slate-200 dark:border-slate-700 text-azul-700 dark:text-slate-100 hover:border-azul-700 dark:hover:border-verde-500 transition-colors"
                                    >
                                        <Download className="w-3 h-3" />
                                        {ext}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
                Área de protección: 1 m (grosor del trazo de la <span className="font-mono">t</span>). Mínimo 20 mm / 80 px (bloque: 25 mm / 100 px).
                No deformar, recolorear, sombrear ni contornear.
            </p>
        </div>
    );
}
