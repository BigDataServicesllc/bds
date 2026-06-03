// RUTA: src/sections/ServicesBento.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 'automation',
    title: { es: 'Automatización de Procesos Operativos', en: 'Process Automation' },
    tag: { es: 'Eficiencia', en: 'Efficiency' },
    shortDesc: {
      es: 'Eliminación de cuellos de botella manuales mediante la conexión de tus sistemas empresariales core.',
      en: 'Elimination of manual bottlenecks by connecting your core business systems seamlessly.'
    },
    longDesc: {
      es: 'Diseñamos e implementamos flujos lógicos y autónomos en la nube para que tu equipo deje de arrastrar datos a mano. Conectamos ERPs, CRMs y herramientas internas para liberar cientos de horas hombre operativas.',
      en: 'We design and deploy autonomous cloud workflows so your team stops handling data manually. We bridge ERPs, CRMs, and internal tools to unlock hundreds of operational man-hours.'
    },
    bulletTitle: { es: 'Entregables de Ingeniería:', en: 'Engineering Deliverables:' },
    bullets: {
      es: ['Workflows autónomos e integraciones en la nube', 'Conexión de sistemas core (APIs y Webhooks)', 'Estandarización de flujos operativos'],
      en: ['Autonomous cloud workflows and integrations', 'Core system bridging via APIs and Webhooks', 'Operational workflow standardization']
    }
  },
  {
    id: 'pipelines',
    title: { es: 'Pipelines de Datos e Infraestructura', en: 'Data Pipelines & Infrastructure' },
    tag: { es: 'Ingeniería', en: 'Data Eng' },
    shortDesc: {
      es: 'Centralización de infraestructura mediante tuberías de datos robustas, limpias y escalables.',
      en: 'Centralization of data infrastructure through robust, clean, and scalable data pipelines.'
    },
    longDesc: {
      es: 'Construimos arquitecturas cloud e infraestructuras de datos estables que extraen, transforman y consolidan la información de tu empresa de forma automática hacia repositorios centrales seguros para evitar caídas.',
      en: 'We build stable cloud architectures and data infrastructures that automatically extract, transform, and consolidate your business information into secure central repositories.'
    },
    bulletTitle: { es: 'Entregables de Ingeniería:', en: 'Engineering Deliverables:' },
    bullets: {
      es: ['Procesamiento ETL/ELT automatizado', 'Arquitecturas cloud y almacenes de datos', 'Monitoreo de tuberías de datos críticas'],
      en: ['Automated ETL/ELT processing data flows', 'Cloud architectures and data warehouses', 'Critical pipeline execution monitoring']
    }
  },
  {
    id: 'reporting',
    title: { es: 'Reporting Avanzado y Modelos Predictivos', en: 'Advanced Reporting & Analytics' },
    tag: { es: 'Inteligencia', en: 'Intelligence' },
    shortDesc: {
      es: 'Transformación de datos masivos en dashboards ejecutivos e insights de proyección analítica.',
      en: 'Transformation of massive datasets into executive dashboards and analytical insights.'
    },
    longDesc: {
      es: 'Diseñamos sistemas de inteligencia de negocio (BI) interactivos de alta fidelidad y desarrollamos modelos matemáticos predictivos personalizados para anticipar tendencias y optimizar el rumbo comercial.',
      en: 'We design high-fidelity interactive business intelligence (BI) systems and develop custom predictive mathematical models to forecast market trends and optimize commercial direction.'
    },
    bulletTitle: { es: 'Entregables de Ingeniería:', en: 'Engineering Deliverables:' },
    bullets: {
      es: ['Dashboards ejecutivos interactivos de alta fidelidad', 'Modelos de analítica avanzada predictiva', 'Estructuración de KPIs críticos de negocio'],
      en: ['High-fidelity executive interactive dashboards', 'Custom predictive advanced analytics models', 'Critical business KPI matrix structuring']
    }
  },
  {
    id: 'dev',
    title: { es: 'Desarrollo de Aplicaciones y Ecosistemas Web', en: 'Web & Mobile App Development' },
    tag: { es: 'Software', en: 'Software' },
    shortDesc: {
      es: 'Ingeniería de software de alto rendimiento para plataformas web complejas y aplicaciones móviles.',
      en: 'High-performance software engineering for complex web platforms and mobile applications.'
    },
    longDesc: {
      es: 'Programamos aplicaciones robustas con arquitecturas modernas y código escalable listo para producción. Desarrollamos soluciones de cara al usuario con rendimiento crítico para asegurar velocidad y seguridad absoluta.',
      en: 'We program robust software architectures with production-ready scalable code. We develop user-facing systems with critical performance to guarantee top speed and absolute data safety.'
    },
    bulletTitle: { es: 'Entregables de Ingeniería:', en: 'Engineering Deliverables:' },
    bullets: {
      es: ['Código limpio, mantenible y escalable listo para producción', 'Plataformas web empresariales y apps nativas móviles', 'Arquitecturas de alto rendimiento y seguridad crítica'],
      en: ['Production-ready clean, maintainable, and scalable code', 'Enterprise web platforms and native mobile apps', 'High-performance and critical security architectures']
    }
  }
];

const ServicesBento = ({ language = 'es' }) => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="services" className="py-32 bg-[#f5f5f7] relative overflow-hidden border-b border-slate-200/60">
      <div className="container mx-auto px-6 relative z-10">

        {/* Encabezado Estratégico */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.5em] text-teal-600 font-bold block mb-4">
            {language === 'es' ? 'SOLUCIONES DE INGENIERÍA' : 'ENGINEERING SOLUTIONS'}
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-950 tracking-tighter leading-tight">
            {language === 'es' ? 'Infraestructura para la' : 'Infrastructure for'}{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-teal-600">
              {language === 'es' ? 'Automatización y Eficiencia Operativa' : 'Automation & Operational Efficiency'}
            </span>
          </h2>
        </div>

        {/* Bento Grid Simétrico de Soluciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
          {services.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
              <motion.div
                key={service.id}
                layout="position"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`p-8 rounded-3xl border transition-all duration-300 bg-white ${isExpanded
                    ? 'border-slate-300 md:col-span-2 shadow-[0_30px_60px_rgba(0,0,0,0.04)]'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                  }`}
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-teal-600 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded-md">
                      {service.tag[language]}
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900 mt-3 tracking-tight">
                      {service.title[language]}
                    </h3>
                  </div>
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : service.id)}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 text-sm font-mono transition-colors"
                  >
                    {isExpanded ? '−' : '+'}
                  </button>
                </div>

                <p className="text-sm font-light text-slate-500 mt-3 leading-relaxed max-w-xl">
                  {service.shortDesc[language]}
                </p>

                {/* Desplegable de detalles internos */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm font-light text-slate-600 leading-relaxed">
                            {service.longDesc[language]}
                          </p>
                        </div>
                        <div className="flex flex-col justify-between gap-6">
                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                              {service.bulletTitle[language]}
                            </h4>
                            <ul className="space-y-2">
                              {service.bullets[language].map((bullet, bIdx) => (
                                <li key={bIdx} className="text-sm font-light text-slate-700 flex items-start gap-2">
                                  <span className="text-teal-500 mt-0.5">•</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* CTA de conversión directa */}
                          <div className="flex justify-end pt-4 border-t border-slate-100">
                            <a
                              href="#contact"
                              className="bg-slate-950 text-white hover:bg-teal-600 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300"
                            >
                              {language === 'es' ? 'Solicitar Diagnóstico Operativo' : 'Request Operational Assessment'} ↗
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesBento;