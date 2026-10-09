import { Paintbrush } from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { BrandAssets } from "../components/widgets/BrandAssets";
import { LogoAsset } from "../components/widgets/LogoAsset";

export function BrandView() {
    return (
        <>
            <PageHeader icon={Paintbrush} title="Marca y Diseño" description="Sistema visual Tritic v1.3: logotipos oficiales, paleta y tipografía." />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                <LogoAsset />
                <BrandAssets />
            </div>
        </>
    );
}
