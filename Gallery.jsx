import { motion } from "framer-motion";
import { gallery, SECTIONS } from "../data/content";
import SectionHeading from "./SectionHeading.jsx";
import { useCanHover } from "../hooks/useCanHover";
import { spring, fade } from "../lib/motion";

/* En celular algunas fotos ocupan dos filas o dos columnas */
const MOBILE_SPAN = { futbol: "wide", manual: "wide", danza: "wide", aniv: "wide" };

/* Estados de la animación de cada foto */
const imageVariants = { rest: { scale: 1 }, hover: { scale: 1.08 } };
const overlayVariants = {
  rest: { opacity: 0, y: 16 },
  hover: { opacity: 1, y: 0 },
};
const shadeVariants = { rest: { opacity: 0 }, hover: { opacity: 1 } };

/** Una foto de la galería con zoom suave y tarjeta con el título */
function GalleryItem({ item, alwaysShowCaption }) {
  const state = alwaysShowCaption ? "hover" : undefined;
  return (
    <motion.figure
      initial="rest"
      animate={state ?? "rest"}
      whileHover="hover"
      whileFocus="hover"
      tabIndex={0}
      aria-label={`${item.title} — ${item.category}`}
      style={{ "--area": item.area }}
      className={`group relative m-0 overflow-hidden rounded-[14px] bg-neutral-100 outline-none ring-navy/80 focus-visible:ring-2 focus-visible:ring-offset-2 ${
        MOBILE_SPAN[item.area] ?? ""
      }`}
    >
      <motion.img
        src={item.image}
        alt={item.alt}
        loading="lazy"
        variants={imageVariants}
        transition={spring.smooth}
        className="h-full w-full object-cover will-change-transform"
      />

      {/* Sombra inferior suave para que el texto se lea */}
      <motion.div
        aria-hidden="true"
        variants={shadeVariants}
        transition={fade}
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(19,15,34,0.55),rgba(19,15,34,0)_55%)]"
      />

      {/* Tarjeta con el título de la actividad */}
      <motion.figcaption
        variants={overlayVariants}
        transition={spring.snappy}
        className="pointer-events-none absolute inset-x-2.5 bottom-2.5 rounded-[10px] border border-white/10 bg-navy/75 px-3 py-2 text-white backdrop-blur-md"
      >
        <span className="block text-[10px] font-medium uppercase tracking-[0.06em] text-flame-to">{item.category}</span>
        <span className="block text-[13px] font-semibold leading-tight tracking-[-0.01em] sm:text-[14px]">{item.title}</span>
      </motion.figcaption>
    </motion.figure>
  );
}

export default function Gallery() {
  const canHover = useCanHover();

  return (
    <section id={SECTIONS.actividades} className="bg-white">
      <div className="mx-auto max-w-page px-9 pb-8">
        <SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} />

        <div className="mt-3 flex flex-col gap-[7px]">
          {gallery.blocks.map((block, b) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={spring.smooth}
              className={`gallery-grid gap-[7px] ${b === 0 ? "gallery-a" : "gallery-b"}`}
            >
              {block.map((item) => (
                <GalleryItem key={item.area} item={item} alwaysShowCaption={!canHover} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
