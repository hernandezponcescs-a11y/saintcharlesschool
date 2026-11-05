import { motion } from "framer-motion";
import { pressable } from "../lib/motion";

/**
 * Botón "¡Contactanos!" que abre WhatsApp.
 * variant="white" → fondo blanco (portada)
 * variant="flame" → degradado rojo → naranja (secciones)
 */
export default function ContactButton({ label, href, variant = "flame", className = "" }) {
  const styles =
    variant === "white"
      ? "bg-white text-navy shadow-soft"
      : "bg-flame text-white shadow-[0_8px_24px_-10px_rgba(254,165,36,0.7)]";
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...pressable}
      className={`inline-flex w-fit items-center rounded-md px-2.5 py-1 text-[19px] font-normal tracking-[-0.01em] ${styles} ${className}`}
    >
      {label}
    </motion.a>
  );
}
