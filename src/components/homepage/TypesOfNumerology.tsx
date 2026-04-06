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
      image: '/images/homepage/chaldean-numerology.png',
      description: 'One of the oldest and most accurate systems. It is based on sound vibrations rather than alphabetical order.',
      benefit: 'Highly effective for name correction, business success, and predictive accuracy.',
    },
    {
      number: '02',
      title: 'Pythagorean Numerology',
      image: '/images/homepage/pythagorean-numerology.png',
      description: 'A widely used modern system that assigns numbers from 1 to 9 to alphabets.',
      benefit: 'Reveals personality traits, life purpose, strengths and weaknesses.',
    },
    {
      number: '03',
      title: 'Kabbalah Numerology',
      image: '/images/homepage/kabbalah-numerology.png',
      description: 'A spiritual system focusing on inner consciousness and soul energy.',
      benefit: 'Best for self-discovery, spiritual growth, understanding deeper life patterns.',
    },
    {
      number: '04',
      title: 'Applied Business Numerology',
      image: '/images/homepage/business-numerology.png',
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
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
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
      className="relative py-20 overflow-hidden bg-white z-20"
    >
      <div className="relative z-10 px-6 lg:px-12 max-w-[1440px] mx-auto">
        {/* Split Header Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-16 mb-16 lg:mb-20">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className="font-display text-brand-gold text-xs lg:text-sm tracking-widest-2xl uppercase mb-3 block">
              Systems We Use
            </span>
            <h2
              className="font-display text-[#1A0F0F] leading-tight"
              style={{
                fontSize: 'clamp(28px, 4vw, 48px)',
                letterSpacing: '0.04em',
              }}
            >
              Types of <span className="text-brand-green">Numerology</span>
            </h2>
          </div>
          
          <div className="w-full lg:w-1/2">
            <p className="font-body text-[#1A0F0F]/70 text-lg leading-relaxed text-center lg:text-left lg:max-w-xl">
              We employ multiple ancient and modern numerology systems to provide comprehensive insights tailored to your unique vibration.
            </p>
          </div>
        </div>

        {/* Premium Editorial Cards Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-10 lg:gap-14"
        >
          {types.map((type, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Image side - Modern editorial style */}
              <div className="relative w-full lg:w-[45%] aspect-[4/5] rounded-[24px] lg:rounded-[32px] overflow-hidden group shadow-lg">
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
                  className="absolute top-6 left-6 font-display text-4xl lg:text-6xl text-white/90 drop-shadow-md z-20"
                  animate={{ 
                    y: [0, -4, 0],
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
              <div className="w-full lg:w-[55%] pt-2">
                <h3 className="font-display text-2xl lg:text-3xl text-[#1A0F0F] tracking-wide mb-4 capitalize">
                  {type.title}
                </h3>
                
                <p className="font-body text-[#1A0F0F]/60 text-base leading-relaxed mb-6 border-l-2 border-brand-green/30 pl-5">
                  {type.description}
                </p>
                
                <motion.div 
                  className="p-5 lg:p-6 rounded-xl bg-brand-gold/[0.08] border border-brand-gold/15"
                  whileHover={{ backgroundColor: "rgba(200, 172, 89, 0.12)" }}
                >
                   <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span className="font-display text-[10px] text-brand-gold/80 tracking-widest-xl uppercase font-semibold">Why it matters</span>
                  </div>
                  <p className="font-body text-[#1A0F0F]/90 text-sm leading-relaxed font-medium">
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
