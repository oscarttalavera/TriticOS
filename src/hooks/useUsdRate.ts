import { useCallback, useEffect, useState } from "react";
import { asset } from "../lib/assets";

interface UsdRateFile {
    rate: string;
    /** Fecha de publicación del valor, dd/mm/aaaa, tal como la entrega Banxico. */
    date: string;
    /** Fecha de la fila más reciente que tenía la tabla de Banxico al generarse el archivo. */
    asOf?: string;
}

export interface UsdRate {
    rate: string;
    date: string;
}

/** Hoy en México, formato dd/mm/aaaa (el mismo que usa Banxico). */
const todayInMexico = () =>
    new Intl.DateTimeFormat("en-GB", {
        timeZone: "America/Mexico_City",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(new Date());

/**
 * El tipo de cambio se usa para facturar, así que solo se muestra si el archivo se generó
 * con la tabla de Banxico ya actualizada al día de hoy. Si no, es mejor no mostrar nada.
 */
export function useUsdRate() {
    const [data, setData] = useState<UsdRate | null>(null);
    /** Fecha del último dato conocido cuando no corresponde a hoy (el valor no se expone). */
    const [outdatedSince, setOutdatedSince] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const load = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(asset("usd-dof.json"), { cache: "no-store" });
            if (!response.ok) throw new Error(`No se pudo leer el archivo (${response.status})`);
            const json = (await response.json()) as UsdRateFile;
            if (!/^\d{2}\.\d{4}$/.test(json.rate)) throw new Error("Formato de dato inválido");

            if (json.asOf === todayInMexico()) {
                setData({ rate: json.rate, date: json.date });
                setOutdatedSince(null);
            } else {
                setData(null);
                setOutdatedSince(json.date);
            }
        } catch (err) {
            setData(null);
            setOutdatedSince(null);
            setError(err instanceof Error ? err.message : "Error desconocido");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void load();
        // Al volver a la pestaña (p. ej. al día siguiente) se vuelve a validar la fecha.
        const onVisible = () => document.visibilityState === "visible" && void load();
        document.addEventListener("visibilitychange", onVisible);
        return () => document.removeEventListener("visibilitychange", onVisible);
    }, [load]);

    return { data, outdatedSince, loading, error, refresh: load };
}
