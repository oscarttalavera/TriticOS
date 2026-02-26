import { BillingActions } from "../components/widgets/BillingActions";

export function AdminView() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                    Administrativo
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Enlaces de facturación, directorios de clientes y cobranza.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                <div className="flex flex-col gap-6">
                    <BillingActions />
                </div>
            </div>
        </>
    );
}
