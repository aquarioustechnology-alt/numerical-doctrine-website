import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, FileText, Lock, X, Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FooterSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState<'terms' | 'privacy' | 'disclaimer' | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = sectionRef.current?.querySelectorAll('.footer-reveal');
      if (elements && elements.length > 0) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Wheel rotation
      const wheel = sectionRef.current?.querySelector('.footer-wheel');
      if (wheel) {
        gsap.to(wheel, {
          rotation: 360,
          duration: 80,
          repeat: -1,
          ease: 'none',
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const legalLinks = [
    { id: 'terms', label: 'Terms & Conditions', icon: FileText },
    { id: 'privacy', label: 'Privacy Policy', icon: Lock },
    { id: 'disclaimer', label: 'Legal Disclaimer', icon: Shield },
  ];

  return (
    <>
      <footer ref={sectionRef} className="relative bg-[#607647] overflow-hidden pt-[80px]">
        {/* Decorative Mystical Numerology SVG - Top Right */}
        <div className="footer-wheel absolute top-0 right-0 w-[450px] h-[450px] opacity-[0.16] pointer-events-none translate-x-1/4 -translate-y-1/4 z-0">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="100" cy="100" r="98" stroke="#C8AC59" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="92" stroke="#C8AC59" strokeWidth="0.2" strokeDasharray="1 2" />
            <circle cx="100" cy="100" r="85" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.4" />
            <circle cx="100" cy="100" r="60" stroke="#C8AC59" strokeWidth="0.3" />
            <circle cx="100" cy="100" r="40" stroke="#FFFFFF" strokeWidth="0.3" opacity="0.4" />
            <circle cx="100" cy="100" r="20" stroke="#C8AC59" strokeWidth="0.2" />
            <path d="M100 15 L182.27 157.5 L17.73 157.5 Z" stroke="#C8AC59" strokeWidth="0.4" />
            <path d="M100 185 L17.73 42.5 L182.27 42.5 Z" stroke="#FFFFFF" strokeWidth="0.4" opacity="0.4" />
            <path d="M100 40 L160 140 L40 140 Z" stroke="#C8AC59" strokeWidth="0.3" opacity="0.6" />
            <path d="M100 160 L40 60 L160 60 Z" stroke="#FFFFFF" strokeWidth="0.3" opacity="0.4" />
            <line x1="100" y1="0" x2="100" y2="200" stroke="#C8AC59" strokeWidth="0.1" opacity="0.4" />
            <line x1="0" y1="100" x2="200" y2="100" stroke="#C8AC59" strokeWidth="0.1" opacity="0.4" />
            <g className="font-display font-medium" fill="#C8AC59" style={{ fontSize: '12px' }}>
              <text x="50" y="35" textAnchor="middle">9</text>
              <text x="145" y="35" textAnchor="middle">1</text>
              <text x="165" y="105" textAnchor="middle">7</text>
              <text x="145" y="175" textAnchor="middle">7</text>
              <text x="115" y="195" textAnchor="middle">5</text>
              <text x="60" y="175" textAnchor="middle">4</text>
              <text x="35" y="105" textAnchor="middle">4</text>
              <text x="35" y="70" textAnchor="middle">8</text>
            </g>
            <g className="font-display font-medium" fill="#FFFFFF" style={{ fontSize: '8px', opacity: 0.7 }}>
              <text x="100" y="104" textAnchor="middle">0</text>
              <text x="100" y="135" textAnchor="middle">6</text>
              <text x="135" y="115" textAnchor="middle">5</text>
              <text x="125" y="145" textAnchor="middle">5</text>
              <text x="65" y="115" textAnchor="middle">5</text>
              <text x="80" y="115" textAnchor="middle">8</text>
              <text x="100" y="65" textAnchor="middle">9</text>
              <text x="135" y="60" textAnchor="middle">1</text>
            </g>
          </svg>
        </div>

        <div className="relative z-10 px-6 lg:px-12 max-w-[1440px] mx-auto">
          
          {/* Prominent CTA Section */}
          <div className="footer-reveal text-center pb-8 lg:pb-10 border-b border-white/10">
            <h2 className="font-display text-white leading-tight mb-2" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
              "Your life is already influenced by numbers"<br/>
              <span className="text-brand-gold font-body font-normal text-xl lg:text-[28px] italic block mt-2 opacity-90">
                Now it’s time to control and align them for success.
              </span>
            </h2>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-fill-brand px-8 lg:px-12 py-5 lg:py-6 text-[13px] lg:text-[15px] uppercase tracking-widest-xl shadow-2xl shadow-brand-gold/10 rounded-full inline-block mt-6"
            >
              Book your consultation with Numeral Doctrrine Private Limited today.
            </button>
          </div>

          {/* Core Footer Grid */}
          <div className="py-8 lg:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
            
            {/* Brand Identifier (Span 4) */}
            <div className="footer-reveal lg:col-span-4 pr-0 lg:pr-12">
              <div className="mb-6">
                <img src="/Logo/white%20logo%20image.png" alt="Numeral Doctrrine" className="w-[150px] lg:w-[180px] object-contain" />
              </div>
              <p className="font-body text-white/70 text-[14px] leading-relaxed mb-6">
                Decode Your Numbers. Design Your Destiny. A professionally managed numerology consultancy registered under the Ministry of Corporate Affairs, Government of India.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <button key={i} className="w-[42px] h-[42px] rounded-full bg-[#4A5C37] flex items-center justify-center hover:bg-[#4A5C37] hover:text-[#C8AC59] text-white transition-all duration-300 transform hover:-translate-y-1 group">
                    <Icon className="w-4 h-4 transition-colors duration-300" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links (Span 2) */}
            <div className="footer-reveal lg:col-span-2 lg:col-start-6">
              <h4 className="font-display text-lg text-white uppercase tracking-widest mb-7 border-b border-brand-gold/20 pb-3 inline-block">Menus</h4>
              <ul className="space-y-4">
                {[
                  { label: 'What is Numerology', id: 'what-is-numerology' },
                  { label: 'Types of Numerology', id: 'types-of-numerology' },
                  { label: 'How It Works', id: 'how-it-works' },
                  { label: 'Testimonials', id: 'testimonials' },
                  { label: 'Contact Us', id: 'contact' },
                ].map((link) => (
                  <li key={link.id}>
                    <button 
                      onClick={() => scrollToSection(link.id)} 
                      className="font-body text-white/60 hover:text-brand-gold transition-colors text-[15px] flex items-center group"
                    >
                      <span className="w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details (Span 3) */}
            <div className="footer-reveal lg:col-span-3 lg:col-start-8">
              <h4 className="font-display text-lg text-white uppercase tracking-widest mb-7 border-b border-brand-gold/20 pb-3 inline-block">Contact</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#4A5C37] flex items-center justify-center flex-shrink-0 transition-colors">
                    <MapPin className="w-4 h-4 text-white group-hover:text-[#C8AC59] transition-colors" />
                  </div>
                  <span className="font-body text-white/60 text-[14px] leading-relaxed pt-1.5 group-hover:text-[#C8AC59] transition-colors">Langalberia, Gobindapur, Baruipur, South 24 Parganas, Pin- 700145</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#4A5C37] flex items-center justify-center flex-shrink-0 transition-colors">
                    <Phone className="w-4 h-4 text-white group-hover:text-[#C8AC59] transition-colors" />
                  </div>
                  <a href="tel:+919701951666" className="font-body text-white/60 text-[15px] group-hover:text-[#C8AC59] hover:text-[#C8AC59] transition-colors">+91 9701951666</a>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#4A5C37] flex items-center justify-center flex-shrink-0 transition-colors">
                    <Mail className="w-4 h-4 text-white group-hover:text-[#C8AC59] transition-colors" />
                  </div>
                  <a href="mailto:support@numeraldoctrrine.com" className="font-body text-white/60 text-[15px] group-hover:text-[#C8AC59] hover:text-[#C8AC59] transition-colors">support@numeraldoctrrine.com</a>
                </li>
              </ul>
            </div>

            {/* Legal Structure (Span 2) */}
            <div className="footer-reveal lg:col-span-2 lg:col-start-11">
              <h4 className="font-display text-lg text-white uppercase tracking-widest mb-7 border-b border-brand-gold/20 pb-3 inline-block">Legal</h4>
              <ul className="space-y-4">
                {legalLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => setShowModal(link.id as 'terms' | 'privacy' | 'disclaimer')}
                      className="font-body text-white/60 hover:text-brand-gold transition-colors text-[15px] flex items-center group"
                    >
                      <span className="w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>

          {/* Bottom Copyright Bar */}
          <div className="footer-reveal py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-5 text-center md:text-left">
            <p className="font-body text-white/40 text-[13px] tracking-wide">
              © {new Date().getFullYear()} Numeral Doctrrine Private Limited. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
               <p className="font-body text-white/40 text-[13px] tracking-wide">
                 Images are AI generated
               </p>
               <span className="hidden sm:block text-white/20">|</span>
               <p className="font-body text-white/40 text-[13px] tracking-wide">
                 Designed by AQuarious
               </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#1A0F0F]/95 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-auto bg-white rounded-[24px] p-8 lg:p-12 shadow-2xl">
            <button
              onClick={() => setShowModal(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#1A0F0F]/5 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all transform hover:scale-110"
            >
              <X className="w-5 h-5 text-[#1A0F0F]" />
            </button>

            {showModal === 'terms' && (
              <>
                <h2 className="font-display text-3xl text-[#1A0F0F] tracking-wide mb-8">Terms & Conditions</h2>
                <div className="space-y-6 font-body text-[#1A0F0F]/70 text-[15px] leading-relaxed">
                  <p>Welcome to the official website of <strong className="text-[#1A0F0F] font-bold">Numeral Doctrrine Private Limited</strong>, a company duly incorporated and registered under the provisions of the Companies Act, 2013 and governed by the laws of India.</p>
                  <p>These Terms & Conditions govern your access to and use of our website, services, consultations, reports, and any associated digital platforms.</p>
                  <h3 className="font-display text-[11px] text-brand-gold uppercase tracking-[0.2em] font-bold mt-8 mb-2">Eligibility</h3>
                  <p>By using this website, you represent and warrant that you are at least 18 years old and legally competent to enter into a contract under the Indian Contract Act, 1872.</p>
                  <h3 className="font-display text-[11px] text-brand-gold uppercase tracking-[0.2em] font-bold mt-8 mb-2">No Refund Policy</h3>
                  <p>Due to the customized and digital nature of services, all payments are final, non-refundable, and non-transferable.</p>
                  <h3 className="font-display text-[11px] text-brand-gold uppercase tracking-[0.2em] font-bold mt-8 mb-2">Governing Law</h3>
                  <p>These Terms shall be governed by the laws of India. All disputes shall be subject to the exclusive jurisdiction of courts in Kolkata, West Bengal.</p>
                </div>
              </>
            )}

            {showModal === 'privacy' && (
              <>
                <h2 className="font-display text-3xl text-[#1A0F0F] tracking-wide mb-8">Privacy Policy</h2>
                <div className="space-y-6 font-body text-[#1A0F0F]/70 text-[15px] leading-relaxed">
                  <p>This Privacy Policy describes how <strong className="text-[#1A0F0F] font-bold">Numeral Doctrrine Private Limited</strong> collects, uses, stores, and protects your personal information.</p>
                  <h3 className="font-display text-[11px] text-brand-gold uppercase tracking-[0.2em] font-bold mt-8 mb-4">Information We Collect</h3>
                  <ul className="list-disc pl-5 space-y-2 marker:text-brand-gold">
                    <li>Full Name</li>
                    <li>Date of Birth</li>
                    <li>Mobile Number</li>
                    <li>Email Address</li>
                    <li>Billing & Payment Details</li>
                  </ul>
                  <h3 className="font-display text-[11px] text-brand-gold uppercase tracking-[0.2em] font-bold mt-8 mb-2">Data Protection</h3>
                  <p>We do not sell, rent, or trade your personal information. We implement reasonable security measures to protect your data.</p>
                </div>
              </>
            )}

            {showModal === 'disclaimer' && (
              <>
                <h2 className="font-display text-3xl text-[#1A0F0F] tracking-wide mb-8">Legal Disclaimer</h2>
                <div className="space-y-6 font-body text-[#1A0F0F]/70 text-[15px] leading-relaxed">
                  <p>Numerology is a predictive, interpretative, and belief-based discipline. The insights provided are derived from established numerological principles and professional interpretation.</p>
                  <p>However, numerology is <strong className="text-[#1A0F0F] font-bold">not an exact science</strong> and does not constitute empirical, scientific, or universally verifiable results.</p>
                  <h3 className="font-display text-[11px] text-brand-gold uppercase tracking-[0.2em] font-bold mt-8 mb-2">No Guarantee</h3>
                  <p>While we strive to provide accurate guidance, no assurance, warranty, or guarantee of success, failure, or specific outcomes is provided.</p>
                  <h3 className="font-display text-[11px] text-brand-gold uppercase tracking-[0.2em] font-bold mt-8 mb-2">Not a Substitute</h3>
                  <p>Our services are not intended to replace professional advice in any field, including legal, financial, medical, or psychological consultation.</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FooterSection;
