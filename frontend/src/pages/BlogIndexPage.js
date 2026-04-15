// RUTA: frontend/src/pages/BlogIndexPage.js

import React from 'react';
import SEO from '../components/SEO';
import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPostsData } from '../data/blogPosts';
import PostCard from '../components/PostCard';

const BlogIndexPage = () => {
  const { language } = useOutletContext();

  const title = language === 'es' ? 'Conocimiento y Actualidad' : 'Knowledge & Insights';
  const subtitle = language === 'es'
    ? 'Explora nuestros últimos recursos y mantente al día con las tendencias del mundo tecnológico.'
    : 'Explore our latest resources and stay up to date with trends in the tech world.';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-24">
      <SEO 
        title={title}
        description={subtitle}
        keywords="Blog, Tech Insights, Big Data, Web Development, Tutorials"
      />
      {/* 
        =======================================================================
        CABECERA MINIMALISTA APPLE TYPE
        =======================================================================
      */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-slate-400 font-extrabold mb-6 block">
            {language === 'es' ? 'Blog Corporativo' : 'Corporate Blog'}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-950 mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* 
          =======================================================================
          GRID DE ARTÍCULOS
          =======================================================================
        */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {blogPostsData.map((post) => (
            <motion.div key={post.slug} variants={itemVariants}>
              <PostCard post={post} language={language} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogIndexPage;