import { QuickActions } from "../components/widgets/QuickActions";
import { BillingActions } from "../components/widgets/BillingActions";

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
                <div className="flex flex-col gap-6">
                    <QuickActions />
                </div>
                <div className="flex flex-col gap-6">
                    <BillingActions />
                </div>
            </div>
        </>
    );
}
