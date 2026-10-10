import { Calculator } from "lucide-react";
import { SectionCard } from "../ui/SectionCard";
import { LinkList } from "../ui/LinkList";
import { quotingLinks } from "../../data/links";

export function QuotingLinks() {
    return (
        <SectionCard title="1 · Cotizar" icon={Calculator}>
            <LinkList items={quotingLinks} />
        </SectionCard>
    );
}
