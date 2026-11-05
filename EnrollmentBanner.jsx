import { motion } from "framer-motion";
import { enrollment, SECTIONS } from "../data/content";
import { pressable, reveal } from "../lib/motion";

export default function EnrollmentBanner() {
  return (
    <section id={SECTIONS.matricula} className="bg-white px-4 pb-24 pt-[104px]">
      <motion.div
        {...reveal()}
        className="on-dark relative mx-auto max-w-[861px] overflow-hidden rounded-[16px] bg-navy shadow-banner"
      >
        {/* Franjas del escudo */}
        <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[180px] sm:flex">
          <span className="w-[41px] bg-crest-yellow" />
          <span className="flex-1 bg-[#cf1304]" />
        </div>

        <div className="relative px-[22px] py-8 sm:pr-[220px]">
          <h2 className="text-[30px] font-bold leading-tight tracking-[-0.035em] text-white sm:text-[36px]">{enrollment.title}</h2>
          <p className="mt-3 max-w-[503px] text-justify text-[17px] font-light leading-[26px] text-white/90">{enrollment.text}</p>
          <motion.a
            href={enrollment.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            {...pressable}
            className="mt-4 inline-block rounded-[6px] bg-white px-4 py-1.5 text-[17px] font-normal tracking-[-0.01em] text-black"
          >
            {enrollment.cta.label}
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
