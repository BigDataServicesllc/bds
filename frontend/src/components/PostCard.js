import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post, language }) => {
  return (
    <Link 
      to={`/blog/${post.slug}`}
      className="group flex flex-col h-full bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-bds-aqua"
    >
      {/* CONTENEDOR DE IMAGEN ANIMADO */}
      <div className="h-56 w-full overflow-hidden relative bg-slate-100">
        <img 
          src={post.image}
          alt={post.title[language]}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        />
        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase text-slate-900 shadow-sm border border-white/20">
          {post.category[language]}
        </div>
      </div>

      {/* CONTENIDO LIMPIO TIPOGRÁFICO */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-950 leading-snug mb-4 group-hover:text-bds-aqua transition-colors duration-300">
          {post.title[language]}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-6">
          {post.excerpt[language]}
        </p>
        
        {/* ENLACE INFERIOR (Pill / Arrow) */}
        <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between text-bds-violet font-semibold text-sm group-hover:text-bds-aqua transition-colors duration-300">
          <span className="uppercase tracking-wide text-xs">
             {language === 'es' ? 'Leer Artículo' : 'Read Article'}
          </span>
          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-bds-violet group-hover:bg-bds-aqua group-hover:text-white transition-all duration-300">
            <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
