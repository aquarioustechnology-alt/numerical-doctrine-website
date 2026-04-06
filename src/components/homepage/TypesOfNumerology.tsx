import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
      features: ['Sound Vibration Based', 'Name Correction', 'Business Success'],
    },
    {
      number: '02',
      title: 'Pythagorean Numerology',
      image: '/pythagorean.jpg',
      description: 'A widely used modern system that assigns numbers from 1 to 9 to alphabets.',
      benefit: 'Reveals personality traits, life purpose, strengths and weaknesses.',
      features: ['Personality Traits', 'Life Purpose', 'Strengths & Weaknesses'],
    },
    {
      number: '03',
      title: 'Kabbalah Numerology',
      image: '/kabbalah.jpg',
      description: 'A spiritual system focusing on inner consciousness and soul energy.',
      benefit: 'Best for self-discovery, spiritual growth, understanding deeper life patterns.',
      features: ['Self-Discovery', 'Spiritual Growth', 'Deeper Patterns'],
    },
    {
      number: '04',
      title: 'Applied Business Numerology',
      image: '/business_numerology.jpg',
      description: 'A specialized system used for entrepreneurs and companies.',
      benefit: 'Focus on business name success, brand positioning, financial growth alignment.',
      features: ['Business Name Success', 'Brand Positioning', 'Financial Growth'],
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
      className="relative py-28 lg:py-40 overflow-hidden -mt-36 z-20"
    >
      {/* Background Image - Full Strength / Not stretched */}
      <div 
        className="absolute inset-0 z-0 bg-white"
        style={{ 
          backgroundImage: "url('/images/homepage/types%20of%20numerlogy%20BG.png')",
          backgroundSize: '100% auto',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10 px-6 lg:px-12 max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-24 lg:mb-32">
          <span className="font-display text-brand-gold text-xs lg:text-sm tracking-widest-2xl uppercase mb-4 block">
            Systems We Use
          </span>
          <h2
            className="font-display text-[#1A0F0F] leading-tight mb-6"
            style={{
              fontSize: 'clamp(32px, 6vw, 64px)',
              letterSpacing: '0.02em',
            }}
          >
            Types of <span className="text-brand-green">Numerology</span>
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold/40 mx-auto mb-8" />
          <p className="font-body text-[#1A0F0F]/70 max-w-2xl mx-auto text-xl leading-relaxed">
            We employ multiple ancient and modern numerology systems to provide comprehensive insights tailored to your unique vibration.
          </p>
        </div>

        {/* Premium Redesigned Cards Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-12 lg:gap-16"
        >
          {types.map((type, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12"
            >
              {/* Image side - Modern editorial style */}
              <div className="relative w-full lg:w-1/2 aspect-[4/5] rounded-[32px] overflow-hidden group">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Minimalist Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Float Number */}
                <span className="absolute top-8 left-8 font-display text-5xl lg:text-7xl text-white/90 drop-shadow-lg z-20">
                  {type.number}
                </span>
              </div>

              {/* Content side */}
              <div className="w-full lg:w-1/2 pt-4">
                <h3 className="font-display text-3xl lg:text-4xl text-[#1A0F0F] uppercase tracking-wide mb-6">
                  {type.title}
                </h3>
                
                <p className="font-body text-[#1A0F0F]/70 text-lg leading-relaxed mb-8 border-l-2 border-brand-green pl-6">
                  {type.description}
                </p>
                
                <div className="mb-8 p-6 rounded-2xl bg-brand-gold/5 border border-brand-gold/10">
                  <span className="block font-display text-xs text-brand-gold tracking-widest uppercase mb-3">Why it matters</span>
                  <p className="font-body text-[#1A0F0F]/80 text-sm leading-relaxed">
                    {type.benefit}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {type.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="px-4 py-2 rounded-full border border-[#657B4D]/20 text-[#657B4D] text-xs font-body font-semibold tracking-wider uppercase bg-white/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypesOfNumerology;
