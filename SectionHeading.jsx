import { motion } from "framer-motion";
import { reveal } from "../lib/motion";

/**
 * Encabezado de sección: etiqueta pequeña con degradado + título grande.
 * `title` puede ser un texto o una lista de líneas.
 */
export default function SectionHeading({ eyebrow, title, dark = false, eyebrowCase = "upper", className = "" }) {
  const lines = Array.isArray(title) ? title : [title];
  return (
    <motion.div {...reveal()} className={className}>
      <p
        className={`text-flame text-[14px] font-normal leading-5 ${
          eyebrowCase === "upper" ? "uppercase tracking-[0.02em]" : ""
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-2 text-[34px] font-bold leading-[1.05] tracking-[-0.035em] sm:text-[40px] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>
    </motion.div>
  );
}
