import { FileSpreadsheet } from "lucide-react";
import { SectionCard } from "../ui/SectionCard";
import { LinkList } from "../ui/LinkList";
import { purchaseOrders } from "../../data/links";

export function PurchaseOrders() {
    return (
        <SectionCard title="Órdenes de Compra" icon={FileSpreadsheet}>
            <LinkList items={purchaseOrders} />
        </SectionCard>
    );
}
