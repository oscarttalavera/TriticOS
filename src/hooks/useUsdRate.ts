import { useCallback, useEffect, useState } from "react";
import { asset } from "../lib/assets";

export interface UsdRate {
    rate: string;
    /** Fecha de publicación dd/mm/aaaa, tal como la entrega Banxico. */
    date: string;
}

/** Días tras los cuales el dato se marca como posiblemente desactualizado. */
const STALE_AFTER_DAYS = 5;

function isStale(date: string) {
    const [d, m, y] = date.split("/").map(Number);
    const days = (Date.now() - new Date(y, m - 1, d).getTime()) / 86_400_000;
    return days > STALE_AFTER_DAYS;
}

export function useUsdRate() {
    const [data, setData] = useState<UsdRate | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const load = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(asset("usd-dof.json"), { cache: "no-store" });
            if (!response.ok) throw new Error(`No se pudo leer el archivo (${response.status})`);
            const json = (await response.json()) as UsdRate;
            if (!/^\d{2}\.\d{4}$/.test(json.rate)) throw new Error("Formato de dato inválido");
            setData(json);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error desconocido");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void load();
    }, [load]);

    return { data, loading, error, stale: data ? isStale(data.date) : false, refresh: load };
}
