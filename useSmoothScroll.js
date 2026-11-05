import { useCallback } from "react";
import { useReducedMotion } from "framer-motion";

/** Alto del header fijo, para que el título de cada sección no quede tapado */
export const HEADER_OFFSET = 72;

/**
 * Devuelve una función que desplaza suavemente la página
 * hasta la sección con ese id (o hasta arriba con "top").
 */
export function useSmoothScroll() {
  const reduce = useReducedMotion();

  return useCallback(
    (target) => {
      const behavior = reduce ? "auto" : "smooth";
      if (target === "top") {
        window.scrollTo({ top: 0, behavior });
        return;
      }
      const el = document.getElementById(target);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top, behavior });
      // Actualiza la URL sin saltos (útil para compartir el enlace a una sección)
      try {
        history.replaceState(null, "", `#${target}`);
      } catch {
        /* algunos entornos no permiten cambiar la URL */
      }
    },
    [reduce]
  );
}
