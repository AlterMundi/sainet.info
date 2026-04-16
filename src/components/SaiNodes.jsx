import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Zap, Anchor, Signal, Activity } from 'lucide-react'; // Added icons for features
import { useLanguage } from '@/context/LanguageContext';
import LiveStats from '@/components/LiveStats';

const SaiNodes = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-[#0B2822] min-h-screen font-roboto text-[#F5F6FA] overflow-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-12 px-4">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#00FF9D]/10 via-[#0B2822] to-[#0B2822] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" /> {/* Optional grid texture if available */}

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold font-montserrat text-white leading-tight tracking-tighter">
              {t('saiNodes.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-[#FF8C00]">{t('saiNodes.titleSuffix')}</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-[#F5F6FA]/80 font-light leading-relaxed max-w-xl border-l-4 border-[#00FF9D] pl-6 mb-12"
            >
              {t('saiNodes.description')}
            </motion.p>



          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-[#00FF9D]/20 filter blur-3xl transform scale-75 rounded-full animate-pulse-slow" />

            <motion.img
              src="/images/sai_renders_1301.png"
              alt="Nodo SAI - Sistema de Alerta Temprana"
              className="relative w-full max-w-lg lg:max-w-xl h-auto object-contain z-10 drop-shadow-2xl"
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Design Features Section */}
      <section className="py-24 bg-[#081F1A] relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF5C00]/30 to-transparent" />

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-6">
              {t('saiNodes.designTitle')}
            </h2>
            <div className="h-1 w-24 bg-[#FF5C00] mx-auto rounded-full mb-6" />
            <p className="text-[#F5F6FA]/60 max-w-3xl mx-auto text-lg md:text-xl font-light">
              {t('saiNodes.designDesc')}
            </p>
          </motion.div>

          {/* Technical Diagram */}
          <motion.div
            className="max-w-5xl mx-auto mb-24"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 md:p-12 backdrop-blur-md shadow-2xl hover:shadow-[#FF5C00]/10 transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C00]/5 to-transparent pointer-events-none" />
              <img
                src="/images/esquemadiseño.png"
                alt="Esquema Técnico SAI"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
          >
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title={t('saiNodes.features.optics.title')}
              description={t('saiNodes.features.optics.desc')}
              color="text-[#FF5C00]"
              borderColor="hover:border-[#FF5C00]/50"
            />

            <FeatureCard
              icon={<Settings className="w-8 h-8" />}
              title={t('saiNodes.features.electric.title')}
              description={t('saiNodes.features.electric.desc')}
              color="text-[#00FF9D]"
              borderColor="hover:border-[#00FF9D]/50"
            />

            <FeatureCard
              icon={<Anchor className="w-8 h-8" />}
              title={t('saiNodes.features.mounts.title')}
              description={t('saiNodes.features.mounts.desc')}
              color="text-blue-400"
              borderColor="hover:border-blue-400/50"
            />

            <FeatureCard
              icon={<Signal className="w-8 h-8" />}
              title={t('saiNodes.features.connectivity.title')}
              description={t('saiNodes.features.connectivity.desc')}
              color="text-purple-400"
              borderColor="hover:border-purple-400/50"
            />
          </motion.div>
        </div>
      </section>

    </div>
  );
};

// Extracted Feature Card Component
const FeatureCard = ({ icon, title, description, color, borderColor }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    }}
    className={`group relative p-8 rounded-2xl bg-[#0F352E]/50 border border-[#F5F6FA]/10 backdrop-blur-sm ${borderColor} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className={`mb-6 p-4 rounded-xl bg-white/5 w-fit ${color} group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>

    <h3 className="font-bold text-xl text-white font-montserrat mb-4 group-hover:text-[#F5F6FA] transition-colors">
      {title}
    </h3>

    <p className="text-base text-[#F5F6FA]/70 leading-relaxed font-light">
      {description}
    </p>
  </motion.div>
);

export default SaiNodes;