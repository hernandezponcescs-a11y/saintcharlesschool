import { motion } from "framer-motion";
import { services, SECTIONS } from "../data/content";
import SectionHeading from "./SectionHeading.jsx";
import ContactButton from "./ContactButton.jsx";
import { spring } from "../lib/motion";

function ServiceCard({ title, text, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ ...spring.smooth, delay: (index % 2) * 0.06 + Math.floor(index / 2) * 0.05 }}
      whileHover={{ y: -6, transition: spring.snappy }}
      tabIndex={0}
      className="rounded-[18px] border-[1.5px] border-[#504579] bg-navy/85 px-6 py-[22px] backdrop-blur-[2px] transition-[background-color,border-color,box-shadow] duration-300 hover:border-[#8a7cc8] hover:bg-[#1b1630] hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.7)]"
    >
      <div className="flex gap-3">
        {/* Barra de acento con el degradado de la marca */}
        <span aria-hidden="true" className="mt-1 w-[2px] shrink-0 self-stretch rounded-full bg-gradient-to-b from-flame-to to-flame-from" />
        <div>
          <h3 className="text-[16px] font-semibold leading-6 tracking-[-0.02em] text-white">{title}</h3>
          <p className="mt-0.5 text-justify text-[12.5px] font-light leading-[17px] text-white/85">{text}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id={SECTIONS.servicios} className="on-dark relative isolate mt-8 overflow-hidden bg-navy">
      {/* Fachada de la escuela a la derecha */}
      <div className="absolute inset-y-0 right-0 -z-10 w-full md:w-[52%]">
        <img src={services.image} alt={services.imageAlt} loading="lazy" className="h-full w-full object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/40 to-transparent" />
        <div className="absolute inset-0 bg-navy/70 md:hidden" />
      </div>

      <div className="mx-auto max-w-page px-9 pb-4 pt-12">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <SectionHeading eyebrow={services.eyebrow} title={services.title} dark />
          <ContactButton {...services.cta} className="order-first sm:order-none" />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-5 max-w-[520px] text-[15px] font-light leading-[21px] text-white/90"
        >
          {services.subtitle}
        </motion.p>

        <div className="mt-6 grid max-w-[632px] grid-cols-1 gap-x-10 gap-y-3 pb-4 sm:grid-cols-2">
          {services.items.map((item, i) => (
            <ServiceCard key={item.title} index={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
