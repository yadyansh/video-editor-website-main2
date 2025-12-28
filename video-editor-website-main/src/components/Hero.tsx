"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cinematic-black via-cinematic-dark to-cinematic-black"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 grid-pattern" />
        </div>

        {/* Animated Glow */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-gold rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white font-extrabold">
              Video Editing
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent-blue to-accent-gold bg-clip-text text-transparent font-extrabold">
              That Works
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-normal leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I edit videos for YouTube, Instagram, and brands. Clean cuts, good pacing, and quick turnaround.
            <br />
            Every frame is designed with intention — blending emotion, rhythm, and precision to create visuals that truly resonate.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 hover:gap-5 hover:shadow-[0_0_30px_rgba(74,158,255,0.5)]"
            >
              Hire Me
              <ArrowRight className="w-5 h-5 transition-all duration-300" />
            </button>
            
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-accent-gold text-white rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 hover:gap-5"
            >
              <Play className="w-5 h-5" />
              View My Work
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
