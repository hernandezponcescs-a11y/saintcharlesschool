/**
 * Curvas de movimiento del sistema de diseño (física de resorte).
 * Úsalas siempre en lugar de duraciones fijas.
 */
export const spring = {
  /** Por defecto: hover, clics, indicadores */
  snappy: { type: "spring", stiffness: 500, damping: 36, mass: 1 },
  /** Superficies grandes: imágenes, paneles */
  smooth: { type: "spring", stiffness: 260, damping: 30, mass: 1 },
  /** Solo para detalles con encanto */
  bouncy: { type: "spring", stiffness: 380, damping: 20, mass: 1 },
};

/** Para colores y opacidad (sin rebote) */
export const fade = { ease: [0.23, 1, 0.32, 1], duration: 0.18 };

/** Botones: se elevan al pasar el cursor y se comprimen al hacer clic */
export const pressable = {
  whileHover: { y: -1, scale: 1.02 },
  whileTap: { scale: 0.97 },
  transition: spring.snappy,
};

/** Entrada al aparecer en pantalla (una sola vez) */
export const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { ...spring.smooth, delay },
});
