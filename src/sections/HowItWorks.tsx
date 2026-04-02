import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClipboardList, Calculator, Activity, Search, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

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
      // Animate the connecting line
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

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
      className="relative bg-maroon py-24 lg:py-32 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-gold rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-gold rounded-full" />
      </div>

      <div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="font-display text-xs tracking-widest-xl text-gold uppercase mb-4 block">
            Our Process
          </span>
          <h2
            className="font-display text-ivory uppercase leading-tight mb-4"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              letterSpacing: '0.04em',
            }}
          >
            How Numerology <span className="text-gold">Works</span>
          </h2>
          <p className="font-body text-taupe max-w-2xl mx-auto">
            Our structured 5-step process ensures that your life is aligned with positive numerical energy.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="relative">
          {/* Connecting line (desktop only) */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent origin-left"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="step-item relative text-center lg:text-left"
              >
                {/* Step Number & Icon */}
                <div className="relative inline-flex flex-col items-center lg:items-start mb-4">
                  <div className="w-16 h-16 rounded-full bg-espresso border-2 border-gold/40 flex items-center justify-center mb-3 relative z-10">
                    <step.icon className="w-6 h-6 text-gold" />
                  </div>
                  <span className="font-display text-4xl text-gold/20 absolute -top-2 -right-8">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-lg text-ivory uppercase tracking-wider mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-taupe text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <p className="font-body text-ivory/80 italic inline-flex items-center gap-2">
            <span className="w-8 h-px bg-gold/40" />
            This process ensures that your life is aligned with positive numerical energy
            <span className="w-8 h-px bg-gold/40" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
