import { FolderOpen } from "lucide-react";
import { SectionCard } from "../ui/SectionCard";
import { DocumentList } from "../ui/DocumentList";
import { documents, type DocumentFile } from "../../data/links";

/** Agrupa por `category` respetando el orden en que aparece cada una en `documents`. */
function groupByCategory(docs: DocumentFile[]) {
    const groups = new Map<string, DocumentFile[]>();
    for (const doc of docs) {
        groups.set(doc.category, [...(groups.get(doc.category) ?? []), doc]);
    }
    return [...groups];
}

export function InternalDocs() {
    return (
        <>
            {groupByCategory(documents).map(([category, docs]) => (
                <SectionCard key={category} title={category} icon={FolderOpen}>
                    <DocumentList docs={docs} />
                </SectionCard>
            ))}
        </>
    );
}
