import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Brain, Scan, Zap, Scaling } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const PresentationSlide = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Eye,
      title: t('presentation.features.f1.title'),
      description: t('presentation.features.f1.desc')
    },
    {
      icon: Brain,
      title: t('presentation.features.f2.title'),
      description: t('presentation.features.f2.desc')
    },
    {
      icon: Scan,
      title: t('presentation.features.f3.title'),
      description: t('presentation.features.f3.desc')
    },
    {
      icon: Zap,
      title: t('presentation.features.f4.title'),
      description: t('presentation.features.f4.desc')
    },
    {
      icon: Scaling,
      title: t('presentation.features.f5.title'),
      description: t('presentation.features.f5.desc')
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B2822] text-[#F5F6FA] flex items-center justify-center relative overflow-hidden font-roboto selection:bg-[#FF5C00] selection:text-white">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#2D3436]/40 to-transparent pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[#FF5C00]/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#F5F6FA 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-8 py-12 relative z-10 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-6 rounded border border-[#FF5C00]/30 bg-[#FF5C00]/10 text-[#FF5C00] font-mono text-xs tracking-wider">
              {t('presentation.mode')}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-montserrat text-white mb-4 leading-tight">
              {t('presentation.title')}
              <span className="block text-2xl md:text-3xl font-normal text-[#F5F6FA]/60 mt-2">
                {t('presentation.subtitle')}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#FF5C00] font-light mb-12 max-w-2xl leading-relaxed">
              {t('presentation.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass-panel p-5 rounded-xl border border-[#F5F6FA]/10 hover:border-[#FF5C00]/50 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded bg-[#FF5C00]/10 text-[#FF5C00] group-hover:bg-[#FF5C00] group-hover:text-white transition-colors">
                      <feature.icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-montserrat mb-1 group-hover:text-[#FF5C00] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[#F5F6FA]/60 font-roboto leading-snug">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            className="lg:col-span-5 relative h-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* 3D Node Render */}
            <div className="relative w-full aspect-[3/4] max-h-[80vh]">
               <div className="absolute inset-0 bg-gradient-to-t from-[#0B2822] via-transparent to-transparent z-20" />
               <img 
                 src="/images/esquemadiseño.png" 
                 alt="SAI Node Technical Render" 
                 className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(255,92,0,0.15)] opacity-90 mix-blend-lighten"
               />
               
               {/* Decorative Tech Rings */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] border border-[#FF5C00]/20 rounded-full animate-[spin_20s_linear_infinite]" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[90%] border border-[#F5F6FA]/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
            </div>

            {/* Technical Specs Overlay */}
            <div className="absolute bottom-10 right-0 glass-panel p-4 rounded border-l-2 border-l-[#FF5C00] max-w-xs z-30 hidden md:block">
              <div className="flex items-center justify-between mb-2">
                 <span className="text-[#FF5C00] font-mono text-xs font-bold">NODE_V2.4</span>
                 <div className="w-2 h-2 bg-[#FF5C00] rounded-full animate-pulse" />
              </div>
              <div className="space-y-1 text-xs font-mono text-[#F5F6FA]/60">
                <p>CAM: 4x 8MP Sony Starvis</p>
                <p>PROC: Jetson Nano / RPi 4</p>
                <p>PWR: Solar + LiFePO4</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default PresentationSlide;