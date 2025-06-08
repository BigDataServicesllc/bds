import React from 'react';

// Añadimos 'onNavigate' a las props para que el botón funcione
const HomeSection = ({ language, onNavigate }) => {
  const title = language === 'es' ? 'Impulsando tu Negocio con' : 'Driving Your Business with';
  const dataWord = language === 'es' ? 'Datos' : 'Data';
  const subtitle = language === 'es' ? 'Soluciones de Big Data a la medida para tu éxito.' : 'Tailored Big Data Solutions for Your Success.';
  const buttonText = language === 'es' ? 'Descubre Nuestros Servicios' : 'Discover Our Services';

  return (
    // Contenedor principal con el nuevo fondo animado
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        animation: 'move-dots 10s linear infinite'
      }}
    >
      {/* Superposición de gradiente para dar profundidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900"></div>

      {/* Contenedor del contenido, asegurando que esté por encima del fondo */}
      <div className="relative container mx-auto px-4 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up">
          {title}{' '}
          {/* La palabra con el gradiente de texto */}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {dataWord}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
        <button 
          onClick={() => onNavigate('services')} // Hacemos que el botón navegue a la sección 'services'
          className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 animate-fade-in-up" 
          style={{ animationDelay: '0.4s' }}>
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default HomeSection;