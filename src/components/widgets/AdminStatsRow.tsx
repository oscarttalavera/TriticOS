interface Stat {
    label: string;
    value: string;
}

const stats: Stat[] = [
    { label: "Facturas Pendientes", value: "14" },
    { label: "POs en Revisión", value: "03" },
    { label: "Nuevos Prospectos", value: "28" },
    { label: "Uptime Servicios", value: "99.9%" },
];

export function AdminStatsRow() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {stats.map((stat, idx) => (
                <div
                    key={idx}
                    className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 px-6 py-5 shadow-sm"
                >
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
                        {stat.label}
                    </p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {stat.value}
                    </p>
                </div>
            ))}
        </div>
    );
}
