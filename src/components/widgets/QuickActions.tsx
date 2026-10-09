import { FileSpreadsheet } from "lucide-react";
import { SectionCard } from "../ui/SectionCard";
import { LinkList } from "../ui/LinkList";
import { quickActions } from "../../data/links";

export function QuickActions() {
    return (
        <SectionCard title="Acciones Rápidas" icon={FileSpreadsheet}>
            <LinkList items={quickActions} />
        </SectionCard>
    );
}
