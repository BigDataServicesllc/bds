import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { Link, useParams, useOutletContext, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData, allTech } from '../data/services';

// IMÁGENES DE ALTA CALIDAD PARA CADA SERVICIO
import consultingImg from '../assets/services/consulting.jpeg';
import netsuiteImg from '../assets/services/netsuite.jpeg';
import engineeringImg from '../assets/services/engineering.jpeg';
import visualizationImg from '../assets/services/visualization.jpeg';
import developmentImg from '../assets/services/development.jpeg';

const imageMap = {
  'consultoria': consultingImg,
  'netsuite': netsuiteImg,
  'ingenieria': engineeringImg,
  'visualizacion': visualizationImg,
  'desarrollo-web-movil': developmentImg
};

const ServiceDetailPage = () => {
  const { language } = useOutletContext();
  const { serviceId } = useParams();

  const service = servicesData.find((s) => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const isSpanish = language === 'es';

  // Multiplicamos el array de tecnologías para crear el efecto de carrusel infinito
  const infiniteTechList = [
    ...service.details.tech,
    ...service.details.tech,
    ...service.details.tech,
    ...service.details.tech,
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 pt-32 pb-24">
      <SEO 
        title={service.title[language]}
        description={service.details.main[language]}
        keywords={`${service.title.en}, ${service.title.es}, ${service.details.tech.join(', ')}`}
      />
      {/* 
        =======================================================================
        SPLIT HERO COMPONENT (APPLE BENTO)
        =======================================================================
      */}
      <div className="container mx-auto px-6 lg:px-12 mb-20">
        <div className="max-w-6xl mx-auto">
          {/* Navegación Back */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
            <Link
              to="/#services"
              className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-bds-violet transition-colors uppercase tracking-widest"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {isSpanish ? 'Volver a Servicios' : 'Back to Services'}
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* IZQUIERDA: CONTENIDO */}
            <motion.div 
              initial="hidden" animate="visible" variants={fadeUp}
              className="lg:col-span-6 flex flex-col justify-center bg-white rounded-[2.5rem] p-10 md:p-12 shadow-xl border border-slate-100"
            >
              <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-bds-aqua mb-6 block drop-shadow-sm">
                BDS Service
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-950 leading-tight mb-6">
                {service.title[language]}
              </h1>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8 flex-grow">
                {service.details.main[language]}
              </p>
            </motion.div>

            {/* DERECHA: IMAGEN CON EFECTO PARALLAX SUAVE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="w-full h-full min-h-[350px] lg:min-h-full rounded-[2.5rem] overflow-hidden shadow-2xl relative bg-slate-900 border border-slate-200">
                <img
                  src={imageMap[service.id]}
                  alt={service.title[language]}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* 
        =======================================================================
        NUESTRO PROCESO Y TECNOLOGÍAS
        =======================================================================
      */}
      <div className="container mx-auto px-6 lg:px-12 mb-20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* CABECERA PROCESO */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
              {isSpanish ? 'Nuestro Proceso' : 'Our Process'}
            </h2>
            <p className="text-slate-500 font-medium">
              {isSpanish ? 'Un enfoque estructurado y escalable para garantizar el éxito.' : 'A structured and scalable approach to ensure success.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {service.details.process.map((step, index) => (
              <motion.div 
                variants={fadeUp} key={index} 
                className="group relative bg-white border border-slate-100 p-10 md:p-12 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-bds-aqua/30 flex flex-col items-center text-center overflow-hidden z-0"
              >
                {/* Número gigante tipo marca de agua en la esquina superior derecha */}
                <span className="absolute -top-6 -right-2 text-[140px] font-black text-slate-50 opacity-80 group-hover:text-bds-aqua/10 group-hover:-translate-y-4 group-hover:scale-110 transition-all duration-700 pointer-events-none select-none z-[-1]">
                  {index + 1}
                </span>

                <div className="relative z-10 w-full flex flex-col items-center">
                  {/* Número grande estilizado sin caja */}
                  <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-400 group-hover:from-bds-violet group-hover:to-bds-aqua transition-all duration-500 tracking-tighter mb-6 inline-block drop-shadow-sm">
                    0{index + 1}.
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 mb-4">{step.title[language]}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{step.description[language]}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* TECNOLOGÍAS - INFINITE CAROUSEL */}
          <motion.div variants={fadeUp} className="bg-white rounded-[3rem] py-12 md:py-16 shadow-xl border border-slate-100 text-center relative overflow-hidden">
            <div className="px-12 md:px-16 mb-12">
              <h3 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
                {isSpanish ? 'Tecnologías que Utilizamos' : 'Technologies We Use'}
              </h3>
              <p className="text-slate-500 font-medium">
                {isSpanish ? 'Integramos herramientas de vanguardia para desplegar excelencia técnica.' : 'We integrate cutting-edge tools to deploy technical excellence.'}
              </p>
            </div>
            
            {/* Carrusel */}
            <div className="relative flex w-full overflow-hidden">
              {/* Degradados laterales para hacer fade in/out */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
              
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  ease: "linear",
                  duration: 20,
                  repeat: Infinity,
                }}
                className="flex w-max gap-8 px-8"
              >
                {infiniteTechList.map((techName, index) => {
                  const Logo = allTech[techName];
                  if (!Logo) return null;

                  return (
                    <div key={`${techName}-${index}`} className="flex justify-center items-center h-24 flex-shrink-0 px-8 hover:scale-110 transition-transform duration-300 group">
                      <Logo className="w-auto h-16 sm:h-20 max-w-[180px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" title={techName} />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* 
        =======================================================================
        FINAL CTA - APPLE PRODUCT STYLE
        =======================================================================
      */}
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="text-center rounded-[3rem] p-12 md:p-20 bg-white shadow-2xl border border-slate-100 max-w-5xl mx-auto relative overflow-hidden"
        >
           {/* Background glow para el boton */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-bds-violet/10 blur-[100px] rounded-full pointer-events-none" />

          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-6 tracking-tight relative z-10">
            {isSpanish ? `¿Listo para potenciar tu ${service.title.es}?` : `Ready to boost your ${service.title.en}?`}
          </h3>

          <p className="text-slate-500 text-lg mb-12 max-w-xl mx-auto relative z-10 font-medium">
             {isSpanish ? 'Contáctanos y descubre cómo podemos transformar tu negocio con soluciones a medida.' : 'Contact us and discover how we can transform your business with cutting-edge solutions.'}
          </p>

          <div className="relative z-10">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-10 py-5 bg-slate-950 text-white text-lg font-bold rounded-full shadow-lg border border-slate-800 hover:bg-bds-aqua hover:border-bds-aqua hover:text-slate-950 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              {isSpanish ? 'Hablemos' : "Let's Talk"}
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default ServiceDetailPage;