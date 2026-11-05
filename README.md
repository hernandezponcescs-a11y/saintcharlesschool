# Sitio web — Saint Charles' School

Página de inicio hecha en **React + Tailwind CSS + Framer Motion**, basada en el diseño de Canva *"Formando valores en la educación."*

## Cómo correrlo

Necesitas [Node.js](https://nodejs.org) 18 o más reciente.

```bash
npm install        # una sola vez
npm run dev        # abre http://localhost:5173 con recarga en vivo
npm run build      # genera el sitio listo para publicar en /dist
npm run build:single   # (opcional) todo en un solo index.html, fácil de compartir
```

La carpeta `dist/` se puede subir tal cual a Netlify, Vercel, Hostinger o cualquier hosting.

## Publicar con GitHub Pages

El proyecto ya trae el archivo `.github/workflows/deploy.yml`, que publica el sitio solo cada vez que subes un cambio.

1. Sube el proyecto a un repositorio de GitHub (rama `main`).
2. En el repositorio, ve a **Settings → Pages** y en **Source** elige **GitHub Actions**.
3. Ve a la pestaña **Actions** y espera a que "Publicar sitio" termine (1–2 minutos).
4. El sitio queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

Después, cada cambio que subas (por ejemplo, editar `src/data/content.js` desde la web de GitHub) vuelve a publicar el sitio automáticamente.

## Dónde cambiar cada cosa

| Quiero cambiar… | Archivo |
| --- | --- |
| **Cualquier texto, título, servicio, dato de contacto o red social** | `src/data/content.js` |
| Títulos y etiquetas de las fotos de la galería | `src/data/content.js` → `gallery` |
| Una foto | Reemplaza el archivo en `src/assets/` (mismo nombre) o importa una nueva en `content.js` |
| Colores y tipografía | `tailwind.config.js` |
| Velocidad / rebote de las animaciones | `src/lib/motion.js` |
| Orden de las secciones | `src/App.jsx` |
| Acomodo del mosaico de la galería | `src/index.css` → `.gallery-a` y `.gallery-b` |

## Estructura

```
src/
├─ data/content.js          ← TODO el contenido (textos, fotos, enlaces)
├─ components/
│  ├─ Navbar.jsx            ← menú fijo con scroll suave y subrayado animado
│  ├─ Hero.jsx              ← portada + botón "Matrícula abierta 2027"
│  ├─ Pillars.jsx           ← 4 tarjetas flotantes con resorte
│  ├─ Gallery.jsx           ← mosaico con zoom y tarjeta al pasar el cursor
│  ├─ Services.jsx          ← 6 servicios sobre la foto de la fachada
│  ├─ EnrollmentBanner.jsx  ← banner "Matrícula 2027 abierta."
│  ├─ Footer.jsx            ← horario, contacto, redes y "Volver arriba"
│  ├─ SectionHeading.jsx    ← etiqueta con degradado + título
│  └─ icons.jsx             ← íconos de Facebook, Instagram y TikTok
├─ hooks/
│  ├─ useSmoothScroll.js    ← desplazamiento suave a una sección o arriba
│  ├─ useActiveSection.js   ← resalta en el menú la sección visible
│  └─ useCanHover.js        ← en celulares muestra los títulos de la galería siempre
├─ lib/motion.js            ← curvas de resorte (snappy, smooth, bouncy)
├─ App.jsx · main.jsx · index.css
└─ assets/                  ← fotos y logos
```

## Interacciones

- **Menú** (Inicio, Pilares, Actividades, Servicios, Contacto): scroll suave a cada sección, compensando la altura del menú fijo. La sección visible se subraya.
- **¡Escríbenos!**, **Quiero información** y el **teléfono** del footer: abren WhatsApp (`WHATSAPP_URL` en `content.js`).
- **Matrícula abierta 2027** (portada): baja al banner de matrícula, justo antes del contacto.
- **Galería**: zoom suave con resorte y tarjeta con categoría y título al pasar el cursor (o al enfocar con el teclado). En celular los títulos se ven siempre.
- **Volver arriba**: regresa suavemente al inicio.
- Si la persona tiene activado *reducir movimiento* en su sistema, las animaciones se simplifican automáticamente.
