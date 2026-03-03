import { useEffect, useState } from "react";
import { DollarSign, Landmark, RefreshCw, AlertCircle } from "lucide-react";

export function ExchangeRateWidget() {
    const [rate, setRate] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

    const fetchRate = async () => {
        setLoading(true);
        setError(null);
        try {
            // Using allorigins to bypass CORS
            const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.dof.gob.mx/')}`);

            if (!response.ok) {
                throw new Error("Error fetching data from proxy");
            }

            const data = await response.json();
            const html = data.contents;

            // Extract the DOLAR rate using a regex pattern that matches the structure
            const match = html.match(/<span class="tituloBloque4">DOLAR<\/span>\s*<br \/>\s*([0-9.]+)/i);

            if (match && match[1]) {
                setRate(match[1]);
                setLastUpdated(new Date());
            } else {
                throw new Error("No se pudo encontrar el tipo de cambio en el documento.");
            }
        } catch (err) {
            console.error("Error fetching DOF rate:", err);
            setError("No se pudo cargar el tipo de cambio.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRate();
    }, []);

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center">
                    <Landmark className="w-5 h-5 mr-2 text-emerald-500" />
                    Indicadores DOF
                </h2>
                <button
                    onClick={fetchRate}
                    disabled={loading}
                    className="p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 rounded-lg transition-colors disabled:opacity-50"
                    title="Actualizar tipo de cambio"
                >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                </button>
            </div>

            <div className="flex-1 flex flex-col justify-center">
                <div className="group flex items-center justify-between p-4 rounded-xl border border-emerald-100 dark:border-emerald-500/20 bg-emerald-50 dark:bg-emerald-500/10 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center">
                        <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm mr-4">
                            <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                Dólar (USD)
                            </h3>
                            {loading ? (
                                <div className="h-8 w-24 bg-emerald-200/50 dark:bg-emerald-800/50 rounded animate-pulse mt-1"></div>
                            ) : error ? (
                                <div className="flex items-center text-red-500 text-sm mt-1">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    <span>Error</span>
                                </div>
                            ) : (
                                <div className="text-3xl font-bold text-slate-900 dark:text-white mt-1 tracking-tight">
                                    ${rate} <span className="text-sm font-normal text-slate-500 dark:text-slate-400 tracking-normal">MXN</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {lastUpdated && !error && !loading && (
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-4 text-center">
                        Última actualización: {lastUpdated.toLocaleTimeString()}
                    </p>
                )}
            </div>
        </div>
    );
}
