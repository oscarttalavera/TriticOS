import { FileText } from "lucide-react";
import { SectionCard } from "../ui/SectionCard";
import { DocumentList } from "../ui/DocumentList";
import { PROSPECT_CATEGORY, prospectDocuments } from "../../data/links";

export function ProspectAssets() {
    return (
        <SectionCard title={PROSPECT_CATEGORY} icon={FileText}>
            <DocumentList docs={prospectDocuments} />
        </SectionCard>
    );
}
