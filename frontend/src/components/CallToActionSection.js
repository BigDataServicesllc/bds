import React from 'react';

const CallToActionSection = ({ language, onNavigate }) => {
  return (
    <section className="bg-blue-600">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          {language === 'es' ? '¿Listo para empezar?' : 'Ready to Get Started?'}
        </h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
          {language === 'es' 
            ? 'No dejes que tus datos sean solo números. Convirtámoslos en tu ventaja competitiva más grande. Contáctanos para una consulta sin compromiso.'
            : 'Don\'t let your data be just numbers. Let\'s turn it into your greatest competitive advantage. Contact us for a no-obligation consultation.'}
        </p>
        <button
          onClick={() => onNavigate('contact')}
          className="px-10 py-4 bg-white text-blue-700 text-lg font-bold rounded-lg shadow-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          {language === 'es' ? 'Hablemos Ahora' : 'Let\'s Talk Now'}
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;