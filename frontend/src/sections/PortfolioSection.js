// RUTA: src/sections/PortfolioSection.js
import React, { useState, useEffect } from 'react';

const webProjects = [
  { title: 'Aramare Café', url: 'www.aramarecafe.com', link: 'https://www.aramarecafe.com/', img: '/images/web_desing/aramare.png' },
  { title: 'WeBuild Argentina', url: 'www.webuildarg.com', link: 'https://www.webuildarg.com/', img: '/images/web_desing/webuild.png' },
  { title: 'Tu Turno en Línea', url: 'www.tuturnoenlinea.com', link: 'https://tuturnoenlinea.com/', img: '/images/web_desing/tuturno.png' },
  { title: 'Alquirate', url: 'www.alquirate.com', link: 'https://www.alquirate.com/', img: '/images/web_desing/alquirate.png' }
];

const mobileAppsFixed = [
  { 
    title: 'FlowFinanzas', 
    url: 'Private App', 
    link: '#', 
    imgs: [
      '/images/app_desing/Flowfinanzas/01.png',
      '/images/app_desing/Flowfinanzas/02.png',
      '/images/app_desing/Flowfinanzas/03.png',
      '/images/app_desing/Flowfinanzas/04.png',
      '/images/app_desing/Flowfinanzas/05.png',
      '/images/app_desing/Flowfinanzas/06.png',
      '/images/app_desing/Flowfinanzas/07.png',
      '/images/app_desing/Flowfinanzas/08.png'
    ] 
  },
  { 
    title: 'Farmaboost', 
    url: 'App Store', 
    link: 'https://apps.apple.com/ar/app/farmaboost/id6748421015', 
    imgs: [
      '/images/app_desing/Farmaboost/01.PNG',
      '/images/app_desing/Farmaboost/02.PNG',
      '/images/app_desing/Farmaboost/03.PNG'
    ] 
  },
  { 
    title: 'Tu Turno en Línea', 
    url: 'App Store', 
    link: 'https://apps.apple.com/us/app/tu-turno-en-l%C3%ADnea-reservas/id6757831348', 
    imgs: [
      '/images/app_desing/Tuturno/01.png',
      '/images/app_desing/Tuturno/02.png',
      '/images/app_desing/Tuturno/03.png',
      '/images/app_desing/Tuturno/04.png',
      '/images/app_desing/Tuturno/05.png',
      '/images/app_desing/Tuturno/06.png',
      '/images/app_desing/Tuturno/07.png',
      '/images/app_desing/Tuturno/08.png'
    ] 
  }
];

const content = {
  es: {
    webLabel: 'DESARROLLO WEB Y LANDING PAGES',
    webHeadline1: 'Experiencias Digitales de',
    webHeadline2: 'Alto Impacto',
    webDesc: 'Arquitectura frontend de alto impacto. Construimos interfaces impecables y plataformas empresariales escalables diseñadas para capturar atención y convertir usuarios.',
    webImgAlt: 'Mockup de Desarrollo Web 3D',
    appLabel: 'DESARROLLO DE APLICACIONES MÓVILES',
    appHeadline1: 'Ecosistemas Nativos y',
    appHeadline2: 'Fluidos',
    appDesc: 'Experiencias nativas de clase mundial. Diseñamos ecosistemas iOS y Android que destacan por su fluidez, seguridad y diseño centrado en el usuario.',
    appImgAlt: 'Mockup de Aplicación Móvil 3D',
    viewProject: 'Ver Proyecto',
    visit: 'Visitar',
    curatedSelection: 'Nuestra selección curada'
  },
  en: {
    webLabel: 'WEB DEVELOPMENT & LANDING PAGES',
    webHeadline1: 'High-Impact Digital',
    webHeadline2: 'Experiences',
    webDesc: 'High-impact frontend architecture. We build flawless interfaces and scalable enterprise platforms designed to capture attention and convert users.',
    webImgAlt: '3D Web Development Mockup',
    appLabel: 'MOBILE APP DEVELOPMENT',
    appHeadline1: 'Fluid Native',
    appHeadline2: 'Ecosystems',
    appDesc: 'World-class native experiences. We design iOS and Android ecosystems that stand out for their fluidity, security, and user-centric design.',
    appImgAlt: '3D Mobile App Mockup',
    viewProject: 'View Project',
    visit: 'Visit',
    curatedSelection: 'Our curated selection'
  }
};

const AppSlideshow = ({ imgs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!imgs || imgs.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imgs.length);
    }, 2500); // 2.5 seconds per slide
    return () => clearInterval(interval);
  }, [imgs]);

  return (
    <div className="w-full h-full relative bg-[#1d1d1f]">
      {imgs.map((src, idx) => (
        <img 
          key={src}
          src={src} 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          alt={`App Screen ${idx + 1}`} 
        />
      ))}
    </div>
  );
};

const PortfolioSection = ({ language = 'es' }) => {
  const t = content[language];

  return (
    <section id="portfolio" className="bg-[#ffffff]">
      {/* --- WEB DEVELOPMENT SECTION --- */}
      <div className="py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Main Headline Web */}
          <div className="max-w-4xl mx-auto text-center md:text-left mb-24">
            <span className="text-[10px] uppercase tracking-[0.5em] text-teal-600 font-bold block mb-4">
              {t.webLabel}
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[#1d1d1f] tracking-tighter leading-tight">
              {t.webHeadline1}{' '}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-teal-600">
                {t.webHeadline2}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left: Web Mockup Image */}
            <div className="order-2 lg:order-1 rounded-[2rem] p-2 bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5 overflow-hidden">
              <div className="rounded-[1.5rem] overflow-hidden bg-slate-50 relative aspect-[4/3]">
                <img 
                  src="/images/web_mockup_generated.png" 
                  alt={t.webImgAlt} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Right: Description Copy */}
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <p className="text-2xl md:text-3xl font-light text-[#1d1d1f] tracking-tight leading-snug">
                {t.webDesc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-16 mb-16">
            <div className="h-px bg-slate-200 flex-grow"></div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">
              {t.curatedSelection}
            </span>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>

          {/* Web Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {webProjects.map((p, i) => (
              <a key={i} href={p.link} target="_blank" rel="noreferrer" className="group block relative">
                
                {/* Layered background card for depth (as seen in reference image) */}
                <div className="absolute inset-0 bg-slate-100 rounded-[2rem] translate-y-6 translate-x-0 scale-95 opacity-50 group-hover:translate-y-8 group-hover:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"></div>
                
                {/* Main Browser Mockup */}
                <div className="relative z-10 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-black/5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] bg-white group-hover:-translate-y-2 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  {/* Safari/Mac Chrome Header */}
                  <div className="h-10 bg-[#f8f8f8] border-b border-black/5 flex items-center px-5 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-[#ff5f56] transition-colors duration-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-[#ffbd2e] transition-colors duration-300 delay-75"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-[#27c93f] transition-colors duration-300 delay-150"></div>
                  </div>
                  {/* Website Image */}
                  <div className="relative aspect-[16/10] bg-slate-50 overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.32,0.72,0,1)]" />
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <h3 className="font-medium text-[#1d1d1f] tracking-tight text-xl mb-1">{p.title}</h3>
                  <span className="text-sm font-light text-slate-500 group-hover:text-teal-600 transition-colors inline-flex items-center gap-1">
                    {p.url} <svg className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* --- MOBILE APP SECTION --- */}
      <div className="w-full bg-[#f5f5f7] py-32 border-y border-black/5">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Main Headline Mobile */}
          <div className="max-w-4xl mx-auto text-center md:text-left mb-24">
            <span className="text-[10px] uppercase tracking-[0.5em] text-teal-600 font-bold block mb-4">
              {t.appLabel}
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[#1d1d1f] tracking-tighter leading-tight">
              {t.appHeadline1}{' '}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-teal-600">
                {t.appHeadline2}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left: Mobile Mockup Image */}
            <div className="order-2 lg:order-1 rounded-[2rem] p-2 bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5 overflow-hidden lg:pr-12">
              <div className="rounded-[1.5rem] overflow-hidden bg-slate-50 relative aspect-[4/3]">
                <img 
                  src="/images/mobile_mockup_generated.png" 
                  alt={t.appImgAlt} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Right: Description Copy */}
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <p className="text-2xl md:text-3xl font-light text-[#1d1d1f] tracking-tight leading-snug">
                {t.appDesc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-16 mb-16">
            <div className="h-px bg-slate-200 flex-grow"></div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">
              {t.curatedSelection}
            </span>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>

          {/* Mobile Projects List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
            {mobileAppsFixed.map((a, i) => (
              <a key={i} href={a.link} target="_blank" rel="noreferrer" className="group block relative mx-auto w-full max-w-[280px]">
                
                {/* Subtle Glow Behind Phone */}
                <div className="absolute inset-0 bg-teal-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Pure CSS iPhone Mockup */}
                <div className="relative z-10 rounded-[3rem] overflow-hidden border-[8px] border-[#1d1d1f] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] bg-[#1d1d1f] aspect-[9/19] group-hover:-translate-y-4 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#1d1d1f] rounded-full z-20 flex items-center justify-end px-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a] border border-white/5"></div>
                  </div>
                  
                  {/* App Screen Slideshow */}
                  <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <AppSlideshow imgs={a.imgs} />
                  </div>
                </div>

                <div className="mt-8 text-center relative z-20">
                  <h3 className="font-medium text-[#1d1d1f] tracking-tight text-xl mb-1">{a.title}</h3>
                  <span className="text-sm font-light text-slate-500 group-hover:text-teal-600 transition-colors inline-flex items-center gap-1">
                    {a.url} <svg className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Call To Action Block */}
          <div className="mt-32 text-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              className="inline-flex items-center gap-3 bg-[#1d1d1f] text-white px-8 py-4 rounded-full font-medium hover:bg-black active:scale-[0.98] transition-all duration-500 shadow-xl shadow-black/10"
            >
              <span className="text-sm tracking-wide">
                {language === 'es' ? 'Iniciar un Proyecto' : 'Start a Project'}
              </span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;