// RUTA: frontend/src/pages/ServiceDetailPage.js
// === CÓDIGO FINAL CON EFECTO "NUBIRAL" (SCROLL CONTINUO Y LOGOS GRANDES) ===

import React from 'react';
import { Link, useParams, useOutletContext, Navigate } from 'react-router-dom';
import { servicesData, allTech } from '../data/services';

// Importamos los componentes y estilos de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ServiceDetailPage = () => {
  const { language } = useOutletContext();
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  // =========================================================================
  // ====> LA MAGIA PARA EL SCROLL CONTINUO ESTILO NUBIRAL <====
  // =========================================================================
  const logoCarouselSettings = {
    modules: [Autoplay],
    spaceBetween: 60, // Aumentamos el espacio entre logos
    slidesPerView: 'auto', // Permite que los anchos de los logos varíen si es necesario
    loop: true,
    autoplay: {
      delay: 0, // Sin retraso entre transiciones
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 5000, // Velocidad de la transición (más alto = más lento y suave)
    allowTouchMove: false, // El usuario no puede arrastrarlo, solo se mueve automáticamente
    breakpoints: {
      // Definimos cuántos logos se ven a la vez en diferentes pantallas
      320: { slidesPerView: 3, spaceBetween: 40 },
      768: { slidesPerView: 4, spaceBetween: 50 },
      1024: { slidesPerView: 5, spaceBetween: 60 },
    },
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 py-16">
        
        {/* --- HERO SECTION (sin cambios) --- */}
        <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                    <Link to="/" className="text-gray-500 hover:text-accent transition-colors duration-300 inline-flex items-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        {language === 'es' ? 'Volver a Servicios' : 'Back to Services'}
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{service.title[language]}</h1>
                    <p className="text-lg text-gray-600 leading-relaxed">{service.details.main[language]}</p>
                </div>
                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-xl">
                    <img src={service.image} alt={service.title[language]} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>

        {/* --- PROCESO (sin cambios) --- */}
        <div className="max-w-5xl mx-auto py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">{language === 'es' ? 'Nuestro Proceso' : 'Our Process'}</h2>
                <p className="text-gray-600 mt-2">{language === 'es' ? 'Un enfoque estructurado para garantizar el éxito.' : 'A structured approach to ensure success.'}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {service.details.process.map((step, index) => (
                    <div key={index} className="bg-gray-50 p-8 rounded-xl">
                        <div className="text-3xl font-bold text-accent mb-2">0{index + 1}</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title[language]}</h3>
                        <p className="text-gray-600">{step.description[language]}</p>
                    </div>
                ))}
            </div>
        </div>
        
        {/* --- TECNOLOGÍAS (CON CARRUSEL CORREGIDO Y ESTILO NUBIRAL) --- */}
        <div className="max-w-6xl mx-auto py-16"> {/* Aumentamos el ancho máximo */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">{language === 'es' ? 'Tecnologías que Utilizamos' : 'Technologies We Use'}</h2>
                <p className="text-gray-600 mt-2">{language === 'es' ? 'Integramos herramientas de vanguardia para potenciar tus datos.' : 'We integrate cutting-edge tools to empower your data.'}</p>
            </div>
            
            <Swiper {...logoCarouselSettings}>
              {/* Para un scroll infinito perfecto, duplicamos los logos */}
              {[...service.details.tech, ...service.details.tech].map((techName, index) => {
                  const Logo = allTech[techName];
                  if (!Logo) return null;
                  return (
                      <SwiperSlide key={`${techName}-${index}`} style={{ width: 'auto' }}>
                          <div className="flex justify-center items-center h-32" title={techName}>
                              {/* Hacemos los logos MUCHO más grandes (h-24 = 96px) */}
                              <Logo className="h-24 max-w-none grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                          </div>
                      </SwiperSlide>
                  );
              })}
            </Swiper>
        </div>

        {/* --- CTA FINAL (sin cambios) --- */}
        <div className="text-center mt-16 py-12 bg-gray-900 text-white rounded-2xl max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-3xl font-bold mb-2">{language === 'es' ? `¿Listo para potenciar tu ${service.title.es}?` : `Ready to boost your ${service.title.en}?`}</h3>
            <p className="text-gray-300 mb-6">{language === 'es' ? 'Contáctanos y descubre cómo podemos ayudarte.' : 'Contact us and find out how we can help you.'}</p>
            <Link to="/#contact" className="inline-block px-8 py-3 bg-accent text-white text-base font-semibold rounded-lg shadow-lg shadow-orange-500/20 hover:bg-accent-hover transition-all duration-300 transform hover:scale-105">
                {language === 'es' ? 'Hablemos' : 'Let\'s Talk'}
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;