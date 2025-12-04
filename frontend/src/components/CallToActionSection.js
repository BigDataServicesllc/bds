// RUTA: frontend/src/components/CallToActionSection.js

import React from "react";

const CallToActionSection = ({ language, onNavigate, className = "" }) => {
  const isSpanish = language === "es";

  const handleClick = () => {
    if (onNavigate) {
      onNavigate("contact");
    } else {
      // Fallback por si algún día se usa sin onNavigate
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      className={`relative py-20 sm:py-24 bg-gradient-to-br from-primary-deep via-bds-deep to-bds-blue ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            {isSpanish
              ? "¿Listo para empezar?"
              : "Ready to get started?"}
          </h2>

          <p className="text-lg md:text-xl text-bds-bg-soft/80 mb-10 leading-relaxed">
            {isSpanish
              ? "No dejes que tus datos sean solo números. Convirtámoslos en tu ventaja competitiva más grande. Contáctanos para una consulta sin compromiso."
              : "Don’t let your data be just numbers. Turn it into your biggest competitive advantage. Contact us for a no-obligation consultation."}
          </p>

          <button
            onClick={handleClick}
            className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-accent text-primary-dark font-semibold text-lg shadow-bds-button hover:bg-accent-hover hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            {isSpanish ? "Hablemos Ahora" : "Let’s Talk"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
