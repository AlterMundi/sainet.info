# Despliegue en Hostinger — Notas para IA / Dev

> Archivo de referencia con lo que investigué sobre cómo Hostinger sirve este repo.
> Si sos una IA que toma este proyecto, leé esto antes de tocar `master` en GitHub.

## TL;DR

Este repo es un proyecto **Vite + React** (fuente, no build). Hostinger
clona el repo desde GitHub y **corre el build por su cuenta** — por eso
necesita encontrar `package.json` en la raíz. NO subir el `dist/`
compilado a `master`: rompe el deploy.

## Cómo funciona Hostinger con este repo

Hostinger **Horizons** (el builder con IA) NO importa desde GitHub — es
un sistema cerrado que solo permite exportar. Este sitio fue originalmente
generado por Horizons (ver `<meta name="generator" content="Hostinger Horizons">`
en `index.html` y el `.htaccess` en `public/`), y después exportado a
este repo.

Lo que sirve el sitio ahora es **Hostinger Web Hosting con Git deployment**
(plan Business / Cloud con Node.js):

1. Hostinger clona `master` de `https://github.com/SairaAsua/web-sai`.
2. Detecta `package.json` → corre `npm install`.
3. Corre `npm run build` → genera `dist/`.
4. Sirve el contenido de `dist/` vía Apache con las reglas del `.htaccess`.

Si falla con "missing package.json", es porque el repo no tiene el fuente
en la raíz (le subieron el build por error, o está en una subcarpeta).

## Qué TIENE que estar en `master` (raíz del repo)

- `package.json` + `package-lock.json` — dependencias y script `build`.
- `vite.config.js` — configuración de Vite.
- `index.html` — entry HTML de Vite (en la raíz, no en `public/`).
- `src/` — código React.
- `public/` — assets estáticos (incluido `.htaccess` con rewrite SPA).
- `tailwind.config.js`, `postcss.config.js` — Tailwind.
- `tools/generate-llms.js` — script que corre antes del build.
- `plugins/` — plugins custom de Vite que usa `vite.config.js`.
- `.nvmrc` — versión de Node (actualmente `20.19.1`).

## Qué NO subir a `master`

- `node_modules/` (gitignored).
- `dist/` (gitignored, lo genera Hostinger).
- Archivos sueltos duplicados en la raíz (ej: `logo.png`, `bombero.jpg`
  en la raíz). Los assets reales van en `public/images/` y se
  referencian desde el código como `/images/xxx.jpg`.

## Flujo de trabajo para actualizar la web

1. Editar código en `src/` (o assets en `public/`).
2. Probar local: `npm install && npm run dev` → `http://localhost:3000`.
3. (Opcional) validar build: `npm run build && npm run preview`.
4. `git add`, `git commit`, `git push origin master`.
5. Hostinger detecta el push (webhook) y redespliega automáticamente.

## Requisitos del sitio (rutas SPA)

El sitio usa `BrowserRouter` (no hash). `public/.htaccess` ya tiene la
regla de rewrite para que Apache sirva `index.html` en cualquier ruta.
No tocar salvo que se cambie a `HashRouter`.

## Si Hostinger falla al deployar

- **"missing package.json"** → el repo quedó sin el fuente. Asegurate
  de que `master` tenga `package.json` en la raíz.
- **Build falla** → correr `npm run build` local primero para ver el
  error exacto. Suele ser import roto o dependencia faltante en
  `package.json`.
- **404 en rutas tipo `/demo`, `/como-funciona`** → falta el
  `.htaccess` en `public/` (Vite lo copia al `dist/` en el build).
- **Imágenes rotas** → el código referencia `/images/xxx.jpg`. Los
  archivos tienen que estar en `public/images/`, no en la raíz del
  repo.

## Rama de trabajo

Trabajar solo en `master`. No hay rama `source`/`build` separada —
Hostinger buildea directo desde `master`.

## Stack

- Vite 4.5
- React 18.3
- React Router 6.16
- Tailwind + shadcn/ui (Radix)
- GSAP + Framer Motion
- Leaflet (mapa de escalabilidad)
- Supabase (cliente JS)
- Node 20.19.1 (ver `.nvmrc`)
