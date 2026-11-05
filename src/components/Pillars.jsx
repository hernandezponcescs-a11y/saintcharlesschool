import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { contact, pillars, SECTIONS } from "../data/content";
import SectionHeading from "./SectionHeading.jsx";
import ContactButton from "./ContactButton.jsx";
import { reveal, spring } from "../lib/motion";

/** Tarjeta flotante con foto: entra con resorte y se eleva al pasar el cursor */
function PillarCard({ number, title, text, image, alt, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...spring.bouncy, delay: index * 0.08 }}
      whileHover="hover"
      whileTap={{ scale: 0.98, transition: spring.snappy }}
      variants={{ hover: { y: -10, transition: spring.snappy } }}
      tabIndex={0}
      className="group flex flex-col rounded-[22px] border-[1.5px] border-card-line bg-card-bg p-3 pb-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-[box-shadow,border-color] duration-300 hover:border-black/10 hover:shadow-lift"
    >
      <div className="aspect-[200/116] overflow-hidden rounded-[18px] bg-neutral-100">
        <motion.img
          src={image}
          alt={alt}
          loading="lazy"
          variants={{ hover: { scale: 1.06 } }}
          transition={spring.smooth}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-1.5">
        <span className="text-flame mt-3 inline-block text-[16px] font-normal">{number}</span>
        <h3 className="mt-1 text-[18px] font-bold leading-[1.15] tracking-[-0.02em] text-ink">{title}</h3>
        <p className="mt-3 text-justify text-[12px] leading-[17px] text-ink/90">{text}</p>
      </div>
    </motion.article>
  );
}

/** Botón rojo "¡Estamos en una ubicación céntrica!" → abre Google Maps (mismo enlace que el footer) */
function LocationButton({ label, detail, href }) {
  return (
    <motion.div {...reveal(0.1)} className="mt-10 flex justify-center">
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover="hover"
        whileTap={{ scale: 0.97 }}
        variants={{ hover: { y: -2, scale: 1.02 } }}
        transition={spring.snappy}
        className="group inline-flex w-full max-w-[440px] items-center gap-4 rounded-2xl bg-crest-red px-5 py-4 text-left text-white shadow-[0_14px_32px_-14px_rgba(233,30,13,0.75)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-14px_rgba(233,30,13,0.85)] sm:w-auto sm:max-w-none sm:px-6"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
          <MapPin aria-hidden="true" className="h-[22px] w-[22px]" strokeWidth={2} />
        </span>
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="text-[16px] font-semibold leading-[21px] tracking-[-0.01em] sm:text-[18px] sm:leading-[23px]">{label}</span>
          <span className="mt-0.5 text-[12.5px] leading-[17px] text-white/80">{detail}</span>
        </span>
        <motion.span variants={{ hover: { x: 4 } }} transition={spring.bouncy} className="inline-flex shrink-0">
          <ArrowRight aria-hidden="true" className="h-[22px] w-[22px]" strokeWidth={2} />
        </motion.span>
      </motion.a>
    </motion.div>
  );
}

export default function Pillars() {
  return (
    <section id={SECTIONS.pilares} className="bg-white">
      <div className="mx-auto max-w-page px-9 pb-24 pt-9">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <SectionHeading eyebrow={pillars.eyebrow} title={pillars.title} />
          <ContactButton {...pillars.cta} className="order-first sm:order-none" />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-4 max-w-[670px] text-[15px] leading-[21px] text-ink"
        >
          {pillars.subtitle}
        </motion.p>

        <div className="mt-9 grid grid-cols-1 gap-[17px] sm:grid-cols-2 lg:grid-cols-4">
          {pillars.items.map((item, i) => (
            <PillarCard key={item.title} index={i} number={String(i + 1).padStart(2, "0")} {...item} />
          ))}
        </div>

        <LocationButton {...pillars.location} href={contact.mapsHref} />
      </div>
    </section>
  );
}
