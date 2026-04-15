import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Datos centrales de servicios
import { servicesData } from '../data/services';

const ServiceIcon = ({ type, className }) => {
  const iconProps = { className, strokeWidth: 1.5, fill: 'none', stroke: 'currentColor' };
  
  switch(type) {
    case 'consultoria':
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'netsuite':
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'desarrollo-web-movil':
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M12 2v20M2 12h20" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
};

const ServicesSection = ({ language, className }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] },
    },
  };

  return (
    <section id="services" className={`relative py-32 bg-[#050505] overflow-hidden ${className || ''}`}>
      {/* Luces de ambiente sutiles de fondo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-bds-aqua/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-bds-violet/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* CABECERA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-bds-aqua font-bold mb-4 block">
            {language === 'es' ? 'Excelencia Técnica' : 'Technical Excellence'}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
            {language === 'es' ? 'Servicios de' : 'Services in'}
            <span className="block bg-gradient-to-r from-bds-aqua to-bds-violet bg-clip-text text-transparent italic">
              Nueva Generación
            </span>
          </h2>
          <div className="h-1 w-20 bg-bds-aqua mx-auto rounded-full mb-8 opacity-50" />
        </motion.div>

        {/* GRID ESTILO APPLE BENTO */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative flex flex-col justify-between h-full p-10 rounded-[2.5rem] bg-[#0f0f0f] border border-white/5 hover:border-bds-aqua/30 transition-all duration-700 ease-out overflow-hidden"
            >
              {/* Efecto Glow en Hover */}
              <div className="absolute -inset-x-20 -top-40 h-64 bg-bds-aqua/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div>
                <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 text-bds-aqua group-hover:scale-110 group-hover:bg-bds-aqua group-hover:text-black transition-all duration-500">
                  <ServiceIcon type={service.id} className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                  {service.title[language]}
                </h3>
                
                <p className="text-slate-400 text-base leading-relaxed font-light mb-8 group-hover:text-slate-200 transition-colors">
                  {service.description[language]}
                </p>
              </div>

              <Link
                to={`/servicios/${service.id}`}
                className="inline-flex items-center text-sm font-medium tracking-wide text-white/50 group-hover:text-bds-aqua transition-all duration-300"
              >
                {language === 'es' ? 'Explorar Solución' : 'Explore Solution'}
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;