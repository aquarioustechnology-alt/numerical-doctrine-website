import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);

  // Auto-play entrance animation on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Initial states
      gsap.set(headlineRef.current, { opacity: 0, y: 30 });
      gsap.set(subheadlineRef.current, { opacity: 0, y: 20 });
      gsap.set(trustRef.current, { opacity: 0, y: 15 });
      gsap.set(ctaRef.current, { opacity: 0, y: 15 });
      gsap.set(bgImageRef.current, { scale: 1.1, opacity: 0 });

      // Entrance animation sequence
      tl.to(bgImageRef.current, { scale: 1, opacity: 1, duration: 1.2 }, 0)
        .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.9 }, 0.3)
        .to(subheadlineRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.5)
        .to(trustRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.7)
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.8);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven exit animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            gsap.to(headlineRef.current, { opacity: 1, y: 0, duration: 0.3 });
            gsap.to(subheadlineRef.current, { opacity: 1, y: 0, duration: 0.3 });
            gsap.to(trustRef.current, { opacity: 1, y: 0, duration: 0.3 });
            gsap.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.3 });
            gsap.to(bgImageRef.current, { scale: 1, opacity: 1, duration: 0.3 });
          },
        },
      });

      // EXIT phase (70% - 100%)
      scrollTl.fromTo(
        contentRef.current,
        { opacity: 1, y: 0 },
        { opacity: 0, y: '-10vh', ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bgImageRef.current,
        { scale: 1, opacity: 1 },
        { scale: 1.08, opacity: 0.6, ease: 'none' },
        0.7
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-[70vh] overflow-hidden bg-[#FDF7E7] z-10"
    >
      {/* Background Section (Minimal) */}
      <div ref={bgImageRef} className="absolute inset-0 w-full h-full opacity-60">
        <img
          src="/images/homepage/hero-background.jpg"
          alt="Numerology background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center px-0">
        {/* Left Content (60%) */}
        <div 
          ref={contentRef}
          className="w-full lg:w-[60%] h-full flex flex-col justify-center px-0 pt-20 lg:pt-0"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="font-display text-xs lg:text-sm tracking-widest-xl text-gold uppercase">
              Discover Your True Path
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-display text-[#1A0F0F] uppercase leading-[1.1] mb-5"
            style={{
              fontSize: 'clamp(30px, 4.5vw, 64px)',
              letterSpacing: '0.01em',
            }}
          >
            Unlock the Hidden Science of Numbers With Numeral Doctrrine
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadlineRef}
            className="font-body text-black leading-relaxed mb-6 max-w-2xl"
            style={{ fontSize: 'clamp(16px, 1.4vw, 20px)' }}
          >
            Transform your life, career, and business using scientifically interpreted 
            numerology insights backed by ancient wisdom.
          </p>

          {/* Trust Statement */}
          <div
            ref={trustRef}
            className="flex items-start gap-4 mb-8 p-4 rounded-xl bg-white/40 border border-gold/20 max-w-xl"
          >
            <Shield className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <p className="font-body text-xs lg:text-sm text-[#1A0F0F]/90 leading-relaxed">
              <strong className="text-[#1A0F0F] font-semibold">Numeral Doctrrine Private Limited</strong> is a 
              registered entity under the MCA, Government of India—guaranteeing 
              transparency and professional global standards.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-wrap gap-4">
            <button
              ref={ctaRef}
              onClick={() => scrollToSection('contact')}
              className="px-12 py-5 bg-[#1A0F0F] text-white font-display text-xs lg:text-sm tracking-widest-xl uppercase hover:bg-gold hover:text-[#1A0F0F] shadow-xl rounded-full transition-all duration-300"
            >
              Book Your Consultation
            </button>
          </div>
        </div>

        {/* Right Image (40%) */}
        <div className="w-full lg:w-[40%] h-full relative overflow-hidden flex items-center justify-center px-0">
          <div className="relative w-full h-[70%] lg:h-[85%] group">
            <img 
              src="/images/homepage/hero image.png" 
              alt="Numerical Doctrine Hero" 
              className="w-full h-full object-contain img-cinematic transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
