import { motion } from "framer-motion";
import { AlarmClock, ArrowUp, CalendarCheck, MapPin, PhoneCall } from "lucide-react";
import { brand, contact, SECTIONS } from "../data/content";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { socialIcons } from "./icons.jsx";
import { spring } from "../lib/motion";

/** Fila con ícono + texto (con enlace opcional) */
function InfoRow({ icon: Icon, children, href, external }) {
  const content = (
    <>
      <Icon aria-hidden="true" className="mt-0.5 h-[26px] w-[26px] shrink-0 text-muted transition-colors duration-200 group-hover:text-ink" strokeWidth={1.5} />
      <span className="transition-colors duration-200 group-hover:text-ink">{children}</span>
    </>
  );
  const cls = "group flex items-start gap-4 text-[16px] leading-[23px] text-muted";
  if (!href) return <div className={cls}>{content}</div>;
  return (
    <motion.a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      whileHover={{ x: 3 }}
      transition={spring.snappy}
      className={cls}
    >
      {content}
    </motion.a>
  );
}

function Label({ children }) {
  return <p className="text-[16px] uppercase tracking-[0.01em] text-muted">{children}</p>;
}

export default function Footer() {
  const scrollTo = useSmoothScroll();

  return (
    <footer id={SECTIONS.contacto} className="bg-white">
      <div className="mx-auto flex max-w-page flex-col gap-12 px-[58px] pb-14 pt-12 md:flex-row md:gap-0">
        {/* Columna izquierda: logo y horario */}
        <div className="flex flex-col items-center gap-14 md:w-[283px] md:items-start md:border-r-[1.5px] md:border-[#d9d9d9] md:pr-12">
          <img src={brand.fullLogo} alt={brand.name} className="w-[233px] max-w-full" />
          <div className="flex w-full flex-col gap-4">
            <Label>{contact.schedule.label}</Label>
            <InfoRow icon={CalendarCheck}>
              <span className="uppercase">{contact.schedule.days}</span>
            </InfoRow>
            <InfoRow icon={AlarmClock}>{contact.schedule.hours}</InfoRow>
          </div>
        </div>

        {/* Columna derecha: contacto y redes */}
        <div className="flex flex-col gap-12 md:pl-[46px] md:pt-10">
          <div className="flex flex-col gap-4">
            <Label>Contacto</Label>
            <InfoRow icon={PhoneCall} href={contact.phone.href} external>
              {contact.phone.label}
            </InfoRow>
            <InfoRow icon={MapPin} href={contact.mapsHref} external>
              <span className="block max-w-[352px]">{contact.address}</span>
            </InfoRow>
          </div>

          <div className="flex flex-col gap-4">
            <Label>Síguenos</Label>
            {contact.social.map((s) => (
              <InfoRow key={s.network} icon={socialIcons[s.network]} href={s.href} external>
                {s.label}
              </InfoRow>
            ))}
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t-[3px] border-[#d9d9d9]">
        <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-7 py-5">
          <span className="text-[16px] text-muted">{contact.copyright}</span>
          <motion.button
            type="button"
            onClick={() => scrollTo("top")}
            whileHover="hover"
            whileTap={{ scale: 0.96 }}
            transition={spring.snappy}
            className="group inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-[16px] text-muted underline underline-offset-4 transition-colors duration-200 hover:text-ink"
          >
            {contact.backToTop}
            <motion.span variants={{ hover: { y: -3 } }} transition={spring.bouncy} className="inline-flex">
              <ArrowUp size={18} strokeWidth={1.75} aria-hidden="true" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
