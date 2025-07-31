// RUTA: [tu-ruta]/components/LayoutFooter.js (o donde lo tengas)
// === CÓDIGO ACTUALIZADO CON YOUTUBE, INSTAGRAM Y LINKEDIN ===

import React from 'react';

// --- Íconos como Componentes para mayor limpieza ---

// LinkedIn (sin cambios)
const IconLinkedIn = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

// ====> NUEVO ÍCONO: YouTube <====
const IconYouTube = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// ====> NUEVO ÍCONO: Instagram <====
const IconInstagram = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.44c-3.117 0-3.482.01-4.694.06-2.586.12-3.967 1.5-4.09 4.09-.05 1.21-.06 1.56-.06 4.54s.01 3.33.06 4.54c.12 2.58 1.5 3.96 4.09 4.09 1.21.05 1.57.06 4.69.06 3.12 0 3.48-.01 4.69-.06 2.59-.12 3.97-1.5 4.1-4.09.05-1.21.06-1.56.06-4.54s-.01-3.33-.06-4.54c-.12-2.58-1.5-3.96-4.09-4.09-1.21-.05-1.57-.06-4.69-.06zm0 2.88c-2.649 0-4.8 2.15-4.8 4.8s2.151 4.8 4.8 4.8 4.8-2.15 4.8-4.8-2.151-4.8-4.8-4.8zm0 7.92c-1.734 0-3.12-1.386-3.12-3.12s1.386-3.12 3.12-3.12 3.12 1.386 3.12 3.12-1.386 3.12-3.12 3.12zm4.62-7.8c-.66 0-1.2.54-1.2 1.2s.54 1.2 1.2 1.2 1.2-.54 1.2-1.2-.54-1.2-1.2-1.2z" />
    </svg>
);

const LayoutFooter = ({ language }) => {
  const currentYear = new Date().getFullYear();
  const footerText = language === 'es' ? `© ${currentYear} Big Data Services. Todos los derechos reservados.` : `© ${currentYear} Big Data Services. All rights reserved.`;
  
  // ====> LISTA DE REDES SOCIALES ACTUALIZADA <====
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/105134255/', icon: IconLinkedIn, hoverColor: 'hover:text-blue-500' },
    { name: 'YouTube', href: 'https://www.youtube.com/@bigdataservices', icon: IconYouTube, hoverColor: 'hover:text-red-600' },
    { name: 'Instagram', href: 'https://www.instagram.com/bigdataservices/', icon: IconInstagram, hoverColor: 'hover:text-pink-500' },
  ];

  return (
    <footer className="mt-auto bg-gray-900 border-t border-gray-700/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Copyright */}
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            {footerText}
          </p>

          {/* Iconos de Redes Sociales */}
          <div className="flex items-center space-x-6"> {/* Aumenté un poco el espacio */}
            {socialLinks.map(social => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Aplicamos el color de hover específico para cada red
                  className={`text-gray-400 ${social.hoverColor} transition-colors duration-300 transform hover:scale-110`}
                  aria-label={social.name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;