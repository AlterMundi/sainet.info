import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ShieldCheck, Eye } from 'lucide-react';

const EarlyAlert = () => {
  return (
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
            Alerta Temprana
          </h2>
          
          <blockquote className="text-lg md:text-2xl text-[#F5F6FA] font-light leading-relaxed font-roboto italic border-l-4 border-[#FF5C00] pl-6 py-2 text-left md:text-center md:border-l-0 md:border-t-4 md:pt-8 bg-[#0B2822] md:bg-transparent p-4 rounded-r-xl md:rounded-none">
            "Un sistema integrado de vigilancia, previsión y predicción de amenazas, evaluación de riesgos de desastres, comunicación y actividades de preparación, sistemas y procesos que permiten a las personas, comunidades, gobiernos, empresas y otros tomar medidas oportunas para reducir los riesgos de desastres antes de sucesos peligrosos."
            <footer className="mt-4 text-sm font-bold text-[#FF5C00] uppercase tracking-wider not-italic">
              — Definición PNUD (UNDP)
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
                Detección Activa
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
                <span className="text-xs font-mono">IA VISION: SMOKE DETECTED</span>
              </div>
              <p className="text-sm text-[#F5F6FA]/80 font-roboto">
                El algoritmo identifica columnas de humo con alta precisión (0.60 - 0.65 de confianza), permitiendo una respuesta inmediata antes de que el fuego se propague.
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
                Monitoreo 24/7
              </span>
            </div>

            <img 
              src="/images/sai-execution-426444.webp" 
              alt="Paisaje de sierras monitoreado por cámara Reolink" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />

             <div className="absolute inset-0 bg-gradient-to-t from-[#0B2822] via-transparent to-transparent opacity-60"></div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
               <div className="flex items-center gap-2 text-[#25D366] mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-mono">SYSTEM STATUS: ONLINE</span>
              </div>
              <p className="text-sm text-[#F5F6FA]/80 font-roboto">
                Vigilancia continua del paisaje serrano. Las cámaras, estratégicamente ubicadas, cubren vastas extensiones de terreno, protegiendo la biodiversidad local.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAlert;