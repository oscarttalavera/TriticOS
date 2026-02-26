import { useState } from "react";
import { Calculator, Percent, DollarSign } from "lucide-react";

export function OperationalCalc() {
    const [amount, setAmount] = useState<string>("");
    const [commissionPct, setCommissionPct] = useState<string>("5"); // default 5%
    const [taxPct, setTaxPct] = useState<string>("16"); // default 16% (IVA in some regions)

    const rawAmount = parseFloat(amount) || 0;
    const comm = parseFloat(commissionPct) || 0;
    const tax = parseFloat(taxPct) || 0;

    const commissionAmount = rawAmount * (comm / 100);
    const taxableAmount = rawAmount - commissionAmount;
    const taxAmount = taxableAmount * (tax / 100);
    const netAmount = taxableAmount - taxAmount;

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center">
                    <Calculator className="w-5 h-5 mr-2 text-brand-500" />
                    Calculadora Operativa
                </h2>
            </div>

            <div className="space-y-4 flex-1">
                <div>
                    <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Monto Base</label>
                    <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-slate-900 dark:text-white transition-all shadow-sm"
                            placeholder="0.00"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Comisión (%)</label>
                        <div className="relative">
                            <input
                                type="number"
                                value={commissionPct}
                                onChange={(e) => setCommissionPct(e.target.value)}
                                className="w-full pl-3 pr-8 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-slate-900 dark:text-white transition-all shadow-sm"
                            />
                            <Percent className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Impuestos (%)</label>
                        <div className="relative">
                            <input
                                type="number"
                                value={taxPct}
                                onChange={(e) => setTaxPct(e.target.value)}
                                className="w-full pl-3 pr-8 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none text-slate-900 dark:text-white transition-all shadow-sm"
                            />
                            <Percent className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30 -mx-6 -mb-6 p-6 rounded-b-2xl">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-500 dark:text-slate-400">Total Deducciones</span>
                    <span className="text-sm font-medium text-rose-500 dark:text-rose-400">
                        -{formatCurrency(commissionAmount + taxAmount)}
                    </span>
                </div>
                <div className="flex justify-between items-end">
                    <span className="text-base font-medium text-slate-700 dark:text-slate-300">Monto Neto</span>
                    <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                        {formatCurrency(netAmount)}
                    </span>
                </div>
            </div>
        </div>
    );
}
