// RUTA: frontend/src/pages/BlogIndexPage.js

import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { blogPostsData } from '../data/blogPosts';
import PostCard from '../components/PostCard';

const BlogIndexPage = () => {
  const { language } = useOutletContext();
  
  return (
    <div className="bg-primary-dark min-h-screen pt-28 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {language === 'es' ? 'Nuestro Blog' : 'Our Blog'}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {language === 'es' ? 'Artículos, tutoriales y reflexiones del mundo de los datos.' : 'Articles, tutorials, and insights from the world of data.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map(post => (
            <PostCard key={post.slug} post={post} language={language} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogIndexPage;