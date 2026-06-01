// RUTA: src/sections/AcademySection.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const courses = [
  {
    title: {
      es: 'Fútbol y Datos: Construye tu primer Dashboard en Power BI',
      en: 'Football & Data: Build Your First Dashboard in Power BI'
    },
    slug: 'futbol-y-datos',
    url: 'https://www.udemy.com/course/futbol-y-datos-construye-tu-primer-dashboard-en-power-bi/?srsltid=AfmBOoqaO--V9lDv1c1WZ8iHpLiX-Hj0JNkk5vl2lsoMyMbgohDPCNoB&couponCode=MT260601G1',
    metrics: { es: 'Reporting Avanzado', en: 'Advanced Reporting' },
    desc: {
      es: 'Aprende a transformar datos crudos en historias visuales interactivas utilizando registros reales de la English Premier League. Un enfoque práctico diseñado para interpretar y comunicar métricas de rendimiento con claridad absoluta.',
      en: 'Learn to transform raw data into interactive visual stories using real English Premier League records. A practical approach designed to interpret and communicate performance metrics with absolute clarity.'
    },
    topics: {
      es: [
        'Introducción a Power BI y buenas prácticas profesionales.',
        'Creación y diseño de visualizaciones claras, atractivas y de alto impacto.',
        'Implementación de interactividad avanzada mediante filtros y segmentaciones.',
        'Cálculo de medidas básicas y avanzadas aplicadas al análisis de negocio.',
        'Publicación segura y compartición estructurada de dashboards ejecutivos.'
      ],
      en: [
        'Introduction to Power BI and professional best practices.',
        'Creation and design of clear, attractive, and high-impact visualizations.',
        'Implementation of advanced interactivity through filters and segmentations.',
        'Calculation of basic and advanced measures applied to business analysis.',
        'Secure publishing and structured sharing of executive dashboards.'
      ]
    }
  },
  {
    title: {
      es: 'Gaming y Datos: Análisis Avanzado de Ventas de PS5 en Power BI',
      en: 'Gaming & Data: Advanced PS5 Sales Analysis in Power BI'
    },
    slug: 'gaming-y-datos',
    url: 'https://www.udemy.com/course/gaming-y-datos-analisis-avanzado-de-ventas-de-ps5-en-power/',
    metrics: { es: 'Modelos Predictivos', en: 'Predictive Insights' },
    desc: {
      es: 'Aprende a procesar volúmenes masivos de registros de retail del sector de videojuegos. Este curso enseña a estructurar visualizaciones estratégicas y a ejecutar consultas complejas para la toma de decisiones informadas.',
      en: 'Learn to process massive volumes of retail records from the video game industry. This course teaches how to structure strategic visualizations and execute complex queries for informed decision-making.'
    },
    topics: {
      es: [
        'Análisis de datos con Time Intelligence para cálculos dinámicos y precisos.',
        'Consultas avanzadas en SQL para la extracción limpia de datos relevantes.',
        'Optimización de navegación dinámica en reportes mediante botones interactivos.',
        'Sincronización avanzada de Slicers para un análisis fluido entre páginas.',
        'Formatos condicionales en tarjetas y tablas para el resaltado de KPIs clave.',
        'Configuración estructural de layouts funcionales y profesionales.'
      ],
      en: [
        'Data analysis with Time Intelligence for dynamic and accurate calculations.',
        'Advanced SQL queries for clean extraction of relevant datasets.',
        'Optimization of dynamic report navigation using interactive buttons.',
        'Advanced Slicer synchronization for smooth multi-page cross-analysis.',
        'Conditional formatting in cards and tables to highlight key KPIs.',
        'Structural configuration of functional and professional layouts.'
      ]
    }
  },
  {
    title: {
      es: 'Excel Elemental para Empresas',
      en: 'Elemental Excel for Enterprise Ecosystems'
    },
    slug: 'excel-empresas',
    url: 'https://www.udemy.com/course/excel-elemental-para-empresas/',
    metrics: { es: 'Eficiencia Operativa', en: 'Operational Efficiency' },
    desc: {
      es: 'Optimiza los procesos laborales básicos y administrativos de tu entorno corporativo desde cero. Diseñado para dominar las herramientas esenciales de organización de datos y agilizar tareas repetitivas en la oficina.',
      en: 'Optimize core operational and administrative business processes from scratch. Designed to master essential data organization tools and streamline repetitive office tasks.'
    },
    topics: {
      es: [
        'Gestión, organización y estructuración eficiente de datos corporativos.',
        'Aplicación de fórmulas matemáticas y lógicas (SUMA, PROMEDIO, CONTAR).',
        'Construcción de tablas dinámicas y gráficos limpios para presentación de reportes.',
        'Navegación e integración de las funciones más utilizadas en el entorno laboral.',
        'Uso de herramientas clave para agilizar y estandarizar flujos administrativos.'
      ],
      en: [
        'Efficient management, organization, and structuring of corporate data.',
        'Application of mathematical and logical formulas (SUM, AVERAGE, COUNT).',
        'Construction of pivot tables and clean charts for reporting presentations.',
        'Navigation and integration of the most widely used functions in workplace contexts.',
        'Use of core tools to streamline and standardize administrative workflows.'
      ]
    }
  }
];

const AcademySection = ({ language = 'es' }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="academy" className="py-32 bg-[#ffffff] relative overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cabecera de Autoridad Técnica */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.5em] text-teal-600 font-bold block mb-4">
            {language === 'es' ? 'TRANSFERENCIA DE CONOCIMIENTO' : 'KNOWLEDGE TRANSFER'}
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-950">
            {language === 'es' ? 'Educamos a la' : 'Educating the'}{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-teal-600">
              {language === 'es' ? 'Industria Tecnológica' : 'Tech Industry'}
            </span>
          </h2>
          <p className="text-sm font-light text-slate-500 mt-6 max-w-xl mx-auto leading-relaxed">
            {language === 'es' 
              ? 'Nuestra capacidad técnica respaldada por miles de ingenieros y analistas formados globalmente en la plataforma oficial de Udemy.' 
              : 'Our engineering excellence backed by thousands of developers and analysts trained globally on the official Udemy platform.'}
          </p>
        </div>

        {/* Acordeón Editorial Estilo Minimalist-UI */}
        <div className="max-w-4xl mx-auto border-t border-slate-200">
          {courses.map((course, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div key={idx} className="border-b border-slate-200 overflow-hidden">
                <button
                  onClick={() => setActiveIndex(isOpen ? -1 : idx)}
                  className="w-full py-8 flex flex-col md:flex-row md:items-center justify-between text-left group transition-colors duration-300"
                >
                  <div className="flex items-start gap-6 max-w-2xl">
                    <span className="text-xs font-mono text-slate-400 mt-1">/0{idx + 1}</span>
                    <div>
                      <h3 className="text-lg md:text-xl font-medium text-slate-900 group-hover:text-teal-600 transition-colors duration-300 tracking-tight">
                        {course.title[language]}
                      </h3>
                      <span className="inline-block mt-2 text-[10px] uppercase tracking-widest font-mono text-teal-600 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
                        {course.metrics[language]}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 flex items-center gap-4 self-end md:self-center">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest hidden md:inline">
                      {isOpen ? (language === 'es' ? 'Cerrar' : 'Close') : (language === 'es' ? 'Ver Temario' : 'View Syllabus')}
                    </span>
                    <div className={`w-5 h-5 flex items-center justify-center text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      ↓
                    </div>
                  </div>
                </button>

                {/* Contenido Expandible Detallado */}
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pl-6 md:pl-12 pr-6 bg-slate-50/60 rounded-2xl mb-6 p-8 border border-slate-100/80">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      
                      {/* Columna Izquierda: Resumen */}
                      <div className="md:col-span-1">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                          {language === 'es' ? 'Enfoque del Curso' : 'Course Focus'}
                        </h4>
                        <p className="text-sm font-light text-slate-600 leading-relaxed">
                          {course.desc[language]}
                        </p>
                      </div>

                      {/* Columna Derecha: Ejes de Aprendizaje */}
                      <div className="md:col-span-2 flex flex-col justify-between gap-6">
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                            {language === 'es' ? '¿Qué aprenderás en este programa?' : 'What will you learn?'}
                          </h4>
                          <ul className="space-y-2.5">
                            {course.topics[language].map((topic, tIdx) => (
                              <li key={tIdx} className="text-sm font-light text-slate-700 flex items-start gap-2.5">
                                <span className="text-teal-500 font-medium select-none mt-0.5">•</span>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Botón de Enlace Directo */}
                        <div className="pt-4 border-t border-slate-200/60 flex justify-end">
                          <a
                            href={course.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-slate-950 text-white hover:bg-teal-600 px-6 py-3 rounded-full text-xs font-medium tracking-wide shadow-sm transition-all duration-300"
                          >
                            {language === 'es' ? 'Acceder al Curso en Udemy' : 'Access Course on Udemy'} ↗
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AcademySection;