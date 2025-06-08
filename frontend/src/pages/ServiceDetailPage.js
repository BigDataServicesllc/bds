// frontend/src/pages/ServiceDetailPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetailPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-5xl font-bold text-center mb-8">Página de Detalles de Servicios</h1>
      <p className="text-center text-lg mb-8">
        Aquí se mostrará la información detallada de cada servicio.
      </p>
      <div className="text-center">
        <Link to="/" className="text-blue-400 hover:underline">
          ← Volver a la página de inicio
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetailPage;