// RUTA: frontend/src/pages/CourseDetailPage.js

import React from 'react';
import { Link, useParams, useOutletContext, Navigate } from 'react-router-dom';
import { coursesData } from '../data/courses'; // Importamos los datos de los cursos

const CourseDetailPage = () => {
  const { language } = useOutletContext();
  const { courseId } = useParams(); // Obtenemos el ID del curso de la URL
  const course = coursesData.find(c => c.id === courseId);

  // Si el curso no se encuentra, redirigimos a la página principal
  if (!course) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-white text-gray-800 min-h-screen pt-28">
      <div className="container mx-auto px-4 md:px-8 py-16">
        
        {/* --- HERO SECTION (CON IMAGEN) --- */}
        <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                    <Link to="/#learning" className="text-gray-500 hover:text-accent transition-colors duration-300 inline-flex items-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        {language === 'es' ? 'Volver a Formación' : 'Back to Learning'}
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{course.title[language]}</h1>
                    <p className="text-lg text-gray-600 leading-relaxed">{course.details.main[language]}</p>
                    <p className="text-accent font-bold mt-4">{language === 'es' ? 'Duración:' : 'Duration:'} {course.duration[language]}</p>
                </div>
                {/* --- AQUÍ SE MUESTRA LA IMAGEN --- */}
                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-xl">
                    <img src={course.image} alt={course.title[language]} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>

        {/* --- DETALLES DEL CURSO --- */}
        <div className="max-w-4xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Columna de Temario */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{language === 'es' ? 'Temario del Curso' : 'Course Topics'}</h2>
            <ul className="space-y-3">
              {course.details.topics.map((topic, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="text-gray-700">{topic[language]}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Columna de Público Objetivo */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{language === 'es' ? '¿A quién está dirigido?' : 'Who is this for?'}</h3>
            <p className="text-gray-600">{course.details.targetAudience[language]}</p>
          </div>
        </div>
        
        {/* --- CTA FINAL --- */}
        <div className="text-center mt-16 py-14 bg-primary-deep text-white rounded-2xl max-w-4xl mx-auto shadow-xl border border-accent/20">
          <h3 className="text-3xl font-bold mb-4">{language === 'es' ? '¿Listo para empezar a aprender?' : 'Ready to start learning?'}</h3>
          {course.udemyLink ? (
            <>
              <p className="text-gray-300 mb-6">{language === 'es' ? 'Inscríbete ahora en Udemy y lleva tus habilidades al siguiente nivel.' : 'Enroll now on Udemy and take your skills to the next level.'}</p>
              <a href={course.udemyLink}
  className="inline-block px-8 py-3 rounded-full bg-white text-primary-deep font-semibold shadow-md hover:bg-accent hover:text-white transition-all duration-300">

                {language === 'es' ? 'Ir al Curso en Udemy' : 'Go to Udemy Course'}
              </a>
            </>
          ) : (
            <>
              <p className="text-gray-300 mb-6">{language === 'es' ? 'Contáctanos para organizar una capacitación personalizada para tu equipo.' : 'Contact us to arrange a custom training for your team.'}</p>
              <Link to="/#contact" className="inline-block px-8 py-3 bg-accent text-white text-base font-semibold rounded-lg shadow-lg hover:bg-accent-hover transition-all duration-300 transform hover:scale-105">
                {language === 'es' ? 'Solicitar Información' : 'Request Info'}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;