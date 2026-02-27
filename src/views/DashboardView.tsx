import { QuickActions } from "../components/widgets/QuickActions";
import { WorkOrdersOverview } from "../components/widgets/WorkOrdersOverview";

export function DashboardView() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                    Panel General
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Vista rápida de tus herramientas esenciales de Tritic Hub.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col gap-6 lg:col-span-1">
                    <QuickActions />
                </div>
            </div>

            <div className="mt-8 lg:col-span-3">
                <WorkOrdersOverview />
            </div>
        </>
    );
}

