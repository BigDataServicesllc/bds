// RUTA: frontend/src/pages/ServiceDetailPage.js
import React from 'react';
import { Link, useParams, useOutletContext, Navigate } from 'react-router-dom';
import { servicesData, allTech } from '../data/services';

// Swiper para el carrusel de tecnologías
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ServiceDetailPage = () => {
  const { language } = useOutletContext();
  const { serviceId } = useParams();

  // Buscamos el servicio según el id de la URL
  const service = servicesData.find((s) => s.id === serviceId);

  // Si no existe, volvemos al home
  if (!service) {
    return <Navigate to="/" replace />;
  }

  // =========================================================================
  // CONFIGURACIÓN DEL CARRUSEL DE LOGOS
  // =========================================================================
  const logoCarouselSettings = {
    modules: [Autoplay],
    spaceBetween: 60,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 5000,
    allowTouchMove: false,
    breakpoints: {
      320: { slidesPerView: 3, spaceBetween: 40 },
      768: { slidesPerView: 4, spaceBetween: 50 },
      1024: { slidesPerView: 5, spaceBetween: 60 },
    },
  };

  return (
    // CAMBIO: Fondo base oscuro (bds-deep) en lugar de bg-white
    <div className="min-h-screen pt-28 bg-bds-deep text-bds-text-main">
      
      {/* === HERO WRAPPER: Fondo degradado de verde oscuro a blanco === */}
      <div className="pb-24 bg-gradient-to-b from-bds-deep to-white">
        <div className="container mx-auto px-4 md:px-8 py-16">
          {/* === HERO: título, descripción y foto del servicio === */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                {/* Link "Volver" con colores ajustados para fondo oscuro */}
                <Link
                  to="/"
                  className="text-bds-bg-light/70 hover:text-bds-aqua transition-colors duration-300 inline-flex items-center mb-4"
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

                {/* Título en blanco */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                  {service.title[language]}
                </h1>
                
                {/* Descripción en tono claro con opacidad */}
                <p className="text-lg text-bds-bg-light/80 leading-relaxed">
                  {service.details.main[language]}
                </p>
              </div>

              <div className="w-full h-80 rounded-2xl overflow-hidden shadow-xl">
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
              <h2 className="text-3xl font-bold text-gray-900">
                {language === 'es' ? 'Nuestro Proceso' : 'Our Process'}
              </h2>
              <p className="text-gray-600 mt-2">
                {language === 'es'
                  ? 'Un enfoque estructurado para garantizar el éxito.'
                  : 'A structured approach to ensure success.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {service.details.process.map((step, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl">
                  <div className="text-3xl font-bold text-accent mb-2">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title[language]}
                  </h3>
                  <p className="text-gray-600">{step.description[language]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* === TECNOLOGÍAS: carrusel de logos grandes === */}
          <div className="max-w-6xl mx-auto py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                {language === 'es'
                  ? 'Tecnologías que Utilizamos'
                  : 'Technologies We Use'}
              </h2>
              <p className="text-gray-600 mt-2">
                {language === 'es'
                  ? 'Integramos herramientas de vanguardia para potenciar tus datos.'
                  : 'We integrate cutting-edge tools to empower your data.'}
              </p>
            </div>

            <Swiper {...logoCarouselSettings}>
              {[...service.details.tech, ...service.details.tech].map(
                (techName, index) => {
                  const Logo = allTech[techName];
                  if (!Logo) return null;

                  return (
                    <SwiperSlide
                      key={`${techName}-${index}`}
                      style={{ width: 'auto' }}
                    >
                      <div
                        className="flex justify-center items-center h-32"
                        title={techName}
                      >
                        <Logo className="h-24 max-w-none grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
          </div>

          {/* === CTA FINAL: invita a contactar === */}
          <div className="text-center mt-16 py-12 bg-gray-900 text-white rounded-2xl max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-3xl font-bold mb-2">
              {language === 'es'
                ? `¿Listo para potenciar tu ${service.title.es}?`
                : `Ready to boost your ${service.title.en}?`}
            </h3>
            <p className="text-gray-300 mb-6">
              {language === 'es'
                ? 'Contáctanos y descubre cómo podemos ayudarte.'
                : 'Contact us and find out how we can help you.'}
            </p>
            <Link
              to="/#contact"
              className="inline-block px-8 py-3 bg-accent text-white text-base font-semibold rounded-lg shadow-lg shadow-orange-500/20 hover:bg-accent-hover transition-all duration-300 transform hover:scale-105"
            >
              {language === 'es' ? 'Hablemos' : "Let's Talk"}
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;