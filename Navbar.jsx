import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { brand, nav, SECTIONS } from "../data/content";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { useActiveSection } from "../hooks/useActiveSection";
import { pressable, spring } from "../lib/motion";

const SECTION_IDS = Object.values(SECTIONS);

export default function Navbar() {
  const scrollTo = useSmoothScroll();
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);

  const go = (target) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollTo(target);
  };

  // "matricula" pertenece visualmente a Contacto en el menú
  const activeLink = active === SECTIONS.matricula ? SECTIONS.contacto : active;

  return (
    <header className="on-dark sticky top-0 z-50 border-b-2 border-white/40 bg-navy/90 backdrop-blur-md">
      <nav aria-label="Principal" className="mx-auto flex h-[56px] max-w-page items-center justify-between gap-6 px-4">
        {/* Logo */}
        <a href={`#${SECTIONS.inicio}`} onClick={go(SECTIONS.inicio)} className="flex shrink-0 items-center gap-2.5">
          <img src={brand.crest} alt="" className="h-[34px] w-auto" />
          <span className="text-[17px] font-semibold tracking-[-0.02em] text-white">{brand.name}</span>
        </a>

        {/* Enlaces (escritorio) */}
        <ul className="hidden items-center gap-1 md:flex">
          {nav.links.map((link) => {
            const isActive = activeLink === link.target;
            return (
              <li key={link.target} className="relative">
                <a
                  href={`#${link.target}`}
                  onClick={go(link.target)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative block px-1.5 py-1 text-[19px] font-light tracking-[-0.01em] transition-colors duration-200 ${
                    isActive ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      transition={spring.snappy}
                      className="bg-flame absolute inset-x-1.5 -bottom-0.5 h-[2px] rounded-full"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          {/* Botón ¡Escríbenos! */}
          <motion.a
            href={nav.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            {...pressable}
            className="hidden rounded-md bg-white px-2.5 py-1 text-[17px] font-normal tracking-[-0.01em] text-navy shadow-soft sm:block"
          >
            {nav.cta.label}
          </motion.a>

          {/* Botón de menú (celular) */}
          <motion.button
            type="button"
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.92 }}
            transition={spring.snappy}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid h-10 w-10 place-items-center rounded-md text-white md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </nav>

      {/* Menú desplegable (celular) */}
      <AnimatePresence>
        {open && (
          <motion.ul
            id="menu-movil"
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={spring.smooth}
            className="overflow-hidden border-t border-white/10 px-4 md:hidden"
          >
            {nav.links.map((link) => (
              <li key={link.label}>
                <a
                  href={`#${link.target}`}
                  onClick={go(link.target)}
                  className="block border-b border-white/10 py-3 text-[17px] font-light text-white/90"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={nav.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block py-3 text-[17px] font-medium text-white"
              >
                {nav.cta.label}
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
