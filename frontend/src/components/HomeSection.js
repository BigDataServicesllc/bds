// RUTA: frontend/src/components/HomeSection.js
// Versión C – Hero profesional tipo agencia de datos top.

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    imageUrl: "/images/bds-hero-1.jpg",
    badge: {
      es: "Acompañamos tu crecimiento",
      en: "We support your growth",
    },
    kicker: {
      es: "Estrategia + datos",
      en: "Strategy + data",
    },
    title: {
      es: "Convertimos datos en decisiones claras",
      en: "We turn data into clear decisions",
    },
    description: {
      es: "Conectamos ejecutivos, finanzas, ventas y operaciones para construir una única versión confiable de la realidad.",
      en: "We connect leadership, finance, sales and operations to build a single, trusted version of the truth.",
    },
  },
  {
    id: 2,
    imageUrl: "/images/bds-hero-2.jpg",
    badge: {
      es: "Visión 360° del negocio",
      en: "360° business view",
    },
    kicker: {
      es: "Modelos + tableros",
      en: "Models + dashboards",
    },
    title: {
      es: "De reportes aislados a una historia coherente",
      en: "From scattered reports to a coherent story",
    },
    description: {
      es: "Unificamos fuentes, simplificamos modelos y diseñamos experiencias de BI que el equipo realmente quiere usar.",
      en: "We unify sources, simplify models and design BI experiences the team actually wants to use.",
    },
  },
  {
    id: 3,
    imageUrl: "/images/bds-hero-3.jpg",
    badge: {
      es: "Cultura data-driven",
      en: "Data-driven culture",
    },
    kicker: {
      es: "Personas + procesos",
      en: "People + processes",
    },
    title: {
      es: "No solo dashboards: ayudamos a cambiar la forma de decidir",
      en: "Not just dashboards: we help change how decisions are made",
    },
    description: {
      es: "Capacitaciones, acompañamiento y buenas prácticas para que los datos se integren al día a día del negocio.",
      en: "Training, coaching and best practices so data becomes part of everyday decision-making.",
    },
  },
];

const HomeSection = ({ language, onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isEs = language === "es";
  const currentSlide = slides[activeIndex];

  const t = (obj) => (isEs ? obj.es : obj.en);

  // autoplay suave
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 9000); // 9s por slide

    return () => clearInterval(timer);
  }, []);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Fondo con imagen + overlay más cuidado */}
      <div className="absolute inset-0">
        <img
          key={currentSlide.imageUrl}
          src={currentSlide.imageUrl}
          alt={t(currentSlide.title)}
          className="h-full w-full object-cover"
        />
        {/* Overlay tipo agencia: oscurece pero deja ver bien la foto */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#173B3A]/65 to-black/40" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Badge superior */}
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold text-[#06E8D1] uppercase tracking-[0.12em] backdrop-blur">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#06E8D1]" />
              {t(currentSlide.badge)}
            </div>

            {/* Kicker */}
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
              {t(currentSlide.kicker)}
            </p>

            {/* Título grande */}
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-[2.9rem] leading-tight font-extrabold text-white">
              {t(currentSlide.title)}
            </h1>

            {/* Descripción */}
            <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
              {t(currentSlide.description)}
            </p>

            {/* Botones */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate && onNavigate("services")}
                className="inline-flex items-center rounded-full bg-[#06E8D1] px-7 py-3 text-sm font-semibold text-[#173B3A] shadow-[0_14px_40px_rgba(6,232,209,0.35)] hover:bg-[#2B64B2] hover:text-white hover:shadow-[0_18px_50px_rgba(43,100,178,0.55)] transition-all duration-300 transform hover:-translate-y-[1px]"
              >
                {isEs ? "Ver cómo trabajamos" : "See how we work"}
                <span className="ml-2 text-lg">→</span>
              </button>

              <button
                onClick={() => onNavigate && onNavigate("contact")}
                className="inline-flex items-center text-sm font-medium text-white/85 hover:text-white/100 transition-colors"
              >
                {isEs ? "Hablar con nosotros" : "Talk to us"}
                <span className="ml-2 text-base">·</span>
                <span className="ml-2 text-xs uppercase tracking-[0.18em] text-white/60">
                  {isEs ? "Agenda rápida" : "Quick intro call"}
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Controles del carrusel – estilo más sobrio */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <div className="pointer-events-auto flex items-center gap-4 rounded-full bg-black/45 px-4 py-2 text-white backdrop-blur-md border border-white/15">
          <button
            onClick={goPrev}
            className="rounded-full border border-white/30 px-2 py-1 text-sm hover:bg-white/10 transition-colors"
            aria-label={isEs ? "Anterior" : "Previous"}
          >
            ‹
          </button>

          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-6 bg-[#06E8D1]"
                    : "w-2 bg-white/40 hover:bg-white/80"
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="rounded-full border border-white/30 px-2 py-1 text-sm hover:bg-white/10 transition-colors"
            aria-label={isEs ? "Siguiente" : "Next"}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
