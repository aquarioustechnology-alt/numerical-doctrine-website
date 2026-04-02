import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Santu Debnath',
      role: 'Business Owner',
      image: '/testimonial_business.jpg',
      quote: 'I was struggling with inconsistent business growth. After the name correction and timing guidance, my revenue stabilized and started growing steadily.',
      rating: 5,
    },
    {
      name: 'Subrata Maity',
      role: 'Corporate Professional',
      image: '/testimonial_corporate.jpg',
      quote: 'The report was extremely detailed and accurate. It helped me understand why I was facing repeated career issues.',
      rating: 5,
    },
    {
      name: 'Tumpa Sikdar',
      role: 'Startup Founder',
      image: '/testimonial_startup.jpg',
      quote: 'The branding and domain suggestions gave my startup a strong identity. I started seeing better engagement and trust from clients.',
      rating: 5,
    },
    {
      name: 'Ira Mondal',
      role: 'Homemaker',
      image: '/testimonial_homemaker.jpg',
      quote: 'The remedies were simple yet effective. My personal life improved, and I feel more positive and confident now.',
      rating: 5,
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, rotateY: -10 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative bg-maroon py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-10 opacity-10">
        <Quote className="w-32 h-32 text-gold" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 rotate-180">
        <Quote className="w-32 h-32 text-gold" />
      </div>

      <div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-widest-xl text-gold uppercase mb-4 block">
            Client Stories
          </span>
          <h2
            className="font-display text-ivory uppercase leading-tight mb-4"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              letterSpacing: '0.04em',
            }}
          >
            Real <span className="text-gold">Testimonials</span>
          </h2>
          <p className="font-body text-taupe max-w-2xl mx-auto">
            Hear from our clients who have transformed their lives through numerology.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 lg:p-8 rounded-lg border border-gold/20 bg-espresso/50 hover:border-gold/40 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                <Quote className="w-4 h-4 text-espresso" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-ivory/90 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                />
                <div>
                  <h4 className="font-display text-sm text-ivory uppercase tracking-wider">
                    {testimonial.name}
                  </h4>
                  <p className="font-body text-taupe text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
