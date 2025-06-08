import React from 'react';
 
const ServicesSection = ({ language, onNavigate }) => {
  const servicesData = [
    {
      title_es: 'Consultoría Estratégica',
      title_en: 'Strategic Consulting',
      description_es: 'Definimos la hoja de ruta para tu transformación digital basada en datos.',
      description_en: 'We define the roadmap for your data-driven digital transformation.',
      icon: (
        <svg className="w-12 h-12 text-green-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
      ),
    },
    {
      title_es: 'Análisis Predictivo',
      title_en: 'Predictive Analytics',
      description_es: 'Anticipa tendencias y toma decisiones proactivas con modelos avanzados.',
      description_en: 'Anticipate trends and make proactive decisions with advanced models.',
      icon: (
        <svg className="w-12 h-12 text-green-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8L11 17m-5 2a2 2 0 11-4 0 2 2 0 014 0zM12 19a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
    },
    {
      title_es: 'Ingeniería de Datos',
      title_en: 'Data Engineering',
      description_es: 'Construimos infraestructuras robustas para el procesamiento de grandes volúmenes de datos.',
      description_en: 'We build robust infrastructures for processing large volumes of data.',
      icon: (
        <svg className="w-12 h-12 text-green-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10l2 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-3m-2 4H9m6 0a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
    },
    {
      title_es: 'Visualización de Datos',
      title_en: 'Data Visualization',
      description_es: 'Transformamos datos complejos en insights claros y accionables.',
      description_en: 'We transform complex data into clear and actionable insights.',
      icon: (
        <svg className="w-12 h-12 text-green-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M18 14v4a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h4"></path>
        </svg>
      ),
    },
  ];
 
  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          {language === 'es' ? 'Nuestros Servicios' : 'Our Services'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center border border-gray-700"
            >
              {service.icon}
              <h3 className="text-2xl font-semibold text-white mb-4">
                {language === 'es' ? service.title_es : service.title_en}
              </h3>
              <p className="text-gray-300">
                {language === 'es' ? service.description_es : service.description_en}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('service-details')}
            className="px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
          >
            {language === 'es' ? 'Ver Detalles de Servicios' : 'View Service Details'}
          </button>
        </div>
      </div>
    </section>
  );
};
 
export default ServicesSection;