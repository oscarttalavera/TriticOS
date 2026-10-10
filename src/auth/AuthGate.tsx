import { useCallback, useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./authContext";
import { clearSession, getSession } from "./session";
import { LoginView } from "../views/LoginView";

/** Solo renderiza `children` si hay una sesión vigente; si no, muestra el login. */
export function AuthGate({ children }: { children: ReactNode }) {
    const [username, setUsername] = useState<string | null>(() => getSession());

    const logout = useCallback(() => {
        clearSession();
        setUsername(null);
    }, []);

    // Revisa la expiración y sincroniza el cierre de sesión entre pestañas.
    useEffect(() => {
        const check = () => setUsername((current) => (current ? getSession() : current));
        const timer = window.setInterval(check, 30_000);
        window.addEventListener("storage", check);
        return () => {
            window.clearInterval(timer);
            window.removeEventListener("storage", check);
        };
    }, []);

    if (!username) return <LoginView onSuccess={setUsername} />;

    return <AuthContext.Provider value={{ username, logout }}>{children}</AuthContext.Provider>;
}
