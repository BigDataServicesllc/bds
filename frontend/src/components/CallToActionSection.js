// RUTA: frontend/src/components/CallToActionSection.js

import React from "react";

const CallToActionSection = ({ language, onNavigate, className = "" }) => {
  const isSpanish = language === "es";

  const handleClick = () => {
    if (onNavigate) {
      onNavigate("contact");
    } else {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      className={`relative py-20 sm:py-24 bg-bds-bg-light ${className}`}
    >
      {/* halo suave detrás del bloque */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[520px] h-[520px] rounded-full bg-bds-aqua/10 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center bg-white/80 backdrop-blur-md rounded-2xl shadow-bds-soft px-8 py-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-bds-text-main mb-4">
            {isSpanish ? "¿Listo para empezar?" : "Ready to get started?"}
          </h2>

          <p className="text-lg md:text-xl text-bds-text-soft mb-8 leading-relaxed">
            {isSpanish
              ? "No dejes que tus datos sean solo números. Convirtámoslos en tu ventaja competitiva más grande. Contáctanos para una consulta sin compromiso."
              : "Don’t let your data be just numbers. Turn it into your biggest competitive advantage. Contact us for a no-obligation consultation."}
          </p>

          <button
            onClick={handleClick}
            className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-bds-aqua text-bds-text-main font-semibold text-lg shadow-bds-button hover:bg-bds-violet hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            {isSpanish ? "Hablemos ahora" : "Let’s talk"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
