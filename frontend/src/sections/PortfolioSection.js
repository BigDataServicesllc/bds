// RUTA: src/sections/PortfolioSection.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const webProjects = [
  { title: 'Aramare Café', url: 'www.aramarecafe.com', link: 'https://www.aramarecafe.com/', img: '/images/web_desing/aramare.png' },
  { title: 'WeBuild Argentina', url: 'www.webuildarg.com', link: 'https://www.webuildarg.com/', img: '/images/web_desing/webuild.png' },
  { title: 'Tu Turno en Línea', url: 'www.tuturnoenlinea.com', link: 'https://tuturnoenlinea.com/', img: '/images/web_desing/tuturno.png' },
  { title: 'Alquirate', url: 'www.alquirate.com', link: 'https://www.alquirate.com/', img: '/images/web_desing/alquirate.png' }
];

const flowFinanzasDesc = `¡Toma el control total de tu dinero! Registra gastos, gestiona tus cuentas y alcanza tus metas de ahorro con una interfaz fluida y moderna. ¡Descarga FlowFinanzas hoy!

Gestionar tu dinero nunca fue tan fácil.

FlowFinanzas es la app diseñada para quienes buscan claridad y simplicidad en sus finanzas personales. Deja de preguntarte a dónde se fue tu dinero y empieza a decidir hacia dónde quieres que vaya.

¿Por qué FlowFinanzas?
Control Total: Centraliza tus cuentas bancarias, billeteras virtuales y efectivo en un solo lugar.
Registro Veloz: Diseñada para que anotar un gasto o ingreso te tome solo segundos.
Inteligencia Visual: Gráficos claros que transforman tus números en información útil para gastar mejor.
Planificación: Proyecta tus finanzas y prepárate para el futuro sin sorpresas.

Características Principales:
Interfaz intuitiva y moderna (Modo Oscuro incluido).
Categorización inteligente de movimientos.
Soporte multi-moneda para tus ahorros.
Privacidad garantizada: tus datos financieros están protegidos.

Únete a quienes ya están optimizando su flujo de caja. ¡Descarga FlowFinanzas y haz que tu dinero trabaje para ti!

Un producto de Big Data Services LLC - www.bigdata-services.com`;

const mobileAppsFixed = [
  { 
    title: 'FlowFinanzas', 
    url: 'App Store', 
    link: '#', 
    desc: flowFinanzasDesc,
    logo: '/images/app_desing/Flowfinanzas/logo_flowfinanzas.png',
    appStoreLink: 'https://apps.apple.com/es/app/flowfinanzas/id6763755421',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.bds.flowfinanzas&pcampaignid=web_share',
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
    desc: '',
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
    desc: '',
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
    }, 2500); 
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

const AppModal = ({ app, onClose }) => {
  useEffect(() => {
    if (app) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [app]);

  if (!app) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-12">
      {/* Blur Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xl transition-opacity cursor-pointer" 
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full flex items-center justify-center z-50 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Left Side: Interactive iPhone Mockup */}
        <div className="w-full md:w-5/12 bg-[#f5f5f7] p-8 md:p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-black/5 shrink-0 relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px]"></div>

          <div className="relative z-10 w-full max-w-[280px] rounded-[3rem] overflow-hidden border-[8px] border-[#1d1d1f] shadow-2xl bg-[#1d1d1f] aspect-[9/19]">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#1d1d1f] rounded-full z-20 flex items-center justify-end px-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a] border border-white/5"></div>
            </div>
            <div className="relative w-full h-full">
              <AppSlideshow imgs={app.imgs} />
            </div>
          </div>
        </div>

        {/* Right Side: App Store Style Description */}
        <div className="w-full md:w-7/12 p-8 md:p-12 overflow-y-auto">
          
          {/* Header */}
          <div className="flex items-start gap-6 mb-8">
            <div className="w-24 h-24 rounded-[1.5rem] bg-slate-100 border border-black/5 shadow-sm overflow-hidden shrink-0 flex items-center justify-center relative">
               {app.logo ? (
                 <img src={app.logo} className="w-full h-full object-cover" alt="Icon" />
               ) : (
                 <img src={app.imgs[0]} className="absolute top-0 left-0 w-full object-cover scale-150 origin-top" alt="Icon" />
               )}
            </div>
            <div className="flex-1 pt-1">
              <h2 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] mb-1">{app.title}</h2>
              <p className="text-slate-500 font-medium text-sm mb-4">Big Data Services LLC</p>
              
              <div className="flex flex-wrap items-center gap-3">
                {app.appStoreLink && (
                  <a href={app.appStoreLink} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 active:scale-95">
                    <img src="/images/stores/app_store_badge.svg.png" alt="Download on the App Store" className="h-10 w-auto" />
                  </a>
                )}
                {app.playStoreLink && (
                  <a href={app.playStoreLink} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 active:scale-95">
                    <img src="/images/stores/google_play_badge.png" alt="Get it on Google Play" className="h-10 w-auto" />
                  </a>
                )}
                {!app.appStoreLink && !app.playStoreLink && (
                  <a href={app.link !== '#' ? app.link : undefined} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#007aff] text-white font-semibold rounded-full px-8 py-2 text-sm hover:bg-[#0066d6] transition-colors shadow-md shadow-blue-500/20">
                    {app.url === 'Private App' ? 'Próximamente' : 'OBTENER'}
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-black/5 mb-8"></div>

          {/* Description Text */}
          <div className="prose prose-slate max-w-none text-slate-600 font-light leading-relaxed text-[15px]">
            {app.desc ? (
              app.desc.split('\n').map((line, idx) => (
                line.trim() === '' ? <div key={idx} className="h-4"></div> : <p key={idx} className="mb-2">{line}</p>
              ))
            ) : (
              <p>Descripción detallada no disponible para esta aplicación en este momento.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioSection = ({ language = 'es' }) => {
  const t = content[language];
  const [selectedApp, setSelectedApp] = useState(null);

  return (
    <section id="portfolio" className="bg-[#ffffff]">
      
      {/* Modal Injection */}
      <AppModal app={selectedApp} onClose={() => setSelectedApp(null)} />

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
                <div className="absolute inset-0 bg-slate-100 rounded-[2rem] translate-y-6 translate-x-0 scale-95 opacity-50 group-hover:translate-y-8 group-hover:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"></div>
                
                <div className="relative z-10 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-black/5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] bg-white group-hover:-translate-y-2 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <div className="h-10 bg-[#f8f8f8] border-b border-black/5 flex items-center px-5 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-[#ff5f56] transition-colors duration-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-[#ffbd2e] transition-colors duration-300 delay-75"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-[#27c93f] transition-colors duration-300 delay-150"></div>
                  </div>
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
              <div 
                key={i} 
                onClick={() => setSelectedApp(a)}
                className="group block relative mx-auto w-full max-w-[280px] cursor-pointer"
              >
                
                {/* Subtle Glow Behind Phone */}
                <div className="absolute inset-0 bg-teal-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Pure CSS iPhone Mockup */}
                <div className="relative z-10 rounded-[3rem] overflow-hidden border-[8px] border-[#1d1d1f] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] bg-[#1d1d1f] aspect-[9/19] group-hover:-translate-y-4 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#1d1d1f] rounded-full z-20 flex items-center justify-end px-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a] border border-white/5"></div>
                  </div>
                  
                  {/* App Screen Slideshow */}
                  <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-none">
                    <AppSlideshow imgs={a.imgs} />
                  </div>
                </div>

                <div className="mt-8 text-center relative z-20">
                  <h3 className="font-medium text-[#1d1d1f] tracking-tight text-xl mb-1">{a.title}</h3>
                  <span className="text-sm font-light text-slate-500 group-hover:text-[#007aff] transition-colors inline-flex items-center gap-1">
                    Ver Detalles <svg className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>
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