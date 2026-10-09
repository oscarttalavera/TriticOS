import { useCallback, useEffect, useState } from "react";
import type { UsdDofRate } from "../electron";

const CACHE_KEY = "usd-dof-rate";

interface CachedRate extends UsdDofRate {
    /** Día local (aaaa-mm-dd) en que se consultó. */
    fetchedOn: string;
    /** Hora local (0-23) de la consulta. */
    fetchedHour: number;
}

/** A partir de esta hora cambia el valor vigente de la fuente. */
const SWITCH_HOUR = 12;

const today = () => new Date().toLocaleDateString("sv-SE");

/** La caché sirve si es de hoy y no cruzamos las 12:00 desde que se guardó. */
const isFresh = (c: CachedRate) =>
    c.fetchedOn === today() && (c.fetchedHour >= SWITCH_HOUR || new Date().getHours() < SWITCH_HOUR);

function readCache(): CachedRate | null {
    try {
        const raw = localStorage.getItem(CACHE_KEY);
        return raw ? (JSON.parse(raw) as CachedRate) : null;
    } catch {
        return null;
    }
}

export function useUsdRate() {
    const [data, setData] = useState<UsdDofRate | null>(() => readCache());
    const [loading, setLoading] = useState(false);
    const [stale, setStale] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const load = useCallback(async (force: boolean) => {
        const cached = readCache();
        if (!force && cached && isFresh(cached)) {
            setData(cached);
            return;
        }

        setLoading(true);
        setError(null);
        try {
            if (typeof window.electronAPI?.getUsdDofRate !== "function") {
                throw new Error("Cierra y vuelve a abrir Tritic Hub para activar esta función");
            }
            const fresh = await window.electronAPI.getUsdDofRate();
            const entry: CachedRate = { ...fresh, fetchedOn: today(), fetchedHour: new Date().getHours() };
            localStorage.setItem(CACHE_KEY, JSON.stringify(entry));
            setData(fresh);
            setStale(false);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error desconocido");
            setStale(cached !== null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void load(false);
    }, [load]);

    const refresh = useCallback(() => load(true), [load]);

    return { data, loading, stale, error, refresh };
}
