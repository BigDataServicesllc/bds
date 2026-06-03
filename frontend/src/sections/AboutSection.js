import React from 'react';
import { motion } from 'framer-motion';

const content = {
  es: {
    title: "Nuestra Filosofía: Automatización como motor de valor",
    p1: "Big Data Services nació en 2016 con una misión clara: convertir el caos manual en flujos de trabajo de alto rendimiento. Mi camino comenzó con una obsesión personal por erradicar tareas repetitivas en la universidad, donde vi cómo el uso ineficiente de herramientas como Excel y Access limitaba el potencial humano. Al saltar al campo laboral, comprendí que esta ineficiencia no era solo una molestia técnica, sino un freno estratégico para las empresas.",
    p2: "Mi trayectoria es mi mayor activo: tras emigrar de Venezuela en 2016, pasé por Chile y Argentina, culturas que me enseñaron a profesionalizar mis conocimientos y a ponerles un valor de mercado real. Tuve el privilegio de trabajar junto a grandes profesionales que moldearon mi rigor técnico y mi visión de negocio. En 2023, tras años de llevar consultorías paralelas, tomé la decisión de consolidar Big Data Services como una firma independiente. Hoy, como economista volcado a la ingeniería de datos y software, no ofrecemos solo código, sino soluciones tecnológicas diseñadas para maximizar recursos y liberar el tiempo necesario para que las empresas se enfoquen en lo que realmente importa: generar valor.",
    cta: "Conecta con nuestro fundador en LinkedIn"
  },
  en: {
    title: "Our Philosophy: Automation as a Value Driver",
    p1: "Big Data Services was born in 2016 with a clear mission: to turn manual chaos into high-performance workflows. My journey began with a personal obsession to eradicate repetitive tasks during my university years, where I saw how the inefficient use of tools like Excel and Access limited human potential. Upon entering the professional field, I realized that this inefficiency was not just a technical nuisance, but a strategic roadblock for businesses.",
    p2: "My path is my greatest asset: after emigrating from Venezuela in 2016, I lived and worked in Chile and Argentina—cultures that taught me how to professionalize my expertise and place a real market value on my knowledge. I had the privilege of working alongside exceptional professionals who shaped my technical rigor and business vision. In 2023, after years of balancing parallel consultancies, I made the decision to establish Big Data Services as an independent firm. Today, as an economist focused on data engineering and software development, we don’t just offer code; we deliver technological solutions designed to maximize resources and free up the time necessary for companies to focus on what truly matters: generating value.",
    cta: "Connect with our founder on LinkedIn"
  }
};

const AboutSection = ({ language = 'es' }) => {
  const t = content[language];

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center md:items-start">

          {/* Left Column: Portrait (40%) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-5/12 lg:w-4/12 shrink-0"
          >
            {/* Double-Bezel Container Effect */}
            <div className="relative p-3 rounded-[2rem] bg-slate-50 border border-slate-200/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] group">
              <div className="absolute inset-0 rounded-[2rem] border-[6px] border-white z-10 pointer-events-none"></div>

              {/* Inner Photo Frame */}
              <div className="relative aspect-[4/5] rounded-[1.5rem] bg-slate-200 overflow-hidden flex items-center justify-center">
                {/* Fallback pattern / Icon if no image is present */}
                <svg className="w-16 h-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>

                <img
                  src="/founder_portrait.jpg"
                  alt="Michael Ortiz - Founder"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text (60%) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-7/12 lg:w-8/12 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15] mb-8">
              {t.title}
            </h2>

            <div className="prose prose-lg prose-slate max-w-none text-slate-500 font-light leading-relaxed space-y-6">
              <p className="text-lg md:text-xl text-slate-700 font-normal">
                {t.p1}
              </p>
              <p>
                {t.p2}
              </p>
            </div>

            <div className="mt-12">
              <a
                href="https://www.linkedin.com/in/ortizmich/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                {t.cta}
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
