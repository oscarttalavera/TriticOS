import { BriefcaseBusiness } from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { QuotingLinks } from "../components/widgets/QuotingLinks";
import { PurchaseOrders } from "../components/widgets/PurchaseOrders";
import { BillingActions } from "../components/widgets/BillingActions";
import { ProspectAssets } from "../components/widgets/ProspectAssets";

export function AdminView() {
    return (
        <>
            <PageHeader icon={BriefcaseBusiness} title="Administrativo" description="Del presupuesto a la factura: cotización, órdenes de compra y facturación en un mismo lugar." />

            {/* Orden de lectura = orden del flujo de trabajo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <QuotingLinks />
                <PurchaseOrders />
                <BillingActions />
                <ProspectAssets />
            </div>
        </>
    );
}
