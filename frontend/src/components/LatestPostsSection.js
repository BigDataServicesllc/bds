// RUTA: frontend/src/components/LatestPostsSection.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { blogPostsData } from '../data/blogPosts';
import PostCard from './PostCard';

const LatestPostsSection = ({ className, id }) => {
  const { language } = useOutletContext();
  const latestPosts = blogPostsData.slice(0, 3); // Tomamos solo los 3 primeros

  return (
    <section id={id} className={`py-20 sm:py-24 ${className || ''}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                {language === 'es' ? 'Conocimiento y' : 'Knowledge &'}{' '}
                <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
                    {language === 'es' ? 'Actualidad' : 'Insights'}
                </span>
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                {language === 'es' ? 'Explora nuestros últimos artículos y mantente al día con las tendencias del mundo de los datos.' : 'Explore our latest articles and stay up-to-date with trends in the data world.'}
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map(post => (
            <PostCard key={post.slug} post={post} language={language} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/blog" className="inline-block px-8 py-3 bg-accent text-white text-base font-semibold rounded-lg shadow-lg hover:bg-accent-hover transition-all duration-300 transform hover:scale-105">
            {language === 'es' ? 'Ver todos los artículos' : 'View All Articles'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestPostsSection;