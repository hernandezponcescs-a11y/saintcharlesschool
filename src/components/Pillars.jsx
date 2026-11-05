import { motion } from "framer-motion";
import { pillars, SECTIONS } from "../data/content";
import SectionHeading from "./SectionHeading.jsx";
import ContactButton from "./ContactButton.jsx";
import { spring } from "../lib/motion";

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
      </div>
    </section>
  );
}
