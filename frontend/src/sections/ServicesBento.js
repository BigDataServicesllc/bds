import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const services = [
  {
    title: { es: 'Automatización de Procesos', en: 'Process Automation' },
    desc: { 
      es: 'Flujos de trabajo operativos en la nube. Conectamos los sistemas core corporativos para eliminar fricción y escalar procesos.', 
      en: 'Operational cloud workflows. We connect corporate core systems to eliminate friction and scale processes.' 
    },
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
  {
    title: { es: 'Pipelines de Datos (Ingeniería)', en: 'Data Pipelines (Engineering)' },
    desc: { 
      es: 'Arquitectura cloud robusta y procesamiento ETL. Centralización de datos y escalado de pipelines para misión crítica.', 
      en: 'Robust cloud architecture and ETL processing. Data centralization and pipeline scaling for mission-critical operations.' 
    },
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    )
  },
  {
    title: { es: 'Reportes y Modelos Predictivos', en: 'Reporting & Predictive Models' },
    desc: { 
      es: 'Dashboards BI ejecutivos de alta fidelidad. Analítica de datos avanzada e insights predictivos personalizados.', 
      en: 'Executive high-fidelity BI dashboards. Advanced data analytics and custom predictive insights.' 
    },
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    )
  },
  {
    title: { es: 'Desarrollo Web & Mobile Premium', en: 'Premium Web & Mobile App Dev' },
    desc: { 
      es: 'Ingeniería escalable y arquitecturas seguras para sistemas insignia, validados con despliegues en producción.', 
      en: 'Scalable engineering and secure architectures for flagship systems, validated with production deployments.' 
    },
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    )
  }
];

const ServicesBento = ({ language = 'es' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.bento-card');
      
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.02, duration: 0.5, ease: 'cubic-bezier(0.32,0.72,0,1)', boxShadow: '0 30px 60px rgba(0,0,0,0.08)' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1.0, duration: 0.5, ease: 'cubic-bezier(0.32,0.72,0,1)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-40 bg-[#f5f5f7] relative overflow-hidden border-y border-black/5 min-h-[100dvh] flex flex-col justify-center">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-200/40 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.5em] text-teal-700 font-bold block mb-4">
            {language === 'es' ? 'SOLUCIONES CORPORATIVAS' : 'ENTERPRISE SOLUTIONS'}
          </span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#1d1d1f] leading-tight">
            {language === 'es' ? 'Nuestras Áreas de' : 'Our Areas of'}{' '}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
              {language === 'es' ? 'Especialización' : 'Specialization'}
            </span>
          </h2>
        </div>

        {/* 2x2 Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bento-card group relative flex flex-col justify-between h-full p-12 rounded-[2rem] bg-white border border-black/[0.04] shadow-sm cursor-pointer transition-all duration-500"
            >
              <div>
                <div className="mb-8 h-12 w-12 rounded-xl bg-slate-50 border border-black/5 flex items-center justify-center text-slate-500 group-hover:text-teal-600 group-hover:border-teal-100 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-medium text-[#1d1d1f] mb-4 tracking-tight">
                  {service.title[language]}
                </h3>
                <p className="text-base font-light text-slate-500 leading-relaxed max-w-md">
                  {service.desc[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;