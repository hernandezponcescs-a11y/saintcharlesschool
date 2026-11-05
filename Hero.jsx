import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { hero, SECTIONS } from "../data/content";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { spring } from "../lib/motion";
import ContactButton from "./ContactButton.jsx";

export default function Hero() {
  const scrollTo = useSmoothScroll();

  return (
    <section id={SECTIONS.inicio} className="on-dark relative isolate overflow-hidden bg-navy">
      {/* Foto a la derecha, fundida con el azul noche */}
      {/* overflow-hidden: el zoom de la foto no se sale de su caja */}
      <div className="absolute inset-y-0 right-0 -z-10 w-full overflow-hidden md:w-[calc(50%-20px)]">
        <motion.img
          src={hero.image}
          alt={hero.imageAlt}
          initial={{ scale: 1.24 }}
          animate={{ scale: 1.18 }}
          transition={{ ...spring.smooth, stiffness: 60, damping: 20 }}
          className="h-full w-full origin-[60%_40%] object-cover object-[58%_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent md:via-navy/10" />
        <div className="absolute inset-0 bg-navy/55 md:hidden" />
      </div>

      <div className="mx-auto flex min-h-[520px] max-w-page flex-col justify-center px-[30px] py-16">
        {/* Botón "Matrícula abierta 2027" → baja al banner de matrícula */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={spring.smooth}
        >
          <motion.button
            type="button"
            onClick={() => scrollTo(hero.badge.target)}
            initial="rest"
            animate="rest"
            whileHover="hover"
            whileFocus="hover"
            whileTap={{ scale: 0.96 }}
            variants={{ rest: { scale: 1 }, hover: { scale: 1.03 } }}
            transition={spring.snappy}
            className="bg-flame inline-flex w-fit items-center gap-2 rounded-xl px-2.5 py-1.5 text-[19px] font-bold tracking-[-0.02em] text-white shadow-[0_8px_24px_-10px_rgba(254,165,36,0.7)] sm:text-[24px]"
          >
            <span>{hero.badge.label}</span>
            <motion.span
              aria-hidden="true"
              variants={{ rest: { width: 0, opacity: 0, x: -6, marginLeft: -8 }, hover: { width: 22, opacity: 1, x: 0, marginLeft: 0 } }}
              transition={spring.bouncy}
              className="inline-flex overflow-hidden"
            >
              <ArrowRight size={22} strokeWidth={2.5} className="shrink-0" />
            </motion.span>
          </motion.button>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring.smooth, delay: 0.05 }}
          className="mt-6 text-[38px] font-bold leading-[1.12] tracking-[-0.035em] text-white sm:text-[52px]"
        >
          {hero.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring.smooth, delay: 0.1 }}
          className="mt-4 max-w-[515px] text-justify text-[15px] font-light leading-[21px] text-white/90"
        >
          {hero.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 text-[13px] font-semibold tracking-[-0.005em] text-white/85"
        >
          {hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring.smooth, delay: 0.25 }}
          className="mt-6"
        >
          <ContactButton {...hero.cta} variant="white" />
        </motion.div>
      </div>
    </section>
  );
}
