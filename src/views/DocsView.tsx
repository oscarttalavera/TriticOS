import { BookOpen, Users } from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { SectionCard } from "../components/ui/SectionCard";
import { LinkList } from "../components/ui/LinkList";
import { InternalDocs } from "../components/widgets/InternalDocs";
import { internalResources } from "../data/links";

export function DocsView() {
    return (
        <>
            <PageHeader icon={BookOpen} title="Documentos" description="Procedimientos, SOPs, guías y recursos internos de Tritic." />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <InternalDocs />
                <SectionCard title="Recursos internos" icon={Users}>
                    <LinkList items={internalResources} trailing="external" />
                </SectionCard>
            </div>
        </>
    );
}
