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
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const infoItems = infoRef.current?.querySelectorAll('.info-item');
      if (infoItems && infoItems.length > 0) {
        gsap.fromTo(
          infoItems,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: infoRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
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
      className="relative bg-maroon py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-widest-xl text-gold uppercase mb-4 block">
            Get In Touch
          </span>
          <h2
            className="font-display text-ivory uppercase leading-tight mb-4"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              letterSpacing: '0.04em',
            }}
          >
            Book Your <span className="text-gold">Consultation</span>
          </h2>
          <p className="font-body text-taupe max-w-2xl mx-auto">
            Your life is already influenced by numbers—now it&apos;s time to control and align them for success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div ref={formRef} className="card-glass p-8 lg:p-10">
            <h3 className="font-display text-xl text-ivory uppercase tracking-widest-xl mb-2">
              Request Your Session
            </h3>
            <p className="font-body text-taupe text-sm mb-6">
              Fill in your details and we&apos;ll get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-gold" />
                </div>
                <h4 className="font-display text-lg text-ivory uppercase tracking-wider mb-2">
                  Request Received
                </h4>
                <p className="font-body text-taupe text-sm">
                  We&apos;ll contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-display text-xs tracking-widest-xl text-taupe uppercase mb-2 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-espresso/80 border border-gold/30 rounded-lg px-4 py-3 text-ivory font-body text-sm focus:outline-none focus:border-gold/60 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs tracking-widest-xl text-taupe uppercase mb-2 block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-espresso/80 border border-gold/30 rounded-lg px-4 py-3 text-ivory font-body text-sm focus:outline-none focus:border-gold/60 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-display text-xs tracking-widest-xl text-taupe uppercase mb-2 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-espresso/80 border border-gold/30 rounded-lg px-4 py-3 text-ivory font-body text-sm focus:outline-none focus:border-gold/60 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs tracking-widest-xl text-taupe uppercase mb-2 block">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full bg-espresso/80 border border-gold/30 rounded-lg px-4 py-3 text-ivory font-body text-sm focus:outline-none focus:border-gold/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-display text-xs tracking-widest-xl text-taupe uppercase mb-2 block">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-espresso/80 border border-gold/30 rounded-lg px-4 py-3 text-ivory font-body text-sm focus:outline-none focus:border-gold/60 transition-colors resize-none"
                    placeholder="Tell us about your concerns..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Book Consultation
                </button>

                <p className="font-body text-taupe/60 text-xs text-center">
                  By booking, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="info-item flex items-start gap-4 p-5 rounded-lg border border-gold/20 bg-espresso/30 hover:border-gold/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-display text-xs text-taupe uppercase tracking-widest-xl mb-1">
                    {info.label}
                  </h4>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-body text-ivory hover:text-gold transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-body text-ivory">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Taglines */}
            <div className="pt-6 border-t border-gold/20">
              <div className="space-y-3">
                <p className="font-display text-sm text-gold uppercase tracking-wider text-center">
                  &ldquo;Numbers Are Not Random. They Are Direction.&rdquo;
                </p>
                <p className="font-display text-xs text-taupe uppercase tracking-wider text-center">
                  &ldquo;Decode Your Destiny with Precision&rdquo;
                </p>
                <p className="font-display text-xs text-taupe/60 uppercase tracking-wider text-center">
                  &ldquo;Where Logic Meets Spiritual Science&rdquo;
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
