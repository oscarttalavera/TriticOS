import { useEffect, useState, type FormEvent } from "react";
import { Lock, LogIn } from "lucide-react";
import { asset } from "../lib/assets";
import { login, lockSecondsLeft } from "../auth/session";

interface LoginViewProps {
    onSuccess: (username: string) => void;
}

export function LoginView({ onSuccess }: LoginViewProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");
    const [locked, setLocked] = useState(() => lockSecondsLeft());

    useEffect(() => {
        if (locked <= 0) return;
        const timer = window.setInterval(() => setLocked(lockSecondsLeft()), 1000);
        return () => window.clearInterval(timer);
    }, [locked > 0]); // eslint-disable-line react-hooks/exhaustive-deps

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (busy || locked > 0) return;
        setBusy(true);
        setError("");
        try {
            const result = await login(username, password);
            if (result.ok) {
                onSuccess(result.username);
                return;
            }
            setPassword("");
            if (result.reason === "locked") setLocked(lockSecondsLeft());
            else setError("Usuario o contraseña incorrectos.");
        } catch {
            setError("No se pudo validar el acceso en este navegador.");
        } finally {
            setBusy(false);
        }
    }

    const inputClass =
        "w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 outline-none focus:border-azul-700 dark:focus:border-verde-500 transition-colors";

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50 dark:bg-slate-950">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4"
            >
                <div className="flex flex-col items-center gap-3 pb-2">
                    <img src={asset("logos/tritic-logo-azul.svg")} alt="Tritic" className="h-7 w-auto dark:hidden" />
                    <img src={asset("logos/tritic-logo-verde.svg")} alt="Tritic" className="h-7 w-auto hidden dark:block" />
                    <p className="text-[10px] font-semibold font-mono uppercase tracking-widest text-azul-700 dark:text-verde-500 flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5" />
                        Acceso al Hub
                    </p>
                </div>

                <label className="block space-y-1.5">
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Usuario</span>
                    <input
                        className={inputClass}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="username"
                        autoCapitalize="none"
                        spellCheck={false}
                        autoFocus
                        required
                    />
                </label>

                <label className="block space-y-1.5">
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Contraseña</span>
                    <input
                        className={inputClass}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                    />
                </label>

                {locked > 0 ? (
                    <p role="alert" className="text-xs text-amber-600 dark:text-amber-400">
                        Demasiados intentos. Espera {locked} s para volver a intentar.
                    </p>
                ) : (
                    error && <p role="alert" className="text-xs text-red-600 dark:text-red-400">{error}</p>
                )}

                <button
                    type="submit"
                    disabled={busy || locked > 0}
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-azul-700 hover:bg-azul-700/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-sm py-2.5 transition-colors"
                >
                    <LogIn className="w-4 h-4" />
                    {busy ? "Validando…" : "Entrar"}
                </button>
            </form>
        </div>
    );
}
