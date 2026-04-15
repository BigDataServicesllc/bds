import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";

const ContactSection = ({ className = "" }) => {
  const { language } = useOutletContext();
  const isSpanish = language === "es";

  const contactEmail = "info@bigdata-services.com";

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
    <section id="contact" className={`py-40 bg-slate-50 text-slate-950 min-h-[80vh] flex flex-col justify-center ${className}`}>
      <div className="container mx-auto px-6 max-w-4xl pt-10">
        
        {/* TÍTULO MINIMALISTA APPLE TYPE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-slate-400 font-extrabold mb-6 block">
            {isSpanish ? "Contacto Directo" : "Direct Contact"}
          </span>
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight text-slate-950">
            {isSpanish ? "Hablemos de tu " : "Let's Talk About Your "}
            <br className="hidden md:block"/>
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-slate-800">
               {isSpanish ? "Proyecto." : "Project."}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            {isSpanish
              ? "¿Listo para transformar tus datos en valor? Escríbenos directamente y coordinemos un demo."
              : "Ready to turn your data into real value? Email us directly and let's schedule a demo."}
          </p>
        </motion.div>

        {/* TARJETA CENTRAL PREMIUM */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="bg-white border border-slate-200 rounded-[3rem] px-8 sm:px-16 py-16 shadow-2xl relative overflow-hidden group"
        >
          {/* Halos decorativos ultra suaves */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-200/50 transition-colors" />

          <div className="text-center relative z-10">
            <p className="text-sm uppercase tracking-[0.2em] font-bold text-slate-400 mb-6">
              {isSpanish ? "Envíanos un mensaje a" : "Send us a message at"}
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className="inline-block text-3xl sm:text-5xl font-medium text-[#0f172a] hover:text-blue-700 transition-colors duration-300 break-all tracking-tight mb-12"
            >
              {contactEmail}
            </a>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-slate-950 text-white font-bold text-lg shadow-lg hover:bg-blue-700 hover:shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto group/btn"
              >
                {isSpanish ? "Escribir un Email" : "Write an Email"}
                <svg className="w-5 h-5 ml-3 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-slate-200 text-lg font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors w-full sm:w-auto"
              >
                {copied
                  ? isSpanish ? "Copiado ✓" : "Copied ✓"
                  : isSpanish ? "Copiar correo" : "Copy email"}
              </button>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default ContactSection;
