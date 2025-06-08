// RUTA: frontend/src/components/HomeSection.js
// CÓDIGO FINAL CON ANIMACIÓN PROFESIONAL

// 1. Importamos 'motion' de framer-motion
import React from 'react';
import { motion } from 'framer-motion';

const HomeSection = ({ language, onNavigate }) => {
  // Mantenemos tu estructura de contenido bilingüe
  const content = {
    es: {
      title: "Impulsando tu Negocio con",
      highlight: "Datos",
      subtitle: "Soluciones de Big Data a la medida para tu éxito.",
      button: "Descubre Nuestros Servicios"
    },
    en: {
      title: "Powering your Business with",
      highlight: "Data",
      subtitle: "Custom Big Data solutions for your success.",
      button: "Discover Our Services"
    }
  };

  // 2. Definimos las "variantes" de la animación para el contenedor y cada palabra
  // Esto nos da un control total sobre la secuencia.
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // La magia: crea un retraso entre la animación de cada hijo
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20, // Empieza 20px más abajo
    },
    visible: {
      opacity: 1,
      y: 0,   // Termina en su posición original
      transition: {
        type: 'spring', // Una transición elástica y suave
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Dividimos el título principal en palabras para animarlas individualmente
  const titleWords = content[language].title.split(" ");

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-primary-dark"></div>
      
      <div className="relative container mx-auto px-4 text-center z-10">
        
        {/* 3. Reemplazamos <h1> por motion.h1 y le aplicamos las variantes */}
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4"
          variants={containerVariants}
          initial="hidden" // El estado inicial
          animate="visible" // El estado final al que animará
        >
          {/* 4. Mapeamos cada palabra para que sea un elemento animado */}
          {titleWords.map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="inline-block mr-3">
              {word}
            </motion.span>
          ))}
          {/* La palabra destacada también se anima como parte de la cascada */}
          <motion.span variants={wordVariants} className="inline-block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {content[language].highlight}
          </motion.span>
        </motion.h1>
        
        {/* 5. También animamos el subtítulo y el botón para una entrada completa */}
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