import { Settings } from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { WorkOrdersOverview } from "../components/widgets/WorkOrdersOverview";
import { OperationsResources } from "./../components/widgets/OperationsResources";
import { EngineeringAssets } from "../components/widgets/EngineeringAssets";

export function OperationsView() {
    return (
        <>
            <PageHeader icon={Settings} title="Operaciones" description="Gestión de Órdenes de Trabajo y Recursos Operativos." />

            <div className="mb-4">
                <WorkOrdersOverview />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <OperationsResources />
                <EngineeringAssets />
            </div>
        </>
    );
}
