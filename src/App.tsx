import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Import sections
import HeaderSection from './components/common/HeaderSection';
import HeroSection from './components/homepage/HeroSection';
import Introduction from './components/homepage/Introduction';
import HowItWorks from './components/homepage/HowItWorks';
import TypesOfNumerology from './components/homepage/TypesOfNumerology';
import WhatIsNumerology from './components/homepage/WhatIsNumerology';
import TestimonialsSection from './components/homepage/TestimonialsSection';
import ContactSection from './components/homepage/ContactSection';
import FooterSection from './components/common/FooterSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show below hero section
      setShowSticky(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Wait for all ScrollTriggers to be created
    const timer = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (!maxScroll || pinned.length === 0) return;

      // Build pinned ranges with settle centers
      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      // Global snap configuration
      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            // Check if within any pinned range (with small buffer)
            const inPinned = pinnedRanges.some(
              r => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            
            if (!inPinned) return value; // Flowing section: free scroll

            // Find nearest pinned center
            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );

            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative bg-espresso">
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Global Sticky Book Consultation Button */}
      <div 
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-[100] transition-all duration-500 ease-in-out transform ${showSticky ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}
      >
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative overflow-hidden bg-brand-gold rounded-l-[16px] rounded-r-none flex items-center justify-center py-6 px-2.5 lg:py-8 lg:px-3 shadow-[-5px_0_20px_rgba(0,0,0,0.15)] cursor-pointer"
        >
          {/* Hover Fill Animation from bottom to top */}
          <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
          
          <span 
            className="relative z-10 text-white group-hover:text-black font-body font-bold uppercase tracking-widest text-[12px] lg:text-[14px] transition-colors duration-500 whitespace-nowrap inline-block select-none"
            style={{ writingMode: 'vertical-rl', WebkitWritingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Book Consultation
          </span>
        </button>
      </div>

      {/* Header */}
      <HeaderSection />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content Sections with White Continuity */}
      <div className="bg-white">
        {/* Introduction Section */}
        <Introduction />
        
        {/* How It Works (Parallax Reveal) */}
        <HowItWorks />
        
        {/* Types of Numerology (Light themed) */}
        <TypesOfNumerology />
      </div>

      {/* What is Numerology */}
      <WhatIsNumerology />
      
      {/* Testimonials */}
      <TestimonialsSection />
      

      
      <div className="bg-white">
        {/* Contact Section */}
        <ContactSection />
      </div>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
}

export default App;
