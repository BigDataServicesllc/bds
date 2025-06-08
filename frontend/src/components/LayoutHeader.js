// RUTA: frontend/src/components/LayoutHeader.js
// CÓDIGO FINAL, COMPLETO Y RESPONSIVO

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LayoutHeader = ({ currentPage, onNavigate, onToggleLanguage, language }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', id: 'home' },
    { name: 'Servicios', id: 'services' },
    { name: 'Learning', id: 'learning' },
    { name: 'Contacto', id: 'contact' },
  ];

  const getDisplayName = (name) => {
    if (language === 'en') {
      switch (name) {
        case 'Inicio': return 'Home';
        case 'Servicios': return 'Services';
        case 'Learning': return 'Learning';
        case 'Contacto': return 'Contact';
        default: return name;
      }
    }
    return name;
  };

  // Componente de botón reutilizable
  const NavButton = ({ item }) => {
    // Si estamos en la página de inicio, los botones hacen scroll
    if (location.pathname === '/') {
      return (
        <button
          onClick={() => { onNavigate(item.id); setIsMenuOpen(false); }}
          // Clases para móvil (w-full, text-left) y para escritorio (md:w-auto, md:text-center)
          className={`w-full text-left md:w-auto md:text-center py-2 px-3 rounded-md text-sm font-medium transition-colors duration-300 ${ currentPage === item.id ? 'text-white bg-blue-500/30' : 'text-gray-300 hover:bg-gray-700/50 hover:text-white' }`}
        >
          {getDisplayName(item.name)}
        </button>
      );
    } else {
      // Si estamos en otra página, los botones son Links para volver a la home y a la sección
      return (
        <Link
          to={`/#${item.id}`}
          onClick={() => setIsMenuOpen(false)} // También cerramos el menú al hacer clic
          className="block md:inline-block py-2 px-3 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white"
        >
          {getDisplayName(item.name)}
        </Link>
      );
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-primary-dark/80 backdrop-blur-sm z-50 shadow-lg shadow-black/20 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          <Link to="/" className="text-xl font-bold text-white cursor-pointer">
            Big Data Services
          </Link>

          {/* Menú de Escritorio: Oculto en móvil (hidden), visible como flex en escritorio (md:flex) */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavButton key={item.id} item={item} />
            ))}
            <div className="w-px h-6 bg-gray-600 mx-4"></div>
            <button
              onClick={onToggleLanguage}
              className="px-3 py-1.5 rounded-md border border-gray-600 text-gray-300 text-sm font-medium hover:bg-gray-700/50 transition-colors"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </nav>

          {/* Botón de Hamburguesa: Visible en móvil, oculto en escritorio (md:hidden) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:bg-gray-700/50 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Menú Desplegable Móvil */}
        {isMenuOpen && (
          // CORRECCIÓN CLAVE: 'block' lo muestra por defecto (en móvil), 'md:hidden' lo oculta en escritorio
          <div className="block md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavButton key={item.id} item={item} />
              ))}
              <div className="pt-4 mt-4 border-t border-gray-700">
                <button
                  onClick={() => {
                    onToggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-3 py-2 rounded-md bg-gray-700 text-gray-200 text-sm font-medium hover:bg-gray-600 transition-colors"
                >
                  Cambiar a {language === 'es' ? 'English' : 'Español'}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default LayoutHeader;