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
          { opacity: 0, y: 50, rotateX: 15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
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
      id="types"
      className="relative bg-espresso py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/5 rounded-full" />

      <div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="font-display text-xs tracking-widest-xl text-gold uppercase mb-4 block">
            Systems We Use
          </span>
          <h2
            className="font-display text-ivory uppercase leading-tight mb-4"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              letterSpacing: '0.04em',
            }}
          >
            Types of <span className="text-gold">Numerology</span>
          </h2>
          <p className="font-body text-taupe max-w-2xl mx-auto">
            We employ multiple ancient and modern numerology systems to provide comprehensive insights.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {types.map((type, index) => (
            <div
              key={index}
              className="group relative bg-espresso border border-gold/20 rounded-lg overflow-hidden hover:border-gold/40 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/50 to-transparent" />
                
                {/* Number badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                  <span className="font-display text-sm text-gold">{type.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl text-ivory uppercase tracking-wider mb-3">
                  {type.title}
                </h3>
                <p className="font-body text-taupe text-sm leading-relaxed mb-4">
                  {type.description}
                </p>
                
                {/* Benefit highlight */}
                <div className="p-3 rounded bg-gold/10 border-l-2 border-gold mb-4">
                  <p className="font-body text-xs text-gold/90">
                    <strong>Why it matters:</strong> {type.benefit}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {type.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="px-3 py-1 rounded-full bg-maroon/50 text-taupe text-xs font-body"
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
