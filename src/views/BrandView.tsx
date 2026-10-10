import { Paintbrush } from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { BrandAssets } from "../components/widgets/BrandAssets";
import { LogoAsset } from "../components/widgets/LogoAsset";
import { TypographyAsset } from "../components/widgets/TypographyAsset";

export function BrandView() {
    return (
        <>
            <PageHeader icon={Paintbrush} title="Marca y Diseño" description="Sistema visual Tritic v1.3: logotipos oficiales, tipografía y paleta." />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                <div className="flex flex-col gap-4">
                    <LogoAsset />
                    <TypographyAsset />
                </div>
                <BrandAssets />
            </div>
        </>
    );
}
