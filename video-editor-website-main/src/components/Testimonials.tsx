"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Content Creator & YouTuber",
    content: "Absolutely phenomenal work! The color grading and pacing were exactly what I envisioned. My video retention went up 40% after working with this editor. Highly recommended for anyone serious about quality.",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Film Director",
    content: "Working with a true professional. The attention to detail in every frame, the seamless transitions, and the cinematic feel brought our short film to life. Can't wait for the next project together.",
    rating: 5,
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    content: "Our brand video exceeded expectations. The editor understood our vision immediately and delivered a polished, high-end commercial that our team and clients loved. Fast turnaround too!",
    rating: 5,
    avatar: "ER"
  },
  {
    id: 4,
    name: "David Park",
    role: "Music Artist",
    content: "The music video edit was fire! Every cut was on beat, the visual effects were clean, and the overall vibe matched my sound perfectly. This is the editor I'll be working with long-term.",
    rating: 5,
    avatar: "DP"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Corporate Client",
    content: "Professional, responsive, and incredibly skilled. Transformed our raw footage into a compelling corporate video that impressed our stakeholders. The quality speaks for itself.",
    rating: 5,
    avatar: "LT"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-8 sm:py-10 md:py-12 bg-cinematic-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Client <span className="bg-gradient-to-r from-accent-blue to-accent-gold bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Don&apos;t just take my word for it — hear from satisfied clients who trusted me with their vision
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-cinematic-dark border border-cinematic-light rounded-3xl p-12 relative overflow-hidden">
              {/* Decorative Quote */}
              <div className="absolute top-8 right-8 text-8xl text-accent-blue/10 font-serif">&quot;</div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-gold fill-accent-gold" />
                ))}
              </div>

              {/* Testimonial Content */}
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl text-gray-300 leading-relaxed mb-8 relative z-10"
              >
                {currentTestimonial.content}
              </motion.p>

              {/* Client Info */}
              <motion.div
                key={`client-${currentIndex}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-4"
              >
                {/* Avatar */}
                <div className="w-14 h-14 bg-gradient-to-br from-accent-blue to-accent-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {currentTestimonial.avatar}
                </div>
                
                {/* Name & Role */}
                <div>
                  <h4 className="font-bold text-lg">{currentTestimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{currentTestimonial.role}</p>
                </div>
              </motion.div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-gold/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-cinematic-light hover:bg-accent-blue border border-cinematic-light hover:border-accent-blue rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,158,255,0.4)]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-cinematic-light hover:bg-accent-blue border border-cinematic-light hover:border-accent-blue rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,158,255,0.4)]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-accent-blue w-8' 
                      : 'bg-cinematic-light hover:bg-cinematic-gray'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
