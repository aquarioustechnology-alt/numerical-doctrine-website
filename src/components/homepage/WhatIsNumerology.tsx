import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Moon, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const WhatIsNumerology: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const [pillarIndex, setPillarIndex] = useState(0);

  const pillars = [
    { num: '1', label: 'Leadership' },
    { num: '2', label: 'Harmony' },
    { num: '3', label: 'Expression' },
    { num: '4', label: 'Stability' },
    { num: '5', label: 'Innovation' },
    { num: '6', label: 'Responsibility' },
    { num: '7', label: 'Analysis' },
    { num: '8', label: 'Abundance' },
    { num: '9', label: 'Completion' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPillarIndex((prev) => (prev + 1) % pillars.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [pillars.length]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: ShieldCheck, text: 'Registered under MCA', subtext: 'Legal & Trusted Corporate Entity' },
    { icon: Moon, text: 'Professional Consultation Process', subtext: 'Structured & Scientific Approach' },
    { icon: Compass, text: 'Structured Reports & Documentation', subtext: 'Precision Analysis for Real Outcomes' },
    { icon: Sparkles, text: 'Customized Solutions', subtext: 'Personalized Insights, Not Generic Advice' },
  ];

  return (
    <section
      ref={sectionRef}
      id="what-is-numerology"
      className="relative pt-[200px] pb-24 lg:pt-[200px] lg:pb-[100px] overflow-hidden bg-white"
    >
      {/* RAW LIGHT BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{ backgroundImage: 'url("/images/homepage/why choose us BG.png")' }}
      />

      <div className="relative z-10 px-6 lg:px-12 max-w-[1440px] mx-auto">
        {/* TOP ROW: Header & Sub-content Split */}
        <div ref={headerRef} className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-16 mb-16 lg:mb-20">
          <div className="w-full lg:w-1/2">
            <span className="font-display text-[#C8AC59] text-[13px] tracking-widest-2xl uppercase mb-5 block font-bold">
              Why Choose Us
            </span>
            <h2
              className="font-display text-[#1A0F0F] leading-tight"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 54px)',
                letterSpacing: '0.04em',
              }}
            >
              Why <span className="text-[#657B4D]">Numeral Doctrrine</span> Private Limited?
            </h2>
          </div>
          <div className="w-full lg:w-1/2 lg:pb-2">
            <p className="font-body text-[#1A0F0F]/70 text-[18px] lg:text-[20px] leading-relaxed lg:max-w-xl">
              Unlike unstructured or freelance numerology services, we offer a corporate, research-driven approach focused on precision and accountability.
            </p>
          </div>
        </div>

        {/* BOTTOM ROW: Content & Image Split */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Feature List (Tighter Gaps) */}
          <div className="space-y-6 lg:space-y-7">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 lg:gap-5 group cursor-default">
                 <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-[#657B4D]/10 flex items-center justify-center shrink-0 border border-[#657B4D]/20 group-hover:bg-[#657B4D] group-hover:border-[#657B4D] transition-all duration-400 shadow-sm bg-white/40 backdrop-blur-sm">
                  <item.icon className="w-6 h-6 lg:w-7 lg:h-7 text-[#657B4D] group-hover:text-white group-hover:scale-110 transition-all duration-400" />
                </div>
                <div className="pt-1">
                  <h4 className="font-display text-[19px] lg:text-[21px] text-[#1A0F0F] group-hover:text-[#657B4D] transition-colors duration-300">
                    {item.text}
                  </h4>
                  <p className="font-body text-[#1A0F0F]/50 text-[15px]">
                    {item.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Square Image Container */}
          <div className="relative">
             <div className="relative aspect-square rounded-[40px] shadow-2xl group bg-[#1A0F0F]/5 p-0.5 overflow-visible">
               {/* Internal Image Wrapper for Rounded Clipping */}
                <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                   <img
                     src="/numbers_cosmic.jpg"
                     alt="Cosmic Numerology"
                     className="w-full h-full object-cover transform scale-110 group-hover:scale-115 transition-transform duration-[3s]"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
               
               {/* Dynamic Smooth Badge Overlay - RESEARCH PILLARS LOOP */}
               <div className="absolute -bottom-6 -left-6 p-6 bg-[#2a1c1c] border border-[#C8AC59]/60 rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 w-44">
                  <div className="text-center overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={pillarIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <span className="block font-display text-5xl text-[#C8AC59] leading-none mb-2">
                          {pillars[pillarIndex].num}
                        </span>
                        <span className="block font-body text-[11px] text-white/80 tracking-[0.15em] uppercase font-bold">
                          {pillars[pillarIndex].label}
                        </span>
                      </motion.div>
                    </AnimatePresence>
                    <div className="mt-3 flex justify-center gap-1">
                      {pillars.map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-1 rounded-full transition-all duration-500 ${i === pillarIndex ? 'w-4 bg-[#C8AC59]' : 'w-1 bg-white/20'}`}
                        />
                      ))}
                    </div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsNumerology;
