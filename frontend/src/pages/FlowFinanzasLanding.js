import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Variantes para Framer Motion
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const PhoneMockup = ({ src, alt, delay = 0, duration = 6, className = "" }) => (
  <motion.div 
    animate={{ y: [0, -15, 0] }}
    transition={{ repeat: Infinity, duration, ease: "easeInOut", delay }}
    className={`relative z-10 w-full mx-auto rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-[6px] md:border-[8px] border-[#1a1a1a] shadow-[0_30px_60px_rgba(0,0,0,0.9)] bg-[#1a1a1a] aspect-[9/19] ${className}`}
  >
    {/* Dynamic Island */}
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 md:w-24 h-6 md:h-7 bg-[#1a1a1a] rounded-full z-20 flex items-center justify-end px-2">
      <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#050505] border border-white/5"></div>
    </div>
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  </motion.div>
);

const FlowFinanzasLanding = () => {
  // Fix React Router scroll restoration issue
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-teal-500 selection:text-white overflow-x-hidden relative">
      
      {/* Respiration Background (Breathing Radial Gradient) */}
      <motion.div 
        className="fixed inset-0 z-0 pointer-events-none"
        animate={{ 
          background: [
            "radial-gradient(circle at 50% 50%, rgba(20,184,166,0.03) 0%, rgba(5,5,5,1) 50%)", 
            "radial-gradient(circle at 50% 50%, rgba(20,184,166,0.08) 0%, rgba(5,5,5,1) 60%)", 
            "radial-gradient(circle at 50% 50%, rgba(20,184,166,0.03) 0%, rgba(5,5,5,1) 50%)"
          ] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Navigation - Glassmorphism */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/5 flex justify-center">
        <div className="w-full px-6 md:px-12 py-6 flex justify-between items-center max-w-[1800px]">
          <div className="font-bold text-xl md:text-2xl tracking-tighter flex items-center gap-3">
            <img src="/images/Flowfinanzas/logo_ios.png" alt="FlowFinanzas Logo" className="h-8 md:h-10 rounded-xl" />
            FlowFinanzas.
          </div>
          
          <div className="hidden md:flex gap-10 text-[13px] text-slate-400 font-medium tracking-wide">
            <a href="#dashboard" className="hover:text-teal-400 transition-colors">Panel</a>
            <a href="#cuentas" className="hover:text-teal-400 transition-colors">Cuentas</a>
            <a href="#planificacion" className="hover:text-teal-400 transition-colors">Planificación</a>
          </div>
          
          <Link to="/" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2.5 rounded-full text-[13px] font-medium hover:bg-white hover:text-black transition-all duration-300">
            Volver a BDS
          </Link>
        </div>
      </nav>

      {/* Hero (01.png - Panel Promocional) */}
      <header className="relative min-h-screen flex items-center pt-20" id="dashboard">
        <div className="absolute top-0 right-0 w-full md:w-[65%] h-full z-0 overflow-hidden flex items-center justify-end pr-10 md:pr-20">
           <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 h-32 bottom-0 top-auto pointer-events-none"></div>
           
           <div className="relative z-0 opacity-80 md:opacity-100 scale-90 md:scale-100 translate-x-12 md:translate-x-0 mt-20">
             <div className="absolute inset-0 bg-teal-500/20 blur-[120px] rounded-full scale-75 opacity-70"></div>
             <PhoneMockup src="/images/Flowfinanzas/01.png" alt="Panel de Control Promocional" duration={8} className="max-w-[280px] md:max-w-[340px]" />
           </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-20 max-w-[1800px]">
          <motion.div 
            className="max-w-2xl"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center border border-teal-500/30 bg-teal-500/10 rounded-full px-5 py-2 mb-10 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-teal-400 backdrop-blur-md">
              Software & Fintech
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-[4rem] md:text-[6rem] lg:text-[7.5rem] leading-[0.9] tracking-tight font-bold mb-8 text-white">
              Inteligencia<br />
              <span className="font-serif italic text-slate-400 font-light pr-8">Financiera.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg mb-14 font-light opacity-90">
              La plataforma definitiva para la gestión financiera. Flujos de caja, proyecciones y análisis de datos en tiempo real.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="https://apps.apple.com/es/app/flowfinanzas/id6763755421" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 active:scale-95">
                <img src="/images/stores/app_store_badge.svg.png" alt="Download on the App Store" className="h-10 md:h-12 w-auto" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.bds.flowfinanzas&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 active:scale-95">
                <img src="/images/stores/google_play_badge.png" alt="Get it on Google Play" className="h-10 md:h-12 w-auto" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Cuentas y Registros (02.png, 03.png, 04.png) */}
      <section className="py-24 md:py-40 relative z-20 border-t border-white/5" id="cuentas">
        <div className="container mx-auto px-6 md:px-12 max-w-[1800px]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-xl"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center border border-white/20 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
                Gestión Centralizada
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                Todas tus cuentas<br/>
                <span className="font-serif italic text-teal-500 font-light drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]">en un solo lugar.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-slate-400 leading-relaxed font-light mb-8">
                Visualiza el saldo total de tus cuentas bancarias al instante. Registra gastos e ingresos con un solo toque utilizando atajos rápidos diseñados para agilizar tu rutina diaria.
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full flex justify-center items-center h-[600px] md:h-[700px]"
            >
               <div className="absolute inset-0 bg-teal-500/10 blur-[120px] rounded-full scale-90 opacity-50 z-0"></div>
               
               {/* 03.png: Ingresos (Left) */}
               <div className="absolute left-0 md:left-10 top-1/2 -translate-y-1/2 z-10 w-[180px] md:w-[220px] opacity-80 hover:opacity-100 hover:z-30 transition-all duration-500">
                 <PhoneMockup src="/images/Flowfinanzas/04.png" alt="Registro de Ingresos" duration={5} delay={0.2} className="max-w-[220px]" />
               </div>

               {/* 02.png: Cuentas (Center - Main) */}
               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[240px] md:w-[280px]">
                 <PhoneMockup src="/images/Flowfinanzas/02.png" alt="Cuentas Bancarias" duration={6} delay={0} className="max-w-[280px] shadow-[0_0_80px_rgba(20,184,166,0.15)]" />
               </div>

               {/* 04.png: Gastos (Right) */}
               <div className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 z-10 w-[180px] md:w-[220px] opacity-80 hover:opacity-100 hover:z-30 transition-all duration-500">
                 <PhoneMockup src="/images/Flowfinanzas/03.png" alt="Registro de Gastos" duration={7} delay={0.5} className="max-w-[220px]" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Planificación e Historial (06.png, 05.png) */}
      <section className="py-24 md:py-40 relative z-20 border-t border-white/5" id="planificacion">
        <div className="container mx-auto px-6 md:px-12 max-w-[1800px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 lg:order-1 relative w-full flex justify-center items-center gap-6 h-[600px]"
            >
               <div className="absolute inset-0 bg-teal-500/10 blur-[100px] rounded-full scale-75 opacity-50 z-0"></div>
               
               {/* 05.png: Historial (Slightly left and lower) */}
               <div className="relative z-10 mt-20 w-[200px] md:w-[240px]">
                 <PhoneMockup src="/images/Flowfinanzas/05.png" alt="Historial de Movimientos" duration={7} delay={0.3} className="max-w-[240px]" />
               </div>

               {/* 06.png: Dashboard Planificación (Slightly right and higher) */}
               <div className="relative z-20 -mt-20 w-[220px] md:w-[260px]">
                 <PhoneMockup src="/images/Flowfinanzas/06.png" alt="Dashboard y Planificación" duration={6} className="max-w-[260px] shadow-[0_0_60px_rgba(20,184,166,0.1)]" />
               </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="order-1 lg:order-2 max-w-xl lg:pl-10"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center border border-white/20 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
                Planificación & Historial
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                Proyecciones<br/>
                <span className="font-serif italic text-teal-500 font-light drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]">Estratégicas.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-slate-400 leading-relaxed font-light mb-8">
                El dashboard principal pone el foco en tu planificación financiera futura. Acompáñalo con un historial de movimientos detallado para tener total trazabilidad de cada centavo.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resumen Detallado (07.png) */}
      <section className="py-24 md:py-40 relative z-20 border-t border-white/5" id="resumen">
        <div className="container mx-auto px-6 md:px-12 max-w-[1800px]">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8 }}
             >
               <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
                  Resumen <span className="font-serif italic text-teal-500 font-light drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]">Detallado.</span>
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed font-light">
                  Analiza el desempeño de tus finanzas mes a mes con métricas claras y precisas.
                </p>
             </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center"
          >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-500/20 blur-[100px] w-64 h-64 rounded-full pointer-events-none z-0"></div>
             
             <PhoneMockup src="/images/Flowfinanzas/07.png" alt="Resumen del Mes" duration={7} className="max-w-[300px] md:max-w-[340px]" />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 md:py-32 border-t border-white/10 text-center relative overflow-hidden">
        
        {/* Massive Background Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center overflow-hidden pointer-events-none opacity-[0.03] select-none z-0"
        >
          <span className="text-[20vw] font-bold leading-none tracking-tighter whitespace-nowrap text-white">FLOW</span>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10 max-w-2xl mx-auto px-6"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-10 tracking-tight text-white leading-tight">
            Toma el control de tu <br className="hidden md:block" /><span className="font-serif italic font-light text-teal-500 drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]">futuro financiero.</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <a href="https://apps.apple.com/es/app/flowfinanzas/id6763755421" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 active:scale-95">
              <img src="/images/stores/app_store_badge.svg.png" alt="Download on the App Store" className="h-12 w-auto" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.bds.flowfinanzas&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 active:scale-95">
              <img src="/images/stores/google_play_badge.png" alt="Get it on Google Play" className="h-12 w-auto" />
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-10 text-xs font-medium tracking-widest text-slate-500 uppercase">
             <span>© {new Date().getFullYear()} Big Data Services LLC.</span>
             <Link to="/" className="hover:text-white transition-colors mt-4 md:mt-0">Volver al Inicio</Link>
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
};

export default FlowFinanzasLanding;
