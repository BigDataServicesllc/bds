// RUTA: frontend/src/components/LayoutHeader.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const LayoutHeader = ({ currentPage, onNavigate, onToggleLanguage, language }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Detectar scroll
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquear el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  // En estas rutas queremos SIEMPRE header sólido
  const needsSolidHeader =
    location.pathname === "/terminos" ||
    location.pathname === "/privacidad";

  const isSolidHeader = isScrolled || needsSolidHeader;

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
        'Inicio': 'Home',
        'Servicios': 'Services',
        'Learning': 'Learning',
        'Blog': 'Blog',
        'Contacto': 'Contact'
      };
      return translations[name] || name;
    }
    return name;
  };

  const NavButton = ({ item }) => {
    const isActivePage = item.path && location.pathname.startsWith(item.path);
    const isActiveSection = !item.path && location.pathname === "/" && currentPage === item.id;
    const isActive = isActivePage || isActiveSection;

    const baseClasses = "py-2 px-3 rounded-md text-sm font-medium transition-colors duration-300";
    
    const getColorClasses = () => {
      if (!isSolidHeader) {
        return isActive ? "text-white font-semibold" : "text-white hover:text-[#06E8D1]";
      }
      return isActive ? "text-[#2B64B2] font-semibold" : "text-gray-900 hover:text-[#2B64B2]";
    };

    if (item.path) {
      return (
        <Link to={item.path} onClick={() => setIsMenuOpen(false)} className={`${baseClasses} ${getColorClasses()}`}>
          {getDisplayName(item.name)}
        </Link>
      );
    }

    if (location.pathname === "/") {
      return (
        <button onClick={() => { onNavigate(item.id); setIsMenuOpen(false); }} className={`${baseClasses} ${getColorClasses()}`}>
          {getDisplayName(item.name)}
        </button>
      );
    }

    return (
      <Link to={`/#${item.id}`} onClick={() => setIsMenuOpen(false)} className={`${baseClasses} ${getColorClasses()}`}>
        {getDisplayName(item.name)}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isSolidHeader
          ? 'bg-white/85 backdrop-blur-lg shadow-md border-b border-gray-200'
          : 'bg-transparent backdrop-blur-sm'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Big Data Services Logo" className="h-10 w-auto" />
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => <NavButton key={item.id} item={item} />)}

            <div className="w-px h-6 mx-3 bg-gray-400/30"></div>

            <button
              onClick={onToggleLanguage}
              className={`px-3 py-1.5 rounded-md border text-sm transition ${
                isSolidHeader
                  ? 'text-gray-900 border-gray-400 hover:bg-gray-200'
                  : 'text-white border-white/40 hover:bg-white/10'
              }`}
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </nav>

          {/* NAV MOBILE TOGGLE (Hamburguesa) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isSolidHeader ? 'text-gray-900' : 'text-white'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 
        ================================================================
        MENU MOBILE FULL SCREEN CORREGIDO
        ================================================================
      */}
      {isMenuOpen && (
        <div
          className="
            fixed inset-0 
            h-screen w-screen /* Forzar altura y ancho total */
            bg-slate-900      /* Color sólido seguro (Dark Slate) */
            flex flex-col items-center justify-center 
            z-[100]           /* Máxima prioridad */
          "
        >
          {/* BOTÓN CERRAR (X) */}
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition"
            aria-label="Cerrar menú"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* NAV ITEMS MOBILE */}
          <nav className="flex flex-col items-center gap-8 w-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setIsMenuOpen(false);
                  if (item.path) {
                    navigate(item.path); 
                  } else if (location.pathname === "/") {
                    onNavigate(item.id);
                  } else {
                    navigate("/");
                    setTimeout(() => onNavigate(item.id), 100); 
                  }
                }}
                className="text-2xl font-medium text-white hover:text-[#06E8D1] transition-colors"
              >
                {getDisplayName(item.name)}
              </button>
            ))}
          </nav>

          {/* BOTÓN DE IDIOMA */}
          <button
            onClick={() => {
              onToggleLanguage();
              setIsMenuOpen(false);
            }}
            className="mt-12 px-8 py-3 border border-white/30 rounded-full text-lg text-white hover:bg-white/10 transition"
          >
            {language === "es" ? "Cambiar a Inglés" : "Switch to Spanish"}
          </button>
        </div>
      )}
    </header>
  );
};

export default LayoutHeader;