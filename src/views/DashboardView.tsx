import { Home } from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { QuickActions } from "../components/widgets/QuickActions";
import { ProspectAssets } from "../components/widgets/ProspectAssets";

export function DashboardView() {
    return (
        <>
            <PageHeader icon={Home} title="Panel General" description="Vista rápida de tus herramientas esenciales de Tritic Hub." />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <QuickActions />
                <ProspectAssets />
            </div>
        </>
    );
}
