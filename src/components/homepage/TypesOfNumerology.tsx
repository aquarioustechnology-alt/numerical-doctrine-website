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
      image: '/images/homepage/Chaldean Numerology.png',
      description: 'One of the oldest and most accurate systems. It is based on sound vibrations rather than alphabetical order.',
      benefit: 'Highly effective for name correction, business success, and predictive accuracy.',
    },
    {
      number: '02',
      title: 'Pythagorean Numerology',
      image: '/images/homepage/Pythagorean Numerology.png',
      description: 'A widely used modern system that assigns numbers from 1 to 9 to alphabets.',
      benefit: 'Reveals personality traits, life purpose, strengths and weaknesses.',
    },
    {
      number: '03',
      title: 'Kabbalah Numerology',
      image: '/images/homepage/Kabbalah Numerology.png',
      description: 'A spiritual system focusing on inner consciousness and soul energy.',
      benefit: 'Best for self-discovery, spiritual growth, understanding deeper life patterns.',
    },
    {
      number: '04',
      title: 'Applied Business Numerology',
      image: '/images/homepage/Applied Business Numerology.png',
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
      <div className="relative z-10 px-6 max-w-[1440px] mx-auto">
        {/* Split Header Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-16 mb-12 lg:mb-16">
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
              className="flex flex-col xl:flex-row items-center lg:items-start gap-6 lg:gap-10"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Image side - Modern editorial style */}
              <div className="relative w-full xl:w-[45%] aspect-[4/5] rounded-[24px] lg:rounded-[32px] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                <motion.img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                />
                {/* Specific Top-Left Gradient for Number Visibility */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-transparent z-10" />
                
                {/* Fixed Number - Clear and Stable */}
                <span 
                  className="absolute top-6 left-6 font-display text-5xl lg:text-6xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] z-20"
                >
                  {type.number}
                </span>
                
                {/* Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-15" />
              </div>

              {/* Content side */}
              <div className="w-full xl:w-[55%] pt-2 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="font-display text-2xl lg:text-3xl text-[#1A0F0F] tracking-wide mb-4 capitalize">
                    {type.title}
                  </h3>
                  
                  <p className="font-body text-[#1A0F0F]/60 text-base lg:text-lg leading-relaxed mb-8 border-l-2 border-brand-green/20 pl-5">
                    {type.description}
                  </p>
                </div>
                
                {/* HIGH VISIBILITY "Why it matters" BOX - MATCHING SCREENSHOT */}
                <div className="mt-auto relative bg-[#FFFFFF] rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden">
                  {/* Thick Gold Vertical Bar */}
                  <div className="absolute top-0 left-0 w-[5px] h-full bg-brand-gold" />
                  
                  <div className="p-6 pl-8">
                    <span className="block font-display text-[11px] text-brand-gold tracking-[0.25em] uppercase font-bold mb-3">
                      Why it matters
                    </span>
                    <p className="font-body text-[#1A0F0F] text-[16px] lg:text-[17px] leading-relaxed font-bold tracking-tight">
                      {type.benefit}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypesOfNumerology;
