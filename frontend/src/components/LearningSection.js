import React from 'react';
// Importamos los componentes y estilos de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const LearningSection = ({ language }) => {
  const learningContent = {
    // Ya no necesitamos 'description' aquí
    courses: [
      {
        name: { es: 'Fundamentos de Big Data', en: 'Big Data Fundamentals' },
        duration: { es: '40 horas', en: '40 hours' },
      },
      {
        name: { es: 'Machine Learning Aplicado', en: 'Applied Machine Learning' },
        duration: { es: '60 horas', en: '60 hours' },
      },
      {
        name: { es: 'Visualización con Power BI', en: 'Visualization with Power BI' },
        duration: { es: '30 horas', en: '30 hours' },
      },
      {
        name: { es: 'Excel Fundamental para Empresas', en: 'Essential Excel for Business' },
        duration: { es: '20 horas', en: '20 hours' },
      },
      {
        name: { es: 'Automatizaciones con Python', en: 'Automation with Python' },
        duration: { es: '50 horas', en: '50 hours' },
      },
      {
        name: { es: 'Data Engineering con Azure', en: 'Data Engineering with Azure' },
        duration: { es: '60 horas', en: '60 hours' },
      },
      {
        name: { es: 'Análisis Estadístico con Python', en: 'Statistical Analysis with Python' },
        duration: { es: '40 horas', en: '40 hours' },
      },
      {
        name: { es: 'Fundamentos de GitHub', en: 'GitHub Fundamentals' },
        duration: { es: '15 horas', en: '15 hours' },
      },
    ]
  };

  return (
    <section id="learning" className="py-20 sm:py-24 bg-gray-900 border-t-2 border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4">
          {language === 'es' ? 'Formación Continua y' : 'Continuous Training &'}{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Capacitación
          </span>
        </h2>
        {/* LÍNEA CORREGIDA */}
        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-16">
          {language === 'es' ? 'Programas de capacitación personalizados para equipos que buscan dominar las herramientas que definen el futuro de los datos.' : 'Customized training programs for teams looking to master the tools that define the future of data.'}
        </p>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          className="pb-12"
        >
          {learningContent.courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-800 h-full p-8 rounded-xl shadow-lg border border-gray-700 flex flex-col justify-between hover:border-blue-500/50 transition-colors duration-300">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {course.name[language]}
                  </h3>
                </div>
                <p className="text-blue-400 font-semibold mt-4">
                  {language === 'es' ? `Duración: ${course.duration.es}` : `Duration: ${course.duration.en}`}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LearningSection;