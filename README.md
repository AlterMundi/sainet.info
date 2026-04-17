# SAI — Sistema de Alerta Temprana de Incendios

> Detección temprana de focos de incendio con Inteligencia Artificial.
> Nodos con vigilancia autónoma 24/7, notificación georreferenciada en segundos.

Sitio web oficial de SAI — presentación del proyecto, funcionamiento,
tecnología, nodos desplegados, mapa interactivo de escalabilidad,
blog y demo interactivo para municipios.

**Sitio en producción:** [sainet.info](https://sainet.info)

---

## ¿Qué es SAI?

SAI (Sistema de Alerta de Incendios) es una red de nodos autónomos con
cámaras y sensores que vigilan áreas de riesgo las 24 horas. Modelos
de IA procesan las imágenes en tiempo real, detectan humo o fuego
incipiente, y envían alertas georreferenciadas a bomberos, defensa
civil y centros de monitoreo en segundos — antes de que el incendio
se propague.

El sistema es un apoyo — no reemplaza a las autoridades. Busca
ganarle minutos críticos al fuego.

## Características del sitio

- **Hero animado** con logo y bounding box, inspirado en la detección
  real de los modelos.
- **Cómo funciona** — explicación paso a paso con video integrado.
- **Tecnología** — detalle del stack de nodos e IA.
- **Nodos SAI** — galería de los dispositivos desplegados en campo.
- **Mapa interactivo de escalabilidad** con búsqueda de ciudades
  (Argentina) vía Nominatim, flyTo animado con Leaflet.
- **Quiénes somos** — equipo, misión y visión.
- **Blog** con filtros por categoría (Eventos / Infraestructura / Hitos).
- **Demo para municipios** — recorrido interactivo del producto.
- **i18n** — soporte español/inglés.
- **Contacto** conectado a Supabase.

## Stack

- **Vite 4.5** + **React 18** — bundling y SPA.
- **React Router 6** (`BrowserRouter`) — routing client-side.
- **Tailwind CSS** + **shadcn/ui** (Radix) — estilos y componentes.
- **GSAP** + **Framer Motion** — animaciones.
- **Leaflet** + **react-leaflet** — mapa interactivo.
- **Supabase** — backend para formulario de contacto.
- **Recharts** — gráficos.
- **Nominatim** (OpenStreetMap) — geocoding de ciudades.

Runtime: **Node 20.19.1** (ver `.nvmrc`).

## Rutas

| Ruta                      | Descripción                          |
| ------------------------- | ------------------------------------ |
| `/`                       | Landing (Hero)                       |
| `/como-funciona`          | Cómo funciona SAI                    |
| `/tecnologia`             | Tecnología de los nodos              |
| `/nodos-sai`              | Nodos desplegados                    |
| `/mapa`                   | Mapa interactivo de escalabilidad    |
| `/quienes-somos`          | Equipo, misión y visión              |
| `/quienes-somos-detalle`  | Detalle extendido del equipo         |
| `/blog`                   | Blog con filtros por categoría       |
| `/contacto`               | Formulario de contacto               |
| `/demo`                   | Demo interactivo para municipios     |
| `/presentacion`           | Slide de presentación                |
| `/terminos`               | Términos y condiciones               |

## Empezar

```bash
# Clonar
git clone https://github.com/SairaAsua/sainet.info.git
cd sainet.info

# Instalar
npm install

# Dev server (http://localhost:3000)
npm run dev
```

## Scripts

| Comando           | Qué hace                                      |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Dev server con HMR en `:3000`                 |
| `npm run build`   | Genera `llms.txt` + build de producción       |
| `npm run preview` | Preview del build compilado                   |
| `npm run lint`    | ESLint en modo `--quiet`                      |

## Estructura

```
.
├── src/
│   ├── components/       # UI + componentes de sección
│   │   ├── ui/           # shadcn/ui primitives (Radix)
│   │   └── demo/         # componentes del demo interactivo
│   ├── pages/            # HomePage, DemoPage
│   ├── i18n/             # translations.js (es/en)
│   ├── hooks/            # custom hooks
│   ├── lib/              # utils, cliente Supabase
│   ├── context/          # React contexts
│   └── main.jsx          # entry (BrowserRouter)
├── public/
│   ├── images/           # assets del sitio (servidos en /images/*)
│   ├── videos/           # videos del hero y demo
│   ├── demo/             # assets del demo
│   └── .htaccess         # rewrite SPA (Apache / Hostinger)
├── plugins/              # plugins custom de Vite
├── tools/
│   └── generate-llms.js  # genera llms.txt para crawlers
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .nvmrc                # Node 20.19.1
├── HOSTINGER.md          # notas de despliegue
└── README.md
```

## Despliegue

El sitio se despliega en **Hostinger Web Hosting con Git deployment
(Node.js)**. Hostinger clona este repo, corre `npm install` y
`npm run build`, y sirve `dist/` con el `.htaccess` de `public/`
(rewrite para rutas SPA).

Ver [`HOSTINGER.md`](./HOSTINGER.md) para detalles del flujo y
solución de errores comunes.

### Flujo para actualizar

1. Editar código en `src/` (o assets en `public/`).
2. Probar local: `npm run dev`.
3. Validar build: `npm run build && npm run preview`.
4. `git commit` + `git push origin master`.
5. Hostinger redespliega automáticamente por webhook.

## Accesibilidad y performance

- Animaciones respetan `prefers-reduced-motion`.
- Transforms (GSAP / Framer) sobre propiedades de layout para
  evitar reflows.
- Assets locales — sin dependencias de CDNs externos en el hot path.

## Licencia

Todos los derechos reservados © Saira Asua.

## Contacto

- Sitio: [sainet.info](https://sainet.info)
- Email: contacto vía formulario en [`/contacto`](https://sainet.info/contacto)
