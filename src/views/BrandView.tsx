import { Paintbrush } from "lucide-react";
import { BrandAssets } from "../components/widgets/BrandAssets";
import { LogoAsset } from "../components/widgets/LogoAsset";

export function BrandView() {
    return (
        <>
            {/* Page header */}
            <div className="mb-8 flex items-center gap-3">
                <div className="p-2 bg-brand-50 dark:bg-brand-500/10 rounded-xl border border-brand-100 dark:border-brand-500/20">
                    <Paintbrush className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Marca y Diseño
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
                        Identidad visual, logotipos oficiales, tipografía y paleta de colores.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <LogoAsset />
                <BrandAssets />
            </div>
        </>
    );
}
