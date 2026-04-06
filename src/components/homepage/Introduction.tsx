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
  const text3Ref = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slow rotation for the wheel
      gsap.to(wheelRef.current, {
        rotation: 360,
        duration: 80,
        repeat: -1,
        ease: 'none'
      });

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
        .fromTo(text2Ref.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .fromTo(text3Ref.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.5');

      gsap.fromTo(cardsRef.current?.children ?? [],
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
          }
        }
      );
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
          className="font-display text-brand-gold text-xs lg:text-sm tracking-widest-2xl uppercase mb-3 block"
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
        <div className="w-full space-y-4 mb-10 lg:mb-12">
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

          <p 
            ref={text3Ref}
            className="font-body text-[#1A0F0F]/90 text-[20px] italic font-semibold leading-[1.6] pt-4"
          >
            At <span className="text-brand-green italic font-semibold">Numeral Doctrrine Private Limited</span>, we analyze these numerical patterns in a structured and scientific manner to help you:
          </p>
        </div>

        {/* Feature Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full"
        >
          {[
            {
              img: "/images/homepage/illustration 1.jpg",
              text: "Understand your life path and purpose"
            },
            {
              img: "/images/homepage/illustration 2.jpg",
              text: "Identify hidden strengths and weaknesses"
            },
            {
              img: "/images/homepage/illustration 3.jpg",
              text: "Predict favorable and challenging periods"
            },
            {
              img: "/images/homepage/illustration 4.jpg",
              text: "Align your actions with success-oriented numbers"
            }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-28 h-28 lg:w-36 lg:h-36 mb-6 transition-all duration-500">
                <img 
                  src={item.img} 
                  alt={item.text}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <p className="font-display text-[#657B4D] text-[19px] lg:text-[21px] font-medium leading-tight px-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Mystical Numerology Wheel at Bottom Right */}
      <div 
        ref={wheelRef}
        className="absolute bottom-0 right-0 w-[450px] h-[450px] opacity-[0.2] pointer-events-none translate-x-1/4 translate-y-1/4"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Concentric Circles */}
          <circle cx="100" cy="100" r="98" stroke="#C8AC59" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="92" stroke="#C8AC59" strokeWidth="0.2" strokeDasharray="1 2" />
          <circle cx="100" cy="100" r="85" stroke="#657B4D" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" stroke="#C8AC59" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="40" stroke="#657B4D" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="20" stroke="#C8AC59" strokeWidth="0.2" />

          {/* Triangles and Hexagrams */}
          <path d="M100 15 L182.27 157.5 L17.73 157.5 Z" stroke="#C8AC59" strokeWidth="0.4" />
          <path d="M100 185 L17.73 42.5 L182.27 42.5 Z" stroke="#657B4D" strokeWidth="0.4" />
          
          <path d="M100 40 L160 140 L40 140 Z" stroke="#C8AC59" strokeWidth="0.3" opacity="0.6" />
          <path d="M100 160 L40 60 L160 60 Z" stroke="#657B4D" strokeWidth="0.3" opacity="0.6" />

          {/* Cross lines */}
          <line x1="100" y1="0" x2="100" y2="200" stroke="#C8AC59" strokeWidth="0.1" opacity="0.4" />
          <line x1="0" y1="100" x2="200" y2="100" stroke="#C8AC59" strokeWidth="0.1" opacity="0.4" />

          {/* Numbers based on image */}
          <g className="font-display font-medium" fill="#C8AC59" style={{ fontSize: '12px' }}>
            <text x="50" y="35" textAnchor="middle">9</text>
            <text x="145" y="35" textAnchor="middle">1</text>
            <text x="165" y="105" textAnchor="middle">7</text>
            <text x="145" y="175" textAnchor="middle">7</text>
            <text x="115" y="195" textAnchor="middle">5</text>
            <text x="60" y="175" textAnchor="middle">4</text>
            <text x="35" y="105" textAnchor="middle">4</text>
            <text x="35" y="70" textAnchor="middle">8</text>
          </g>

          <g className="font-display font-medium" fill="#657B4D" style={{ fontSize: '8px' }}>
            <text x="100" y="104" textAnchor="middle">0</text>
            <text x="100" y="135" textAnchor="middle">6</text>
            <text x="135" y="115" textAnchor="middle">5</text>
            <text x="125" y="145" textAnchor="middle">5</text>
            <text x="65" y="115" textAnchor="middle">5</text>
            <text x="80" y="115" textAnchor="middle">8</text>
            <text x="100" y="65" textAnchor="middle">9</text>
            <text x="135" y="60" textAnchor="middle">1</text>
          </g>
        </svg>
      </div>
      
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -ml-48 -mb-48" />
    </section>
  );
};

export default Introduction;
