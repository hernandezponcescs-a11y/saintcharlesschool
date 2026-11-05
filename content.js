/**
 * ============================================================
 *  CONTENIDO DEL SITIO — Saint Charles' School
 * ============================================================
 *  Todo lo que se lee en la página vive aquí.
 *  Para cambiar un texto, un título o una foto, edita este
 *  archivo: no hace falta tocar los componentes.
 *
 *  Fotos: van en /src/assets. Para cambiar una, reemplaza el
 *  archivo con otro del mismo nombre, o importa uno nuevo
 *  abajo y úsalo en la sección que corresponda.
 * ============================================================
 */

import escudo from "../assets/escudo.png";
import logoCompleto from "../assets/logo-completo.png";
import heroImg from "../assets/hero.jpg";
import fachadaImg from "../assets/escuela-fachada.jpg";

import futbol from "../assets/galeria/futbol.jpg";
import museo from "../assets/galeria/museo.jpg";
import fotografia from "../assets/galeria/fotografia.jpg";
import manualidades from "../assets/galeria/manualidades.jpg";
import lectura from "../assets/galeria/lectura.jpg";
import danza from "../assets/galeria/danza.jpg";
import feria from "../assets/galeria/feria.jpg";
import graduacion from "../assets/galeria/graduacion.jpg";
import podcast from "../assets/galeria/podcast.jpg";
import aniversario from "../assets/galeria/aniversario.jpg";

import pilarBilingue from "../assets/pilares/spelling-bee.jpg";
import pilarMaternal from "../assets/pilares/maternal.jpg";
import pilarDeportes from "../assets/pilares/deportes.jpg";
import pilarEtapas from "../assets/pilares/premiacion.jpg";

/* IDs de las secciones (los usa el menú para hacer scroll) */
/* Enlace de WhatsApp: lo usan "¡Escríbenos!", los "¡Contactanos!", "Quiero información" y el teléfono */
export const WHATSAPP_URL = "https://wa.me/50487814465";

export const SECTIONS = {
  inicio: "inicio",
  pilares: "pilares",
  actividades: "actividades",
  servicios: "servicios",
  matricula: "matricula",
  contacto: "contacto",
};

/* ---------------- Marca ---------------- */
export const brand = {
  name: "Saint Charles' School",
  crest: escudo,
  fullLogo: logoCompleto,
};

/* ---------------- Barra de navegación ---------------- */
export const nav = {
  links: [
    { label: "Inicio", target: SECTIONS.inicio },
    { label: "Pilares", target: SECTIONS.pilares },
    { label: "Actividades", target: SECTIONS.actividades },
    { label: "Servicios", target: SECTIONS.servicios },
    { label: "Contacto", target: SECTIONS.contacto },
  ],
  cta: { label: "¡Escríbenos!", href: WHATSAPP_URL },
};

/* ---------------- Hero (Inicio) ---------------- */
export const hero = {
  badge: { label: "Matrícula abierta 2027", target: SECTIONS.matricula },
  title: ["Educación bilingüe", "para un futuro sin", "fronteras."],
  subtitle:
    "En Saint Charles' School, ofrecemos educación desde maternal hasta secundaria, combinando idiomas, valores, arte y deporte en un ambiente seguro donde tus hijos pueden crecer y aprender.",
  tagline: "Colegio bilingüe en Tegucigalpa · Colonia Humuya",
  cta: { label: "¡Contactanos!", href: WHATSAPP_URL },
  image: heroImg,
  imageAlt: "Niña con el uniforme de Saint Charles' School sonriendo desde una casita de juegos",
};

/* ---------------- Pilares (Identidad) ---------------- */
export const pillars = {
  eyebrow: "Descubrí Saint Charles' School",
  title: ["¿Por qué debería elegir Saint", "Charles' School para mis hijos?"],
  subtitle:
    "En Saint Charles' School combinamos idiomas, aprendizaje, creatividad y formación integral para acompañar a tus hijos en cada etapa de su educación.",
  cta: { label: "¡Contactanos!", href: WHATSAPP_URL },
  items: [
    {
      title: "Educación bilingüe desde pequeños",
      text: "Aprendizaje del inglés desde las primeras etapas, con experiencias que fortalecen la comunicación.",
      image: pilarBilingue,
      alt: "Tres estudiantes frente al mural del Spelling Bee",
    },
    {
      title: "Maternal y preescolar",
      text: "Estimulación temprana, desarrollo de habilidades motrices y aprendizaje mediante el juego.",
      image: pilarMaternal,
      alt: "Dos niños de maternal leyendo cuentos en el suelo",
    },
    {
      title: "Deporte y coprogramáticas",
      text: "Actividades deportivas y artísticas que fomentan el talento, la creatividad y el trabajo en equipo.",
      image: pilarDeportes,
      alt: "Estudiantes jugando fútbol en la cancha",
    },
    {
      title: "Educación para cada etapa",
      text: "Educación integral que combina conocimientos, valores y crecimiento personal en cada etapa.",
      image: pilarEtapas,
      alt: "Estudiantes sonriendo con sus medallas",
    },
  ],
};

/* ---------------- Galería: "Así se vive Saint Charles" ----------------
 *  title    → título que aparece al pasar el cursor
 *  category → etiqueta pequeña sobre el título
 *  area     → posición en la cuadrícula (no cambiar, salvo que
 *             quieras reacomodar la galería en Gallery.jsx)
 */
export const gallery = {
  eyebrow: "Vida escolar",
  title: "Así se vive Saint Charles’ School.",
  blocks: [
    // Bloque 1 (fila de arriba)
    [
      { area: "futbol", image: futbol, category: "Deportes", title: "Campeonato interno de fútbol", alt: "Estudiantes jugando fútbol en la cancha" },
      { area: "museo", image: museo, category: "Giras educativas", title: "Visita al museo", alt: "Estudiantes observando esqueletos en un museo" },
      { area: "foto", image: fotografia, category: "Arte y creatividad", title: "Sonrisas en foco", alt: "Estudiante sosteniendo un marco de cámara de papel" },
      { area: "manual", image: manualidades, category: "Pre-básica", title: "Manualidades en equipo", alt: "Niños decorando dibujos en una mesa roja" },
    ],
    // Bloque 2 (fila de abajo)
    [
      { area: "lectura", image: lectura, category: "Maternal", title: "Rincón de lectura", alt: "Niña eligiendo un libro en la biblioteca" },
      { area: "danza", image: danza, category: "Programa “Qué Mañana”", title: "Danza moderna", alt: "Niñas presentando danza con vestidos amarillos" },
      { area: "feria", image: feria, category: "Proyectos", title: "Feria escolar", alt: "Estudiantes presentando proyectos en una feria" },
      { area: "grad", image: graduacion, category: "9.º grado · Futuros juniors", title: "Día de fotos", alt: "Dos estudiantes de noveno grado con birretes amarillos en el día de fotos" },
      { area: "podcast", image: podcast, category: "Giras universitarias", title: "Tour a las universidades", alt: "Estudiantes en un estudio de grabación durante el tour a las universidades" },
      { area: "aniv", image: aniversario, category: "Comunidad", title: "19.º aniversario", alt: "Estudiantes celebrando el 19.º aniversario de la escuela" },
    ],
  ],
};

/* ---------------- Servicios ---------------- */
export const services = {
  eyebrow: "Nuestros servicios escolares",
  title: ["Mucho más que clases: una", "experiencia escolar completa."],
  subtitle: "Tutorías, actividades extracurriculares y servicios que acompañan el aprendizaje de tus hijos.",
  cta: { label: "¡Contactanos!", href: WHATSAPP_URL },
  image: fachadaImg,
  imageAlt: "Fachada de Saint Charles' School con el escudo en la torre roja",
  items: [
    { title: "Refuerzo escolar y tutorías", text: "Apoyo académico para fortalecer conocimientos y mejorar el aprendizaje." },
    { title: "Plataforma educativa", text: "Acceso digital a materiales, presentaciones y recursos de clase." },
    { title: "Deportes y coprogramáticas", text: "Fútbol, voleibol, arte, música y actividades para descubrir talentos." },
    { title: "Transporte escolar", text: "Rutas escolares seguras para facilitar el traslado de los estudiantes." },
    { title: "Escuela de verano", text: "Juegos y actividades recreativas para disfrutar las vacaciones." },
    { title: "Cafetería escolar", text: "Un espacio seguro e higiénico para la alimentación de los estudiantes." },
  ],
};

/* ---------------- Banner de matrícula ---------------- */
export const enrollment = {
  title: "Matrícula 2027 abierta.",
  text: "Aprovechá las promociones de noviembre. Agendá una visita y conocé nuestras instalaciones.",
  // Botón "Quiero información": abre WhatsApp (enlace en WHATSAPP_URL, arriba)
  cta: { label: "Quiero información", href: WHATSAPP_URL },
};

/* ---------------- Footer / Contacto ---------------- */
export const contact = {
  schedule: {
    label: "Horario de atención",
    days: "Lunes a viernes",
    hours: "De 8:30 AM – 2:00 PM",
  },
  phone: { label: "+8781-4465", href: WHATSAPP_URL }, // abre WhatsApp
  address: "Col. Humuya, atrás de gasolinera Puma del Boulevard Kuwait. Atrás del hospital DIME.",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Saint+Charles+School+Colonia+Humuya+Tegucigalpa",
  social: [
    // Pega aquí el enlace exacto de la página de Facebook:
    { network: "facebook", label: "Saint Charles School - Tegucigalpa, Honduras", href: "https://www.facebook.com/search/top?q=Saint%20Charles%20School%20Tegucigalpa" },
    { network: "instagram", label: "stcharleshn", href: "https://www.instagram.com/stcharleshn/" },
    { network: "tiktok", label: "saintcharlesschool", href: "https://www.tiktok.com/@saintcharlesschool" },
  ],
  copyright: `© ${new Date().getFullYear()} Saint Charles' School`,
  backToTop: "Volver arriba",
};
