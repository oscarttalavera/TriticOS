import { BriefcaseBusiness } from "lucide-react";
import { BillingActions } from "../components/widgets/BillingActions";
import { ProspectAssets } from "../components/widgets/ProspectAssets";
import { PurchaseOrders } from "../components/widgets/PurchaseOrders";
import { AdminDirectories } from "../components/widgets/AdminDirectories";
import { AdminStatsRow } from "../components/widgets/AdminStatsRow";

export function AdminView() {
    return (
        <>
            {/* Page header */}
            <div className="mb-8 flex items-center gap-3">
                <div className="p-2 bg-brand-50 dark:bg-brand-500/10 rounded-xl border border-brand-100 dark:border-brand-500/20">
                    <BriefcaseBusiness className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Administrativo
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
                        Gestión centralizada de recursos, facturación y documentos comerciales del ecosistema Tritic Hub.
                    </p>
                </div>
            </div>

            {/* 3-column widget grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:max-w-7xl max-w-4xl mb-4">
                <BillingActions />
                <PurchaseOrders />
                <ProspectAssets />
            </div>

            {/* Full-width directory banner */}
            <div className="w-full lg:max-w-7xl max-w-4xl mb-4">
                <AdminDirectories />
            </div>

            {/* KPI stats row */}
            <div className="w-full lg:max-w-7xl max-w-4xl">
                <AdminStatsRow />
            </div>
        </>
    );
}
