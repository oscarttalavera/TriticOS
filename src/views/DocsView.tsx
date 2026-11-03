import { BookOpen } from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { InternalDocs } from "../components/widgets/InternalDocs";

export function DocsView() {
    return (
        <>
            <PageHeader icon={BookOpen} title="Documentos" description="Procedimientos, SOPs y guías internas de Tritic." />

            <InternalDocs />
        </>
    );
}
