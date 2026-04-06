import React, { useRef, useLayoutEffect, useState, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Clock, CheckCircle, Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const dobPickerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: undefined as Date | undefined,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showDobPicker, setShowDobPicker] = useState(false);

  // Custom Calendar State
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [viewState, setViewState] = useState<'days' | 'years'>('days');

  // Logic for generating days
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    // Padding for previous month
    for (let i = 0; i < firstDay; i++) days.push(null);
    // Days of current month
    for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));
    
    return days;
  }, [currentMonth]);

  const years = useMemo(() => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 100 }, (_, i) => currentYear - i);
  }, []);

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dobPickerRef.current && !dobPickerRef.current.contains(event.target as Node)) {
        setShowDobPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-reveal',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        [formRef.current, infoRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', dob: undefined, message: '' });
    }, 4000);
  };

  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));

  const contactInfo = [
    { icon: Mail, label: 'Email Address', value: 'support@numeraldoctrrine.com', href: 'mailto:support@numeraldoctrrine.com' },
    { icon: Phone, label: 'Phone / WhatsApp', value: '+91 9701951666', href: 'tel:+919701951666' },
    { icon: MapPin, label: 'Registered Office', value: 'Langalberia, Gobindapur, Baruipur, South 24 Parganas, Pin- 700145' },
    { icon: Clock, label: 'Official Hours', value: 'Monday - Saturday: 10:00 AM - 7:00 PM' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-[#F6F6F6] pt-24 lg:pt-32 pb-24 lg:pb-32 overflow-hidden z-20"
      style={{ borderRadius: '50% 50% 0 0 / 80px 80px 0 0' }}
    >
      <div ref={containerRef} className="relative z-10 px-6 lg:px-12 max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="contact-reveal text-center mb-12 lg:mb-16">
          <span className="font-display text-brand-gold text-[13px] tracking-widest-2xl uppercase mb-4 block font-bold">
            Get In Touch
          </span>
          <h2 className="font-display text-[#1A0F0F] leading-tight mb-5" style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', letterSpacing: '0.02em' }}>
            Book Your <span className="text-brand-gold">Consultation</span>
          </h2>
          <p className="font-body text-black text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Your life is already influenced by numbers—now it&apos;s time to control and align them for success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Form Card */}
          <div ref={formRef} className="relative group">
            <div className="absolute inset-0 bg-white rounded-[32px] border border-[#1A0F0F]/5 shadow-sm" />
            <div className="relative p-8 lg:p-12 h-full">
              <h3 className="font-display text-[28px] text-[#1A0F0F] tracking-wide mb-3">Request Your Session</h3>
              <p className="font-body text-[#1A0F0F]/40 text-sm mb-10">Explore your potential. Fill in your details below.</p>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-brand-green/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-brand-green" />
                  </div>
                  <h4 className="font-display text-xl text-[#1A0F0F] mb-3">Request Received successfully</h4>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6 text-left">
                    <div>
                      <label className="font-display text-[11px] tracking-widest-xl text-black uppercase mb-3 block font-bold">Full Name *</label>
                      <input
                        type="text" required value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#F6F6F6] border border-[#1A0F0F]/10 rounded-2xl px-6 py-4 text-[#1A0F0F] font-body text-[15px] focus:outline-none focus:border-brand-gold/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="font-display text-[11px] tracking-widest-xl text-black uppercase mb-3 block font-bold">Phone Number *</label>
                      <input
                        type="tel" required value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#F6F6F6] border border-[#1A0F0F]/10 rounded-2xl px-6 py-4 text-[#1A0F0F] font-body text-[15px] focus:outline-none focus:border-brand-gold/50 transition-all"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 text-left">
                    <div className="flex flex-col">
                      <label className="font-display text-[11px] tracking-widest-xl text-black uppercase mb-3 block font-bold">Email Address *</label>
                      <input
                        type="email" required value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F6F6F6] border border-[#1A0F0F]/10 rounded-2xl px-6 py-4 text-[#1A0F0F] font-body text-[15px] focus:outline-none focus:border-brand-gold/50 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    {/* ENTIRELY CUSTOM BUILT PREMIUM DATE PICKER - ZERO LIBRARY ISSUES */}
                    <div className="relative flex flex-col" ref={dobPickerRef}>
                      <label className="font-display text-[11px] tracking-widest-xl text-black uppercase mb-3 block font-bold">Date of Birth *</label>
                      <button
                        type="button"
                        onClick={() => { setShowDobPicker(!showDobPicker); setViewState('days'); }}
                        className="w-full flex items-center justify-between bg-[#F6F6F6] border border-[#1A0F0F]/10 rounded-2xl px-6 py-4 text-[#1A0F0F] font-body text-[15px] hover:border-brand-gold/30 transition-all"
                      >
                        <span className={formData.dob ? 'text-[#1A0F0F]' : 'text-[#1A0F0F]/40'}>
                          {formData.dob ? formData.dob.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Select Birth Date'}
                        </span>
                        <CalendarIcon className="w-4 h-4 text-brand-gold" />
                      </button>
                      
                      {showDobPicker && (
                        <div className="absolute top-[105%] left-0 w-full sm:w-[320px] bg-white rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.15)] border border-[#1A0F0F]/10 z-[100] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                          {/* Calendar Header */}
                          <div className="bg-[#1A0F0F] p-5 flex items-center justify-between">
                            <button type="button" onClick={() => setViewState(viewState === 'days' ? 'years' : 'days')} className="flex items-center gap-2 text-white font-display text-lg hover:text-brand-gold transition-colors">
                              {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
                              <ChevronRight className={`w-4 h-4 transition-transform ${viewState === 'years' ? 'rotate-90' : ''}`} />
                            </button>
                            <div className="flex gap-1">
                               <button type="button" onClick={prevMonth} className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                               <button type="button" onClick={nextMonth} className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"><ChevronRight className="w-4 h-4" /></button>
                            </div>
                          </div>

                          <div className="p-4 min-h-[280px]">
                            {viewState === 'days' ? (
                              <>
                                <div className="grid grid-cols-7 mb-2">
                                  {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
                                    <div key={d} className="text-center text-[10px] uppercase font-bold text-brand-gold p-1">{d}</div>
                                  ))}
                                </div>
                                <div className="grid grid-cols-7 gap-1">
                                  {calendarDays.map((date, i) => (
                                    <div key={i} className="aspect-square flex items-center justify-center">
                                      {date && (
                                        <button
                                          type="button"
                                          onClick={() => { setFormData({ ...formData, dob: date }); setShowDobPicker(false); }}
                                          className={`w-full h-full text-xs rounded-full flex items-center justify-center transition-all ${
                                            formData.dob?.toDateString() === date.toDateString() 
                                            ? 'bg-brand-green text-white font-bold scale-110 shadow-lg' 
                                            : 'text-[#1A0F0F] hover:bg-brand-gold/10'
                                          }`}
                                        >
                                          {date.getDate()}
                                        </button>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </>
                            ) : (
                              <div className="grid grid-cols-3 gap-2 h-[240px] overflow-y-auto scrollbar-hide p-2 border-t border-black/5">
                                {years.map(y => (
                                  <button 
                                    key={y} type="button" 
                                    onClick={() => { setCurrentMonth(new Date(y, currentMonth.getMonth(), 1)); setViewState('days'); }}
                                    className={`py-2 text-sm rounded-lg transition-all ${currentMonth.getFullYear() === y ? 'bg-brand-green text-white font-bold' : 'hover:bg-brand-gold/10 text-[#1A0F0F]'}`}
                                  >
                                    {y}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col text-left">
                    <label className="font-display text-[11px] tracking-widest-xl text-black uppercase mb-3 block font-bold">Brief Message</label>
                    <textarea
                      rows={3} value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F6F6F6] border border-[#1A0F0F]/10 rounded-2xl px-6 py-4 text-[#1A0F0F] font-body text-[15px] focus:outline-none focus:border-brand-gold/50 transition-all resize-none"
                      placeholder="Special requirements or questions..."
                    />
                  </div>

                  <button type="submit" className="btn-fill-brand w-full py-5 text-[15px] uppercase tracking-wider font-semibold">
                    Book Your Consultation
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Transparent Contact Info Panel */}
          <div ref={infoRef} className="flex flex-col h-full text-left lg:pt-8 lg:pl-10">
            <h3 className="font-display text-[28px] text-[#1A0F0F] tracking-wide mb-2">Connect With Us</h3>
            <p className="font-body text-[#1A0F0F]/40 text-sm mb-8">We are here to assist you with any inquiries.</p>

            <div className="flex-1 flex flex-col space-y-6">
              {contactInfo.map((info, index) => {
                const isLast = index === contactInfo.length - 1;
                return (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div className={`pt-2 flex-1 relative ${isLast ? '' : 'pb-6'}`}>
                    <h4 className="font-display text-[11px] text-brand-gold uppercase tracking-[0.2em] mb-2 font-bold">
                      {info.label}
                    </h4>
                    {info.href ? (
                      <a href={info.href} className="font-body text-[#1A0F0F] text-base lg:text-lg font-medium hover:text-brand-green transition-colors block">
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-body text-[#1A0F0F] text-base lg:text-lg font-medium leading-relaxed">
                        {info.value}
                      </p>
                    )}
                    
                    {/* Animated Line Separator */}
                    {!isLast && (
                      <>
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1A0F0F]/5"></div>
                        <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-gold transition-all duration-700 ease-out group-hover:w-full"></div>
                      </>
                    )}
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
