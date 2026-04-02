import React, { useEffect, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const HeaderSection: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact Us', id: 'contact' },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[100] px-6 lg:px-12 py-3 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white shadow-md border-b border-gray-100 py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="flex items-center justify-between max-w-[1440px] mx-auto">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center group transition-transform hover:scale-105 duration-300"
          >
            <img 
              src={isScrolled ? "/Logo/only-icon.png" : "/Logo/main-logo.png"} 
              alt="Numeral Doctrine Logo" 
              className={`w-auto object-contain transition-all duration-500 ${
                isScrolled ? 'h-10 lg:h-12' : 'h-14 lg:h-24'
              }`}
            />
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className={`font-display text-xs tracking-widest uppercase transition-colors ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-gold font-medium' 
                    : 'text-[#1A0F0F] hover:text-gold font-medium'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-8 py-3.5 rounded-full font-display text-xs tracking-widest uppercase transition-all duration-300 border ${
                  isScrolled 
                    ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white' 
                    : 'border-[#1A0F0F]/20 text-[#1A0F0F] hover:bg-[#1A0F0F] hover:text-white'
                }`}
              >
                Calculate your number
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 transition-colors text-gray-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[99] bg-white backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="font-display text-xl tracking-widest-xl text-gray-800 hover:text-gold transition-colors uppercase"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-4 px-8 py-3 border border-gray-800 text-gray-800 font-display text-sm tracking-widest-xl uppercase hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderSection;
