// RUTA: frontend/src/pages/ServiceDetailPage.js
import React from 'react';
import { Link, useParams, useOutletContext, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData, allTech } from '../data/services';

const ServiceDetailPage = () => {
  const { language } = useOutletContext();
  const { serviceId } = useParams();

  // Buscamos el servicio según el id de la URL
  const service = servicesData.find((s) => s.id === serviceId);

  // Si no existe, volvemos al home
  if (!service) {
    return <Navigate to="/" replace />;
  }

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    // CAMBIO: Fondo base claro en lugar de oscuro
    <div className="min-h-screen pt-28 bg-white text-slate-950">
      
      {/* === HERO WRAPPER: Fondo blanco === */}
      <div className="pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 py-16">
          {/* === HERO: título, descripción y foto del servicio === */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                {/* Link "Volver" */}
                <Link
                  to="/servicios"
                  className="text-slate-600 hover:text-bds-aqua transition-colors duration-300 inline-flex items-center mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  {language === 'es' ? 'Volver a Servicios' : 'Back to Services'}
                </Link>

                {/* Título */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-4">
                  {service.title[language]}
                </h1>
                
                {/* Descripción */}
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.details.main[language]}
                </p>
              </div>

              <div className="w-full h-80 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={service.image}
                  alt={service.title[language]}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fin del HERO WRAPPER */}

      {/* 
        === CONTENIDO RESTANTE === 
        Envolvemos el resto en un contenedor blanco para continuar 
        la transición del degradado (to-white) y mantener los estilos originales.
      */}
      <div className="bg-white text-gray-800 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* === NUESTRO PROCESO: 3 pasos === */}
          <div className="max-w-5xl mx-auto py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-950">
                {language === 'es' ? 'Nuestro Proceso' : 'Our Process'}
              </h2>
              <p className="text-slate-600 mt-4">
                {language === 'es'
                  ? 'Un enfoque estructurado para garantizar el éxito.'
                  : 'A structured approach to ensure success.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.details.process.map((step, index) => (
                <div key={index} className="group bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-xl bg-bds-aqua/10 flex items-center justify-center text-bds-aqua font-bold text-lg mb-6 group-hover:bg-bds-violet/10 group-hover:text-bds-violet transition-colors duration-300">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950 mb-3">
                    {step.title[language]}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* === TECNOLOGÍAS === */}
          <div className="max-w-6xl mx-auto py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-950">
                {language === 'es'
                  ? 'Tecnologías que Utilizamos'
                  : 'Technologies We Use'}
              </h2>
              <p className="text-slate-600 mt-4">
                {language === 'es'
                  ? 'Integramos herramientas de vanguardia para potenciar tus datos.'
                  : 'We integrate cutting-edge tools to empower your data.'}
              </p>
            </div>

            <motion.div
              className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
            >
              {service.details.tech.map((techName) => {
                const Logo = allTech[techName];
                if (!Logo) return null;

                return (
                  <motion.div
                    key={techName}
                    className="flex justify-center items-center p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group hover:border-bds-aqua/30"
                    variants={itemVariants}
                  >
                    <Logo
                      className="h-12 w-12 max-w-none grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                      title={techName}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* === CTA FINAL === */}
          <div className="text-center mt-16 py-12 bg-gradient-to-br from-bds-aqua to-bds-violet text-white rounded-3xl max-w-4xl mx-auto shadow-xl">
            <h3 className="text-3xl font-bold mb-4">
              {language === 'es'
                ? `¿Listo para potenciar tu ${service.title.es}?`
                : `Ready to boost your ${service.title.en}?`}
            </h3>
            <p className="text-white/90 mb-8 text-lg">
              {language === 'es'
                ? 'Contáctanos y descubre cómo podemos ayudarte.'
                : 'Contact us and find out how we can help you.'}
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-bds-violet text-base font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {language === 'es' ? 'Hablemos' : "Let's Talk"}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;