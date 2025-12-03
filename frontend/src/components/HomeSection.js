// RUTA: frontend/src/components/HomeSection.js
// Versión sin GSAP / ScrollTrigger. Hero estático con animación de entrada.

import React from "react";
import { motion } from "framer-motion";

const content = {
  es: {
    title: "Impulsando tu Negocio con",
    highlight: "Datos",
    subtitle: "Soluciones de Big Data a la medida para tu éxito.",
    button: "Descubre Nuestros Servicios",
  },
  en: {
    title: "Powering your Business with",
    highlight: "Data",
    subtitle: "Custom Big Data solutions for your success.",
    button: "Discover Our Services",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const HomeSection = ({ language, onNavigate }) => {
  const copy = content[language] || content.es;
  const titleWords = copy.title.split(" ");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-primary-dark"
    >
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            variants={wordVariants}
            className="inline-block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            {copy.highlight}
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: titleWords.length * 0.1 }}
        >
          {copy.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: titleWords.length * 0.1 + 0.1,
          }}
        >
          <button
            onClick={() => onNavigate("services")}
            className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
          >
            {copy.button}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
