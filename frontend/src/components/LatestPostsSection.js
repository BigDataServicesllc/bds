// RUTA: frontend/src/components/LatestPostsSection.js

import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { blogPostsData } from '../data/blogPosts';
import PostCard from './PostCard';

const LatestPostsSection = ({ className, id }) => {
  const { language } = useOutletContext();
  const latestPosts = blogPostsData.slice(0, 3); // Tomamos solo los 3 primeros

  return (
    <section
      id={id}
      className={`py-20 sm:py-24 ${className || ''}`}
    >
      <div className="container mx-auto px-4">
        {/* Título y descripción */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            {language === 'es' ? 'Conocimiento y ' : 'Knowledge & '}
            <span className="text-accent">
              {language === 'es' ? 'Actualidad' : 'Insights'}
            </span>
          </h2>

          <p className="mt-4 text-lg text-bds-text-soft max-w-3xl mx-auto">
            {language === 'es'
              ? 'Explora nuestros últimos artículos y mantente al día con las tendencias del mundo de los datos.'
              : 'Explore our latest articles and stay up-to-date with trends in the data world.'}
          </p>
        </div>

        {/* Cards de artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} language={language} />
          ))}
        </div>

        {/* Botón "Ver todos los artículos" */}
        <div className="text-center mt-16">
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-3 rounded-full border border-accent/80 text-accent font-semibold text-base hover:bg-accent hover:text-primary-deep shadow-lg shadow-black/30 transition-all duration-300"
          >
            {language === 'es' ? 'Ver todos los artículos' : 'View all articles'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestPostsSection;
