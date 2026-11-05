/** @type {import('tailwindcss').Config} */
// Colores y tipografía tomados del diseño de Canva.
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#130f22",        // fondo del header, hero y servicios
        ink: "#130f22",         // títulos sobre blanco
        crest: {
          red: "#e91e0d",       // rojo del escudo
          yellow: "#ffca0f",    // amarillo de la franja de matrícula
        },
        flame: {
          from: "#cd1200",      // degradado de etiquetas y numeración
          to: "#fea524",
        },
        lavender: "#6a5c9f",    // borde de las tarjetas de servicios
        card: { bg: "#fafafa", line: "#dedcdc" },
        muted: "#a2a2a2",       // textos del footer
      },
      fontFamily: {
        sans: ['"Poppins"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "1024px" },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -8px rgba(0,0,0,0.10)",
        lift: "0 2px 4px rgba(0,0,0,0.05), 0 24px 48px -16px rgba(0,0,0,0.22)",
        banner: "0 40px 60px -30px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};
