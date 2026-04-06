import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Fingerprint, Star, Moon, Compass, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // reveal animations
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="relative py-24 lg:py-32 overflow-hidden bg-black text-white"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: 'url("/images/homepage/why choose us BG.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div ref={contentRef}>
            <span className="font-display text-brand-gold text-xs lg:text-sm tracking-widest-2xl uppercase mb-4 block">
              The Professional Edge
            </span>
            <h2
              className="font-display text-white leading-tight mb-6"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 54px)',
                letterSpacing: '0.04em',
              }}
            >
              Why <span className="text-brand-gold">Numeral Doctrrine</span> Private Limited?
            </h2>
            <p className="font-body text-white/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
              Unlike unstructured or freelance numerology services, we offer a corporate, research-driven approach.
            </p>

            {/* Bullet Points */}
            <div className="space-y-6">
              {[
                { icon: Star, text: 'Registered under MCA', subtext: '(Legal & Trusted)' },
                { icon: Moon, text: 'Professional Consultation Process', subtext: 'Corporate Standard' },
                { icon: Compass, text: 'Structured Reports & Documentation', subtext: 'Precision Analysis' },
                { icon: Sparkles, text: 'Customized Solutions', subtext: '(Not Generic Advice)' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20 group-hover:bg-brand-gold/20 transition-all">
                    <item.icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-white group-hover:text-brand-gold transition-colors">{item.text}</h4>
                    <p className="font-body text-white/50 text-sm">{item.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image/Decorative Area */}
          <div ref={imageRef} className="relative hidden lg:block">
            <div className="aspect-square relative rounded-[40px] overflow-hidden border border-white/10 group">
               {/* I'll use a placeholder or decorative element here - typically another brand image or the same BG zoomed */}
               <div className="absolute inset-0 bg-brand-gold/5 blur-3xl rounded-full" />
               <img 
                 src="/images/homepage/why choose us BG.png" 
                 alt="Professional Numerology" 
                 className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-1000 opacity-60"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent" />
               
               {/* Floating Icon Badges */}
               <div className="absolute top-10 right-10 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 animate-float">
                  <ShieldCheck className="w-10 h-10 text-brand-gold" />
               </div>
               <div className="absolute bottom-10 left-10 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 animate-float" style={{ animationDelay: '1s' }}>
                  <Fingerprint className="w-10 h-10 text-brand-gold" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
