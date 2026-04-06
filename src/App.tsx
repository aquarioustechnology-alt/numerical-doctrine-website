import { useEffect, useRef } from 'react';
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
import ServicesSection from './sections/ServicesSection';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './components/common/FooterSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

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
      
      {/* Services */}
      <ServicesSection />
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
}

export default App;
