import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Brain, Siren, CheckCircle2, ArrowRight, AlertTriangle, ShieldCheck, Eye } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      id: '01',
      icon: Camera,
      title: t('howItWorks.steps.step1.title'),
      description: t('howItWorks.steps.step1.description'),
    },
    {
      id: '02',
      icon: Brain,
      title: t('howItWorks.steps.step2.title'),
      description: t('howItWorks.steps.step2.description'),
    },
    {
      id: '03',
      icon: Siren,
      title: t('howItWorks.steps.step3.title'),
      description: t('howItWorks.steps.step3.description'),
    },
    {
      id: '04',
      icon: CheckCircle2,
      title: t('howItWorks.steps.step4.title'),
      description: t('howItWorks.steps.step4.description'),
    },
  ];

  return (
    <>
      <section id="how-it-works" className="py-24 bg-[#0B2822] relative overflow-hidden">
        {/* Fondo sutil */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fire-smoke.png"
            alt="Sierras"
            className="w-full h-full object-cover opacity-10 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B2822] via-[#0B2822]/90 to-[#0B2822]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Video - Izquierda */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#FF5C00]/30 w-full max-w-sm aspect-[3/4] md:max-w-md lg:max-w-lg">
                <video
                  src="/videos/final-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Título y descripción - Derecha */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-8">
                {t('howItWorks.title')} <span className="text-[#FF5C00]">{t('howItWorks.subtitle')}</span>
              </h2>
              <p className="text-xl text-[#F5F6FA]/80 font-roboto leading-relaxed max-w-2xl">
                {t('howItWorks.description')}
              </p>
            </motion.div>
          </div>

          {/* 4 Pasos */}
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-[#F5F6FA]/10 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {index < steps.length - 1 && (
                    <>
                      <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 z-20 text-[#FF5C00]">
                        <ArrowRight className="w-8 h-8 drop-shadow-lg" />
                      </div>
                      <div className="lg:hidden flex justify-center my-4 text-[#FF5C00]">
                        <ArrowRight className="w-6 h-6 rotate-90" />
                      </div>
                    </>
                  )}
                  <div className="glass-panel p-8 rounded-2xl border border-[#F5F6FA]/10 hover:border-[#FF5C00]/50 transition-all duration-300 h-full flex flex-col bg-[#0B2822]/70 backdrop-blur-xl">
                    <div className="absolute -top-6 -right-6 text-9xl font-black text-[#F5F6FA]/5 select-none">
                      {step.id}
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-[#FF5C00]/10 border border-[#FF5C00]/30 flex items-center justify-center mb-6 group-hover:bg-[#FF5C00] transition-all">
                      <step.icon className="w-7 h-7 text-[#FF5C00] group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-montserrat text-white mb-4 group-hover:text-[#FF5C00]">
                      {step.title}
                    </h3>
                    <p className="text-base text-[#F5F6FA]/70 font-roboto leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded EarlyAlert Content */}
      <section className="py-24 bg-[#09221D] relative overflow-hidden border-t border-[#F5F6FA]/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-[#FF5C00]/10 border border-[#FF5C00]/20">
              <AlertTriangle className="w-8 h-8 text-[#FF5C00]" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-white mb-6">
              {t('howItWorks.earlyAlert.title')}
            </h2>

            <blockquote className="text-lg md:text-2xl text-[#F5F6FA] font-light leading-relaxed font-roboto italic border-l-4 border-[#FF5C00] pl-6 py-2 text-left md:text-center md:border-l-0 md:border-t-4 md:pt-8 bg-[#0B2822] md:bg-transparent p-4 rounded-r-xl md:rounded-none">
              {t('howItWorks.earlyAlert.quote')}
              <footer className="mt-4 text-sm uppercase tracking-wider not-italic">
                <a
                  href="https://climatepromise.undp.org/es/news-and-stories/que-son-los-sistemas-de-alerta-temprana-y-por-que-son-importantes-para-la-accion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FF5C00] text-white font-bold px-6 py-3 rounded-full hover:bg-[#FF7A2B] transition-colors shadow-lg"
                >
                  {t('howItWorks.earlyAlert.source')}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </footer>
            </blockquote>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image 1: Smoke Detection */}
            <motion.div
              className="group relative rounded-2xl overflow-hidden border border-[#F5F6FA]/10 shadow-2xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                <span className="bg-[#FF5C00] text-white text-xs font-bold px-3 py-1 rounded shadow-lg uppercase tracking-wider">
                  {t('howItWorks.earlyAlert.activeDetection')}
                </span>
              </div>

              <img
                src="/images/fire-smoke.png"
                alt="Detección de humo por inteligencia artificial en sierras de Córdoba"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2822] via-transparent to-transparent opacity-60"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-[#FF5C00] mb-2">
                  <Eye className="w-4 h-4" />
                  <span className="text-xs font-mono">{t('howItWorks.earlyAlert.aiVision')}</span>
                </div>
                <p className="text-sm text-[#F5F6FA]/80 font-roboto">
                  {t('howItWorks.earlyAlert.aiDesc')}
                </p>
              </div>
            </motion.div>

            {/* Image 2: Landscape Monitoring */}
            <motion.div
              className="group relative rounded-2xl overflow-hidden border border-[#F5F6FA]/10 shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                <span className="bg-[#25D366] text-white text-xs font-bold px-3 py-1 rounded shadow-lg uppercase tracking-wider">
                  {t('howItWorks.earlyAlert.monitoring')}
                </span>
              </div>

              <img
                src="/images/sai-execution-426129.webp"
                alt="Paisaje de sierras monitoreado por cámara Reolink"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2822] via-transparent to-transparent opacity-60"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-[#25D366] mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-mono">{t('howItWorks.earlyAlert.systemStatus')}</span>
                </div>
                <p className="text-sm text-[#F5F6FA]/80 font-roboto">
                  {t('howItWorks.earlyAlert.systemDesc')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;