import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, MapPin, ChevronDown, Calendar, Users, Activity } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const InteractiveMap = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const { t } = useLanguage();

  const nodes = [
    {
      id: 1,
      name: t('map.nodes.node1.name'),
      status: t('map.activeStatus'),
      lat: -31.75,
      lon: -64.4667,
      activationLabel: t('map.nodes.node1.dateLabel'),
      activationDate: t('map.nodes.node1.date'),
      description: t('map.nodes.node1.desc'),
      partnership: t('map.nodes.node1.partnership'),
      image: '/images/sai_renders_1301.png',
      top: '42%',
      left: '48.2%',
    },
    {
      id: 2,
      name: t('map.nodes.node2.name'),
      status: t('map.activeStatus'),
      lat: -31.7549,
      lon: -64.4591,
      activationLabel: t('map.nodes.node2.dateLabel'),
      activationDate: t('map.nodes.node2.date'),
      description: t('map.nodes.node2.desc'),
      partnership: t('map.nodes.node2.partnership'),
      image: '/images/sai_renders_1304.png',
      top: '58%',
      left: '47.8%',
    },
  ];

  const toggleCard = (id) => {
    const willOpen = expandedCard !== id;
    setExpandedCard(willOpen ? id : null);
    setActiveNode(willOpen ? id : null);
  };

  const onMapPinClick = (id) => {
    const isActive = activeNode === id;
    setActiveNode(isActive ? null : id);
    setExpandedCard(isActive ? null : id);
  };

  return (
    <section className="py-24 bg-[#0B2822] relative overflow-hidden" id="mapa-nodos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
            {t('map.title')}
          </h2>
          <p className="text-[#F5F6FA]/60 font-roboto">
            {t('map.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 w-full bg-[#081F1A] rounded-2xl border border-[#F5F6FA]/10 p-2 shadow-2xl relative h-fit">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-xl overflow-hidden bg-[#05110e]">
              <div className="absolute inset-0 opacity-70 mix-blend-overlay hover:opacity-80 transition-opacity duration-500">
                <img
                  alt="Satellite view of dark mountain terrain in Cordoba"
                  className="w-full h-full object-cover grayscale contrast-125"
                  src="https://images.unsplash.com/photo-1573489999553-4f904df66f7e"
                />
              </div>

              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(#FF5C00 1px, transparent 1px), linear-gradient(90deg, #FF5C00 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />

              <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#05110e]/80 pointer-events-none"></div>

              {nodes.map((node) => (
                <div
                  key={node.id}
                  className="absolute w-8 h-8 -ml-4 -mt-4 z-20 cursor-pointer"
                  style={{ top: node.top, left: node.left }}
                  onClick={() => onMapPinClick(node.id)}
                  role="button"
                  aria-label={`${t('map.openLabel')} ${node.name}`}
                >
                  <div className="absolute inset-0 bg-[#FF5C00] rounded-full animate-ping opacity-75"></div>

                  <div
                    className={`relative w-full h-full bg-[#0B2822] border-2 ${
                      activeNode === node.id ? 'border-white bg-[#FF5C00]' : 'border-[#FF5C00]'
                    } rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,92,0,0.5)] hover:scale-110 transition-all duration-200 group`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full transition-colors ${
                        activeNode === node.id ? 'bg-white' : 'bg-white group-hover:bg-[#0B2822]'
                      }`}
                    ></div>
                  </div>

                  <AnimatePresence>
                    {activeNode === node.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-[#081F1A]/95 backdrop-blur-xl border border-[#FF5C00]/30 rounded-lg p-4 shadow-2xl z-50 text-left"
                      >
                        <div className="flex items-start justify-between mb-2 pb-2 border-b border-[#F5F6FA]/10">
                          <h3 className="text-white font-bold text-xs font-montserrat tracking-wide">
                            {node.name}
                          </h3>
                          <Wifi className="w-3 h-3 text-[#FF5C00]" />
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-[#F5F6FA]/50 font-mono">
                          <span>{t('map.statusLabel')}</span>
                          <span className="text-green-500 font-bold uppercase">{node.status}</span>
                        </div>

                        <div className="mt-2 text-[10px] text-[#F5F6FA]/60 font-mono">
                          LAT {node.lat} · LON {node.lon}
                        </div>

                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#081F1A]/95 border-r border-b border-[#FF5C00]/30 transform rotate-45"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="absolute bottom-4 left-4 right-4 flex justify-center pointer-events-none">
                <div className="bg-[#0B2822]/80 backdrop-blur px-4 py-2 rounded-full border border-[#F5F6FA]/20 text-xs md:text-sm font-montserrat text-white shadow-lg flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FF5C00]" />
                  {t('map.region')}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#081F1A] rounded-xl border border-[#F5F6FA]/10 p-6">
              <h3 className="text-2xl font-bold font-montserrat text-white mb-2">{t('map.panelTitle')}</h3>
              <p className="text-[#F5F6FA]/60 text-sm font-roboto mb-6 border-b border-[#F5F6FA]/10 pb-4">
                {t('map.panelSubtitle')}
              </p>

              <div className="space-y-4">
                {nodes.map((node) => {
                  const isOpen = expandedCard === node.id;

                  return (
                    <motion.div
                      key={node.id}
                      layout
                      className={`bg-[#05110e] rounded-lg border overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? 'border-[#FF5C00] shadow-[0_0_15px_rgba(255,92,0,0.15)]'
                          : 'border-[#F5F6FA]/5 hover:border-[#F5F6FA]/20'
                      }`}
                    >
                      <div
                        className="p-4 cursor-pointer flex items-center justify-between"
                        onClick={() => toggleCard(node.id)}
                        role="button"
                        aria-label={`${isOpen ? t('map.closeLabel') : t('map.openLabel')} ${node.name}`}
                      >
                        <div>
                          <h4
                            className={`font-bold font-montserrat text-sm ${
                              isOpen ? 'text-[#FF5C00]' : 'text-white'
                            }`}
                          >
                            {node.name}
                          </h4>

                          <div className="flex items-center gap-2 mt-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-xs text-green-500 font-bold uppercase tracking-wider">
                              {node.status}
                            </span>
                          </div>

                          <div className="mt-2">
                            <span className="text-[10px] font-bold text-[#F5F6FA]/45 uppercase tracking-widest">
                              {isOpen ? t('map.closeLabel') : t('map.openLabel')}
                            </span>
                          </div>
                        </div>

                        <motion.button
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          className="text-[#F5F6FA]/40 hover:text-white transition-colors"
                          aria-label={isOpen ? t('map.closeLabel') : t('map.openLabel')}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.button>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden bg-[#0B2822]/50 border-t border-[#F5F6FA]/5"
                          >
                            <div className="p-4">
                              <div className="flex items-start gap-4">
                                <div className="flex-1 space-y-3">
                                  <div className="flex items-start gap-3 text-xs text-[#F5F6FA]/85">
                                    <Calendar className="w-4 h-4 text-[#FF5C00] shrink-0 mt-0.5" />
                                    <span>
                                      {node.activationLabel}:{' '}
                                      <span className="text-white font-medium">{node.activationDate}</span>
                                    </span>
                                  </div>

                                  <div className="flex items-start gap-3 text-xs text-[#F5F6FA]/85">
                                    <MapPin className="w-4 h-4 text-[#FF5C00] shrink-0 mt-0.5" />
                                    <span>
                                      {t('map.coordinates')}: <span className="text-white font-medium">LAT {node.lat}</span> ·{' '}
                                      <span className="text-white font-medium">LON {node.lon}</span>
                                    </span>
                                  </div>

                                  <div className="flex items-start gap-3 text-xs text-[#F5F6FA]/85">
                                    <Activity className="w-4 h-4 text-[#FF5C00] shrink-0 mt-0.5" />
                                    <span>{node.description}</span>
                                  </div>

                                  <div className="flex items-start gap-3 text-xs text-[#F5F6FA]/85">
                                    <Users className="w-4 h-4 text-[#FF5C00] shrink-0 mt-0.5" />
                                    <span className="italic">{node.partnership}</span>
                                  </div>
                                </div>

                                <div className="w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden border border-[#F5F6FA]/10 shrink-0 bg-[#05110e]">
                                  <img
                                    src={node.image}
                                    alt={`Nodo SAI – ${node.name}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;