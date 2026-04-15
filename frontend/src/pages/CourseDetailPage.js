import React, { useEffect } from 'react';
import { Link, useParams, useOutletContext, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { coursesData } from '../data/courses';

const CourseDetailPage = () => {
  const { language } = useOutletContext();
  const { courseId } = useParams();
  const course = coursesData.find(c => c.id === courseId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  if (!course) {
    return <Navigate to="/" replace />;
  }

  const isSpanish = language === 'es';

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 pt-32 pb-24">
      
      {/* 
        =======================================================================
        SPLIT HERO COMPONENT (APPLE BENTO)
        =======================================================================
      */}
      <div className="container mx-auto px-6 lg:px-12 mb-20">
        <div className="max-w-6xl mx-auto">
          {/* Navegación Back */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
            <Link
              to="/#learning"
              className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-bds-violet transition-colors uppercase tracking-widest"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {isSpanish ? 'Volver a Academia' : 'Back to Academy'}
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* IZQUIERDA: CONTENIDO */}
            <motion.div 
              initial="hidden" animate="visible" variants={fadeUp}
              className="lg:col-span-5 flex flex-col justify-center bg-white rounded-[2.5rem] p-10 md:p-12 shadow-xl border border-slate-100"
            >
              <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-bds-aqua mb-6 block drop-shadow-sm">
                BDS Training
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-950 leading-tight mb-6">
                {course.title[language]}
              </h1>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8 flex-grow">
                {course.details.main[language]}
              </p>
              
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                <svg className="w-5 h-5 text-bds-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  {isSpanish ? 'Duración:' : 'Duration:'}
                </span>
                <span className="text-sm font-medium text-slate-500">
                  {course.duration[language]}
                </span>
              </div>
            </motion.div>

            {/* DERECHA: IMAGEN CON EFECTO PARALLAX SUAVE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="w-full h-full min-h-[300px] lg:min-h-full rounded-[2.5rem] overflow-hidden shadow-2xl relative bg-slate-900">
                <img
                  src={course.image}
                  alt={course.title[language]}
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-90 transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* 
        =======================================================================
        DETALLES: TEMARIO Y PÚBLICO
        =======================================================================
      */}
      <div className="container mx-auto px-6 lg:px-12 mb-20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="max-w-6xl mx-auto"
        >
          {/* CABECERA SECCIÓN DE APRENDIZAJE */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
              {isSpanish ? 'Lo que vas a aprender' : 'What you will learn'}
            </h2>
            <p className="text-slate-500 font-medium">
              {isSpanish
                ? 'Un resumen claro del contenido estructurado y nuestra audiencia objetivo.'
                : 'A clear overview of the structured content and our target audience.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            
            {/* TEMARIO */}
            <div className="md:col-span-7 bg-white rounded-[2rem] p-10 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-950 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-bds-aqua/10 flex items-center justify-center text-bds-aqua">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
                </div>
                {isSpanish ? 'Temario del Curso' : 'Course Topics'}
              </h3>
              <ul className="space-y-4">
                {course.details.topics.map((topic, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 group-hover:bg-bds-violet transition-colors">
                      <svg className="w-3 h-3 text-bds-violet group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-slate-600 font-medium leading-relaxed group-hover:text-slate-900 transition-colors">
                      {topic[language]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PÚBLICO OBJETIVO */}
            <div className="md:col-span-5 bg-slate-950 rounded-[2rem] p-10 shadow-xl relative overflow-hidden group">
              {/* Halos de luz de fondo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-bds-violet/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-bds-violet/30 transition-colors" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-bds-aqua/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-bds-aqua/20 transition-colors" />

              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
                  </div>
                  {isSpanish ? 'Perfil del Alumno' : 'Who is this for?'}
                </h3>
                <p className="text-slate-300 font-light leading-relaxed flex-grow">
                  {course.details.targetAudience[language]}
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* 
        =======================================================================
        FINAL CTA - APPLE PRODUCT STYLE
        =======================================================================
      */}
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="text-center rounded-[3rem] p-12 md:p-20 bg-white shadow-2xl border border-slate-100 max-w-5xl mx-auto relative overflow-hidden"
        >
           {/* Background glow para el boton */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-bds-aqua/5 blur-[100px] rounded-full pointer-events-none" />

          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-6 tracking-tight relative z-10">
            {isSpanish ? '¿Listo para empezar?' : 'Ready to start?'}
          </h3>

          <p className="text-slate-500 text-lg mb-12 max-w-xl mx-auto relative z-10">
            {course.udemyLink 
              ? (isSpanish ? 'Inscríbete ahora en Udemy y lleva tus habilidades al siguiente nivel con acceso de por vida.' : 'Enroll now on Udemy and take your skills to the next level with lifetime access.')
              : (isSpanish ? 'Contáctanos para organizar una capacitación personalizada para tu equipo.' : 'Contact us to arrange a custom training for your team.')}
          </p>

          <div className="relative z-10">
            {course.udemyLink ? (
              <a
                href={course.udemyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-slate-950 text-white text-lg font-bold rounded-full shadow-lg border border-slate-800 hover:bg-bds-aqua hover:border-bds-aqua hover:text-slate-950 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                {isSpanish ? 'Ir al Curso en Udemy' : 'Go to Udemy Course'}
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            ) : (
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center px-10 py-5 bg-slate-950 text-white text-lg font-bold rounded-full shadow-lg border border-slate-800 hover:bg-bds-violet hover:border-bds-violet transition-all duration-300 transform hover:-translate-y-1 group"
              >
                {isSpanish ? 'Solicitar Información' : 'Request Info'}
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            )}
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default CourseDetailPage;
