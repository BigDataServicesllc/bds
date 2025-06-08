// RUTA: frontend/src/components/ServicesSection.js
// CÓDIGO MODIFICADO Y LISTO PARA USAR

import React from 'react';

// --- Íconos como Componentes ---
// (Esta parte no necesita cambios)
const IconConsulting = ({ className }) => ( <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg> );
const IconAnalytics = ({ className }) => ( <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg> );
const IconEngineering = ({ className }) => ( <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg> );
const IconVisualization = ({ className }) => ( <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"></path></svg> );

// --- Datos de los Servicios ---
// (Esta parte no necesita cambios)
const servicesData = [
  { icon: IconConsulting, title: { es: 'Consultoría Estratégica', en: 'Strategic Consulting' }, description: { es: 'Definimos la hoja de ruta para tu transformación digital basada en datos.', en: 'We define the roadmap for your data-driven digital transformation.' } },
  { icon: IconAnalytics, title: { es: 'Análisis Predictivo', en: 'Predictive Analytics' }, description: { es: 'Anticipa tendencias y toma decisiones proactivas con modelos avanzados.', en: 'Anticipate trends and make proactive decisions with advanced models.' } },
  { icon: IconEngineering, title: { es: 'Ingeniería de Datos', en: 'Data Engineering' }, description: { es: 'Construimos infraestructuras robustas para el procesamiento de grandes volúmenes de datos.', en: 'We build robust infrastructures for processing large volumes of data.' } },
  { icon: IconVisualization, title: { es: 'Visualización de Datos', en: 'Data Visualization' }, description: { es: 'Transformamos datos complejos en insights claros y accionables.', en: 'We transform complex data into clear and actionable insights.' } },
];


// ================== INICIO DE LOS CAMBIOS ==================

// CAMBIO 1: Añadimos `className` a la lista de props que el componente recibe.
// ANTES: const ServicesSection = ({ language }) => {
const ServicesSection = ({ language, className }) => {
  console.log("VALOR DE 'className' RECIBIDO EN ServicesSection:", className);

  return (
    // CAMBIO 2: Modificamos cómo se asigna la clase a la sección.
    // Usamos comillas invertidas (`) para poder combinar el texto de las clases fijas
    // con la variable `className` que recibimos.
    // ANTES: <section id="services" className="py-20 sm:py-24">
    <section id="services" className={`py-20 sm:py-24 ${className || ''}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4">
          {language === 'es' ? 'Nuestros' : 'Our'}{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Servicios
          </span>
        </h2>
        <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-16">
            {language === 'es' ? 'Soluciones integrales para potenciar tu negocio a través de la inteligencia de datos.' : 'Comprehensive solutions to boost your business through data intelligence.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="relative bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm group transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{'clipPath': 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 4px 4px, 4px calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 4px, 4px 4px)'}}></div>
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center mb-4 border border-gray-600 group-hover:border-blue-500 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title[language]}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description[language]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <a
            href="servicios.html"
            className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
          >
            {language === 'es' ? 'Ver Detalles de Servicios' : 'View Service Details'}
          </a>
        </div>

      </div>
    </section>
  );
};

// =================== FIN DE LOS CAMBIOS ===================

export default ServicesSection;