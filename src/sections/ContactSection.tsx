import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        '.contact-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Form Animation
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );

      // Info Items Stagger
      const infoItems = infoRef.current?.querySelectorAll('.info-item');
      if (infoItems && infoItems.length > 0) {
        gsap.fromTo(
          infoItems,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: infoRef.current,
              start: 'top 70%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', dob: '', message: '' });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'support@numeraldoctrrine.com',
      href: 'mailto:support@numeraldoctrrine.com',
    },
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: '+91 9701951666',
      href: 'tel:+919701951666',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'LANGALBERIA, GOBINDAPUR, BARUIPUR, SOUTH 24 PARGANAS, Pin- 700145',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Monday - Saturday: 10:00 AM - 7:00 PM',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-[#657B4D] py-24 lg:py-[100px] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/homepage/intro-subtle-bg.png')] opacity-[0.03] bg-repeat mix-blend-overlay" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 px-6 lg:px-12 max-w-[1440px] mx-auto">
        {/* Header Section - PURE BRAND COLORS */}
        <div className="contact-header text-center mb-16 lg:mb-24">
          <span className="font-display text-[#C8AC59] text-[13px] tracking-widest-2xl uppercase mb-5 block font-bold">
            Get In Touch
          </span>
          <h2
            className="font-display text-white leading-tight mb-6"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 54px)',
              letterSpacing: '0.04em',
            }}
          >
            Book Your <span className="text-[#C8AC59]">Consultation</span>
          </h2>
          <p className="font-body text-white/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Your life is already influenced by numbers—now it&apos;s time to control and align them for success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Contact Form Card - Glassmorphism on Brand Green */}
          <div ref={formRef} className="relative group">
            <div className="absolute inset-0 bg-white/[0.05] backdrop-blur-sm rounded-[30px] border border-white/10" />
            <div className="relative p-8 lg:p-12 h-full">
              <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-3">
                Request Your Session
              </h3>
              <p className="font-body text-white/50 text-sm mb-10">
                Fill in your details and we&apos;ll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 rounded-full bg-[#C8AC59]/20 flex items-center justify-center mx-auto mb-6 transition-all duration-500">
                    <CheckCircle className="w-10 h-10 text-[#C8AC59]" />
                  </div>
                  <h4 className="font-display text-xl text-white uppercase tracking-widest mb-3">
                    Request Received
                  </h4>
                  <p className="font-body text-white/60">
                    We&apos;ll contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-display text-[10px] tracking-widest-xl text-[#C8AC59] uppercase mb-2 block font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#657B4D]/40 border border-white/10 rounded-xl px-5 py-4 text-white font-body text-sm focus:outline-none focus:border-[#C8AC59]/50 focus:bg-[#657B4D]/60 transition-all placeholder:text-white/10"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="font-display text-[10px] tracking-widest-xl text-[#C8AC59] uppercase mb-2 block font-bold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#657B4D]/40 border border-white/10 rounded-xl px-5 py-4 text-white font-body text-sm focus:outline-none focus:border-[#C8AC59]/50 focus:bg-[#657B4D]/60 transition-all placeholder:text-white/10"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-display text-[10px] tracking-widest-xl text-[#C8AC59] uppercase mb-2 block font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#657B4D]/40 border border-white/10 rounded-xl px-5 py-4 text-white font-body text-sm focus:outline-none focus:border-[#C8AC59]/50 focus:bg-[#657B4D]/60 transition-all placeholder:text-white/10"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="font-display text-[10px] tracking-widest-xl text-[#C8AC59] uppercase mb-2 block font-bold">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        className="w-full bg-[#657B4D]/40 border border-white/10 rounded-xl px-5 py-4 text-white font-body text-sm focus:outline-none focus:border-[#C8AC59]/50 focus:bg-[#657B4D]/60 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-display text-[10px] tracking-widest-xl text-[#C8AC59] uppercase mb-2 block font-bold">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#657B4D]/40 border border-white/10 rounded-xl px-5 py-4 text-white font-body text-sm focus:outline-none focus:border-[#C8AC59]/50 focus:bg-[#657B4D]/60 transition-all resize-none placeholder:text-white/10"
                      placeholder="Tell us about your concerns..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-[60px] bg-[#C8AC59] text-[#1A0F0F] font-display font-bold uppercase tracking-widest-xl rounded-xl hover:bg-white transition-all duration-500 overflow-hidden group/btn relative"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <Send className="w-5 h-5" />
                      Book Consultation
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info Items - Solid Brand Layout */}
          <div ref={infoRef} className="flex flex-col justify-between">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="info-item group p-6 lg:p-8 rounded-[24px] border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-500"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#C8AC59]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <info.icon className="w-6 h-6 text-[#C8AC59]" />
                    </div>
                    <div>
                      <h4 className="font-display text-[11px] text-[#C8AC59] uppercase tracking-widest-2xl mb-1.5 font-bold">
                        {info.label}
                      </h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-body text-white text-lg lg:text-xl hover:text-[#C8AC59] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-body text-white text-lg lg:text-xl leading-relaxed">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Brand Quote */}
            <div className="mt-12 pt-12 border-t border-white/10">
               <div className="flex flex-col items-center lg:items-start gap-4">
                  <p className="font-display text-[11px] text-[#C8AC59] uppercase tracking-[0.3em] font-bold">
                    Numbers Are Direction
                  </p>
                  <p className="font-body text-white/50 text-sm italic">
                    "Identify your purpose through the logic of numerology."
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
