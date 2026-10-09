import { useCallback, useEffect, useState } from "react";
import type { UsdDofRate } from "../electron";

const CACHE_KEY = "usd-dof-rate";

interface CachedRate extends UsdDofRate {
    /** Día local (aaaa-mm-dd) en que se consultó. */
    fetchedOn: string;
}

const today = () => new Date().toLocaleDateString("sv-SE");

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
        if (!force && cached?.fetchedOn === today()) {
            setData(cached);
            return;
        }

        setLoading(true);
        setError(null);
        try {
            if (!window.electronAPI) throw new Error("Disponible solo en la app de escritorio");
            const fresh = await window.electronAPI.getUsdDofRate();
            localStorage.setItem(CACHE_KEY, JSON.stringify({ ...fresh, fetchedOn: today() }));
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
