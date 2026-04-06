import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


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

      // Continuous rotation for hero image
      gsap.to('.hero-rotate-img', {
        rotation: 360,
        duration: 40,
        repeat: -1,
        ease: 'none'
      });
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
      id="hero"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#FDF7E7] z-10 pt-16 pb-20 lg:pt-24 lg:pb-32"
    >
      {/* Background Section (Minimal) */}
      <div ref={bgImageRef} className="absolute inset-0 w-full h-full opacity-60">
        <img
          src="/images/homepage/hero new background 1.png"
          alt="Numerology background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center pr-6">
        {/* Left Content (65%) */}
        <div 
          ref={contentRef}
          className="w-full lg:w-[65%] flex flex-col justify-center text-center lg:text-left pt-6 lg:pt-4"
        >
          <div className="max-w-3xl mx-auto lg:mx-0 mt-4 lg:mt-6">
            {/* Headline */}
            <h1
              ref={headlineRef}
              className="font-display text-[#1A0F0F] leading-[1.1] mb-6"
              style={{
                fontSize: 'clamp(38px, 6.1vw, 74px)',
                letterSpacing: '0.01em',
              }}
            >
              Unlock the <span className="text-brand-green">Hidden Science of Numbers</span> With Numeral Doctrrine
            </h1>

            {/* Subheadline */}
            <p
              ref={subheadlineRef}
              className="font-body text-black leading-[1.4] mb-5 max-w-xl mx-auto lg:mx-0"
              style={{ fontSize: 'clamp(16px, 1.4vw, 20px)' }}
            >
              Transform your life, career, and business using scientifically interpreted 
              numerology insights backed by ancient wisdom.
            </p>

            {/* Trust Section Wrapper */}
            <div 
              ref={trustRef}
              className="relative flex items-center mb-5 max-w-xl mx-auto lg:mx-0 ml-10 lg:ml-12"
            >
              {/* Badge Image PUSHED outside the rectangular div */}
              <div className="absolute -left-10 lg:-left-12 w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center z-20 drop-shadow-xl">
                <img 
                  src="/images/homepage/trust-badge.png" 
                  alt="Trust Badge" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* The Rectangular Div (Glass Morphism) containing the content */}
              <div className="flex-1 p-5 pl-12 lg:pl-16 rounded-2xl glass-morphism border border-white/20">
                <p className="font-body text-xs lg:text-[13px] text-[#1A0F0F]/90 leading-relaxed text-left">
                  <strong className="text-[#1A0F0F] font-semibold">Numeral Doctrrine Private Limited</strong> is a 
                  registered entity under the MCA, Government of India—guaranteeing 
                  transparency and professional global standards.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12 lg:mb-0">
              <button
                ref={ctaRef}
                onClick={() => scrollToSection('contact')}
                className="btn-fill-brand px-10 py-5 text-[15px] uppercase min-w-[300px]"
              >
                Book Your Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Right Image (35%) */}
        <div className="w-full lg:w-[35%] relative flex items-center justify-center px-0">
          <div className="relative w-[85%] lg:w-full h-full lg:h-[95%]">
            {/* Rotating Hero Image */}
            <div className="hero-rotate-img w-full h-full flex items-center justify-center">
              <img 
                src="/images/homepage/hero image.png" 
                alt="Numerical Doctrine Hero" 
                className="w-full h-full object-contain img-cinematic transition-transform duration-700"
              />
            </div>
            
            {/* Static Attention-Grabbing Fact Card Removed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
