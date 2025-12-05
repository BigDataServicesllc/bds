// RUTA: frontend/src/components/LayoutHeader.js

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LayoutHeader = ({ currentPage, onNavigate, onToggleLanguage, language }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', id: 'home' },
    { name: 'Servicios', id: 'services' },
    { name: 'Learning', id: 'learning' },
    { name: 'Blog', id: 'blog', path: '/blog' },
    { name: 'Contacto', id: 'contact' },
  ];

  const getDisplayName = (name) => {
    if (language === 'en') {
      const translations = {
        Inicio: 'Home',
        Servicios: 'Services',
        Learning: 'Learning',
        Blog: 'Blog',
        Contacto: 'Contact',
      };
      return translations[name] || name;
    }
    return name;
  };

  /**
   * NavButton
   * - variant = "desktop" | "mobile"
   *   para cambiar tamaño y alineación de los links
   */
  const NavButton = ({ item, variant = 'desktop' }) => {
    const isActivePage = item.path && location.pathname.startsWith(item.path);
    const isActiveSection =
      !item.path && location.pathname === '/' && currentPage === item.id;
    const isActive = isActivePage || isActiveSection;

    const baseClassesDesktop =
      'py-2 px-3 rounded-md text-sm font-medium transition-colors duration-300';
    const baseClassesMobile =
      'w-full text-left py-3 px-4 rounded-lg text-base font-medium transition-colors duration-200';

    const baseClasses =
      variant === 'mobile' ? baseClassesMobile : baseClassesDesktop;

    const getColorClasses = () => {
      // SIN scroll: header transparente sobre hero
      if (!isScrolled) {
        return isActive
          ? 'text-white font-semibold'
          : 'text-white hover:text-[#06E8D1]';
      }
      // CON scroll: header blanco
      return isActive
        ? 'text-[#2B64B2] font-semibold'
        : 'text-gray-900 hover:text-[#2B64B2]';
    };

    const handleNavClick = () => {
      // Cerrar menú móvil al hacer clic
      setIsMenuOpen(false);

      if (item.path) return; // los Links se encargan solos

      if (location.pathname === '/') {
        // Navegación por secciones dentro de Home
        onNavigate?.(item.id);
      }
    };

    // LINK con path (ej: /blog)
    if (item.path) {
      return (
        <Link
          to={item.path}
          onClick={() => setIsMenuOpen(false)}
          className={`${baseClasses} ${getColorClasses()}`}
        >
          {getDisplayName(item.name)}
        </Link>
      );
    }

    // Botón dentro de Home (cuando estamos en '/')
    if (location.pathname === '/') {
      return (
        <button
          onClick={handleNavClick}
          className={`${baseClasses} ${getColorClasses()}`}
        >
          {getDisplayName(item.name)}
        </button>
      );
    }

    // Link desde otras páginas a secciones de Home
    return (
      <Link
        to={`/#${item.id}`}
        onClick={() => setIsMenuOpen(false)}
        className={`${baseClasses} ${getColorClasses()}`}
      >
        {getDisplayName(item.name)}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-lg shadow-md border-b border-gray-200'
            : 'bg-transparent backdrop-blur-sm'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/images/logo.png"
              alt="Big Data Services Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavButton key={item.id} item={item} />
            ))}

            <div className="w-px h-6 mx-3 bg-gray-400/30" />

            <button
              onClick={onToggleLanguage}
              className={`
                px-3 py-1.5 rounded-md border text-sm transition
                ${
                  isScrolled
                    ? 'text-gray-900 border-gray-400 hover:bg-gray-200'
                    : 'text-white border-white/40 hover:bg-white/10'
                }
              `}
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </nav>

          {/* BOTÓN MENÚ MOBILE */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}
              aria-label="Abrir menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12' // X
                      : 'M4 6h16M4 12h16m-7 6h7' // tres líneas
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MOBILE DESPLEGABLE */}
      <div
        className={`md:hidden transition-all duration-200 border-t
          ${
            isMenuOpen
              ? 'max-h-[400px] opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          }
          ${
            isScrolled
              ? 'bg-white/95 border-gray-200'
              : 'bg-[#020617]/95 border-white/10'
          }
        `}
      >
        <div className="container mx-auto px-4 py-2 flex flex-col gap-1">
          {navItems.map((item) => (
            <NavButton key={item.id} item={item} variant="mobile" />
          ))}

          <button
            onClick={() => {
              onToggleLanguage?.();
              setIsMenuOpen(false);
            }}
            className="mt-2 w-full py-3 rounded-lg border text-sm font-semibold
              text-white bg-[#06E8D1] border-transparent hover:bg-[#04c9b7] transition"
          >
            {language === 'es' ? 'Ver sitio en inglés' : 'View site in Spanish'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;
