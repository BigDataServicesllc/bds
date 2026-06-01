import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const content = {
  es: {
    badge: 'Automatización y Eficiencia Operativa',
    title1: 'ARQUITECTURA DE DATOS.',
    title2: 'DESEMPEÑO ESCALABLE.',
    subtitle: 'Diseñamos y construimos infraestructura cloud de misión crítica, automatización de procesos B2B y aplicaciones nativas de alta disponibilidad para empresas que exigen excelencia técnica.',
    primaryCTA: 'INICIAR PROYECTO',
    secondaryCTA: 'VER PORTAFOLIO'
  },
  en: {
    badge: 'Automation & Operational Efficiency',
    title1: 'DATA ARCHITECTURE.',
    title2: 'SCALABLE PERFORMANCE.',
    subtitle: 'We design and build mission-critical cloud infrastructure, B2B process automation, and high-availability native applications for enterprises demanding technical excellence.',
    primaryCTA: 'START PROJECT',
    secondaryCTA: 'VIEW PORTFOLIO'
  }
};

const HeroSection = ({ language = 'es' }) => {
  const t = content[language];
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Entry Animation
      gsap.fromTo(textRef.current,
        { opacity: 0, y: 60, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out' }
      );

      // Subtitle reveal (Automatic on load, much faster for readability)
      const words = subtitleRef.current.querySelectorAll('.word');
      gsap.fromTo(words,
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.03,
          duration: 0.1,
          ease: 'power1.out',
          delay: 0.8 // Empieza apenas la animación del título entra
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <section ref={sectionRef} className="relative pt-48 pb-40 md:pt-64 md:pb-56 px-4 flex flex-col items-center text-center overflow-hidden bg-[#000000] min-h-[100dvh] justify-center border-b border-white/5">
      {/* Subtle Light Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.02] via-black to-black -z-10" />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center z-10">
        <span className="rounded-full px-4 py-1.5 mb-8 text-[10px] uppercase tracking-[0.2em] font-medium border border-white/10 text-slate-400 bg-white/[0.02]">
          {t.badge}
        </span>

        <h1 ref={textRef} className="text-5xl md:text-7xl lg:text-[6.5rem] font-light tracking-tighter text-white mb-10 w-full leading-[0.95]">
          {t.title1}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">{t.title2}</span>
        </h1>

        <p ref={subtitleRef} className="text-lg md:text-2xl text-slate-400 mb-16 max-w-3xl font-light leading-relaxed tracking-tight">
          {t.subtitle.split(' ').map((word, i) => (
            <span key={i} className="word inline-block mr-[0.3em]">{word}</span>
          ))}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
          {/* Nested Button-in-Button Primary */}
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="group flex items-center gap-4 bg-white text-black pl-8 pr-2 py-2 rounded-full font-medium hover:bg-slate-200 active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-xl shadow-white/5">
            <span className="text-xs tracking-widest">{t.primaryCTA}</span>
            <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 group-hover:translate-x-1 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
          </button>

          {/* Secondary Ghost Button */}
          <button onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })} className="group flex items-center gap-4 bg-transparent border border-white/20 text-white pl-8 pr-2 py-2 rounded-full font-medium hover:bg-white/5 hover:border-teal-600/30 active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
            <span className="text-xs tracking-widest">{t.secondaryCTA}</span>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-teal-50 group-hover:text-teal-700 group-hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
