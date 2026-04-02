import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, FileText, Settings, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Shield,
      title: 'Registered under MCA',
      description: 'Legal & Trusted entity under the Ministry of Corporate Affairs, Government of India.',
    },
    {
      icon: Settings,
      title: 'Professional Consultation',
      description: 'Structured consultation process with experienced numerology experts.',
    },
    {
      icon: FileText,
      title: 'Detailed Reports',
      description: 'Comprehensive documentation with structured reports for every consultation.',
    },
    {
      icon: Award,
      title: 'Customized Solutions',
      description: 'Not generic advice—every solution is tailored to your unique numbers.',
    },
  ];

  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '9', label: 'Core Numbers' },
    { value: '4', label: 'Numerology Systems' },
    { value: '100%', label: 'Satisfaction' },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const featureItems = contentRef.current?.querySelectorAll('.feature-item');
      if (featureItems && featureItems.length > 0) {
        gsap.fromTo(
          featureItems,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      const statItems = statsRef.current?.querySelectorAll('.stat-item');
      if (statItems && statItems.length > 0) {
        gsap.fromTo(
          statItems,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
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
      id="why-us"
      className="relative bg-espresso py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-widest-xl text-gold uppercase mb-4 block">
            Why Trust Us
          </span>
          <h2
            className="font-display text-ivory uppercase leading-tight mb-4"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              letterSpacing: '0.04em',
            }}
          >
            Why <span className="text-gold">Numeral Doctrrine</span>?
          </h2>
          <p className="font-body text-taupe max-w-2xl mx-auto">
            Unlike unstructured or freelance numerology services, we offer a corporate, 
            research-driven approach.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={contentRef} className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-item p-6 lg:p-8 rounded-lg border border-gold/20 bg-maroon/30 hover:border-gold/40 hover:bg-maroon/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-ivory uppercase tracking-wider mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-taupe text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item text-center p-6 rounded-lg border border-gold/20 bg-espresso/50"
            >
              <span className="font-display text-4xl lg:text-5xl text-gold block mb-2">
                {stat.value}
              </span>
              <span className="font-body text-taupe text-sm uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
