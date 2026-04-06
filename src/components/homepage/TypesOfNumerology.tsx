import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const TypesOfNumerology: React.FC = () => {
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

  return (
    <section
      id="types-of-numerology"
      className="relative py-20 bg-white overflow-hidden z-20"
    >
      <div className="relative z-10 px-6 lg:px-12 max-w-[1440px] mx-auto">
        {/* Modern Split Header Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-16 mb-12 lg:mb-14">
          <div className="w-full lg:w-[45%]">
            <span className="font-display text-brand-gold text-xs lg:text-sm tracking-widest-2xl uppercase mb-3 block">
              Systems We Use
            </span>
            <h2
              className="font-display text-[#1A0F0F] leading-tight"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 52px)',
                letterSpacing: '0.04em',
              }}
            >
              Types of <span className="text-brand-green">Numerology</span>
            </h2>
          </div>
          
          <div className="w-full lg:w-[55%]">
            <p className="font-body text-[#1A0F0F]/70 text-lg lg:text-xl leading-relaxed lg:max-w-2xl">
              We employ multiple ancient and modern numerology systems to provide comprehensive insights tailored to your unique vibration.
            </p>
          </div>
        </div>

        {/* Improved Premium Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {types.map((type, index) => (
            <motion.div
              key={index}
              className="group bg-[#fcfcfc] rounded-[40px] p-8 lg:p-10 border border-[#657B4D]/5 hover:border-[#657B4D]/20 transition-all duration-500 flex flex-col lg:flex-row gap-8 items-center"
              whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(101, 123, 77, 0.06)' }}
              transition={{ duration: 0.5 }}
            >
              {/* Image side - Large and Professional */}
              <div className="relative w-full lg:w-1/2 aspect-square rounded-[30px] overflow-hidden shadow-sm">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                />
                {/* Floating Number */}
                <div className="absolute top-5 left-5 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center border border-[#657B4D]/10">
                   <span className="font-display text-lg text-brand-green font-bold">{type.number}</span>
                </div>
              </div>

              {/* Content side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-display text-2xl lg:text-3xl text-[#1A0F0F] tracking-wide mb-4 capitalize">
                    {type.title}
                  </h3>
                  <p className="font-body text-[#1A0F0F]/60 text-base leading-relaxed mb-6">
                    {type.description}
                  </p>
                </div>
                
                {/* HIGH VISIBILITY "Why it matters" SECTION */}
                <div className="mt-auto p-6 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold" />
                  <span className="block font-display text-[10px] text-brand-gold font-bold tracking-widest-xl uppercase mb-2">
                    Why it matters
                  </span>
                  <p className="font-body text-[#1A0F0F] text-[15px] leading-relaxed font-semibold">
                    {type.benefit}
                  </p>
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
