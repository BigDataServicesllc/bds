// RUTA: frontend/src/components/LearningSection.js

import React from 'react';
import { Link } from 'react-router-dom'; // <-- IMPORTANTE: Añadir Link
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importamos los datos de los cursos desde nuestro archivo central
import { coursesData } from '../data/courses';

const LearningSection = ({ language, className }) => {
  // El contenido de los títulos se puede quedar aquí o moverlo a un archivo de traducciones si prefieres
  const staticContent = {
    title: { es: 'Formación Continua y', en: 'Continuous Training &' },
    titleHighlight: { es: 'Capacitación', en: 'Learning' },
    subtitle: { es: 'Programas de capacitación personalizados para equipos que buscan dominar las herramientas que definen el futuro de los datos.', en: 'Customized training programs for teams looking to master the tools that define the future of data.' },
    buttonText: { es: 'Ver Detalles', en: 'View Details' },
  };

  return (
    <section id="learning" className={`py-20 sm:py-24 border-t-2 border-gray-800 ${className || ''}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4">
          {staticContent.title[language]}{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {staticContent.titleHighlight[language]}
          </span>
        </h2>
        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-16">
          {staticContent.subtitle[language]}
        </p>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          className="pb-12"
        >
          {coursesData.map((course) => ( // Usamos coursesData
            <SwiperSlide key={course.id}>
              <div className="bg-gray-800 h-full p-8 rounded-xl shadow-lg border border-gray-700 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {course.title[language]}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {course.shortDescription[language]}
                  </p>
                </div>
                <div className="mt-auto">
                   <p className="text-blue-400 font-semibold mb-4">
                    {language === 'es' ? 'Duración' : 'Duration'}: {course.duration[language]}
                  </p>
                  <Link to={`/cursos/${course.id}`} className="inline-block px-6 py-3 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 w-full text-center">
                    {staticContent.buttonText[language]}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LearningSection;