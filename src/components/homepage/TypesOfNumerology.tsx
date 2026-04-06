import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const TypesOfNumerology: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const types = [
    {
      number: '01',
      title: 'Chaldean Numerology',
      image: '/chaldean.jpg',
      description: 'One of the oldest and most accurate systems. It is based on sound vibrations rather than alphabetical order.',
      benefit: 'Highly effective for name correction, business success, and predictive accuracy.',
    },
    {
      number: '02',
      title: 'Pythagorean Numerology',
      image: '/pythagorean.jpg',
      description: 'A widely used modern system that assigns numbers from 1 to 9 to alphabets.',
      benefit: 'Reveals personality traits, life purpose, strengths and weaknesses.',
    },
    {
      number: '03',
      title: 'Kabbalah Numerology',
      image: '/kabbalah.jpg',
      description: 'A spiritual system focusing on inner consciousness and soul energy.',
      benefit: 'Best for self-discovery, spiritual growth, understanding deeper life patterns.',
    },
    {
      number: '04',
      title: 'Applied Business Numerology',
      image: '/business_numerology.jpg',
      description: 'A specialized system used for entrepreneurs and companies.',
      benefit: 'Focus on business name success, brand positioning, financial growth alignment.',
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="types-of-numerology"
      className="relative py-24 lg:py-32 overflow-hidden -mt-36 z-20 bg-white"
    >
      <div className="relative z-10 px-6 lg:px-12 max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 lg:mb-28">
          <span className="font-display text-brand-gold text-xs lg:text-sm tracking-widest-2xl uppercase mb-3 block">
            Systems We Use
          </span>
          <h2
            className="font-display text-[#1A0F0F] leading-tight mb-4"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              letterSpacing: '0.04em',
            }}
          >
            Types of <span className="text-brand-green">Numerology</span>
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold/40 mx-auto mb-8" />
          <p className="font-body text-[#1A0F0F]/70 max-w-2xl mx-auto text-lg leading-relaxed">
            We employ multiple ancient and modern numerology systems to provide comprehensive insights tailored to your unique vibration.
          </p>
        </div>

        {/* Premium Redesigned Cards Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-12 lg:gap-16"
        >
          {types.map((type, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Image side - Modern editorial style */}
              <div className="relative w-full lg:w-1/2 aspect-[4/5] rounded-[32px] overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <motion.img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                />
                {/* Minimalist Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Float Number */}
                <motion.span 
                  className="absolute top-8 left-8 font-display text-5xl lg:text-7xl text-white/90 drop-shadow-lg z-20"
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5 
                  }}
                >
                  {type.number}
                </motion.span>
              </div>

              {/* Content side */}
              <div className="w-full lg:w-1/2 pt-4">
                <h3 className="font-display text-2xl lg:text-3xl text-[#1A0F0F] uppercase tracking-wide mb-5">
                  {type.title}
                </h3>
                
                <p className="font-body text-[#1A0F0F]/60 text-base leading-relaxed mb-6 border-l-2 border-brand-green pl-6">
                  {type.description}
                </p>
                
                <motion.div 
                  className="p-6 rounded-2xl bg-[#657B4D]/5 border border-[#657B4D]/10"
                  whileHover={{ backgroundColor: "rgba(101, 123, 77, 0.08)" }}
                >
                  <span className="block font-display text-xs text-brand-gold tracking-widest uppercase mb-3">Why it matters</span>
                  <p className="font-body text-[#1A0F0F]/80 text-sm leading-relaxed">
                    {type.benefit}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypesOfNumerology;
