// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0A192F',
        'secondary-dark': '#112240',
        'tertiary-dark': '#0E2A47', // <-- AÑADE ESTA LÍNEA
      }
    },
  },
  plugins: [],
}