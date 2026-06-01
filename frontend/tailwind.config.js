/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bds: {
          'base-50': 'oklch(0.984 0.014 180.72 / <alpha-value>)',
          100: 'oklch(0.953 0.051 180.801 / <alpha-value>)',
          200: 'oklch(0.91 0.096 180.426 / <alpha-value>)',
          300: 'oklch(0.855 0.138 181.071 / <alpha-value>)',
          400: 'oklch(0.777 0.152 181.912 / <alpha-value>)',
          500: 'oklch(0.704 0.14 182.503 / <alpha-value>)',
          600: 'oklch(0.6 0.118 184.704 / <alpha-value>)',
          700: 'oklch(0.511 0.096 186.391 / <alpha-value>)',
          800: 'oklch(0.437 0.078 188.216 / <alpha-value>)',
          900: 'oklch(0.386 0.063 188.416 / <alpha-value>)',
          950: 'oklch(0.277 0.046 192.524 / <alpha-value>)',
          aqua: "#06E8D1",
        },
      },
      fontFamily: {
        sans: ["Geist", "system-ui", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        "bds-soft": "0 18px 45px rgba(0, 0, 0, 0.35)",
        "bds-button": "0 14px 40px rgba(6, 232, 209, 0.35)"
      },
    },
  },
  plugins: [],
};
