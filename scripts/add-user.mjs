// Genera la entrada de un usuario para src/auth/users.ts.
// Uso: npm run auth:add-user
import { pbkdf2Sync, randomBytes } from "node:crypto";
import readline from "node:readline";

const ITERATIONS = 310_000;

function ask(question, hidden = false) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
        if (hidden) {
            // Solo deja pasar el texto de la pregunta, no lo que se teclea.
            rl._writeToOutput = (s) => {
                if (s.includes(question)) rl.output.write(s);
            };
        }
        rl.question(question, (answer) => {
            rl.close();
            if (hidden) process.stdout.write("\n");
            resolve(answer);
        });
    });
}

const username = (await ask("Usuario: ")).trim().toLowerCase();
const password = await ask("Contraseña: ", true);
const confirm = await ask("Repite la contraseña: ", true);

if (!username) throw new Error("El usuario no puede estar vacío.");
if (password.length < 10) throw new Error("Usa una contraseña de al menos 10 caracteres.");
if (password !== confirm) throw new Error("Las contraseñas no coinciden.");

const salt = randomBytes(16);
const hash = pbkdf2Sync(password, salt, ITERATIONS, 32, "sha256");

console.log("\nPega esta línea dentro de USERS en src/auth/users.ts:\n");
console.log(
    `    { username: "${username}", salt: "${salt.toString("hex")}", iterations: ${ITERATIONS}, hash: "${hash.toString("hex")}" },`,
);
