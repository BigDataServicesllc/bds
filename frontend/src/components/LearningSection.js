// RUTA: frontend/src/components/LearningSection.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { coursesData } from '../data/courses';

const LearningSection = ({ language, className = '' }) => {
  const staticContent = {
    title: {
      es: 'Formación Continua y',
      en: 'Continuous Training &',
    },
    titleHighlight: {
      es: 'Capacitación',
      en: 'Learning',
    },
    subtitle: {
      es: 'Programas de capacitación personalizados para equipos que buscan dominar las herramientas que definen el futuro de los datos.',
      en: 'Customized training programs for teams looking to master the tools that define the future of data.',
    },
    buttonText: {
      es: 'Ver Detalles',
      en: 'View Details',
    },
  };

  return (
   <section id="learning" className="py-20 sm:py-24 bg-[#C19A2E]">
  <div className="container mx-auto px-4">

    {/* TÍTULO */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-4">
      Formación Continua y{" "}
      <span className="text-[#173B3A]">
        Capacitación
      </span>
    </h2>

    {/* SUBTÍTULO */}
    <p className="text-lg text-[#173B3A]/80 text-center max-w-3xl mx-auto mb-16">
      Programas de capacitación personalizados para equipos que buscan dominar las herramientas que definen el futuro de los datos.
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

      {coursesData.map((course) => (
        <SwiperSlide key={course.id}>
          <div className="bg-white h-full p-8 rounded-2xl shadow-xl border border-gray-200 flex flex-col justify-between">

            {/* Card Title */}
            <h3 className="text-2xl font-bold text-black mb-3">
              {course.title[language]}
            </h3>

            {/* Description */}
            <p className="text-[#173B3A]/80 mb-6">
              {course.shortDescription[language]}
            </p>

            <div className="mt-auto">

              {/* Duración */}
              <p className="text-[#173B3A] font-semibold mb-4">
                {language === 'es' ? 'Duración' : 'Duration'}: {course.duration[language]}
              </p>

              {/* Botón */}
              <Link
                to={`/cursos/${course.id}`}
                className="inline-block px-6 py-3 border-2 border-[#173B3A] text-[#173B3A] font-semibold rounded-lg hover:bg-[#173B3A] hover:text-white transition-all duration-300 w-full text-center"
              >
                {language === 'es' ? 'Ver Detalles' : 'View Details'}
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
