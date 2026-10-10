import { createContext, useContext } from "react";

export interface AuthState {
    username: string;
    logout: () => void;
}

export const AuthContext = createContext<AuthState | null>(null);

export function useAuth(): AuthState {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthGate>");
    return ctx;
}
