import { Wrench } from "lucide-react";
import { SectionCard } from "../ui/SectionCard";
import { LinkList } from "../ui/LinkList";
import { operationsResources } from "../../data/links";

export function OperationsResources() {
    return (
        <SectionCard title="Recursos y Herramientas" icon={Wrench}>
            <LinkList items={operationsResources} />
        </SectionCard>
    );
}
