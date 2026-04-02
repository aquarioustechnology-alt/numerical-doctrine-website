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
      className="section-pinned bg-espresso z-10"
    >
      {/* Background Image */}
      <div ref={bgImageRef} className="absolute inset-0 w-full h-full">
        <img
          src="/hero_portrait.jpg"
          alt="Spiritual numerology"
          className="w-full h-full object-cover img-cinematic"
        />
        {/* Dark overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(26,15,15,0.85) 0%, rgba(26,15,15,0.6) 50%, rgba(26,15,15,0.75) 100%)',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-gold/10 rounded-full animate-pulse opacity-30" />
      <div className="absolute bottom-40 left-10 w-32 h-32 border border-gold/10 rounded-full opacity-20" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-20"
      >
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="font-display text-xs tracking-widest-xl text-gold uppercase">
              Discover Your True Path
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-display text-ivory uppercase leading-tight mb-6"
            style={{
              fontSize: 'clamp(32px, 6vw, 72px)',
              letterSpacing: '0.04em',
            }}
          >
            Unlock the Hidden<br />
            <span className="text-gold">Science of Numbers</span><br />
            with Numeral Doctrrine
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadlineRef}
            className="font-body text-taupe leading-relaxed mb-8 max-w-2xl"
            style={{ fontSize: 'clamp(16px, 1.5vw, 20px)' }}
          >
            Transform your life, career, and business using scientifically interpreted 
            numerology insights backed by ancient wisdom.
          </p>

          {/* Trust Statement */}
          <div
            ref={trustRef}
            className="flex items-start gap-3 mb-10 p-4 rounded-lg bg-espresso/60 border border-gold/20 max-w-xl"
          >
            <Shield className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <p className="font-body text-sm text-taupe/90 leading-relaxed">
              <strong className="text-ivory">Numeral Doctrrine Private Limited</strong> is a legally 
              registered entity under the Ministry of Corporate Affairs (MCA), Government of India—ensuring 
              trust, transparency, and professional service standards.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              ref={ctaRef}
              onClick={() => scrollToSection('contact')}
              className="btn-gold"
            >
              Book Your Consultation
            </button>
            <button
              onClick={() => scrollToSection('what-is-numerology')}
              className="px-8 py-3 border border-gold/40 text-gold font-display text-sm tracking-widest-xl uppercase hover:bg-gold/10 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Logo (visible only on hero) */}
      <div className="absolute top-6 left-6 lg:left-12 z-20">
        <span className="font-display text-xs lg:text-sm tracking-widest-xl text-ivory">
          NUMERAL DOCTRRINE
        </span>
      </div>

      {/* Tagline */}
      <div className="absolute bottom-8 right-6 lg:right-12 z-20">
        <span className="font-display text-xs tracking-widest-xl text-gold/60 uppercase">
          Numbers Are Not Random. They Are Direction.
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
