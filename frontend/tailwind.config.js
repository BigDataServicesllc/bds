// RUTA: frontend/tailwind.config.js
// CÓDIGO ACTUALIZADO

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0A192F',
        'secondary-dark': '#112240',
        'tertiary-dark': '#0E2A47',
        // --- NUEVA SECCIÓN DE COLORES DE ACENTO ---
        accent: {
          DEFAULT: '#F97316', // Naranja vibrante como color principal
          hover: '#FB923C',   // Un naranja más claro para el estado hover
          dark: '#EA580C',    // Un naranja más oscuro para sombras o bordes
        },
        // --- FIN DE LA NUEVA SECCIÓN ---
      }
    },
  },
  plugins: [],
}