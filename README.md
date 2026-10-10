# Tritic Hub

Hub web interno para la gestión operativa de **Tritic 3D**. Centraliza recursos operativos, activos de ingeniería, dirección de arte, y administración en una sola interfaz.

> **Uso interno.** Se publica como sitio estático en GitHub Pages (`adminhub.tritic3d.com`). La app de escritorio (Electron) sigue en el repositorio pero está en pausa: el objetivo actual es la versión web.

---

## Stack

| Capa | Tecnología |
|---|---|
| UI | React 19 + TypeScript |
| Estilos | Tailwind CSS v3 |
| Build | Vite 7 |
| Desktop | Electron 34 |
| Empaquetado | electron-builder (NSIS) |
| Routing | React Router v7 (HashRouter) |

---

## Vistas

- **Inicio** — Accesos frecuentes (cotización, calculadora, Tritic Tools, directorio)
- **Ingeniería y Taller** — Herramientas de ingeniería y recursos operativos
- **Administrativo** — Flujo cotizar → órdenes de compra → facturar, más material para prospectos
- **Marca y Diseño** — Logotipos, tipografía y paleta


---

## Tipo de cambio (USD DOF)

Banxico no permite CORS, así que el navegador no puede consultarlo directamente. `scripts/fetch-usd-dof.mjs` (`npm run fetch:rate`) lee la columna *Publicación DOF* y escribe `public/usd-dof.json`; la página solo lee ese archivo estático. El workflow de despliegue lo ejecuta en cada push y a diario entre las 07:00 y las 10:00 y a las 13:00 (hora de México). El valor se usa para facturar, así que la página solo lo muestra si el archivo se generó con la tabla de Banxico ya actualizada a hoy (`asOf`); si Banxico aún no publica o no respondió, la píldora dice "Sin dato de hoy" y no muestra ningún número.

---

## Desarrollo

### Requisitos
- Node.js 20+
- npm 10+

### Instalación
```bash
npm install
```

### Modo desarrollo (hot-reload)
```bash
npm run electron:dev
```
Abre Vite en `localhost:5173` y lanza una ventana de Electron apuntando a ese servidor. Los cambios en el código se reflejan en vivo.

---

## Generar instalador

```bash
npm run electron:build
```

Compila el frontend con Vite, empaqueta la app con `electron-builder` y genera el instalador en:

```
release/Tritic Hub Setup <version>.exe
```

El instalador NSIS permite elegir directorio, crea acceso directo en escritorio y en el menú de inicio.

---

## Estructura del proyecto

```
TriticOS/
├── electron/
│   ├── main.cjs        # Proceso principal de Electron
│   └── preload.cjs     # Bridge seguro para el renderer
├── src/
│   ├── components/
│   │   ├── layout/     # MainLayout, Navbar
│   │   └── widgets/    # Componentes por vista
│   ├── views/          # DashboardView, OperationsView, AdminView, BrandView
│   ├── hooks/          # useTheme, etc.
│   ├── App.tsx
│   └── main.tsx
├── public/             # Favicon y assets estáticos
├── package.json
└── vite.config.ts
```
