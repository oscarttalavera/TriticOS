import { PencilRuler, Printer } from "lucide-react";
import { SectionCard } from "../ui/SectionCard";
import { LinkList } from "../ui/LinkList";
import { designResources, workshopResources } from "../../data/links";

export function EngineeringAssets() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <SectionCard title="Diseño de piezas" icon={PencilRuler}>
                <LinkList items={designResources} />
            </SectionCard>
            <SectionCard title="Impresión y taller" icon={Printer}>
                <LinkList items={workshopResources} />
            </SectionCard>
        </div>
    );
}
