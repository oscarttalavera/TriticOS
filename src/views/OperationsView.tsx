import { Settings } from "lucide-react";
import { WorkOrdersOverview } from "../components/widgets/WorkOrdersOverview";
import { OperationsResources } from "./../components/widgets/OperationsResources";
import { EngineeringAssets } from "../components/widgets/EngineeringAssets";

export function OperationsView() {
    return (
        <>
            {/* Page header */}
            <div className="mb-8 flex items-center gap-3">
                <div className="p-2 bg-brand-50 dark:bg-brand-500/10 rounded-xl border border-brand-100 dark:border-brand-500/20">
                    <Settings className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Operaciones
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
                        Gestión de Órdenes de Trabajo y Recursos Operativos.
                    </p>
                </div>
            </div>

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
