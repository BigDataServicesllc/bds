import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';

// Importar capturas de pantalla
import Aramare1 from '../assets/development/aramare1.png';
import Aramare2 from '../assets/development/aramare2.png';
import WeBuild1 from '../assets/development/webuild.png';
import WeBuild2 from '../assets/development/webuild2.png';
import TuTurno1 from '../assets/development/tuturno.png';
import TuTurno2 from '../assets/development/tuturno2.png';

// Componente para Carrusel Automático Transparente
const ProjectSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Cambia de imagen cada 4 segundos
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="rounded-3xl bg-slate-100 h-[400px] flex items-center justify-center border border-slate-200 shadow-inner overflow-hidden relative group">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          alt={`Screenshot ${currentIndex + 1}`}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none z-10 transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
      
      {/* Indicadores minimalistas */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
        {images.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all duration-500 bg-white shadow-sm ${idx === currentIndex ? 'w-6 opacity-100' : 'w-2 opacity-50'}`} 
          />
        ))}
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Aramare Café",
    stack: ["React", "Firebase", "Google Analytics", "Tailwind CSS"],
    description: {
      es: "Desarrollo de un ecosistema e-commerce con portal administrativo para gestión de inventario en tiempo real.",
      en: "Development of an e-commerce ecosystem with an administrative portal for real-time inventory management."
    },
    techFocus: {
      es: "Implementación de bases de datos NoSQL para sincronización instantánea y análisis de embudo de ventas.",
      en: "Implementation of NoSQL databases for instant synchronization and sales funnel analysis."
    },
    url: "https://www.aramarecafe.com",
    images: [Aramare1, Aramare2]
  },
  {
    title: "WeBuild Argentina",
    stack: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    description: {
      es: "Plataforma de ingeniería corporativa enfocada en la visualización robusta de proyectos de construcción y servicios civiles.",
      en: "Corporate engineering platform focused on robust visualization of construction projects and civil services."
    },
    techFocus: {
      es: "Arquitectura escalable en la nube con un enfoque en alto rendimiento y optimización de renderizado web para SEO.",
      en: "Scalable cloud architecture focusing on high performance and web rendering optimization for SEO."
    },
    url: "https://www.webuildarg.com",
    images: [WeBuild1, WeBuild2]
  },
  {
    title: "Tu Turno en Línea",
    stack: ["Flutter", "Dart", "Firebase", "RevenueCat"],
    description: {
      es: "Sistema completo de reservas inteligentes mediante una app multiplataforma para clientes y un panel de control nativo para administradores.",
      en: "Complete smart booking system featuring a cross-platform app for clients and a native control panel for administrators."
    },
    techFocus: {
      es: "Sincronización en tiempo real y gestión de suscripciones complejas in-app utilizando RevenueCat y Cloud Functions.",
      en: "Real-time synchronization and complex in-app subscription management using RevenueCat and Cloud Functions."
    },
    url: "https://www.tuturnoenlinea.com",
    images: [TuTurno1, TuTurno2]
  }
];

const PortfolioPage = () => {
  const { language } = useOutletContext();

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <SEO 
        title={language === 'es' ? 'Portfolio y Casos de Estudio' : 'Portfolio and Case Studies'}
        description={language === 'es' 
          ? 'Explora nuestros casos de estudio y proyectos de desarrollo web, apps, e-commerce, paneles de control y sistemas.' 
          : 'Explore our case studies and projects involving web development, mobile apps, e-commerce, dashboards, and systems.'}
        keywords="Portfolio, Case Studies, Tech Projects, React, Next.js, Apps"
      />
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-950 mb-6">
            {language === 'es' ? 'Casos de Estudio' : 'Case Studies'}
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            {language === 'es' ? 'Exploración profunda de nuestra metodología y stack tecnológico.' : 'Deep exploration of our methodology and technology stack.'}
          </p>
        </header>

        <div className="space-y-32">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group/card"
            >
              {/* Separador Minimalista */}
              <div className="w-full h-[1px] bg-slate-100 mb-20 group-first/card:hidden" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-3xl font-bold text-slate-950 mb-6">{project.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map(tech => (
                      <span key={tech} className="bg-slate-50 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-lg text-slate-700 mb-6">{project.description[language]}</p>
                  <div className="bg-bds-aqua/5 border-l-4 border-bds-aqua p-6 rounded-r-xl mb-8">
                    <h4 className="font-bold text-slate-950 text-sm mb-2">
                      {language === 'es' ? 'Stack y Detalle Técnico:' : 'Technical Insight:'}
                    </h4>
                    <p className="text-slate-600 text-sm">{project.techFocus[language]}</p>
                  </div>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-bds-violet font-bold hover:underline">
                    {language === 'es' ? 'Visitar Proyecto Live →' : 'Visit Live Project →'}
                  </a>
                </div>
                
                {/* Carrusel Automático de Capturas */}
                <ProjectSlideshow images={project.images} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
