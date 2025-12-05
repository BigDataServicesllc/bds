// RUTA: frontend/src/pages/BlogIndexPage.js

import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { blogPostsData } from '../data/blogPosts';
import PostCard from '../components/PostCard';

const BlogIndexPage = () => {
  const { language } = useOutletContext();

  const title =
    language === 'es' ? 'Conocimiento y Actualidad' : 'Knowledge & Insights';

  const subtitle =
    language === 'es'
      ? 'Explora nuestros últimos artículos y mantenete al día con las tendencias del mundo de los datos.'
      : 'Explore our latest articles and stay up to date with trends in the data world.';

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 
        =======================================================================
        HERO SECTION (CORTE RECTO)
        Fondo: #173B3A (Verde Oscuro)
        =======================================================================
      */}
      <section className="relative pt-40 pb-20 bg-[#173B3A] overflow-hidden">
        
        {/* Efecto de Luz de Fondo (Glow Turquesa) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full">
            <div className="w-full h-full bg-[#06E8D1] opacity-[0.15] blur-[120px] rounded-full" />
        </div>

        {/* Contenido del Hero */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            {title}
          </h1>

          {/* Línea decorativa Dorada */}
          <div className="w-24 h-1 bg-[#BD9834] mx-auto mb-6 rounded-full"></div>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
        
        {/* SE ELIMINÓ EL SVG DE LA CURVA AQUÍ PARA UN CORTE RECTO */}
      </section>

      {/* 
        =======================================================================
        GRID DE ARTÍCULOS
        =======================================================================
      */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostsData.map((post) => (
              <div key={post.slug} className="transform hover:-translate-y-2 transition-transform duration-300">
                <PostCard post={post} language={language} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogIndexPage;