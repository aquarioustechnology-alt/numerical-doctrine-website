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
      // Entire section reveal
      gsap.fromTo(sectionRef.current,
        { y: 100 },
        { 
          y: 0, 
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top 20%",
            scrub: 0.5,
          }
        }
      );

      // Animate dotted line
      const dottedLine = lineRef.current?.querySelector('.dotted-line');
      const iconEls = lineRef.current?.querySelectorAll('.line-icon');
      
      if (dottedLine) {
        gsap.fromTo(dottedLine, { scaleX: 0 }, {
          scaleX: 1, duration: 1.2, ease: 'power2.out',
          scrollTrigger: { trigger: lineRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
        });
      }

      if (iconEls) {
        gsap.fromTo(iconEls, { scale: 0, opacity: 0 }, {
          scale: 1, opacity: 1, duration: 0.4, stagger: 0.12, ease: 'back.out(2)',
          scrollTrigger: { trigger: lineRef.current, start: 'top 75%', toggleActions: 'play none none reverse' }
        });
      }

      // Animate steps
      const stepElements = stepsRef.current?.querySelectorAll('.step-item');
      if (stepElements) {
        gsap.fromTo(stepElements, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: stepsRef.current, start: 'top 75%', toggleActions: 'play none none reverse' }
        });
      }

      // SYNCED HIGHLIGHT LOOP: Numbers & Icons
      const stepNumbers = stepsRef.current?.querySelectorAll('.step-number');
      const lineIcons = lineRef.current?.querySelectorAll('.line-icon');
      
      if (stepNumbers && stepNumbers.length > 0 && lineIcons && lineIcons.length > 0) {
        const loopTl = gsap.timeline({ repeat: -1, delay: 1 });
        
        stepNumbers.forEach((num, i) => {
          const icon = lineIcons[i];
          
          loopTl.to([num, icon], { 
            color: (_: any, target: any) => target.classList.contains('line-icon') ? '#657B4D' : 'rgba(255,255,255,1)',
            backgroundColor: (_: any, target: any) => target.classList.contains('line-icon') ? '#ffffff' : 'transparent',
            borderColor: (_: any, target: any) => target.classList.contains('line-icon') ? '#ffffff' : 'transparent',
            scale: (_: any, target: any) => target.classList.contains('line-icon') ? 1.15 : 1.1,
            duration: 0.6, 
            ease: 'power2.out' 
          }, i * 1.5)
          .to([num, icon], { 
            color: (_: any, target: any) => target.classList.contains('line-icon') ? 'rgba(200, 172, 89, 0.6)' : 'rgba(255,255,255,0.15)',
            backgroundColor: 'transparent',
            borderColor: (_: any, target: any) => target.classList.contains('line-icon') ? 'rgba(200, 172, 89, 0.2)' : 'transparent',
            scale: 1,
            duration: 0.8, 
            ease: 'power2.inOut' 
          }, i * 1.5 + 0.8);
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
      className="relative bg-[#657B4D] py-20 overflow-hidden z-10"
      style={{ borderRadius: '50% 50% 0 0 / 80px 80px 0 0' }}
    >
      <div className="relative z-10 px-6 lg:px-12 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="font-display text-brand-gold text-xs tracking-widest-2xl uppercase mb-3 block">
            Our Process
          </span>
          <h2 className="font-display text-white text-3xl lg:text-5xl leading-tight mb-4 tracking-wide">
            How Numerology <span className="text-brand-gold font-normal">Works</span>
          </h2>
          <p className="font-body text-white/70 max-w-xl mx-auto text-base lg:text-lg">
            This process ensures that your life is aligned with positive numerical energy.
          </p>
        </div>

        {/* Decorative Dotted Line */}
        <div ref={lineRef} className="relative mb-12 lg:mb-16">
          <div className="dotted-line absolute top-1/2 left-0 w-full border-t border-dashed border-brand-gold/20 origin-left" />
          <div className="relative grid grid-cols-5">
            {['☽', '✦', '☼', '◈', '✧'].map((icon, i) => (
              <div key={i} className="flex justify-center">
                <span className="line-icon w-11 h-11 rounded-full bg-transparent border border-brand-gold/15 flex items-center justify-center text-brand-gold/60 text-xl">
                  {icon}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div ref={stepsRef} className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="step-item text-center">
              <span className="step-number font-display block mb-4 text-white/10 text-6xl lg:text-8xl leading-none">
                {step.number}
              </span>
              <h3 className="font-display text-white text-lg lg:text-xl mb-3 tracking-wide">{step.title}</h3>
              <p className="font-body text-white/50 text-[16px] leading-relaxed mx-auto max-w-[180px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 lg:mt-20 text-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-outline-white px-12 py-5 text-[14px] uppercase tracking-widest font-semibold"
          >
            Book a Consultation with Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
