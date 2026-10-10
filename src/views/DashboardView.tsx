import { Home } from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { QuickActions } from "../components/widgets/QuickActions";

export function DashboardView() {
    return (
        <>
            <PageHeader icon={Home} title="Inicio" description="Accesos directos a lo que más usas en el día a día." />

            <QuickActions />
        </>
    );
}
