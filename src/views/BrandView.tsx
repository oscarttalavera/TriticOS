import { BrandAssets } from "../components/widgets/BrandAssets";
import { LogoAsset } from "../components/widgets/LogoAsset";

export function BrandView() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                    Marca y Diseño
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Identidad visual, logotipos oficiales, tipografía y paleta de colores.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-col gap-6">
                    <LogoAsset />
                </div>
                <div className="flex flex-col gap-6">
                    <BrandAssets />
                </div>
            </div>
        </>
    );
}
