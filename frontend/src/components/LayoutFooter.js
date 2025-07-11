import React from 'react';

// --- Íconos como Componentes para mayor limpieza ---
const IconLinkedIn = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const IconTwitterX = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LayoutFooter = ({ language }) => {
  const currentYear = new Date().getFullYear();
  const footerText = language === 'es' ? `© ${currentYear} Big Data Services. Todos los derechos reservados.` : `© ${currentYear} Big Data Services. All rights reserved.`;
  
  // Puedes añadir más redes sociales aquí fácilmente
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: IconLinkedIn },
    { name: 'Twitter', href: 'https://twitter.com', icon: IconTwitterX },
  ];

  return (
    // Añadimos un borde superior para separar el footer del contenido
    <footer className="mt-auto bg-gray-900 border-t border-gray-700/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Copyright */}
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            {footerText}
          </p>

          {/* Iconos de Redes Sociales */}
          <div className="flex items-center space-x-5">
            {socialLinks.map(social => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
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