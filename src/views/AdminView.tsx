import { BriefcaseBusiness } from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { BillingActions } from "../components/widgets/BillingActions";
import { ProspectAssets } from "../components/widgets/ProspectAssets";
import { PurchaseOrders } from "../components/widgets/PurchaseOrders";
import { AdminDirectories } from "../components/widgets/AdminDirectories";

export function AdminView() {
    return (
        <>
            <PageHeader icon={BriefcaseBusiness} title="Administrativo" description="Gestión centralizada de recursos, facturación y documentos comerciales del ecosistema Tritic Hub." />

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
        </>
    );
}
