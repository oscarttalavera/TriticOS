import { Zap } from "lucide-react";
import { SectionCard } from "../ui/SectionCard";
import { LinkList } from "../ui/LinkList";
import { homeShortcuts } from "../../data/links";

export function QuickActions() {
    return (
        <SectionCard title="Accesos frecuentes" icon={Zap}>
            <LinkList items={homeShortcuts} columns={2} />
        </SectionCard>
    );
}
