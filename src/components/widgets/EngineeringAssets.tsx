import { Ruler } from "lucide-react";
import { SectionCard } from "../ui/SectionCard";
import { LinkList } from "../ui/LinkList";
import { engineeringResources } from "../../data/links";

export function EngineeringAssets() {
    return (
        <SectionCard title="Herramientas y recursos" icon={Ruler}>
            <LinkList items={engineeringResources} columns={2} />
        </SectionCard>
    );
}
