import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const content = {
  es: {
    badge: 'PRODUCTO ESTELAR',
    title: 'FlowFinanzas. Ecosistema Financiero.',
    desc: 'Nuestra aplicación nativa insignia, diseñada con seguridad biométrica, transacciones en tiempo real y una arquitectura backend ultra-resiliente en AWS.',
    downloadAppStore: 'Descargar en App Store',
    getGooglePlay: 'Obtener en Google Play'
  },
  en: {
    badge: 'FLAGSHIP PRODUCT',
    title: 'FlowFinanzas. Financial Ecosystem.',
    desc: 'Our flagship native application, designed with biometric security, real-time transactions, and an ultra-resilient backend architecture on AWS.',
    downloadAppStore: 'Download on the App Store',
    getGooglePlay: 'Get it on Google Play'
  }
};

const AppShowcase = ({ language = 'es' }) => {
  const t = content[language];
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Image Scale & Fade Scroll as requested in gpt-taste
      gsap.fromTo(imageRef.current,
        { scale: 0.8, opacity: 0.2 },
        {
          scale: 1.0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'center center',
            scrub: true
          }
        }
      );
      
      gsap.fromTo(textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'center center',
            scrub: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <section id="flowfinanzas" ref={sectionRef} className="py-32 md:py-48 bg-[#000000] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
        
        {/* Text Area (Left) */}
        <div ref={textRef} className="flex-1 lg:pr-10 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-medium tracking-[0.2em] uppercase mb-8 shadow-sm">
            {t.badge}
          </div>
          <h2 className="text-4xl md:text-[3.5rem] font-light tracking-tighter text-white mb-8 leading-[1.1]">
            {t.title.split('. ')[0]}.<br />
            <span className="text-slate-500">{t.title.split('. ')[1]}</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-12 font-light leading-relaxed tracking-tight max-w-lg">
            {t.desc}
          </p>
          
          <div className="flex items-center gap-6">
            <img src="/assets/stores/app_store_badge.svg.png" alt={t.downloadAppStore} className="h-10 opacity-70 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0 hover:scale-105 duration-300" />
            <img src="/assets/stores/google_play_badge.png" alt={t.getGooglePlay} className="h-14 opacity-70 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0 hover:scale-105 duration-300" />
          </div>
        </div>
        
        {/* Image Area (Right) */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end">
          {/* Vantablack radial glow behind the phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none"></div>
          
          {/* FlowFinanzas Pre-flight Mockup */}
          <div ref={imageRef} className="relative z-10 w-full max-w-[400px]">
            <img 
              src="/flowfinanzas_mobile_mockup.png" 
              alt="FlowFinanzas Mobile UI" 
              className="w-full h-auto drop-shadow-2xl" 
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AppShowcase;
