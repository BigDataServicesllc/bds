// RUTA: frontend/src/components/ServicesSection.js
// Versión con paleta BDS y fondo claro

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Datos centrales de servicios
import { servicesData } from '../data/services';

const ArrowLeftIcon = ({ className, ...props }) => (
  <svg
    {...props}
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 19l-7-7 7-7"
    ></path>
  </svg>
);

const ArrowRightIcon = ({ className, ...props }) => (
  <svg
    {...props}
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 5l7 7-7 7"
    ></path>
  </svg>
);

const ServicesSection = ({ language, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () =>
    setActiveIndex((prev) => (prev + 1) % servicesData.length);

  const goToPrev = () =>
    setActiveIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);

  useEffect(() => {
    const interval = setInterval(goToNext, 7000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section
      id="services"
      className={`relative py-20 sm:py-24 overflow-hidden ${
        className || ''
      }`}
    >
      <div className="container mx-auto px-4">
        {/* CABECERA DE SECCIÓN */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4">
          {language === 'es' ? (
            <>
              Impulsamos tu negocio con{' '}
              <span className="text-bds-aqua whitespace-nowrap">
                Inteligencia de Datos
              </span>
            </>
          ) : (
            <>
              We power your business with{' '}
              <span className="text-bds-aqua whitespace-nowrap">
                Data Intelligence
              </span>
            </>
          )}
        </h2>


          <p className="mt-4 text-center text-gray-300">
            {language === 'es'
              ? 'Descubre cómo nuestras soluciones personalizadas pueden transformar tu empresa.'
              : 'Discover how our custom solutions can transform your company.'}
          </p>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[500px]">
          {/* COLUMNA IMAGEN */}
          <div className="relative w-full h-80 lg:h-full rounded-2xl overflow-hidden shadow-bds-soft">
            {servicesData.map((service, index) => (
              <img
                key={index}
                src={service.image}
                alt={service.title[language]}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  index === activeIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                }`}
              />
            ))}

            {/* overlay para que la imagen tenga profundidad, no para oscurecer la sección */}
            <div className="absolute inset-0 bg-gradient-to-t from-bds-deep/70 via-bds-deep/30 to-transparent" />
          </div>

          {/* COLUMNA TEXTO / SLIDER */}
          <div className="relative flex flex-col justify-center h-full">
            <div className="relative h-48">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === activeIndex
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-5 pointer-events-none'
                  }`}
                >
                  <h3 className="text-3xl font-bold text-white drop-shadow-md mb-4">
                    {service.title[language]}
                  </h3>

                  <p className="text-gray-200 text-base leading-relaxed mb-6 h-24">
                    {service.description[language]}
                  </p>


                  <Link
                    to={`/servicios/${service.id}`}
                    className="bds-btn-primary"
                  >
                    {language === 'es' ? 'Conocer Más' : 'Learn More'}
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              ))}
            </div>

            {/* CONTROLES SLIDER */}
            <div className="flex items-center justify-between mt-8">
              {/* Flechas */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={goToPrev}
                  className="p-3 rounded-full bg-white border border-gray-300 text-bds-text-soft shadow-sm hover:bg-bds-aqua hover:text-bds-deep hover:border-bds-aqua transition-all duration-300"
                >
                  <ArrowLeftIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="p-3 rounded-full bg-white border border-gray-300 text-bds-text-soft shadow-sm hover:bg-bds-aqua hover:text-bds-deep hover:border-bds-aqua transition-all duration-300"
                >
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Bullets */}
              <div className="flex items-center space-x-2">
                {servicesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-10 h-1.5 rounded-full transition-colors duration-300 ${
                      index === activeIndex
                        ? 'bg-bds-aqua'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
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
