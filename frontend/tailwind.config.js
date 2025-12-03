/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // 🎨 Paleta de marca BDS
      colors: {
        // Colores de brand directos
        "bds-aqua": "#06E8D1",   // acciones, botones, acentos
        "bds-violet": "#513AF5", // fondos modernos, detalles
        "bds-deep": "#173B3A",   // bloques oscuros, secciones premium
        "bds-blue": "#2B64B2",   // headings, links activos, professional

        // Fondos claros derivados
        "bds-bg-light": "#F5FFFD", // muy suave, con toque aqua
        "bds-bg-muted": "#E8F3FF", // azul muy claro
        "bds-bg-soft": "#F3F4F6",  // gris claro neutro

        // Texto
        "bds-text-main": "#0F172A", // texto principal
        "bds-text-soft": "#64748B", // texto secundario

        // Tokens "legacy" que ya usas en clases (los redefinimos con tu nueva estética)
        "primary-dark": "#020617",   // hero muy oscuro si lo necesitas
        "secondary-dark": "#0B1220", // dark pero no negro
        "tertiary-dark": "#111827",
      },

      // Tipografía y bordes más “premium”
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem",
      },
      fontFamily: {
        // si ya usas Inter en el index.html, esto lo aprovecha
        sans: ["Inter", "system-ui", "BlinkMacSystemFont", "sans-serif"],
      },

      boxShadow: {
        "bds-soft":
          "0 18px 45px rgba(15, 23, 42, 0.35)", // tarjetas / heroes
        "bds-button":
          "0 14px 40px rgba(6, 232, 209, 0.35)", // botones aqua
      },
    },
  },
  plugins: [],
};
