import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, MessageSquare, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const aboutItems = contentRef.current?.querySelectorAll('.about-item');
      if (aboutItems && aboutItems.length > 0) {
        gsap.fromTo(
          aboutItems,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
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

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 30, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const methodology = [
    'Initial Consultation',
    'Detailed Numerology Calculation',
    'Multi-System Cross Analysis',
    'Problem Diagnosis',
    'Customized Solutions',
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-espresso py-24 lg:py-32 overflow-hidden"
    >
      <div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div ref={contentRef}>
            <span className="font-display text-xs tracking-widest-xl text-gold uppercase mb-4 block">
              About Us
            </span>
            <h2
              className="font-display text-ivory uppercase leading-tight mb-6"
              style={{
                fontSize: 'clamp(28px, 4vw, 48px)',
                letterSpacing: '0.04em',
              }}
            >
              Who We <span className="text-gold">Are</span>
            </h2>

            <div className="space-y-6">
              <div className="about-item">
                <p className="font-body text-taupe leading-relaxed">
                  <strong className="text-ivory">Numeral Doctrrine Private Limited</strong> is a 
                  professionally managed numerology consultancy company registered under the{' '}
                  <strong className="text-gold">Ministry of Corporate Affairs (MCA), Government of India</strong>.
                </p>
              </div>

              <div className="about-item p-4 rounded-lg bg-maroon/30 border-l-2 border-gold">
                <p className="font-body text-ivory/90 italic">
                  We believe that numbers are the <strong>foundation of universal order</strong>. 
                  Every event, every decision, and every outcome is influenced by numerical patterns.
                </p>
              </div>

              <div className="about-item grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm text-ivory uppercase tracking-wider mb-1">
                      Our Mission
                    </h4>
                    <p className="font-body text-taupe text-xs">
                      To make numerology a trusted, structured, and result-oriented service accessible to everyone.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm text-ivory uppercase tracking-wider mb-1">
                      Our Vision
                    </h4>
                    <p className="font-body text-taupe text-xs">
                      To build a globally recognized brand that represents accuracy, professionalism, and transformation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Methodology */}
              <div className="about-item">
                <h4 className="font-display text-sm text-ivory uppercase tracking-widest-xl mb-3 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-gold" />
                  Our Working Methodology
                </h4>
                <div className="flex flex-wrap gap-2">
                  {methodology.map((step, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-maroon/50 text-taupe text-xs font-body"
                    >
                      <CheckCircle2 className="w-3 h-3 text-gold" />
                      {step}
                    </span>
                  ))}
                </div>
              </div>

              {/* Promise */}
              <div className="about-item p-4 rounded-lg border border-gold/20">
                <p className="font-body text-ivory/90 text-sm text-center">
                  <strong className="text-gold">Our Promise:</strong> We do not create fear or dependency. 
                  We provide <strong>clarity, logic, and practical solutions</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-card">
              <img
                src="/consultation.jpg"
                alt="Numerology consultation"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -bottom-4 -right-4 bg-maroon border border-gold/30 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="font-display text-xs text-ivory uppercase tracking-wider">
                  MCA Registered
                </span>
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 bg-espresso border border-gold/30 p-3 rounded-lg">
              <span className="font-display text-2xl text-gold">2013</span>
              <span className="font-body text-xs text-taupe block">Companies Act</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
