import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Santu Debnath',
    role: 'Business Owner',
    content: '“I was struggling with inconsistent business growth. After the name correction and timing guidance, my revenue stabilized and started growing steadily.”',
    rating: 5,
    initials: 'SD'
  },
  {
    name: 'Subrata Maity',
    role: 'Corporate Professional',
    content: '“The report was extremely detailed and accurate. It helped me understand why I was facing repeated career issues.”',
    rating: 5,
    initials: 'SM'
  },
  {
    name: 'Tumpa Sikdar',
    role: 'Startup Founder',
    content: '“The branding and domain suggestions gave my startup a strong identity. I started seeing better engagement and trust from clients.”',
    rating: 5,
    initials: 'TS'
  },
  {
    name: 'Ira Mondal',
    role: 'Homemaker',
    content: '“The remedies were simple yet effective. My personal life improved, and I feel more positive and confident now.”',
    rating: 5,
    initials: 'IM'
  }
];

const TestimonialsSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Very slow auto-swiping speed (12 seconds)
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative pt-24 pb-16 lg:pt-[100px] lg:pb-[80px] bg-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{ backgroundImage: 'url("/images/homepage/types of numerlogy BG.png")' }}
      />
      
      <div className="relative z-10 px-6 lg:px-12 max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="font-display text-[#C8AC59] text-[13px] tracking-widest-2xl uppercase mb-3 block font-bold">
            Kind Words
          </span>
          <h2 className="font-display text-[#1A0F0F] leading-tight" style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', letterSpacing: '0.04em' }}>
            Our Customer Thoughts
          </h2>
          
          <div className="flex justify-center gap-2.5 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-700 border border-[#C8AC59] ${
                  i === index ? 'bg-[#C8AC59] scale-110' : 'bg-transparent hover:bg-[#C8AC59]/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Carousel Content - REDUCED GAP from navigations (from mt-24 to mt-12) */}
        <div className="relative max-w-6xl mx-auto mt-12 transition-all duration-500">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative bg-[#FFFADB] rounded-[40px] p-10 lg:p-14 lg:pl-80 flex flex-col lg:flex-row items-center lg:items-start min-h-[200px]"
            >
              {/* Overlapping Decoration Area - Logo Pushed MORE TOWARDS BOTTOM (from -top-16 to -top-8) */}
              <div className="absolute -top-6 lg:-top-8 left-1/2 -translate-x-1/2 lg:left-16 lg:translate-x-0 flex items-center justify-center">
                 {/* Testimonial Logo SVG Decoration Rotating alone */}
                 <div className="relative w-[140px] h-[140px] lg:w-[180px] lg:h-[180px] z-10 animate-slow-spin-reverse opacity-80">
                   <img 
                     src="/Logo/testimonial logo.svg" 
                     alt="Brand Decoration" 
                     className="w-full h-full object-contain"
                   />
                 </div>
              </div>

              {/* Content Area - Elite Spacing Clearances */}
              <div className="w-full text-center lg:text-left mt-24 lg:mt-0 z-10 transition-transform lg:pr-10">
                {/* Testimonial Quote - Tight Gap below */}
                <blockquote className="font-body text-[#1A0F0F]/85 text-[18px] lg:text-[21px] leading-relaxed mb-4 italic w-full">
                  {testimonials[index].content}
                </blockquote>

                {/* Star Ratings - Very Tight Gap below */}
                <div className="flex justify-center lg:justify-start gap-1 mb-3">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C8AC59] text-[#C8AC59]" />
                  ))}
                </div>

                {/* Identity Info - Streamlined Final Design */}
                <div className="space-y-0">
                  <h4 className="font-display text-2xl lg:text-[28px] text-[#C8AC59] leading-tight">
                    {testimonials[index].name} — <span className="text-[#657B4D] font-medium opacity-90">{testimonials[index].role}</span>
                  </h4>
                </div>
              </div>

              {/* SLEEK QUOTE ICON AT RIGHT EXTREME BOTTOM CORNER */}
              <div className="absolute right-6 bottom-6 lg:right-10 lg:bottom-10 opacity-20 select-none pointer-events-none">
                <Quote className="w-10 h-10 lg:w-14 lg:h-14 stroke-[#657B4D] fill-none stroke-[1px] rotate-180" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
