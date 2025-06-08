// frontend/src/components/LayoutHeader.js

import React, { useState } from 'react';

const LayoutHeader = ({ currentPage, onNavigate, onToggleLanguage, language }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const NavButton = ({ item }) => (
    <button
      onClick={() => {
        onNavigate(item.id);
        setIsMenuOpen(false);
      }}
      className={`py-2 px-3 rounded-md text-sm font-medium transition-colors duration-300 ${
        currentPage === item.id
          ? 'text-white bg-blue-500/30' // Estilo activo
          : 'text-gray-300 hover:bg-gray-700/50 hover:text-white' // Estilo inactivo
      }`}
    >
      {getDisplayName(item.name)}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-50 shadow-lg shadow-black/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="text-xl font-bold text-white cursor-pointer" onClick={() => onNavigate('home')}>
            Big Data Services
          </div>

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

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:bg-gray-700/50 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
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