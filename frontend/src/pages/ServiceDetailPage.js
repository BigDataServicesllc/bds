// RUTA: frontend/src/pages/ServiceDetailPage.js
// CÓDIGO COMPLETAMENTE NUEVO Y REDISEÑADO

import React from 'react';
import { Link, useParams, useOutletContext, Navigate } from 'react-router-dom';
// Importamos los datos centralizados
import { servicesData } from '../data/services';

// Pequeño ícono de check para la lista de características
const CheckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ServiceDetailPage = () => {
  const { language } = useOutletContext();
  // Leemos el 'serviceId' de la URL (p. ej., "visualizacion")
  const { serviceId } = useParams();

  // Buscamos el servicio correspondiente en nuestros datos usando el ID
  const service = servicesData.find(s => s.id === serviceId);

  // Si no se encuentra el servicio (URL inválida), redirigimos al inicio
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    // CAMBIO DE LOOK & FEEL: Fondo blanco, texto oscuro
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 py-16">
        
        {/* Encabezado de la página */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
            <Link to="/" className="text-gray-500 hover:text-accent transition-colors duration-300 inline-flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                {language === 'es' ? 'Volver a Servicios' : 'Back to Services'}
            </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
            {service.title[language]}
          </h1>
          <p className="text-lg text-gray-600">
            {service.description[language]}
          </p>
        </div>

        {/* Layout principal: Imagen a la izquierda, detalles a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Columna de la Imagen */}
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
            <img src={service.image} alt={service.title[language]} className="w-full h-full object-cover" />
          </div>

          {/* Columna del Texto */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
                {language === 'es' ? 'En Detalle' : 'In Detail'}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
                {service.details[language]}
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{language === 'es' ? 'Soluciones personalizadas y escalables.' : 'Custom and scalable solutions.'}</span>
              </div>
              <div className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{language === 'es' ? 'Optimización de procesos y toma de decisiones.' : 'Process optimization and decision-making.'}</span>
              </div>
              <div className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{language === 'es' ? 'Soporte y acompañamiento continuo.' : 'Ongoing support and guidance.'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA: Llamada a la acción */}
        <div className="text-center mt-20 py-12 bg-gray-50 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{language === 'es' ? '¿Listo para transformar tus datos?' : 'Ready to transform your data?'}</h3>
            <p className="text-gray-600 mb-6">{language === 'es' ? 'Contáctanos para una consulta sin compromiso.' : 'Contact us for a no-commitment consultation.'}</p>
            <Link to="/#contact" className="inline-block px-8 py-3 bg-accent text-white text-base font-semibold rounded-lg shadow-lg shadow-orange-500/20 hover:bg-accent-hover transition-all duration-300 transform hover:scale-105">
                {language === 'es' ? 'Hablemos' : 'Let\'s Talk'}
            </Link>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetailPage;