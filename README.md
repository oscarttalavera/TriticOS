# Tritic Hub

App de escritorio interna para la gestión operativa de **Tritic 3D**. Centraliza órdenes de trabajo, activos de ingeniería, dirección de arte, y administración en una sola interfaz.

> **Distribución restringida.** Esta aplicación es de uso exclusivo interno — se distribuye como instalador `.exe` y no tiene acceso público por URL.

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

- **Dashboard** — Resumen ejecutivo y acciones rápidas
- **Operaciones** — Órdenes de trabajo, recursos y activos de ingeniería
- **Marca** — Activos de marca y prospectos
- **Admin** — Órdenes de compra y configuración

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
