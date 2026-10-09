// Descarga el tipo de cambio "Publicación DOF" de Banxico y lo guarda en public/usd-dof.json.
// Se ejecuta en CI antes de compilar el sitio; el navegador solo lee el archivo estático
// (Banxico no permite CORS, así que no se puede consultar desde la página).
import { writeFileSync } from "node:fs";

const BANXICO_URL = "https://www.banxico.org.mx/tipcamb/tipCamMIAction.do";
const OUT = new URL("../public/usd-dof.json", import.meta.url);
const ATTEMPTS = 4;

// Filas de la tabla: fecha | FIX (determinación) | Publicación DOF | Para pagos.
// La más reciente va primero; "N/E" indica que no hubo dato ese día. Antes de las 12:00
// el FIX del día aún es N/E, por eso se lee la columna DOF y no "el primer número".
const RATE_ROW =
    /(\d{2}\/\d{2}\/\d{4})\s*<\/td>\s*<td[^>]*>\s*([^<\s]+)\s*<\/td>\s*<td[^>]*>\s*([^<\s]+)\s*<\/td>\s*<td[^>]*>\s*([^<\s]+)\s*<\/td>/g;

function parseUsdDof(html) {
    for (const [, date, , dof] of html.matchAll(RATE_ROW)) {
        if (/^\d{2}\.\d{4}$/.test(dof)) return { rate: dof, date };
    }
    throw new Error("No se encontró el tipo de cambio en la página de Banxico");
}

let lastError;
for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
    try {
        const response = await fetch(BANXICO_URL, { signal: AbortSignal.timeout(15000) });
        if (!response.ok) throw new Error(`Banxico respondió ${response.status}`);
        const data = { ...parseUsdDof(await response.text()), updatedAt: new Date().toISOString() };
        writeFileSync(OUT, JSON.stringify(data, null, 2) + "\n");
        console.log("USD DOF:", data);
        process.exit(0);
    } catch (err) {
        lastError = err;
        console.warn(`Intento ${attempt}/${ATTEMPTS} falló: ${err.message}`);
        await new Promise((r) => setTimeout(r, attempt * 2000));
    }
}
// No rompe el despliegue: el sitio conserva el último archivo publicado en el repo.
console.error("No se pudo actualizar el tipo de cambio:", lastError?.message);
