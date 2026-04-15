import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';

// Importar imágenes de alta calidad
import consultingImg from '../assets/services/consulting.jpeg';
import netsuiteImg from '../assets/services/netsuite.jpeg';
import engineeringImg from '../assets/services/engineering.jpeg';
import visualizationImg from '../assets/services/visualization.jpeg';
import developmentImg from '../assets/services/development.jpeg';

// Mapeo seguro a los IDs de los servicios existentes
const imageMap = {
  'consultoria': consultingImg,
  'netsuite': netsuiteImg,
  'ingenieria': engineeringImg,
  'visualizacion': visualizationImg,
  'desarrollo-web-movil': developmentImg
};

const ServicesSection = ({ language, className }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }, // Apple-like spring/ease
    },
  };

  return (
    <section id="services" className={`relative py-32 bg-slate-50 overflow-hidden ${className || ''}`}>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* CABECERA MINIMALISTA APPLE TYPE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-slate-400 font-extrabold mb-6 block">
            {language === 'es' ? 'Soluciones Core' : 'Core Solutions'}
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-950 mb-8 leading-tight">
            {language === 'es' ? 'La tecnología que ' : 'The technology that '}
            <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bds-violet to-bds-aqua">
               {language === 'es' ? 'transforma tu industria.' : 'transforms your industry.'}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
            {language === 'es' 
              ? 'Conectamos estrategia y datos. Entregamos plataformas robustas e inteligencia de negocios a la medida.' 
              : 'We connect strategy and data. We deliver robust platforms and custom business intelligence.'}
          </p>
        </motion.div>

        {/* MASONRY / BENTO GRID APPLE STYLE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10"
        >
          {servicesData.map((service, idx) => {
            // El patrón será: Las dos primeras ocupan 50% (col-span-6), las últimas tres 33% (col-span-4)
            const gridClass = idx < 2 
              ? 'col-span-1 md:col-span-6' 
              : 'col-span-1 md:col-span-6 lg:col-span-4';

            // Damos mayor altura a las imágenes de los headers superiores
            const imgHeightClass = idx < 2 ? 'h-72 md:h-96' : 'h-64';

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`group flex flex-col bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-700 ease-out hover:-translate-y-3 border border-slate-100 ${gridClass}`}
              >
                {/* IMAGEN HERO DE ALTA CALIDAD */}
                <div className={`w-full overflow-hidden relative ${imgHeightClass} bg-slate-100`}>
                    <img 
                      src={imageMap[service.id]} 
                      alt={service.title[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" 
                    />
                    {/* Badge Apple Flotante */}
                    <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-white/90 backdrop-blur-xl px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-slate-900 shadow-sm border border-white/20">
                        {service.id.replace('-', ' ').split(' ')[0]} 
                    </div>
                </div>
                
                {/* CONTENIDO TIPOGRÁFICO CLEAN */}
                <div className="p-8 md:p-12 flex flex-col flex-grow">
                    <h3 className="text-3xl font-bold tracking-tight text-slate-950 mb-4">
                       {service.title[language]}
                    </h3>
                    <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10 flex-grow group-hover:text-slate-700 transition-colors">
                       {service.description[language]}
                    </p>
                    
                    {/* ACCIÓN (PILL BUTTON ANIMADO) */}
                    <div className="mt-auto">
                        <Link 
                          to={`/servicios/${service.id}`} 
                          className="inline-flex items-center text-slate-950 font-bold bg-slate-50 px-6 py-3 rounded-full group-hover:bg-bds-aqua group-hover:text-slate-950 transition-all duration-300 shadow-sm hover:shadow"
                        >
                            {language === 'es' ? 'Descubrir' : 'Discover'}
                            <div className="ml-3 w-8 h-8 rounded-full bg-white flex items-center justify-center text-bds-violet group-hover:bg-slate-950 group-hover:text-white transition-colors duration-300">
                              <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                        </Link>
                    </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;