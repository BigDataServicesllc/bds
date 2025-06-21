// RUTA: frontend/src/components/HomeSection.js
// === CÓDIGO FINAL: LA CONSTELACIÓN DE DATOS ===

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
// 1. VOLVEMOS A IMPORTAR EL EFECTO 'NET'
import NET from 'vanta/dist/vanta.net.min'; 
import * as THREE from 'three';

const HomeSection = ({ language, onNavigate }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyrocontrols: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        
        // === LA CONFIGURACIÓN MINIMALISTA Y PROFESIONAL ===
        color: 0x9ca3af,          // Color de los puntos: un gris muy sutil
        backgroundColor: 0x111827, // Tu azul oscuro corporativo (ajusta si es necesario)
        points: 6.00,             // Muy pocos puntos, como estrellas principales
        maxDistance: 20.00,       // Distancia a la que se conectan
        spacing: 20.00,           // Espaciado para que haya mucho aire
        showDots: true            // Aseguramos que los puntos se vean
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // Tu animación de texto, que es el protagonista.
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
      ref={vantaRef}
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Esta capa de gradiente sutil es opcional, pero ayuda a enfocar el texto.
          Si prefieres el fondo puro, puedes comentarla o eliminarla. */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4"
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
        
        <motion.p 
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
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