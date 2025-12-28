"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32 bg-cinematic-dark relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-blue/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative group">
              {/* Placeholder Image - Replace with actual editor photo */}
              <div className="w-full h-full bg-gradient-to-br from-cinematic-gray to-cinematic-light flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-accent-blue/20 flex items-center justify-center">
                    <svg className="w-16 h-16 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">Your Professional Photo Here</p>
                </div>
              </div>
              
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent-gold/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Transforming Footage Into
              <span className="block bg-gradient-to-r from-accent-blue to-accent-gold bg-clip-text text-transparent">
                Visual Narratives
              </span>
            </motion.h2>

            <motion.div 
              className="space-y-5 text-gray-400 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                From <span className="text-accent-gold font-semibold">cinematic edits</span> to high-performance digital content, 
                I transform raw footage into compelling visual narratives.
              </p>
              
              <p>
                My work focuses on <span className="text-white font-medium">pacing, color science, and seamless transitions</span> — ensuring 
                every project feels polished, immersive, and purpose-driven.
              </p>
              
              <p>
                Whether it&apos;s a <span className="text-accent-blue font-semibold">YouTube film, commercial, short-form content</span>, or branded storytelling, 
                I approach every edit with a <span className="text-accent-gold">filmmaker&apos;s mindset</span> — crafting visuals that connect, engage, and elevate your message.
              </p>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {['Storytelling', 'Color Grading', 'Pacing', 'Emotion'].map((skill, index) => (
                <span 
                  key={skill}
                  className="px-6 py-2 bg-cinematic-light border border-accent-blue/30 rounded-full text-sm font-medium hover:border-accent-blue transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
