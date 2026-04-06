import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Lightbulb, TrendingUp, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhatIsNumerology: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Content reveal
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image reveal
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards staggered reveal
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
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

  const benefits = [
    {
      icon: Target,
      title: 'Life Path & Purpose',
      description: 'Understand your true calling',
    },
    {
      icon: Lightbulb,
      title: 'Hidden Strengths',
      description: 'Identify your natural talents',
    },
    {
      icon: TrendingUp,
      title: 'Favorable Periods',
      description: 'Predict the best timing',
    },
    {
      icon: Compass,
      title: 'Success Alignment',
      description: 'Align with positive numbers',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="what-is-numerology"
      className="relative bg-espresso py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-maroon/20 to-transparent" />

      <div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div ref={contentRef}>
            <span className="font-display text-xs tracking-widest-xl text-gold uppercase mb-4 block">
              The Foundation
            </span>
            <h2
              className="font-display text-ivory uppercase leading-tight mb-6"
              style={{
                fontSize: 'clamp(28px, 4vw, 48px)',
                letterSpacing: '0.04em',
              }}
            >
              What is <span className="text-gold">Numerology?</span>
            </h2>

            <div className="space-y-4 font-body text-taupe leading-relaxed mb-8">
              <p>
                Numerology is the study of numbers and their influence on human life. 
                It is based on the principle that every number carries a specific 
                vibration and energy.
              </p>
              <p>
                These vibrations interact with your personal energy and influence your 
                thoughts, decisions, opportunities, and outcomes.
              </p>
              <p>
                Your <strong className="text-ivory font-semibold">date of birth</strong>,{' '}
                <strong className="text-ivory font-semibold">name</strong>,{' '}
                <strong className="text-ivory font-semibold">mobile number</strong>, and even your{' '}
                <strong className="text-ivory font-semibold">business name</strong> are not random—they 
                carry frequencies that can either support your growth or create obstacles.
              </p>
            </div>

            <p className="font-body text-ivory/90 italic border-l-2 border-gold pl-4 mb-8">
              In simple words: Numerology helps you make the right decisions at the right time.
            </p>

            <p className="font-body text-[15px] text-taupe/70">
              At <strong className="text-gold">Numeral Doctrrine Private Limited</strong>, we 
              analyze these numerical patterns in a structured and scientific manner.
            </p>
          </div>

          {/* Right Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-card animate-float">
              <img
                src="/numbers_cosmic.jpg"
                alt="Mystical numbers"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-maroon border border-gold/30 p-4 rounded-lg shadow-xl translate-y-2">
              <span className="font-display text-3xl text-gold">9</span>
              <span className="font-body text-xs text-taupe block">Core Numbers</span>
            </div>
          </div>
        </div>

        {/* Benefits Cards */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 lg:mt-24"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gold/20 bg-espresso/50 hover:border-gold/40 hover:bg-espresso/80 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <benefit.icon className="w-5 h-5 text-gold" />
              </div>
              <h4 className="font-display text-sm text-ivory uppercase tracking-wider mb-2">
                {benefit.title}
              </h4>
              <p className="font-body text-taupe text-xs">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsNumerology;
