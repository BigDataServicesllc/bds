// RUTA: src/sections/AppShowcase.js
import React from 'react';
import { motion } from 'framer-motion';

const screens = [
  '/images/Flowfinanzas/01.png',
  '/images/Flowfinanzas/02.png',
  '/images/Flowfinanzas/03.png',
  '/images/Flowfinanzas/04.png',
  '/images/Flowfinanzas/05.png',
  '/images/Flowfinanzas/06.png',
  '/images/Flowfinanzas/07.png'
];

const AppShowcase = ({ language = 'es' }) => {
  return (
    <section id="flowfinanzas" className="py-32 bg-[#000000] relative overflow-hidden border-b border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-500/[0.03] blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.6em] text-teal-400 font-bold block mb-4">
            {language === 'es' ? 'VALIDACIÓN DE PRODUCCIÓN' : 'PRODUCTION VALIDATION'}
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tighter">
            FlowFinanzas: {language === 'es' ? 'Ecosistema' : 'Fintech'}{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Financiero Capaz
            </span>
          </h2>
          <p className="text-sm font-light text-slate-400 mt-6 max-w-xl mx-auto leading-relaxed">
            {language === 'es'
              ? 'Nuestra prueba de concepto en el mercado real. Una arquitectura móvil de alto rendimiento diseñada, programada y desplegada en las tiendas por nuestro equipo.'
              : 'Our real-market proof of concept. A high-performance mobile architecture designed, programmed, and deployed to app stores by our team.'}
          </p>
          
          {/* Badges de las Tiendas de Apps */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <a 
              href="https://apps.apple.com/es/app/flowfinanzas/id6763755421" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105 active:scale-95"
            >
              <img src="/images/stores/app_store_badge.svg.png" alt="Download on the App Store" className="h-12 w-auto" />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.bds.flowfinanzas&pcampaignid=web_share" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105 active:scale-95"
            >
              <img src="/images/stores/google_play_badge.png" alt="Get it on Google Play" className="h-12 w-auto" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto pb-12 scrollbar-none snap-x snap-mandatory">
        <div className="flex gap-6 px-6 md:px-24 min-w-max">
          {screens.map((screen, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="w-[260px] md:w-[290px] snap-center group"
            >
              <div className="relative rounded-[2.5rem] p-3 bg-[#0d0d11] border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-teal-500/30 group-hover:shadow-[0_30px_60px_rgba(20,184,166,0.05)]">
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-center border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-slate-900 absolute right-4" />
                </div>
                <div className="absolute inset-3 rounded-[2rem] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none z-20" />
                <div className="rounded-[1.9rem] overflow-hidden aspect-[9/19.5] relative bg-[#16161a]">
                  <img
                    src={screen}
                    alt={`FlowFinanzas Screen 0${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                  View Interface 0{idx + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;