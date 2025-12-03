// RUTA: frontend/src/components/LayoutHeader.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LayoutHeader = ({ currentPage, onNavigate, onToggleLanguage, language }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Detectar scroll
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
        'Inicio': 'Home', 'Servicios': 'Services', 'Learning': 'Learning', 'Blog': 'Blog', 'Contacto': 'Contact'
      };
      return translations[name] || name;
    }
    return name;
  };

  const NavButton = ({ item }) => {
    const isActivePage = item.path && location.pathname.startsWith(item.path);
    const isActiveSection =
      !item.path && location.pathname === "/" && currentPage === item.id;
    const isActive = isActivePage || isActiveSection;

    const baseClasses =
      "py-2 px-3 rounded-md text-sm font-medium transition-colors duration-300";

    const getColorClasses = () => {
      // Estado SIN scroll: siempre sobre el hero
      if (!isScrolled) {
        return isActive
          ? "text-white font-semibold"
          : "text-white hover:text-[#06E8D1]";
      }
      // Estado con scroll: header blanco
      return isActive
        ? "text-[#2B64B2] font-semibold"
        : "text-gray-900 hover:text-[#2B64B2]";
    };

    // LINK con path (blog)
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

    // Botón que navega dentro de la home (cuando estamos en "/")
    if (location.pathname === "/") {
      return (
        <button
          onClick={() => {
            onNavigate(item.id);
            setIsMenuOpen(false);
          }}
          className={`${baseClasses} ${getColorClasses()}`}
        >
          {getDisplayName(item.name)}
        </button>
      );
    }

    // Links desde otras páginas hacia secciones de home
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
        ${isScrolled 
          ? 'bg-white/85 backdrop-blur-lg shadow-md border-b border-gray-200' 
          : 'bg-transparent backdrop-blur-sm'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/images/logo.png" 
              alt="Big Data Services Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => <NavButton key={item.id} item={item} />)}

            <div className="w-px h-6 mx-3 bg-gray-400/30"></div>

            <button
              onClick={onToggleLanguage}
              className={`
                px-3 py-1.5 rounded-md border text-sm transition
                ${isScrolled
                  ? 'text-gray-900 border-gray-400 hover:bg-gray-200'
                  : 'text-white border-white/40 hover:bg-white/10'
                }
              `}
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </nav>

          {/* NAV MOBILE */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;