const { net } = require('electron');

const BANXICO_URL = 'https://www.banxico.org.mx/tipcamb/tipCamMIAction.do';
const ATTEMPTS = 3;

// Filas de la tabla: fecha | FIX (determinación) | Publicación DOF | Para pagos.
// La más reciente va primero; "N/E" indica que no hubo dato ese día.
const RATE_ROW =
  /(\d{2}\/\d{2}\/\d{4})\s*<\/td>\s*<td[^>]*>\s*([^<\s]+)\s*<\/td>\s*<td[^>]*>\s*([^<\s]+)\s*<\/td>\s*<td[^>]*>\s*([^<\s]+)\s*<\/td>/g;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** Extrae el valor "Publicación DOF" más reciente del HTML de Banxico. */
function parseUsdDof(html) {
  for (const [, date, , dof] of html.matchAll(RATE_ROW)) {
    if (/^\d{2}\.\d{4}$/.test(dof)) return { rate: dof, date };
  }
  throw new Error('No se encontró el tipo de cambio en la página de Banxico');
}

async function fetchUsdDofRate() {
  let lastError;
  for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
    try {
      // net.fetch usa la pila de red de Chromium (proxy del sistema, certificados de Windows).
      const response = await net.fetch(BANXICO_URL, { signal: AbortSignal.timeout(10000) });
      if (!response.ok) throw new Error(`Banxico respondió ${response.status}`);
      return parseUsdDof(await response.text());
    } catch (err) {
      lastError = err;
      if (attempt < ATTEMPTS) await sleep(attempt * 800);
    }
  }
  throw lastError;
}

module.exports = { fetchUsdDofRate, parseUsdDof };
