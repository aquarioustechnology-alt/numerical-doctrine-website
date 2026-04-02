import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  User, 
  Type, 
  Briefcase, 
  Smartphone, 
  TrendingUp, 
  Heart, 
  Calendar, 
  PenTool, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [expandedService, setExpandedService] = useState<number | null>(0);

  const services = [
    {
      icon: User,
      title: 'Personal Numerology Analysis',
      shortDesc: 'Complete blueprint of your life based on your numbers.',
      fullDesc: 'This is a complete blueprint of your life based on your numbers. You will learn your natural strengths and talents, challenges you may face, best time periods for growth, and lucky and unlucky influences. This helps you take control of your life decisions.',
      benefits: ['Natural strengths & talents', 'Challenge identification', 'Growth timing', 'Lucky influences'],
    },
    {
      icon: Type,
      title: 'Name Correction',
      shortDesc: 'Adjust your name spelling to match favorable numbers.',
      fullDesc: 'Your name is used daily—every time someone calls you, it activates a vibration. If your name number is not aligned, you may face delays, missed opportunities, and lack of recognition. We adjust your name spelling to match favorable numbers. Even a small change can create a big impact.',
      benefits: ['Remove obstacles', 'Attract opportunities', 'Gain recognition', 'Improve vibrations'],
    },
    {
      icon: Briefcase,
      title: 'Business Numerology',
      shortDesc: 'Create a business name that aligns with success.',
      fullDesc: 'A business name is not just branding—it is an energy system. A wrong name can lead to financial instability, poor customer response, and growth issues. We create a name that aligns with success, market acceptance, and financial growth.',
      benefits: ['Financial stability', 'Customer attraction', 'Market acceptance', 'Growth alignment'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Number Numerology',
      shortDesc: 'Enhance connectivity and luck with the right number.',
      fullDesc: 'Your mobile number interacts with you daily. A negative number may result in miscommunication, stress, and missed opportunities. A correct number enhances connectivity, luck, and smooth interactions.',
      benefits: ['Better communication', 'Reduced stress', 'More opportunities', 'Enhanced luck'],
    },
    {
      icon: TrendingUp,
      title: 'Career Guidance',
      shortDesc: 'Identify your natural strengths and choose the right profession.',
      fullDesc: 'Choosing the wrong career path leads to dissatisfaction and struggle. We help you identify your natural strengths, choose the right profession, and decide the right timing for changes.',
      benefits: ['Strength identification', 'Right profession', 'Timing guidance', 'Career clarity'],
    },
    {
      icon: Heart,
      title: 'Relationship Compatibility',
      shortDesc: 'Analyze compatibility and improve harmony.',
      fullDesc: 'Relationships fail when energies clash. We analyze compatibility between partners, emotional and practical alignment, and future stability. We also provide solutions to improve harmony.',
      benefits: ['Compatibility analysis', 'Energy alignment', 'Future stability', 'Harmony solutions'],
    },
    {
      icon: Calendar,
      title: 'Lucky Dates & Timing',
      shortDesc: 'Choose the most favorable dates for important events.',
      fullDesc: 'Timing plays a critical role in success. Even a good decision at the wrong time can fail. We help you choose the most favorable dates for important events.',
      benefits: ['Event timing', 'Success optimization', 'Favorable periods', 'Strategic planning'],
    },
    {
      icon: PenTool,
      title: 'Signature Analysis',
      shortDesc: 'Strengthen your personal energy through signature correction.',
      fullDesc: 'Your signature reflects your subconscious mindset. A weak signature can indicate lack of confidence and financial instability. A corrected signature strengthens your personal energy.',
      benefits: ['Confidence boost', 'Financial stability', 'Energy strengthening', 'Personal power'],
    },
    {
      icon: Sparkles,
      title: 'Remedies & Corrections',
      shortDesc: 'Simple, practical, and effective solutions.',
      fullDesc: 'Our remedies are simple, practical, and effective. They may include name adjustments, number usage changes, and habit alignment. No complicated rituals—only logical solutions.',
      benefits: ['Name adjustments', 'Number alignment', 'Habit correction', 'Practical solutions'],
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const serviceItems = servicesRef.current?.querySelectorAll('.service-item');
      if (serviceItems) {
        gsap.fromTo(
          serviceItems,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: servicesRef.current,
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
      id="services"
      className="relative bg-maroon py-24 lg:py-32 overflow-hidden"
    >
      <div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <span className="font-display text-xs tracking-widest-xl text-gold uppercase mb-4 block">
            What We Offer
          </span>
          <h2
            className="font-display text-ivory uppercase leading-tight mb-4"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              letterSpacing: '0.04em',
            }}
          >
            Our <span className="text-gold">Services</span>
          </h2>
          <p className="font-body text-taupe max-w-2xl mx-auto">
            Each service is designed to solve a specific life problem using numerology. 
            We do not provide generic predictions—every solution is customized and data-driven.
          </p>
        </div>

        {/* Services Accordion */}
        <div ref={servicesRef} className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item border border-gold/20 rounded-lg overflow-hidden hover:border-gold/40 transition-all duration-300"
            >
              {/* Header */}
              <button
                onClick={() => setExpandedService(expandedService === index ? null : index)}
                className="w-full flex items-center gap-4 p-5 lg:p-6 text-left bg-espresso/50 hover:bg-espresso/80 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-5 h-5 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg text-ivory uppercase tracking-wider">
                    {service.title}
                  </h3>
                  <p className="font-body text-taupe text-sm mt-1 hidden sm:block">
                    {service.shortDesc}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center">
                  {expandedService === index ? (
                    <ChevronUp className="w-4 h-4 text-gold" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gold" />
                  )}
                </div>
              </button>

              {/* Expanded Content */}
              {expandedService === index && (
                <div className="p-5 lg:p-6 bg-espresso/30 border-t border-gold/10">
                  <p className="font-body text-taupe leading-relaxed mb-4">
                    {service.fullDesc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, bIndex) => (
                      <span
                        key={bIndex}
                        className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-body"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="font-body text-ivory/80 mb-6">
            Your future is not uncertain—it is unaligned.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-gold"
          >
            Align Your Numbers Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
