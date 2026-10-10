/**
 * Usuarios con acceso al Hub. Aquí solo viven hashes PBKDF2-SHA256 con sal,
 * nunca contraseñas. Para agregar o cambiar un usuario:
 *
 *   npm run auth:add-user
 *
 * y pega la línea que imprime dentro de este arreglo.
 */
export interface StoredUser {
    username: string;
    /** Sal aleatoria en hexadecimal. */
    salt: string;
    iterations: number;
    /** Hash derivado (32 bytes) en hexadecimal. */
    hash: string;
}

export const USERS: StoredUser[] = [{ username: "oscar", salt: "ffc3e933c6b37c948b1e0d87fc36833e", iterations: 310000, hash: "aefe59fc2814657f56484ef223a9772cb3084636272850373ad19c3da867926a" },{ username: "victoria", salt: "822b41d0a1948a5ec40a6cf7ebba1553", iterations: 310000, hash: "a90f1468507d61a8f5987d7849b5deed61aa7ca7c27ccdae0f8fd3b7c57cf479" },];
