import { Home } from "lucide-react";
import { QuickActions } from "../components/widgets/QuickActions";
import { WorkOrdersOverview } from "../components/widgets/WorkOrdersOverview";
import { ProspectAssets } from "../components/widgets/ProspectAssets";

export function DashboardView() {
    return (
        <>
            {/* Page header */}
            <div className="mb-8 flex items-center gap-3">
                <div className="p-2 bg-brand-50 dark:bg-brand-500/10 rounded-xl border border-brand-100 dark:border-brand-500/20">
                    <Home className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Panel General
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
                        Vista rápida de tus herramientas esenciales de Tritic Hub.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <QuickActions />
                <ProspectAssets />
            </div>

            <div className="mt-4">
                <WorkOrdersOverview />
            </div>
        </>
    );
}
