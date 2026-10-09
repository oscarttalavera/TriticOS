export interface UsdDofRate {
    rate: string;
    /** Fecha de publicación en formato dd/mm/aaaa, tal como la entrega Banxico. */
    date: string;
}

declare global {
    interface Window {
        electronAPI?: {
            platform: string;
            getUsdDofRate: () => Promise<UsdDofRate>;
        };
    }
}
