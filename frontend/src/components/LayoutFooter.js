// RUTA: frontend/src/components/LayoutFooter.js

import React from "react";
import { Link } from "react-router-dom";

const LayoutFooter = ({ language = "es", className = "" }) => {
  const isSpanish = language === "es";

  const navItems = [
    { to: "/", labelEs: "Inicio", labelEn: "Home" },
    { to: "/#services", labelEs: "Servicios", labelEn: "Services" },
    { to: "/#learning", labelEs: "Formación", labelEn: "Learning" },
    { to: "/blog", labelEs: "Blog", labelEn: "Blog" },
    { to: "/#contact", labelEs: "Contacto", labelEn: "Contact" },
  ];

  return (
    <footer
      className={`border-t border-white/5 bg-primary-dark text-gray-300 ${className}`}
    >
      <div className="container mx-auto px-4 py-8 lg:py-10">
        {/* FILA PRINCIPAL */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* IZQUIERDA: LOGO + NOMBRE */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-bds-aqua/10 border border-bds-aqua/60 flex items-center justify-center">
              {/* Puedes reemplazar por tu imagen de logo si quieres */}
              <span className="text-bds-aqua font-bold text-lg">B</span>
            </div>
            <div>
              <p className="font-semibold text-white leading-tight">
                Big Data Services
              </p>
              <p className="text-xs text-bds-text-soft">
                BI · Analytics · Automation
              </p>
            </div>
          </div>

          {/* CENTRO: NAVEGACIÓN */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm justify-start lg:justify-center">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="hover:text-bds-aqua transition-colors"
              >
                {isSpanish ? item.labelEs : item.labelEn}
              </Link>
            ))}
          </nav>

          {/* DERECHA: REDES + EMAIL */}
          <div className="flex items-center gap-4 justify-start lg:justify-end">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/105134255/admin/dashboard/" // TODO: poné tu URL real
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-bds-aqua flex items-center justify-center text-bds-deep hover:opacity-90 transition-opacity"
              aria-label="LinkedIn"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.44H4.7V24H.22V8.44zM8.34 8.44h4.3v2.12h.06c.6-1.13 2.08-2.32 4.29-2.32 4.59 0 5.44 3.02 5.44 6.94V24h-4.48v-7.09c0-1.69-.03-3.86-2.35-3.86-2.35 0-2.71 1.83-2.71 3.73V24H8.34V8.44z" />
              </svg>
            </a>

            {/* YouTube o canal de contenido */}
            <a
              href="https://www.youtube.com/@bigdataservices" // TODO: tu canal real
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-bds-aqua flex items-center justify-center text-bds-deep hover:opacity-90 transition-opacity"
              aria-label="YouTube"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C16.9 2.5 12 2.5 12 2.5h-.1s-4.9 0-8.6.4c-.4.1-1.3.1-2.1 1C.7 4.6.5 6.2.5 6.2S.3 8 0 9.8v1.9C.3 13.6.5 15.4.5 15.4s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.8.2 7.6.4 7.6.4s4.9 0 8.6-.4c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-1.8.5-3.7V9.8c-.3-1.8-.5-3.6-.5-3.6zM9.7 13.9V7.9l6 3-6 3z" />
              </svg>
            </a>

            {/* Email rápido */}
            <a
              href="mailto:michael@bigdata-services.com" // mismo correo que en la sección contacto
              className="hidden sm:inline text-sm text-bds-aqua hover:text-white transition-colors"
            >
              michael@bigdataa-services.com
            </a>
          </div>
        </div>

        {/* LÍNEA INFERIOR: COPYRIGHT + LEGALES */}
        <div className="mt-6 pt-4 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-bds-text-soft">
          <p>
            © {new Date().getFullYear()} Big Data Services.{" "}
            {isSpanish
              ? "Todos los derechos reservados."
              : "All rights reserved."}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/terminos"
              className="hover:text-bds-aqua transition-colors"
            >
              {isSpanish ? "Términos y Condiciones" : "Terms & Conditions"}
            </Link>
            <span className="opacity-40">•</span>
            <Link
              to="/privacidad"
              className="hover:text-bds-aqua transition-colors"
            >
              {isSpanish ? "Política de Privacidad" : "Privacy Policy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;
