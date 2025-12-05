import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post, language }) => {
  return (
    <Link 
      to={`/blog/${post.slug}`}
      className="block rounded-2xl shadow-lg overflow-hidden bg-[#11252C] 
                 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      {/* Imagen fija */}
      <div className="h-48 w-full overflow-hidden">
        <img 
          src={post.image}
          alt={post.title[language]}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col min-h-[230px]">

        {/* Categoría */}
        <p className="text-xs font-semibold text-bds-aqua mb-3">
          {post.category[language]}
        </p>

        {/* Título */}
        <h3 className="text-lg font-bold text-white leading-snug mb-3">
          {post.title[language]}
        </h3>

        {/* Resumen */}
        <p className="text-gray-300 text-sm leading-relaxed flex-grow">
          {post.excerpt[language]}
        </p>
      </div>
    </Link>
  );
};

export default PostCard;
