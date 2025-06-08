import React from 'react';
 
const LearningSection = ({ language }) => {
  const learningContent = {
    title_es: 'Learning: Capacitación en Big Data',
    title_en: 'Learning: Big Data Training',
    description_es: 'Ofrecemos programas de capacitación personalizados para equipos y profesionales que buscan dominar las herramientas y metodologías de Big Data.',
    description_en: 'We offer customized training programs for teams and professionals looking to master Big Data tools and methodologies.',
    courses: [
      {
        name_es: 'Fundamentos de Big Data',
        name_en: 'Big Data Fundamentals',
        duration_es: '40 horas',
        duration_en: '40 hours',
      },
      {
        name_es: 'Machine Learning Aplicado',
        name_en: 'Applied Machine Learning',
        duration_es: '60 horas',
        duration_en: '60 hours',
      },
      {
        name_es: 'Visualización con Power BI/Tableau',
        name_en: 'Visualization with Power BI/Tableau',
        duration_es: '30 horas',
        duration_en: '30 hours',
      },
    ],
    buttonText_es: 'Ver Todos los Cursos',
    buttonText_en: 'View All Courses',
  };
 
  return (
    <section id="learning" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          {language === 'es' ? learningContent.title_es : learningContent.title_en}
        </h2>
        <p className="text-lg text-center text-gray-300 mb-10 max-w-3xl mx-auto">
          {language === 'es' ? learningContent.description_es : learningContent.description_en}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {learningContent.courses.map((course, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-600">
              <h3 className="text-xl font-semibold text-white mb-2">
                {language === 'es' ? course.name_es : course.name_en}
              </h3>
              <p className="text-gray-300 text-sm">
                {language === 'es' ? `Duración: ${course.duration_es}` : `Duration: ${course.duration_en}`}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300">
            {language === 'es' ? learningContent.buttonText_es : learningContent.buttonText_en}
          </button>
        </div>
      </div>
    </section>
  );
};
 
export default LearningSection;