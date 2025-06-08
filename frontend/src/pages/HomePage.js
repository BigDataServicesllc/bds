// frontend/src/pages/HomePage.js

import React from 'react';
import { Link, useOutletContext, useNavigate } from 'react-router-dom';

// Importamos los componentes de las secciones externas
import HomeSection from '../components/HomeSection';
import LearningSection from '../components/LearningSection';
import ContactSection from '../components/ContactSection';

// --- Íconos y Datos de Servicios (CORREGIDOS Y SEPARADOS) ---
const IconConsulting = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
  </svg>
);
const IconNetSuite = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.555a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
  </svg>
);
const IconEngineering = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
  </svg>
);
const IconVisualization = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"></path>
  </svg>
);

const servicesData = [
    { icon: IconConsulting, title: { es: 'Consultoría Estratégica', en: 'Strategic Consulting' }, description: { es: 'Definimos la hoja de ruta para tu transformación digital basada en datos.', en: 'We define the roadmap for your data-driven digital transformation.' } },
    { icon: IconNetSuite, title: { es: 'Conector Oracle NetSuite', en: 'Oracle NetSuite Connector' }, description: { es: 'Integramos y sincronizamos tus datos de NetSuite con otras plataformas para una visión de negocio unificada.', en: 'We integrate and synchronize your NetSuite data with other platforms for a unified business view.' } },
    { icon: IconEngineering, title: { es: 'Ingeniería de Datos', en: 'Data Engineering' }, description: { es: 'Construimos infraestructuras robustas para el procesamiento de grandes volúmenes de datos.', en: 'We build robust infrastructures for processing large volumes of data.' } },
    { icon: IconVisualization, title: { es: 'Visualización de Datos', en: 'Data Visualization' }, description: { es: 'Transformamos datos complejos en insights claros y accionables.', en: 'We transform complex data into clear and actionable insights.' } },
];


const HomePage = () => {
  const { language } = useOutletContext();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    if (path.startsWith('/')) {
        navigate(path);
    } else {
        const section = document.getElementById(path);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: 'smooth',
            });
        }
    }
  };
 
  return (
    <>
      <HomeSection language={language} onNavigate={() => handleNavigate('services')} />
      
      <section id="services" className="py-20 sm:py-24">
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
                <Link to="/servicios" state={{ selectedServiceTitle: service.title }} key={index}>
                  <div className="relative bg-gray-800/50 p-8 rounded-xl h-full group transition-all duration-300 overflow-hidden cursor-pointer hover:bg-gray-700/60 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{'clipPath': 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 4px 4px, 4px calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 4px, 4px 4px)'}}></div>
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex-shrink-0 mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center mb-4 border border-gray-600 group-hover:border-blue-500 transition-colors duration-300">
                          <IconComponent className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 flex-grow">
                        {service.title[language]}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description[language]}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <LearningSection language={language} onNavigate={() => handleNavigate('contact')} />
      <ContactSection language={language} />
    </>
  );
};
 
export default HomePage;