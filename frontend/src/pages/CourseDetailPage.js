// RUTA: frontend/src/pages/CourseDetailPage.js
// Esta página muestra el detalle de un curso individual (texto, temario,
// público objetivo y CTA final hacia Udemy o contacto).

import React from 'react';
import { Link, useParams, useOutletContext, Navigate } from 'react-router-dom';
import { coursesData } from '../data/courses';

const CourseDetailPage = () => {
  const { language } = useOutletContext();
  const { courseId } = useParams();
  const course = coursesData.find(c => c.id === courseId);

  if (!course) {
    return <Navigate to="/" replace />;
  }

  const isSpanish = language === 'es';

  return (
    // Hero mostaza + contenido en blanco
    <div className="min-h-screen pt-28 bg-[#C89A24] text-gray-800">
      {/* HERO MOSTAZA */}
      <div className="pb-24 bg-gradient-to-b from-[#C89A24] via-[#FDF4DF] to-white">
        <div className="container mx-auto px-4 md:px-8 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* TEXTO DEL CURSO DENTRO DE UNA CARD BLANCA */}
              <div className="order-2 lg:order-1">
                <div className="bg-white/95 rounded-2xl shadow-bds-soft p-8">
                  <Link
                    to="/#learning"
                    className="text-bds-text-soft hover:text-bds-deep transition-colors duration-300 inline-flex items-center mb-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    {isSpanish ? 'Volver a Formación' : 'Back to Learning'}
                  </Link>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-bds-deep mb-4">
                    {course.title[language]}
                  </h1>

                  <p className="text-lg text-bds-text-soft leading-relaxed">
                    {course.details.main[language]}
                  </p>

                  <p className="text-bds-blue font-bold mt-4">
                    {isSpanish ? 'Duración:' : 'Duration:'}{' '}
                    {course.duration[language]}
                  </p>
                </div>
              </div>

              {/* IMAGEN DEL CURSO */}
              <div className="order-1 lg:order-2">
                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-2xl shadow-black/25">
                  <img
                    src={course.image}
                    alt={course.title[language]}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL EN BLANCO */}
      <div className="bg-white">
        <div className="container mx-auto px-4 md:px-8 py-16">
          {/* TÍTULO DE LA SECCIÓN INTERMEDIA */}
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h2 className="text-3xl font-bold text-bds-deep">
              {isSpanish ? 'Lo que vas a aprender' : 'What you will learn'}
            </h2>
            <p className="text-bds-text-soft mt-2">
              {isSpanish
                ? 'Un resumen claro del contenido del curso y para quién está pensado.'
                : 'A clear overview of the course content and who it is designed for.'}
            </p>
          </div>

          {/* PANEL CON TEMARIO + PÚBLICO OBJETIVO */}
          <div className="max-w-5xl mx-auto bg-bds-bg-soft rounded-2xl p-8 md:p-10 shadow-bds-soft">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* --- TEMARIO --- */}
              <div>
                <h3 className="text-2xl font-semibold text-bds-deep mb-4">
                  {isSpanish ? 'Temario del Curso' : 'Course Topics'}
                </h3>
                <ul className="space-y-3">
                  {course.details.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-bds-aqua mr-3 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span className="text-gray-700">
                        {topic[language]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* --- PÚBLICO OBJETIVO --- */}
              <div className="bg-white p-8 rounded-xl border border-bds-bg-muted">
                <h3 className="text-2xl font-semibold text-bds-deep mb-4">
                  {isSpanish ? '¿A quién está dirigido?' : 'Who is this for?'}
                </h3>
                <p className="text-gray-600">
                  {course.details.targetAudience[language]}
                </p>
              </div>
            </div>
          </div>

          {/* --- CTA FINAL --- */}
          <div className="text-center mt-16 py-12 bg-bds-deep text-white rounded-2xl max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              {isSpanish
                ? '¿Listo para empezar a aprender?'
                : 'Ready to start learning?'}
            </h3>

            {course.udemyLink ? (
              <>
                <p className="text-gray-300 mb-6">
                  {isSpanish
                    ? 'Inscríbete ahora en Udemy y lleva tus habilidades al siguiente nivel.'
                    : 'Enroll now on Udemy and take your skills to the next level.'}
                </p>
                <a
                  href={course.udemyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-bds-aqua text-bds-deep text-base font-semibold rounded-lg shadow-lg hover:bg-bds-blue hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  {isSpanish ? 'Ir al Curso en Udemy' : 'Go to Udemy Course'}
                </a>
              </>
            ) : (
              <>
                <p className="text-gray-300 mb-6">
                  {isSpanish
                    ? 'Contáctanos para organizar una capacitación personalizada para tu equipo.'
                    : 'Contact us to arrange a custom training for your team.'}
                </p>
                <Link
                  to="/#contact"
                  className="inline-block px-8 py-3 bg-bds-aqua text-bds-deep text-base font-semibold rounded-lg shadow-lg hover:bg-bds-blue hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  {isSpanish ? 'Solicitar Información' : 'Request Info'}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
