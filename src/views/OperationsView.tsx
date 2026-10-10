import { Settings } from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { EngineeringAssets } from "../components/widgets/EngineeringAssets";

export function OperationsView() {
    return (
        <>
            <PageHeader icon={Settings} title="Ingeniería y Taller" description="Herramientas de diseño y manufactura, y recursos operativos del taller." />

            <EngineeringAssets />
        </>
    );
}
