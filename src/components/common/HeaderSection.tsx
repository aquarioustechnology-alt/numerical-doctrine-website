import React, { useEffect, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const HeaderSection: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

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
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled 
            ? 'bg-white shadow-[0_8px_40px_rgba(0,0,0,0.04)] border-b border-gray-100' 
            : 'bg-transparent'
        }`}
        style={{ 
          paddingTop: isScrolled ? '12px' : '6px',
          paddingBottom: isScrolled ? '12px' : '0px'
        }}
      >
        <div className={`flex items-center justify-between max-w-[1440px] mx-auto px-6 relative ${!isScrolled ? 'border-b border-[#C8AC59]/30 pb-0.5' : ''}`}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center group transition-transform hover:scale-105 duration-300"
          >
            <img 
              src={isScrolled ? "/Logo/only-icon.png" : "/Logo/svg icon.svg"} 
              alt="Numeral Doctrine Logo" 
              className={`w-auto object-contain transition-all duration-500 ${
                isScrolled ? 'h-14 lg:h-16' : 'h-18 lg:h-32'
              }`}
              style={{ 
                marginTop: '0px',
                marginBottom: '0px'
              }}
            />
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-12 h-full">
            <div className="flex items-center gap-12">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="font-body text-[15px] font-medium text-black uppercase nav-link-hover tracking-wider"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-outline-brand h-14 px-8 text-[13px] min-w-[200px] flex items-center justify-center"
              >
                Calculate your number
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 transition-colors text-gray-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[120] bg-white backdrop-blur-lg lg:hidden p-6">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header with Logo and Close Button */}
            <div className="flex items-center justify-between mb-12">
              <button
                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }}
                className="flex items-center"
              >
                <img 
                  src="/Logo/svg icon.svg" 
                  alt="Logo" 
                  className="h-16 w-auto object-contain"
                />
              </button>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-800"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col items-center gap-8 mt-10">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="font-display text-2xl tracking-widest-xl text-gray-800 hover:text-gold transition-colors uppercase"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-4 px-10 py-4 border border-gray-800 text-gray-800 font-display text-sm tracking-widest-xl uppercase hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-full"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderSection;
