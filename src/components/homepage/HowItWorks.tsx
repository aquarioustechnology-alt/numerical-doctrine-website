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
        { opacity: 0, y: 50 },
        { 
          opacity: 1,
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate dotted line
      const dottedLine = lineRef.current?.querySelector('.dotted-line');
      const iconEls = lineRef.current?.querySelectorAll('.line-icon');
      
      if (dottedLine) {
        gsap.fromTo(dottedLine, { scaleX: 0 }, {
          scaleX: 1, duration: 1.5, ease: 'power2.out',
          scrollTrigger: { trigger: lineRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
        });
      }

      if (iconEls) {
        gsap.fromTo(iconEls, { scale: 0, opacity: 0 }, {
          scale: 1, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: lineRef.current, start: 'top 75%', toggleActions: 'play none none reverse' }
        });
      }

      // Animate steps
      const stepElements = stepsRef.current?.querySelectorAll('.step-item');
      if (stepElements) {
        gsap.fromTo(stepElements, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: stepsRef.current, start: 'top 75%', toggleActions: 'play none none reverse' }
        });
      }

      // SYNCED HIGHLIGHT LOOP: Numbers & Icons (FIXED & BOLDER)
      const stepNumbers = stepsRef.current?.querySelectorAll('.step-number');
      const lineIcons = lineRef.current?.querySelectorAll('.line-icon');
      
      if (stepNumbers && stepNumbers.length > 0 && lineIcons && lineIcons.length > 0) {
        const loopTl = gsap.timeline({ repeat: -1 });
        
        stepNumbers.forEach((num, i) => {
          const iconContainer = lineIcons[i];
          
          // Phase 1: Activate highlight
          loopTl.to(num, { 
            color: 'rgba(255,255,255,1)', 
            duration: 0.4, 
            ease: 'power2.out' 
          }, i * 1.8)
          .to(iconContainer, { 
            backgroundColor: '#ffffff',
            color: '#657B4D',
            borderColor: '#ffffff',
            scale: 1.2,
            duration: 0.4, 
            ease: 'power2.out' 
          }, i * 1.8);
          
          // Phase 2: Short Pause of Highlight
          
          // Phase 3: Deactivate highlight
          loopTl.to(num, { 
            color: 'rgba(255,255,255,0.15)', 
            duration: 0.6, 
            ease: 'power2.inOut' 
          }, i * 1.8 + 1.2)
          .to(iconContainer, { 
            backgroundColor: 'transparent',
            color: 'rgba(200, 172, 89, 0.6)',
            borderColor: 'rgba(200, 172, 89, 0.2)',
            scale: 1,
            duration: 0.6, 
            ease: 'power2.inOut' 
          }, i * 1.8 + 1.2);
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
      className="relative bg-[#657B4D] py-[100px] overflow-hidden z-10"
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
          <p className="font-body text-white/70 mx-auto text-[16px] lg:text-[18px]">
            This process ensures that your life is aligned with positive numerical energy.
          </p>
        </div>

        {/* Decorative Dotted Line */}
        <div ref={lineRef} className="relative mb-6 lg:mb-10">
          <div className="dotted-line absolute top-1/2 left-0 w-full border-t border-dashed border-brand-gold/20 origin-left" />
          <div className="relative grid grid-cols-5">
            {['☽', '✦', '☼', '◈', '✧'].map((icon, i) => (
              <div key={i} className="flex justify-center">
                <span className="line-icon w-12 h-12 rounded-full border border-brand-gold/15 flex items-center justify-center text-brand-gold/60 text-xl transition-none">
                  {icon}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="step-item text-center">
              <span className="step-number font-display block mb-4 text-white/10 text-6xl lg:text-8xl leading-none">
                {step.number}
              </span>
              <h3 className="font-display text-white text-[20px] lg:text-[22px] mb-4 tracking-wide font-medium">{step.title}</h3>
              <p className="font-body text-white/60 text-[16px] leading-relaxed mx-auto max-w-[200px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 lg:mt-16 text-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-outline-white px-12 py-5 text-[15px] uppercase tracking-widest font-semibold"
          >
            Book a Consultation with Us
          </button>
        </div>
        {/* Decorative Rotating Numerology Mandala at Bottom Left */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 opacity-25 pointer-events-none z-0">
          <svg
            className="w-full h-full animate-[spin_80s_linear_infinite]"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Sacred Geometry Mandala Base */}
            <circle cx="100" cy="100" r="95" stroke="white" strokeWidth="0.3" strokeDasharray="4 4" opacity="0.3" />
            <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="0.3" opacity="0.4" />
            
            {/* The 4 main directions with numbers */}
            <g opacity="0.8">
              <text x="100" y="25" fill="#C8AC59" fontSize="14" textAnchor="middle" fontWeight="bold">9</text>
              <text x="100" y="185" fill="#C8AC59" fontSize="14" textAnchor="middle" fontWeight="bold">1</text>
              <text x="25" y="105" fill="#C8AC59" fontSize="14" textAnchor="middle" fontWeight="bold">8</text>
              <text x="175" y="105" fill="#C8AC59" fontSize="14" textAnchor="middle" fontWeight="bold">2</text>
            </g>

            {/* Geometric Lines */}
            <path
              d="M100 20C100 20 120 60 180 100C120 140 100 180 100 180C100 180 80 140 20 100C80 60 100 20 100 20Z"
              stroke="white"
              strokeWidth="0.5"
              opacity="0.5"
            />
            
            {/* Central Number Circle */}
            <circle cx="100" cy="100" r="30" stroke="#C8AC59" strokeWidth="0.5" opacity="0.6" />
            <text x="100" y="106" fill="white" fontSize="18" textAnchor="middle" fontWeight="bold" opacity="0.9">5</text>

            {/* Orbiting smaller numbers */}
            <g opacity="0.5">
              <text x="50" y="55" fill="white" fontSize="10" textAnchor="middle">4</text>
              <text x="150" y="55" fill="white" fontSize="10" textAnchor="middle">3</text>
              <text x="50" y="155" fill="white" fontSize="10" textAnchor="middle">7</text>
              <text x="150" y="155" fill="white" fontSize="10" textAnchor="middle">6</text>
            </g>

            <circle cx="100" cy="100" r="10" fill="white" fillOpacity="0.1" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
