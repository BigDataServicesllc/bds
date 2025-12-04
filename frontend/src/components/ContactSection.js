// RUTA: frontend/src/components/ContactSection.js

import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const ContactSection = ({ className = "" }) => {
  const { language } = useOutletContext();
  const isSpanish = language === "es";

  // ⚠️ Cambia este correo por el tuyo real
  const contactEmail = "michael@bigdata-services.com";

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(contactEmail);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (e) {
      console.error("No se pudo copiar el correo", e);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 sm:py-24 bg-primary-dark text-white ${className}`}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* TÍTULO Y SUBTÍTULO */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {isSpanish ? "Hablemos de tu Proyecto" : "Let’s Talk About Your Project"}
          </h2>
          <p className="text-lg text-bds-text-soft max-w-2xl mx-auto">
            {isSpanish
              ? "¿Listo para transformar tus datos en valor? Escríbeme directamente y coordinamos una llamada o una demo."
              : "Ready to turn your data into real value? Email me directly and we’ll schedule a call or a live demo."}
          </p>
        </div>

        {/* BLOQUE CON EL CORREO */}
        <div className="bg-secondary-dark/60 border border-white/10 rounded-2xl px-6 sm:px-10 py-10 shadow-bds-soft">
          <p className="text-sm uppercase tracking-[0.2em] text-bds-text-soft mb-3">
            {isSpanish ? "Correo de contacto" : "Contact email"}
          </p>

          <a
            href={`mailto:${contactEmail}`}
            className="block text-2xl sm:text-3xl font-semibold text-bds-aqua break-all"
          >
            {contactEmail}
          </a>

          <p className="mt-4 text-sm text-bds-text-soft">
            {isSpanish
              ? "Haz clic en el correo para abrir tu cliente de email o copia la dirección para usarla donde prefieras."
              : "Click the email to open your mail client, or copy the address and use it wherever you prefer."}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-accent text-primary-dark font-semibold shadow-bds-button hover:bg-accent-hover hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              {isSpanish ? "Escribir un Email" : "Write an Email"}
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors"
            >
              {copied
                ? isSpanish
                  ? "Copiado ✓"
                  : "Copied ✓"
                : isSpanish
                ? "Copiar correo"
                : "Copy email"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
