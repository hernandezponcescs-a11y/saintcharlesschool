import { useEffect, useState } from "react";

/** false en pantallas táctiles: ahí la galería muestra los títulos siempre */
export function useCanHover() {
  const query = "(hover: hover) and (pointer: fine)";
  const [canHover, setCanHover] = useState(
    () => typeof window === "undefined" || window.matchMedia(query).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setCanHover(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return canHover;
}
