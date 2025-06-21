// RUTA: frontend/src/components/HomeSection.js
// === CÓDIGO FINAL CON AJUSTES RESPONSIVOS PARA MÓVILES ===

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const HomeSection = ({ language, onNavigate }) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const logoRef = useRef(null);

  useLayoutEffect(() => {
    // Usamos el hook de GSAP para manejar las animaciones de scroll.
    // La lógica de la animación no cambia, ya es perfecta.
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 1,
        },
      });

      timeline
        .to(contentRef.current, { opacity: 0, duration: 1 }, 0)
        .fromTo(logoRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 }, 0);

    }, sectionRef);

    return () => ctx.revert(); 
  }, []);

  // La animación de entrada de Framer Motion tampoco cambia.
  const content = {
    es: { title: "Impulsando tu Negocio con", highlight: "Datos", subtitle: "Soluciones de Big Data a la medida para tu éxito.", button: "Descubre Nuestros Servicios" },
    en: { title: "Powering your Business with", highlight: "Data", subtitle: "Custom Big Data solutions for your success.", button: "Discover Our Services" }
  };
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const wordVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } } };
  const titleWords = content[language].title.split(" ");

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-primary-dark"
    >
      {/* 1. AJUSTE RESPONSIVO PARA EL LOGO */}
      {/* Será text-5xl en móviles y text-8xl en pantallas más grandes */}
      <div 
        ref={logoRef} 
        className="absolute inset-0 flex items-center justify-center opacity-0 px-4"
      >
        <h2 className="text-5xl md:text-8xl font-bold text-white text-center">
          Big Data Services
        </h2>
      </div>

      {/* Contenido original (eslogan y botón) */}
      <div ref={contentRef} className="relative z-10 container mx-auto px-4 text-center">
        {/* 2. AJUSTE RESPONSIVO PARA EL ESLOGAN */}
        {/* Será text-4xl en móviles y text-7xl en pantallas más grandes */}
        <motion.h1 
          className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {titleWords.map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="inline-block mr-3">
              {word}
            </motion.span>
          ))}
          <motion.span variants={wordVariants} className="inline-block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {content[language].highlight}
          </motion.span>
        </motion.h1>
        
        {/* 3. AJUSTE RESPONSIVO PARA EL SUBTÍTULO */}
        {/* Será text-base en móviles y text-xl en pantallas más grandes */}
        <motion.p 
          className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: titleWords.length * 0.1 }}
        >
          {content[language].subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: (titleWords.length * 0.1) + 0.1 }}
        >
          <button 
            onClick={() => onNavigate('services')}
            className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
          >
            {content[language].button}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;