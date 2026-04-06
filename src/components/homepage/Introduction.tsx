import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Introduction: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const text1Ref = useRef<HTMLParagraphElement>(null);
  const text2Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      });

      tl.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(headingRef.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
        .fromTo(text1Ref.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.5')
        .fromTo(text2Ref.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="bg-white pb-24 lg:pb-32 relative overflow-hidden pt-0"
    >
      <div className="max-w-[1440px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <span 
          ref={badgeRef}
          className="font-display text-brand-gold text-xs lg:text-sm tracking-widest-2xl uppercase mb-6 block"
        >
          The Foundation
        </span>

        {/* Heading */}
        <h2 
          ref={headingRef}
          className="font-display text-[#1A0F0F] leading-tight mb-6 lg:mb-8"
          style={{ 
            fontSize: 'clamp(28px, 4vw, 48px)',
            letterSpacing: '0.01em'
          }}
        >
          What is <span className="text-brand-green">Numerology?</span>
        </h2>

        {/* Content Wrapper */}
        <div className="max-w-4xl space-y-4">
          <p 
            ref={text1Ref}
            className="font-body text-[#1A0F0F]/90 text-[17px] leading-[1.6]"
          >
            Numerology is the study of numbers and their influence on human life. 
            It is based on the principle that every number carries a specific 
            vibration and energy. These vibrations interact with your personal 
            energy and influence your thoughts, decisions, opportunities, and outcomes.
          </p>

          <p 
            ref={text2Ref}
            className="font-body text-[#1A0F0F] text-[17px] leading-[1.6]"
          >
            Your <span className="font-semibold">date of birth, name, mobile number</span>, and even your <span className="font-semibold">business name</span> are 
            not random—they carry frequencies that can either support your growth 
            or create obstacles.
          </p>
        </div>
      </div>
      
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -ml-48 -mb-48" />
    </section>
  );
};

export default Introduction;
