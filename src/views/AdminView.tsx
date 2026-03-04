import { BillingActions } from "../components/widgets/BillingActions";
import { ProspectAssets } from "../components/widgets/ProspectAssets";
import { PurchaseOrders } from "../components/widgets/PurchaseOrders";
import { AdminDirectories } from "../components/widgets/AdminDirectories";

export function AdminView() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                    Administrativo
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Enlaces de facturación, directorios de clientes, prospección y cobranza.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:max-w-7xl max-w-4xl mb-6">
                <div className="flex flex-col gap-6">
                    <BillingActions />
                </div>
                <div className="flex flex-col gap-6">
                    <PurchaseOrders />
                    <AdminDirectories />
                </div>
                <div className="flex flex-col gap-6">
                    <ProspectAssets />
                </div>
            </div>

        </>
    );
}
