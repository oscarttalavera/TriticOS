const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const { URL } = require('url');

const BANXICO_URL = 'https://www.banxico.org.mx/tipcamb/tipCamMIAction.do';

// Filas de la tabla: fecha | FIX (determinación) | Publicación DOF | Para pagos.
// La más reciente va primero; "N/E" indica que no hubo dato ese día.
const RATE_ROW =
  /(\d{2}\/\d{2}\/\d{4})\s*<\/td>\s*<td[^>]*>\s*([^<\s]+)\s*<\/td>\s*<td[^>]*>\s*([^<\s]+)\s*<\/td>\s*<td[^>]*>\s*([^<\s]+)\s*<\/td>/g;

async function fetchUsdDofRate() {
  const response = await fetch(BANXICO_URL, { signal: AbortSignal.timeout(10000) });
  if (!response.ok) throw new Error(`Banxico respondió ${response.status}`);
  const html = await response.text();

  for (const [, date, , dof] of html.matchAll(RATE_ROW)) {
    if (/^\d{2}\.\d{4}$/.test(dof)) return { rate: dof, date };
  }
  throw new Error('No se encontró el tipo de cambio en la página de Banxico');
}

ipcMain.handle('fx:usd-dof', fetchUsdDofRate);

// Keep a global reference of the window object to prevent garbage collection
let mainWindow;

const isDev = process.env.NODE_ENV === 'development';

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1024,
    minHeight: 600,
    title: 'Tritic Hub',
    icon: path.join(__dirname, '../public/tritic-favicon.png'),
    backgroundColor: '#0f172a', // Match app dark background
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
    // Remove default menu bar for a cleaner app look
    autoHideMenuBar: true,
  });

  if (isDev) {
    // In development, load from the Vite dev server
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    // In production, load the compiled index.html directly
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  // Prevent navigation to external URLs — open them in the system browser instead
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.webContents.on('will-navigate', (event, navigationUrl) => {
    const parsedUrl = new URL(navigationUrl);
    // Allow file:// and localhost in dev; block everything else
    const isLocal = parsedUrl.protocol === 'file:' || parsedUrl.hostname === 'localhost';
    if (!isLocal) {
      event.preventDefault();
      shell.openExternal(navigationUrl);
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  // On Windows and Linux, quit when all windows are closed
  if (process.platform !== 'darwin') app.quit();
});
