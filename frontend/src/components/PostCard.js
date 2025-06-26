// RUTA: frontend/src/components/PostCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post, language }) => {
  return (
    <Link to={`/blog/${post.slug}`} className="block bg-secondary-dark rounded-xl overflow-hidden shadow-lg hover:shadow-accent/20 transition-all duration-300 group">
      <div className="h-48 w-full overflow-hidden">
        <img src={post.image} alt={post.title[language]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6">
        <span className="inline-block bg-accent/20 text-accent text-xs font-semibold px-2 py-1 rounded-full mb-2">{post.category[language]}</span>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{post.title[language]}</h3>
        <p className="text-gray-400 text-sm">{post.excerpt[language]}</p>
      </div>
    </Link>
  );
};

export default PostCard;