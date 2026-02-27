import { WorkOrdersOverview } from "../components/widgets/WorkOrdersOverview";
import { PurchaseOrders } from "./../components/widgets/PurchaseOrders";
import { OperationsResources } from "./../components/widgets/OperationsResources";

export function OperationsView() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                    Operaciones
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Gestión de Órdenes de Trabajo, Órdenes de Compra y Recursos Operativos.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col gap-6">
                    <PurchaseOrders />
                </div>
                <div className="flex flex-col gap-6">
                    <OperationsResources />
                </div>
            </div>

            <div className="mt-8">
                <WorkOrdersOverview />
            </div>
        </>
    );
}
