import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: '01',
      title: 'Data Collection',
      description: 'We collect your basic details such as your full name and date of birth.',
    },
    {
      number: '02',
      title: 'Number Extraction',
      description: 'Key numbers like Life Path Number, Destiny Number, and Name Number are calculated.',
    },
    {
      number: '03',
      title: 'Vibration Analysis',
      description: 'Each number is analyzed based on its frequency, strengths, and limitations.',
    },
    {
      number: '04',
      title: 'Problem Identification',
      description: 'We identify mismatches or negative vibrations affecting your life.',
    },
    {
      number: '05',
      title: 'Solution & Alignment',
      description: 'We provide remedies like name correction, number alignment, or strategic changes.',
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entire section reveal (bottom to top, scrub driven)
      gsap.fromTo(sectionRef.current,
        { y: 150 },
        { 
          y: 0, 
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top 30%",
            scrub: 0.5,
          }
        }
      );

      // Animate dotted line appearing first
      const dottedLine = lineRef.current?.querySelector('.dotted-line');
      const iconEls = lineRef.current?.querySelectorAll('.line-icon');
      
      if (dottedLine) {
        gsap.fromTo(dottedLine,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: lineRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }

      if (iconEls) {
        gsap.fromTo(iconEls,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.12,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: lineRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }

      // Animate steps entrance
      const stepElements = stepsRef.current?.querySelectorAll('.step-item');
      if (stepElements) {
        gsap.fromTo(
          stepElements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Continuous looping highlight animation on step numbers
      const stepNumbers = stepsRef.current?.querySelectorAll('.step-number');
      if (stepNumbers && stepNumbers.length > 0) {
        const loopTl = gsap.timeline({ repeat: -1, delay: 1.5 });
        
        stepNumbers.forEach((num, i) => {
          loopTl
            .to(num, { 
              color: 'rgba(255,255,255,0.85)', 
              scale: 1.05,
              duration: 0.6, 
              ease: 'power2.out' 
            }, i * 1.4)
            .to(num, { 
              color: 'rgba(255,255,255,0.15)', 
              scale: 1,
              duration: 0.8, 
              ease: 'power2.inOut' 
            }, i * 1.4 + 0.8);
        });
      }
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
      id="how-it-works"
      className="relative bg-[#657B4D] py-20 lg:pb-32 lg:pt-36 overflow-hidden z-0"
      style={{ borderRadius: '50% 50% 0 0 / 80px 80px 0 0' }}
    >

      <div className="relative z-10 px-6 lg:px-12 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <span className="font-display text-brand-gold text-xs lg:text-sm tracking-widest-2xl uppercase mb-3 block">
            Our Process
          </span>
          <h2
            className="font-display text-white leading-tight mb-4"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              letterSpacing: '0.04em',
            }}
          >
            How Numerology <span className="text-brand-gold">Works</span>
          </h2>
          <p className="font-body text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            This process ensures that your life is aligned with positive numerical energy.
          </p>
        </div>

        {/* Decorative Dotted Line with Icons */}
        <div ref={lineRef} className="relative mb-8 lg:mb-12">
          {/* Dotted horizontal line */}
          <div 
            className="dotted-line absolute top-1/2 left-0 w-full border-t border-dashed border-brand-gold/30 origin-left" 
            style={{ transform: 'scaleX(0)' }}
          />
          {/* Icons on the line */}
          <div className="relative grid grid-cols-5">
            {['☽', '✦', '☼', '◈', '✧'].map((icon, i) => (
              <div key={i} className="flex justify-center">
                <span className="line-icon w-10 h-10 rounded-full bg-[#657B4D] border border-brand-gold/20 flex items-center justify-center text-brand-gold/70 text-lg">
                  {icon}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="relative">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="step-item text-center group"
              >
                {/* Large Step Number */}
                <span 
                  className="step-number font-display block mb-4 leading-none"
                  style={{ 
                    fontSize: 'clamp(60px, 6vw, 90px)',
                    color: 'rgba(255,255,255,0.15)',
                  }}
                >
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="font-display text-white text-lg lg:text-xl mb-3 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-white/60 text-sm leading-relaxed max-w-[240px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 lg:mt-14 text-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-outline-white px-10 py-5 text-[15px] uppercase min-w-[300px]"
          >
            Book a Consultation with Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
