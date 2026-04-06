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
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
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
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* Full Strength Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: "url('/images/homepage/types%20of%20numerlogy%20BG.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10 px-6 lg:px-12 max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="font-display text-brand-gold text-xs lg:text-sm tracking-widest-2xl uppercase mb-3 block">
            Systems We Use
          </span>
          <h2
            className="font-display text-[#1A0F0F] leading-tight mb-4"
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              letterSpacing: '0.02em',
            }}
          >
            Types of <span className="text-brand-green">Numerology</span>
          </h2>
          <div className="w-24 h-1 bg-brand-gold/30 mx-auto mb-6 rounded-full" />
          <p className="font-body text-[#1A0F0F]/70 max-w-2xl mx-auto text-lg leading-relaxed">
            We employ multiple ancient and modern numerology systems to provide comprehensive insights tailored to your unique vibration.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
        >
          {types.map((type, index) => (
            <div
              key={index}
              className="group relative bg-white border border-[#657B4D]/10 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(101,123,77,0.1)] transition-all duration-500 flex flex-col"
            >
              {/* Image with subtle zoom on hover */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Modern light gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                
                {/* Minimalist Number badge */}
                <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-[#657B4D]/20 shadow-lg flex items-center justify-center z-20">
                  <span className="font-display text-base text-[#657B4D] font-semibold">{type.number}</span>
                </div>
              </div>

              {/* Content area */}
              <div className="p-8 lg:p-10 flex flex-col flex-grow">
                <h3 className="font-display text-2xl text-[#1A0F0F] uppercase tracking-wide mb-4 transition-colors duration-300 group-hover:text-brand-green">
                  {type.title}
                </h3>
                <p className="font-body text-[#1A0F0F]/60 text-[16px] leading-relaxed mb-6">
                  {type.description}
                </p>
                
                {/* Premium Benefit box */}
                <div className="p-4 lg:p-5 rounded-xl bg-brand-gold/5 border-l-4 border-brand-gold mb-6 italic">
                  <p className="font-body text-sm text-[#1A0F0F]/80">
                    <strong className="text-brand-gold not-italic uppercase tracking-wider text-xs mr-2">Why it matters:</strong> 
                    {type.benefit}
                  </p>
                </div>

                {/* Tags Section */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {type.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="px-4 py-1.5 rounded-full bg-[#657B4D]/5 border border-[#657B4D]/10 text-[#657B4D] text-[13px] font-body font-medium tracking-wide uppercase transition-all duration-300 group-hover:bg-[#657B4D] group-hover:text-white"
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
