import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, FileText, Lock, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FooterSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState<'terms' | 'privacy' | 'disclaimer' | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const footerContent = sectionRef.current?.querySelector('.footer-content');
      if (footerContent) {
        gsap.fromTo(
          footerContent,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const legalLinks = [
    { id: 'terms', label: 'Terms & Conditions', icon: FileText },
    { id: 'privacy', label: 'Privacy Policy', icon: Lock },
    { id: 'disclaimer', label: 'Legal Disclaimer', icon: Shield },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer
        ref={sectionRef}
        className="relative bg-espresso border-t border-gold/10"
      >
        <div className="footer-content px-6 lg:px-12 py-16 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="font-display text-2xl text-ivory uppercase tracking-widest-xl mb-4">
                Numeral Doctrrine
              </h3>
              <p className="font-body text-taupe leading-relaxed max-w-md mb-6">
                Decode Your Numbers. Design Your Destiny. A professionally managed 
                numerology consultancy registered under the Ministry of Corporate 
                Affairs (MCA), Government of India.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <span className="font-display text-xs text-gold uppercase tracking-wider block">
                    MCA Registered
                  </span>
                  <span className="font-body text-xs text-taupe">
                    Government of India
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-sm text-ivory uppercase tracking-widest-xl mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { label: 'What is Numerology', id: 'what-is-numerology' },
                  { label: 'Our Services', id: 'services' },
                  { label: 'How It Works', id: 'how-it-works' },
                  { label: 'About Us', id: 'about' },
                  { label: 'Contact', id: 'contact' },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="font-body text-taupe text-sm hover:text-gold transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-display text-sm text-ivory uppercase tracking-widest-xl mb-4">
                Legal
              </h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => setShowModal(link.id as 'terms' | 'privacy' | 'disclaimer')}
                      className="font-body text-taupe text-sm hover:text-gold transition-colors flex items-center gap-2"
                    >
                      <link.icon className="w-3 h-3" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-taupe/60 text-xs">
              © 2026 Numeral Doctrrine Private Limited. All rights reserved.
            </p>
            <p className="font-body text-taupe/60 text-xs">
              Registered under the Companies Act, 2013 | Government of India
            </p>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/90 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl max-h-[80vh] overflow-auto card-glass p-8">
            <button
              onClick={() => setShowModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
            >
              <X className="w-4 h-4 text-gold" />
            </button>

            {showModal === 'terms' && (
              <>
                <h2 className="font-display text-2xl text-ivory uppercase tracking-wider mb-6">
                  Terms & Conditions
                </h2>
                <div className="space-y-4 font-body text-taupe text-sm leading-relaxed">
                  <p>
                    Welcome to the official website of <strong className="text-ivory">Numeral Doctrrine Private Limited</strong>, 
                    a company duly incorporated and registered under the provisions of the Companies Act, 2013 
                    and governed by the laws of India.
                  </p>
                  <p>
                    These Terms & Conditions govern your access to and use of our website, services, 
                    consultations, reports, and any associated digital platforms.
                  </p>
                  <h3 className="font-display text-sm text-gold uppercase tracking-wider mt-4">Eligibility</h3>
                  <p>
                    By using this website, you represent and warrant that you are at least 18 years old 
                    and legally competent to enter into a contract under the Indian Contract Act, 1872.
                  </p>
                  <h3 className="font-display text-sm text-gold uppercase tracking-wider mt-4">No Refund Policy</h3>
                  <p>
                    Due to the customized and digital nature of services, all payments are final, 
                    non-refundable, and non-transferable.
                  </p>
                  <h3 className="font-display text-sm text-gold uppercase tracking-wider mt-4">Governing Law</h3>
                  <p>
                    These Terms shall be governed by the laws of India. All disputes shall be subject 
                    to the exclusive jurisdiction of courts in Kolkata, West Bengal.
                  </p>
                </div>
              </>
            )}

            {showModal === 'privacy' && (
              <>
                <h2 className="font-display text-2xl text-ivory uppercase tracking-wider mb-6">
                  Privacy Policy
                </h2>
                <div className="space-y-4 font-body text-taupe text-sm leading-relaxed">
                  <p>
                    This Privacy Policy describes how <strong className="text-ivory">Numeral Doctrrine Private Limited</strong> 
                    collects, uses, stores, and protects your personal information.
                  </p>
                  <h3 className="font-display text-sm text-gold uppercase tracking-wider mt-4">Information We Collect</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Full Name</li>
                    <li>Date of Birth</li>
                    <li>Mobile Number</li>
                    <li>Email Address</li>
                    <li>Billing & Payment Details</li>
                  </ul>
                  <h3 className="font-display text-sm text-gold uppercase tracking-wider mt-4">Data Protection</h3>
                  <p>
                    We do not sell, rent, or trade your personal information. We implement reasonable 
                    security measures to protect your data.
                  </p>
                </div>
              </>
            )}

            {showModal === 'disclaimer' && (
              <>
                <h2 className="font-display text-2xl text-ivory uppercase tracking-wider mb-6">
                  Legal Disclaimer
                </h2>
                <div className="space-y-4 font-body text-taupe text-sm leading-relaxed">
                  <p>
                    Numerology is a predictive, interpretative, and belief-based discipline. 
                    The insights provided are derived from established numerological principles 
                    and professional interpretation.
                  </p>
                  <p>
                    However, numerology is <strong className="text-ivory">not an exact science</strong> and does not 
                    constitute empirical, scientific, or universally verifiable results.
                  </p>
                  <h3 className="font-display text-sm text-gold uppercase tracking-wider mt-4">No Guarantee</h3>
                  <p>
                    While we strive to provide accurate guidance, no assurance, warranty, or guarantee 
                    of success, failure, or specific outcomes is provided.
                  </p>
                  <h3 className="font-display text-sm text-gold uppercase tracking-wider mt-4">Not a Substitute</h3>
                  <p>
                    Our services are not intended to replace professional advice in any field, 
                    including legal, financial, medical, or psychological consultation.
                  </p>
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
