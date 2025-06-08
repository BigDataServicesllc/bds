// RUTA: frontend/src/pages/ServiceDetailPage.js
// CÓDIGO CORREGIDO Y LISTO PARA USAR

import React from 'react';
// CAMBIO 1: Importamos Link
import { Link } from 'react-router-dom';

const ServiceDetailPage = () => {
  return (
    // He cambiado el color de fondo para que coincida con tu paleta
    <div className="bg-primary-dark text-white min-h-screen p-8">
      <div className="container mx-auto">
        <div className="mb-12">
          {/* CAMBIO 2: Reemplazamos <a> por <Link> y href="/" que es la ruta correcta de la home */}
          <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Volver a la página principal
          </Link>
        </div>
        
        {/* El contenido de tu página de servicios va aquí */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Nuestros <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Servicios</span>
        </h1>
        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Un vistazo en profundidad a cómo podemos transformar tu negocio con el poder de los datos.
        </p>
        
        {/* Aquí podrías mapear y mostrar los detalles de cada servicio */}
        <div className="space-y-8">
          <div className="bg-secondary-dark p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-3">Consultoría Estratégica</h3>
            <p className="text-gray-400">Analizamos tu modelo de negocio, tus objetivos y tus datos actuales para diseñar una hoja de ruta clara y alcanzable. No se trata solo de tecnología, sino de alinear tu estrategia de datos con tus metas comerciales para un impacto real y medible.</p>
          </div>
          <div className="bg-secondary-dark p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-3">Conector Oracle NetSuite</h3>
            <p className="text-gray-400">Nuestro conector especializado para Oracle NetSuite te permite romper los silos de información. Sincronizamos tus datos de ERP, CRM y finanzas con otras plataformas críticas como almacenes de datos, herramientas de BI o aplicaciones personalizadas, dándote una visión 360° de tu negocio en tiempo real.</p>
          </div>
          {/* ... Añadir más servicios aquí ... */}
        </div>

      </div>
    </div>
  );
};

export default ServiceDetailPage;