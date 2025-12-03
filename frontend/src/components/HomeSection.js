// RUTA: frontend/src/components/HomeSection.js
// Hero con carrusel de imágenes de fondo, sin GSAP, moderno y general.

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    imageUrl: "/images/bds-hero-1.jpg",
    badge: { es: "Acompañamos tu crecimiento", en: "We support your growth" },
    title: {
      es: "Convertimos datos en decisiones claras",
      en: "We turn data into clear decisions",
    },
    description: {
      es: "Trabajamos con equipos ejecutivos, finanzas, ventas y operaciones para crear una visión integrada del negocio.",
      en: "We work with leadership, finance, sales and operations to create an integrated business view.",
    },
  },
  {
    id: 2,
    imageUrl: "/images/bds-hero-2.jpg",
    badge: { es: "Visión 360° del negocio", en: "360° business view" },
    title: {
      es: "De reportes sueltos a una historia coherente",
      en: "From scattered reports to a coherent story",
    },
    description: {
      es: "Unimos fuentes, simplificamos modelos y diseñamos experiencias de BI que la gente realmente quiere usar.",
      en: "We connect sources, simplify models and design BI experiences people actually want to use.",
    },
  },
  {
    id: 3,
    imageUrl: "/images/bds-hero-3.jpg",
    badge: { es: "Data culture & learning", en: "Data culture & learning" },
    title: {
      es: "Construimos cultura data-driven, no solo tableros",
      en: "We build a data-driven culture, not just dashboards",
    },
    description: {
      es: "Capacitaciones, acompañamiento y buenas prácticas para que tu equipo adopte los datos en el día a día.",
      en: "Training, coaching and best practices so your team adopts data in day-to-day decisions.",
    },
  },
];

const HomeSection = ({ language, onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isEs = language === "es";

  const currentSlide = slides[activeIndex];

  // autoplay suave
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 8000); // 8 segundos por slide

    return () => clearInterval(timer);
  }, []);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const t = (key) => (isEs ? key.es : key.en);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] w-full overflow-hidden"
    >
      {/* Imagen de fondo + overlay */}
      <div className="absolute inset-0">
        <img
          key={currentSlide.imageUrl}
          src={currentSlide.imageUrl}
          alt={t(currentSlide.title)}
          className="h-full w-full object-cover"
        />
        {/* overlay usando tu paleta: verde/azules + oscurecido */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#173B3A]/80 via-[#173B3A]/40 to-black/40" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            {/* badge */}
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold text-[#06E8D1] backdrop-blur">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#06E8D1]" />
              {t(currentSlide.badge)}
            </div>

            {/* título */}
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              {t(currentSlide.title)}
            </h1>

            {/* descripción general (no repetimos Servicios) */}
            <p className="mt-4 text-sm sm:text-base text-white/80">
              {t(currentSlide.description)}
            </p>

            {/* botones generales */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate && onNavigate("services")}
                className="inline-flex items-center rounded-full bg-[#06E8D1] px-6 py-3 text-sm font-semibold text-[#173B3A] shadow-md hover:bg-[#2B64B2] hover:text-white transition"
              >
                {isEs ? "Ver cómo trabajamos" : "See how we work"}
                <span className="ml-2 text-lg">→</span>
              </button>

              <button
                onClick={() => onNavigate && onNavigate("contact")}
                className="inline-flex items-center text-sm font-medium text-white/90 underline-offset-4 hover:underline"
              >
                {isEs ? "Hablar con nosotros" : "Talk to us"}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Controles del carrusel */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <div className="pointer-events-auto flex items-center gap-4 rounded-full bg-black/40 px-4 py-2 text-white backdrop-blur">
          <button
            onClick={goPrev}
            className="rounded-full border border-white/40 px-2 py-1 text-sm hover:bg-white/10"
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
                    : "w-2 bg-white/50 hover:bg-white"
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="rounded-full border border-white/40 px-2 py-1 text-sm hover:bg-white/10"
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
