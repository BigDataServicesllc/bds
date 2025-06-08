import React from 'react';
 
const HomeSection = ({ language }) => {
  const title = language === 'es' ? 'Impulsando tu Negocio con Datos' : 'Driving Your Business with Data';
  const subtitle = language === 'es' ? 'Soluciones de Big Data a la medida para tu éxito.' : 'Tailored Big Data Solutions for Your Success.';
  const buttonText = language === 'es' ? 'Descubre Nuestros Servicios' : 'Discover Our Services';
 
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-fade-in-up delay-200">
          {subtitle}
        </p>
        <button className="px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400">
          {buttonText}
        </button>
      </div>
    </section>
  );
};
 
export default HomeSection;