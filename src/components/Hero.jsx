import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import CyberForestBackground from '@/components/CyberForestBackground';

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const detectorRef = useRef(null);
  const boxRef = useRef(null);
  const scanRef = useRef(null);
  const pulseRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      // Bounding box: pequeña respiración sobre el foco de humo
      gsap.fromTo(
        boxRef.current,
        { scale: 1, x: 0, y: 0 },
        {
          scale: 1.04,
          x: 2,
          y: -2,
          duration: 2.4,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true
        }
      );

      // Línea de escaneo
      gsap.fromTo(
        scanRef.current,
        { yPercent: 0, opacity: 0 },
        {
          yPercent: 1000,
          opacity: 1,
          duration: 1.6,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true
        }
      );

      // Pulso de alerta
      gsap.fromTo(
        pulseRef.current,
        { scale: 0.9, opacity: 0.9 },
        { scale: 1.8, opacity: 0, duration: 1.6, ease: 'power2.out', repeat: -1 }
      );
    },
    { scope: detectorRef }
  );

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden pt-20 pb-20 lg:pt-24">
      {/* Cyber Forest Background */}
      <CyberForestBackground />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B2822]/70" />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245, 246, 250, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 246, 250, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Col izquierda: solo logo ocupando toda la sección */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start justify-center"
          >
            <motion.img
              src="/images/logo.png"
              alt="SAI - Sistema de Alerta Temprana"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              style={{ filter: 'brightness(0) invert(1)' }}
            />

            <p className="text-base md:text-lg text-[#F5F6FA]/80 -mt-1 mb-8 max-w-xl mx-auto lg:mx-0 font-roboto leading-relaxed border-l-4 border-[#FF5C00] pl-5 text-left">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#FF5C00] hover:bg-[#FF5C00]/90 text-white font-montserrat font-bold px-8 py-6 text-lg"
                onClick={() => navigate('/contacto')}
              >
                {t('hero.requestDemo')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#F5F6FA]/20 text-[#F5F6FA] hover:bg-[#F5F6FA]/10 font-mono py-6 text-lg"
                onClick={() => navigate('/demo')}
              >
                Ver Demo
              </Button>
            </div>
          </motion.div>

          {/* Col derecha: imagen con bounding box animado sobre el humo */}
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              ref={detectorRef}
              className="relative rounded-lg overflow-hidden border border-[#FF5C00]/30 shadow-2xl shadow-black/50 aspect-[4/3] bg-[#0B2822]"
            >
              <img
                src="/images/fire-smoke.png"
                alt={t('hero.smokeDetected')}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Degradado inferior sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2822]/70 via-transparent to-[#0B2822]/20 pointer-events-none" />

              {/* Info superior izquierda */}
              <div className="absolute top-3 left-3 font-mono text-[10px] md:text-xs text-[#F5F6FA]/85 leading-tight">
                <p>CAM_ID: NODE_04_SIERRAS</p>
                <p>LAT: -31.4167 S</p>
                <p>LNG: -64.1833 W</p>
              </div>

              {/* REC */}
              <div className="absolute top-3 right-3 font-mono text-[10px] md:text-xs text-[#FF5C00] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF5C00] animate-pulse" />
                {t('hero.rec')}
              </div>

              {/* Bounding box — aprox. sobre la columna de humo (lado izquierdo de la imagen) */}
              <div
                ref={boxRef}
                className="absolute"
                style={{
                  left: '18%',
                  top: '38%',
                  width: '22%',
                  height: '30%',
                  transformOrigin: 'center'
                }}
              >
                {/* Esquinas del bounding box */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Lineas suaves del marco */}
                  <div className="absolute inset-0 border border-[#FF5C00]/40 rounded-[2px]" />
                  {/* Esquinas */}
                  <span className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-[#FF5C00]" />
                  <span className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-[#FF5C00]" />
                  <span className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-[#FF5C00]" />
                  <span className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-[#FF5C00]" />

                  {/* Línea de escaneo */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      ref={scanRef}
                      className="absolute left-0 right-0 h-[2px]"
                      style={{
                        background:
                          'linear-gradient(90deg, transparent, rgba(255,92,0,0.9), transparent)',
                        boxShadow: '0 0 8px rgba(255,92,0,0.8)',
                        top: 0
                      }}
                    />
                  </div>

                  {/* Pulso */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      ref={pulseRef}
                      className="w-6 h-6 rounded-full border border-[#FF5C00]"
                    />
                  </div>
                </div>

                {/* Etiqueta arriba del box */}
                <div className="absolute -top-6 left-0 font-mono text-[10px] md:text-xs text-[#FF5C00] whitespace-nowrap bg-[#0B2822]/70 px-1.5 py-0.5 rounded-sm border border-[#FF5C00]/40">
                  SMOKE · 0.92
                </div>
              </div>

              {/* Panel inferior */}
              <div className="absolute bottom-3 left-3 right-3 backdrop-blur-sm bg-[#0B2822]/60 p-3 rounded border border-[#FF5C00]/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="bg-[#FF5C00]/20 p-2 rounded shrink-0">
                    <span className="block w-5 h-5 border-2 border-[#FF5C00] rounded-sm" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#FF5C00] font-bold font-mono text-[10px] md:text-xs tracking-wider">
                      {t('hero.alertConfirmed')}
                    </p>
                    <p className="text-white text-xs md:text-sm font-roboto truncate">
                      {t('hero.smokeDetected')}
                    </p>
                  </div>
                </div>
                <div className="text-right hidden sm:block shrink-0">
                  <p className="text-[#F5F6FA]/60 font-mono text-[10px] md:text-xs">
                    {t('hero.certainty')}
                  </p>
                  <p className="text-white font-bold font-mono text-lg md:text-xl">92%</p>
                </div>
              </div>
            </div>

            {/* Decoraciones */}
            <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-[#F5F6FA]/10 rounded-tr-3xl" />
            <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[#F5F6FA]/10 rounded-bl-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
