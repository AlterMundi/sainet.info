import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight, Filter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Blog = () => {
  const [expandedPosts, setExpandedPosts] = React.useState({});
  const { t } = useLanguage();

  const toggleExpand = (id) => {
    setExpandedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const posts = [
    {
      id: 1,
      title: t('blog.posts.post1.title'),
      subtitle: t('blog.posts.post1.subtitle'),
      date: "15 Oct 2024",
      author: "Equipo SAI",
      category: "Eventos",
      image: "/images/sanmartin.jpg",
      content: t('blog.posts.post1.content')
    },
    {
      id: 2,
      title: t('blog.posts.post2.title'),
      subtitle: t('blog.posts.post2.subtitle'),
      date: "02 Nov 2024",
      author: "Coordinación Operativa",
      category: "Infraestructura",
      image: "/images/bombero.jpg",
      content: t('blog.posts.post2.content')
    },
    {
      id: 3,
      title: t('blog.posts.post3.title'),
      subtitle: t('blog.posts.post3.subtitle'),
      date: "20 Nov 2024",
      author: "Ingeniería de Campo",
      category: "Infraestructura",
      image: "/images/instalacion.jpg",
      content: t('blog.posts.post3.content')
    },
    {
      id: 4,
      title: t('blog.posts.post4.title'),
      subtitle: t('blog.posts.post4.subtitle'),
      date: "05 Dic 2024",
      author: "Comunicación",
      category: "Eventos",
      image: "/images/supermoon.jpg",
      content: t('blog.posts.post4.content')
    },
    {
      id: 5,
      title: t('blog.posts.post5.title'),
      subtitle: t('blog.posts.post5.subtitle'),
      date: "10 Dic 2024",
      author: "I+D",
      category: "Eventos",
      image: "/images/edgecity.jpg",
      content: t('blog.posts.post5.content')
    },
    {
      id: 6,
      title: t('blog.posts.post6.title'),
      subtitle: t('blog.posts.post6.subtitle'),
      date: "15 Dic 2024",
      author: "Impacto Social",
      category: "Eventos",
      image: "/images/devconnect.jpg",
      content: t('blog.posts.post6.content')
    },
    {
      id: 7,
      title: t('blog.posts.post7.title'),
      subtitle: t('blog.posts.post7.subtitle'),
      date: "20 Dic 2024",
      author: "Ingeniería",
      category: "Hitos",
      image: "/images/IMG_0649.jpg",
      content: t('blog.posts.post7.content')
    },
    {
      id: 8,
      title: t('blog.posts.post8.title'),
      subtitle: t('blog.posts.post8.subtitle'),
      date: "14 Ene 2026",
      author: "Equipo SAI",
      category: "Hitos",
      image: "/images/11.png",
      content: t('blog.posts.post8.content')
    },
    {
      id: 9,
      title: t('blog.posts.post9.title'),
      subtitle: t('blog.posts.post9.subtitle'),
      date: "13 Feb 2026",
      author: "Operaciones",
      category: "Hitos",
      image: "/images/sai-execution-426129.webp",
      content: t('blog.posts.post9.content'),
      extraImages: ["/images/sai-execution-426129.webp", "/images/sai-execution-426444.webp"]
    }
  ];

  // Order newest first
  const sortedPosts = [...posts].reverse();

  const categories = ['Eventos', 'Infraestructura', 'Hitos'];
  const [activeCategory, setActiveCategory] = React.useState(null);
  const filteredPosts = activeCategory
    ? sortedPosts.filter(p => p.category === activeCategory)
    : sortedPosts;

  return (
    <section className="py-24 bg-[#0B2822] min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-6">
            {t('blog.title')}
          </h1>
          <p className="text-lg text-[#F5F6FA]/70 max-w-2xl mx-auto font-roboto">
            {t('blog.subtitle')}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Posts */}
          <div className="flex-1 flex flex-col gap-12">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="flex flex-col md:flex-row gap-8 bg-[#F5F6FA]/5 rounded-2xl overflow-hidden border border-[#F5F6FA]/10 hover:border-[#FF5C00]/30 transition-colors duration-300 shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#FF5C00] text-white text-xs font-bold px-3 py-1 rounded shadow-lg uppercase tracking-wider font-mono">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex-1 p-6 md:p-8 flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-mono text-[#F5F6FA]/50 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-2 leading-tight">
                    {post.title}
                  </h2>
                  <h3 className="text-lg text-[#FF5C00] font-medium mb-6 font-roboto">
                    {post.subtitle}
                  </h3>

                  {expandedPosts[post.id] && (
                    <div className="text-[#F5F6FA]/80 font-roboto leading-relaxed space-y-4 text-sm md:text-base mb-6">
                      {post.content.split('\n').filter(p => p.trim() !== '').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}

                      {post.extraImages && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                          {post.extraImages.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt={`${post.title} - extra ${idx + 1}`}
                              className="w-full h-48 object-cover rounded-lg border border-[#F5F6FA]/20"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="mt-auto pt-6 border-t border-[#F5F6FA]/10 flex items-center justify-between">
                    <div className="flex gap-2">
                      {['SAI', post.category].map((tag, i) => (
                        <div key={i} className="flex items-center gap-1 text-[10px] bg-[#F5F6FA]/5 px-2 py-1 rounded-full text-[#F5F6FA]/60">
                          <Tag className="w-3 h-3" />
                          {tag}
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => toggleExpand(post.id)}
                      className="text-[#FF5C00] text-sm font-bold flex items-center gap-1 hover:opacity-80 transition-opacity"
                    >
                      {expandedPosts[post.id] ? t('blog.close') : t('blog.readMore')} <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sidebar - Category Filter */}
          <div className="lg:w-56 flex-shrink-0 order-first lg:order-last">
            <div className="sticky top-24">
              <div className="rounded-2xl bg-[#F5F6FA]/5 border border-[#F5F6FA]/10 p-5 backdrop-blur-md">
                <div className="flex items-center gap-2 text-white/60 text-xs font-mono uppercase tracking-widest mb-4">
                  <Filter className="w-3.5 h-3.5" />
                  Categorías
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setActiveCategory(null)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-montserrat font-bold transition-all ${!activeCategory
                        ? 'bg-[#FF5C00] text-white'
                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                      }`}
                  >
                    Todos
                    <span className="ml-auto float-right font-mono text-xs opacity-60">{sortedPosts.length}</span>
                  </button>
                  {categories.map(cat => {
                    const count = sortedPosts.filter(p => p.category === cat).length;
                    return (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-montserrat font-bold transition-all ${activeCategory === cat
                            ? 'bg-[#FF5C00] text-white'
                            : 'text-white/60 hover:bg-white/5 hover:text-white'
                          }`}
                      >
                        {cat}
                        <span className="ml-auto float-right font-mono text-xs opacity-60">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;