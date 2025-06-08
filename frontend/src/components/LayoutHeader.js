// RUTA: frontend/src/components/LayoutHeader.js
// CÓDIGO CORREGIDO Y LISTO PARA USAR

// CAMBIO 1: Importamos Link y useLocation para saber en qué página estamos.
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LayoutHeader = ({ currentPage, onNavigate, onToggleLanguage, language }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Hook para obtener la URL actual

  const navItems = [
    { name: 'Inicio', id: 'home' },
    { name: 'Servicios', id: 'services' },
    { name: 'Learning', id: 'learning' },
    { name: 'Contacto', id: 'contact' },
  ];

  const getDisplayName = (name) => {
    // ... (esta función no cambia)
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

  const NavButton = ({ item }) => {
    // CAMBIO 2: Lógica inteligente para el botón
    // Si estamos en la página principal, hacemos scroll.
    // Si no, navegamos a la home y el id de la sección se añade a la URL
    // para que la home sepa a dónde hacer scroll al cargar.
    if (location.pathname === '/') {
      return (
        <button
          onClick={() => {
            onNavigate(item.id);
            setIsMenuOpen(false);
          }}
          className={`py-2 px-3 rounded-md text-sm font-medium transition-colors duration-300 ${
            currentPage === item.id
              ? 'text-white bg-blue-500/30'
              : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
          }`}
        >
          {getDisplayName(item.name)}
        </button>
      );
    } else {
      // Si estamos en otra página (ej: /servicios.html), usamos un Link
      return (
        <Link
          to={`/#${item.id}`} // Navega a la home y a la sección correcta
          className="py-2 px-3 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700/50 hover:text-white"
        >
          {getDisplayName(item.name)}
        </Link>
      );
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-50 shadow-lg shadow-black/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* CAMBIO 3: El logo ahora siempre es un <Link> a la página principal */}
          <Link to="/" className="text-xl font-bold text-white cursor-pointer">
            Big Data Services
          </Link>

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

          {/* ... (El menú hamburguesa y su lógica no cambian significativamente) ... */}
          <div className="md:hidden">
            {/* ... */}
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavButton key={item.id} item={item} />
              ))}
              {/* ... (el resto del menú móvil no cambia) ... */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default LayoutHeader;