import { Paintbrush } from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { BrandAssets } from "../components/widgets/BrandAssets";
import { LogoAsset } from "../components/widgets/LogoAsset";

export function BrandView() {
    return (
        <>
            <PageHeader icon={Paintbrush} title="Marca y Diseño" description="Identidad visual, logotipos oficiales, tipografía y paleta de colores." />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <LogoAsset />
                <BrandAssets />
            </div>
        </>
    );
}
