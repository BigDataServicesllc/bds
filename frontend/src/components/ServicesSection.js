// RUTA: frontend/src/components/ServicesSection.js
// CÓDIGO FINAL CON IMÁGENES LOCALES Y FIABLES

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// CAMBIO CLAVE: Importamos los datos desde el archivo central
import { servicesData } from '../data/services';
const ArrowLeftIcon = ({ className, ...props }) => (
  <svg {...props} className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
);
const ArrowRightIcon = ({ className, ...props }) => (
  <svg {...props} className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);

// ====> ¡AQUÍ ES DONDE PUEDES EDITAR, AÑADIR O QUITAR SERVICIOS! <====


// El resto del componente es el mismo, no necesita cambios.
const ServicesSection = ({ language, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const goToNext = () => setActiveIndex((prev) => (prev + 1) % servicesData.length);
  const goToPrev = () => setActiveIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  useEffect(() => {
    const interval = setInterval(goToNext, 7000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="services" className={`relative bg-primary-dark py-20 sm:py-24 overflow-hidden ${className || ''}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                {language === 'es' ? 'Impulsamos tu Negocio con' : 'We Power Your Business with'}{' '}
                <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
                    {language === 'es' ? 'Inteligencia de Datos' : 'Data Intelligence'}
                </span>
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                {language === 'es' ? 'Descubre cómo nuestras soluciones personalizadas pueden transformar tu empresa.' : 'Discover how our custom solutions can transform your company.'}
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[500px]">
          <div className="relative w-full h-80 lg:h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
            {servicesData.map((service, index) => (
                <img key={index} src={service.image} alt={service.title[language]} className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} />
            ))}
             <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent"></div>
          </div>
          <div className="relative flex flex-col justify-center h-full">
            <div className="relative h-48">
                {servicesData.map((service, index) => (
                  <div key={index} className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5 pointer-events-none'}`}>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {service.title[language]}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed mb-6 h-24">
                      {service.description[language]}
                    </p>
                    <Link to={`/servicios/${service.id}`} className="inline-flex items-center px-6 py-3 bg-accent text-white text-base font-semibold rounded-lg shadow-lg shadow-accent/20 hover:bg-accent-hover transition-all duration-300 transform hover:scale-105">
                      {language === 'es' ? 'Conocer Más' : 'Learn More'}
                      <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                ))}
            </div>
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center space-x-3">
                <button onClick={goToPrev} className="p-4 rounded-full bg-secondary-dark/50 text-gray-300 hover:bg-accent hover:text-white transition-all duration-300 backdrop-blur-sm">
                  <ArrowLeftIcon className="w-6 h-6" />
                </button>
                <button onClick={goToNext} className="p-4 rounded-full bg-secondary-dark/50 text-gray-300 hover:bg-accent hover:text-white transition-all duration-300 backdrop-blur-sm">
                  <ArrowRightIcon className="w-6 h-6" />
                </button>
              </div>
              <div className="flex items-center space-x-2">
                  {servicesData.map((_, index) => (
                      <button key={index} onClick={() => setActiveIndex(index)} className={`w-10 h-1.5 rounded-full transition-colors duration-300 ${index === activeIndex ? 'bg-accent' : 'bg-gray-600 hover:bg-gray-500'}`} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;