import React from 'react';
 
const LayoutHeader = ({ currentPage, onNavigate, onToggleLanguage, language }) => {
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
 
  return (
    <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          Big Data Services
        </div>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-lg font-medium transition-colors ${
                currentPage === item.id ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-300 hover:text-green-200'
              }`}
            >
              {getDisplayName(item.name)}
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleLanguage}
            className="px-3 py-1 rounded-lg bg-gray-700 text-gray-300 text-sm font-medium hover:bg-gray-600 transition-colors"
          >
            {language === 'es' ? 'English' : 'Español'}
          </button>
          <button className="md:hidden text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
 
export default LayoutHeader;