// RUTA: frontend/src/components/LearningSection.js

import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { coursesData } from '../data/courses';

// 👇 Pon tu imagen en: frontend/src/assets/learning-hero.jpg
import learningHero from '../assets/learning-hero.jpg';

const LearningSection = ({ language, className }) => {
  const staticContent = {
    title: {
      es: 'Formación Continua y Capacitación',
      en: 'Continuous Training & Learning',
    },
    subtitle: {
      es: 'Programas de capacitación personalizados para equipos que buscan dominar las herramientas que definen el futuro de los datos.',
      en: 'Customized training programs for teams looking to master the tools that define the future of data.',
    },
    buttonText: {
      es: 'Ver Detalles',
      en: 'View Details',
    },
    badge: {
      es: 'Academia de Datos',
      en: 'Data Academy',
    },
    badgeText: {
      es: 'Entrenamos a tu equipo en herramientas modernas de analítica, BI y automatización.',
      en: 'We train your team in modern analytics, BI and automation tools.',
    },
  };

  return (
    <section
      id="learning"
      // Agregamos overflow-hidden para evitar scroll horizontal accidental
      className={`py-20 sm:py-24 bg-[#C19A2E] overflow-hidden ${className || ''}`}
    >
      <div className="container mx-auto px-4">

        {/* TÍTULOS */}
        <div className="max-w-3xl mx-auto text-center lg:text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
            {staticContent.title[language]}
          </h2>
          <p className="text-lg text-[#173B3A]/90 font-medium">
            {staticContent.subtitle[language]}
          </p>
        </div>

        {/* LAYOUT 2 COLUMNAS */}
        {/* items-stretch asegura altura igual.  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* COLUMNA IZQUIERDA — IMAGEN FULL HEIGHT */}
          {/* h-full asegura que ocupe toda la altura disponible del grid */}
          <div className="relative w-full h-full min-h-[400px] lg:min-h-auto rounded-3xl overflow-hidden shadow-xl">
            <img
              src={learningHero}
              alt="Training image"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Texto sobre imagen */}
            <div className="absolute bottom-8 left-8 text-white z-10">
              <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs uppercase tracking-wide border border-white/30 backdrop-blur-md">
                {staticContent.badge[language]}
              </span>
              <p className="mt-3 text-base md:text-lg max-w-md text-white font-medium drop-shadow-md">
                {staticContent.badgeText[language]}
              </p>
            </div>
          </div>

          {/* COLUMNA DERECHA — CARRUSEL */}
          {/* IMPORTANTE: min-w-0 evita que el carrusel rompa el grid y genere scroll horizontal */}
          <div className="flex flex-col justify-center w-full min-w-0">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              className="learning-swiper pb-10 w-full"
            >
              {coursesData.map((course) => (
                <SwiperSlide key={course.id}>
                  {/* TARJETA */}
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg">
                    
                    {/* Título NEGRO */}
                    <h3 className="text-2xl font-bold text-black mb-4">
                      {course.title[language]}
                    </h3>

                    {/* Descripción NEGRA */}
                    <p className="text-black/80 mt-2 mb-6 text-lg leading-relaxed">
                      {course.shortDescription[language]}
                    </p>

                    {/* Duración NEGRA */}
                    <p className="font-bold text-black mb-8 text-lg">
                      {language === 'es' ? 'Duración:' : 'Duration:'} {course.duration[language]}
                    </p>

                    {/* BOTÓN: Verde -> Hover Negro */}
                    <Link
                      to={`/cursos/${course.id}`}
                      className="
                        inline-block px-8 py-3 rounded-lg font-bold shadow-md transition-all duration-300
                        bg-[#173B3A] text-white border border-[#173B3A]
                        hover:bg-black hover:border-black hover:text-white
                      "
                    >
                      {language === 'es' ? 'Ver Detalles' : 'View Details'}
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LearningSection;