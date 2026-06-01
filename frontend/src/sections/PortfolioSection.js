import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const content = {
  es: {
    badge: 'PRODUCCIÓN REAL',
    title: 'Proyectos que Marcan la Diferencia',
    viewDetails: 'Ver Detalles Técnicos'
  },
  en: {
    badge: 'PRODUCTION BUILDS',
    title: 'Projects That Make a Difference',
    viewDetails: 'View Technical Details'
  }
};

const projects = [
  { 
    img: '/images/web_desing_01.png', 
    title: 'Aramare Café', 
    url: 'www.aramarecafe.com', 
    sub: { es: 'E-commerce y Analítica Comercial', en: 'E-commerce & Business Insights' } 
  },
  { 
    img: '/images/web_desing_02.png', 
    title: 'WeBuild Argentina', 
    url: 'www.webuildarg.com', 
    sub: { es: 'Arquitectura de Información Corporativa', en: 'Enterprise Information Architecture' } 
  },
  { 
    img: '/images/web_desing_03.png', 
    title: 'Tu Turno en Línea', 
    url: 'www.tuturnoenlinea.com', 
    sub: { es: 'Agendamiento Inteligente y Flujos de Trabajo', en: 'Smart Scheduling & Workflows' } 
  }
];

const PortfolioSection = ({ language = 'es' }) => {
  const t = content[language];
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.portfolio-card');
      
      gsap.fromTo(cards, 
        { opacity: 0, x: 50 },
        {
          opacity: 1, 
          x: 0, 
          stagger: 0.2, 
          duration: 0.8, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <section id="portfolio" ref={containerRef} className="py-40 md:py-48 bg-[#ffffff] relative overflow-hidden min-h-[100dvh] flex flex-col justify-center">
      <div className="container mx-auto px-6 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold block mb-4">
            {t.badge}
          </span>
          <h2 className="text-4xl md:text-[4rem] font-light text-[#1d1d1f] tracking-tighter leading-[1.1]">
            {t.title}
          </h2>
        </div>
      </div>

      {/* Symmetrical Apple Mac Window Container */}
      <div className="w-full overflow-x-auto pb-12 scrollbar-none">
        <div className="flex gap-8 px-6 md:px-24 min-w-max">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="portfolio-card w-[320px] md:w-[600px] group cursor-pointer"
            >
              {/* Marco Safari Inalterable */}
              <div className="rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-slate-200 bg-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] group-hover:-translate-y-2">
                {/* Safari Header */}
                <div className="h-10 bg-slate-50 flex items-center justify-between px-4 border-b border-slate-100">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-red-400 transition-colors duration-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-yellow-400 transition-colors duration-300 delay-75" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-green-400 transition-colors duration-300 delay-150" />
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 bg-white px-6 py-1 rounded-md border border-slate-100 shadow-sm flex items-center gap-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path></svg>
                    {project.url}
                  </div>
                  <div className="w-8" />
                </div>

                {/* Imagen 16:9 */}
                <div className="aspect-video relative overflow-hidden bg-slate-50">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <Link
                      to="/portfolio"
                      className="bg-[#1d1d1f] text-white px-6 py-3 rounded-full font-medium text-xs shadow-xl tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-black"
                    >
                      {t.viewDetails}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 px-2 flex flex-col items-center text-center">
                <h3 className="text-xl font-medium text-[#1d1d1f] tracking-tight mb-2">{project.title}</h3>
                <p className="text-sm text-slate-500 font-light">{project.sub[language]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;