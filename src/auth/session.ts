import { USERS } from "./users";
import { derive, safeEqual } from "./crypto";

const SESSION_KEY = "tritic-hub-session";
const LOCK_KEY = "tritic-hub-lock";
const SESSION_MS = 12 * 60 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const LOCK_MS = 60 * 1000;

// Parámetros de relleno: si el usuario no existe se hace el mismo trabajo para no delatarlo por tiempo.
const DUMMY_SALT = "00".repeat(16);
const DUMMY_ITERATIONS = 310_000;

interface Session {
    username: string;
    expires: number;
}

interface Lock {
    attempts: number;
    until: number;
}

function read<T>(key: string): T | null {
    try {
        const raw = localStorage.getItem(key);
        return raw ? (JSON.parse(raw) as T) : null;
    } catch {
        return null;
    }
}

function write(key: string, value: unknown) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        /* almacenamiento no disponible */
    }
}

function remove(key: string) {
    try {
        localStorage.removeItem(key);
    } catch {
        /* nada que limpiar */
    }
}

export function getSession(): string | null {
    const s = read<Session>(SESSION_KEY);
    if (!s || typeof s.expires !== "number" || s.expires < Date.now()) {
        remove(SESSION_KEY);
        return null;
    }
    return s.username;
}

export function clearSession() {
    remove(SESSION_KEY);
}

/** Segundos restantes de bloqueo por intentos fallidos (0 si no hay). */
export function lockSecondsLeft(): number {
    const lock = read<Lock>(LOCK_KEY);
    if (!lock) return 0;
    return Math.max(0, Math.ceil((lock.until - Date.now()) / 1000));
}

export type LoginResult = { ok: true; username: string } | { ok: false; reason: "invalid" | "locked" };

export async function login(usernameInput: string, password: string): Promise<LoginResult> {
    if (lockSecondsLeft() > 0) return { ok: false, reason: "locked" };

    const username = usernameInput.trim().toLowerCase();
    const user = USERS.find((u) => u.username.toLowerCase() === username);

    const hash = await derive(
        password,
        user?.salt ?? DUMMY_SALT,
        user?.iterations ?? DUMMY_ITERATIONS,
    );

    if (!user || !safeEqual(hash, user.hash)) {
        const attempts = (read<Lock>(LOCK_KEY)?.attempts ?? 0) + 1;
        const locked = attempts >= MAX_ATTEMPTS;
        write(LOCK_KEY, locked
            ? { attempts: 0, until: Date.now() + LOCK_MS }
            : { attempts, until: 0 });
        return { ok: false, reason: locked ? "locked" : "invalid" };
    }

    remove(LOCK_KEY);
    write(SESSION_KEY, { username: user.username, expires: Date.now() + SESSION_MS } satisfies Session);
    return { ok: true, username: user.username };
}
