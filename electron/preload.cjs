// Preload script - runs in renderer context with access to Node APIs
// before the page loads. Keep contextIsolation: true and expose only
// what the renderer actually needs via contextBridge.

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform,
  getUsdDofRate: () => ipcRenderer.invoke('fx:usd-dof'),
});
