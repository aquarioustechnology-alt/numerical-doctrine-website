import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClipboardList, Calculator, Activity, Search, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: '01',
      icon: ClipboardList,
      title: 'Data Collection',
      description: 'We collect your basic details such as your full name and date of birth.',
    },
    {
      number: '02',
      icon: Calculator,
      title: 'Number Extraction',
      description: 'Key numbers like Life Path Number, Destiny Number, and Name Number are calculated.',
    },
    {
      number: '03',
      icon: Activity,
      title: 'Vibration Analysis',
      description: 'Each number is analyzed based on its frequency, strengths, and limitations.',
    },
    {
      number: '04',
      icon: Search,
      title: 'Problem Identification',
      description: 'We identify mismatches or negative vibrations affecting your life.',
    },
    {
      number: '05',
      icon: CheckCircle,
      title: 'Solution & Alignment',
      description: 'We provide remedies like name correction, number alignment, or strategic changes.',
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate steps
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative bg-[#657B4D] py-24 lg:pb-32 lg:pt-36 overflow-hidden"
    >
      {/* Oval Shaped Top Transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg" 
          className="relative block h-16 w-full lg:h-32 fill-white"
        >
          <path d="M0 0C300 120 1140 120 1440 0V0H0V0Z" />
        </svg>
      </div>

      <div className="relative z-10 px-6 lg:px-12 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="font-display text-xs tracking-widest-xl text-brand-gold uppercase mb-4 block">
            Our Process
          </span>
          <h2
            className="font-display text-white leading-tight mb-6"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              letterSpacing: '0.04em',
            }}
          >
            How Numerology <span className="text-brand-gold">Works</span>
          </h2>
          <p className="font-body text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Our structured 5-step process ensures that your life is aligned with positive numerical energy.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="step-item relative text-center lg:text-left group"
              >
                {/* Step Number & Icon */}
                <div className="relative inline-flex flex-col items-center lg:items-start mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 relative z-10 transition-all duration-500 group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 group-hover:scale-105">
                    <step.icon className="w-8 h-8 text-brand-gold" />
                  </div>
                  <span className="font-display text-5xl text-white/5 absolute -top-4 -right-12 select-none group-hover:text-white/10 transition-colors duration-500">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-base text-white uppercase tracking-wider mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-20 text-center">
          <p className="font-body text-white/50 italic inline-flex items-center gap-4 text-sm tracking-wide">
            <span className="w-12 h-px bg-brand-gold/20" />
            This process ensures that your life is aligned with positive numerical energy
            <span className="w-12 h-px bg-brand-gold/20" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
