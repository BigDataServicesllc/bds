import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { coursesData } from '../data/courses';

// Imágenes
import dash1 from '../assets/images/Dashboard.png';
import dash2 from '../assets/images/Dashboard2.png';
import dash3 from '../assets/images/Dashboard3.png';

const LearningSection = ({ language, className }) => {
  const staticContent = {
    title: { es: 'Formación de Alto Impacto', en: 'High-Impact Training' },
    subtitle: { 
      es: 'Dominar los datos es dominar el futuro. Programas diseñados para equipos que buscan excelencia técnica.', 
      en: 'Mastering data is mastering the future. Programs designed for teams seeking technical excellence.' 
    },
  };

  const dashboards = [
    { img: dash1, delay: 0 },
    { img: dash2, delay: 0.2 },
    { img: dash3, delay: 0.4 }
  ];

  return (
    <section id="learning" className={`py-32 bg-[#173B3A] relative overflow-hidden ${className || ''}`}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA: TEXTO (Sticky para que acompañe el scroll de las imágenes) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-bds-aqua text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">
                BDS Academy
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                {staticContent.title[language]}
              </h2>
              <p className="text-white/70 text-lg mb-12 font-light">
                {staticContent.subtitle[language]}
              </p>

              <div className="space-y-4">
                {coursesData.map((course, index) => (
                  <Link key={course.id} to={`/cursos/${course.id}`} className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-bds-aqua/50 transition-all group">
                    <div>
                      <h3 className="text-white font-medium group-hover:text-bds-aqua">{course.title[language]}</h3>
                      <span className="text-[10px] text-bds-aqua/60 uppercase">{course.duration[language]}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 group-hover:bg-bds-aqua group-hover:text-[#173B3A]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* COLUMNA DERECHA: COLUMNA DE IMÁGENES ESCALONADAS */}
          <div className="lg:col-span-7 space-y-12">
            {dashboards.map((dash, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: dash.delay }}
                className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0f0f0f] w-[85%] sm:w-[75%] mx-auto"
              >
                {/* Header estilo Mac */}
                <div className="h-7 bg-white/10 backdrop-blur-md flex items-center px-4 gap-1.5 border-b border-white/5">
                  <div className="w-2 h-2 rounded-full bg-red-500/40" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                  <div className="w-2 h-2 rounded-full bg-green-500/40" />
                </div>
                <div className="aspect-video relative">
                  <img src={dash.img} alt={`Dashboard ${idx + 1}`} className="w-full h-full object-cover object-top" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearningSection;