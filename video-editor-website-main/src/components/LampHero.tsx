"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { ArrowRight } from "lucide-react";

export default function LampHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 text-center px-4"
      >
        <h1 className="bg-gradient-to-br from-slate-50 to-slate-300 py-4 bg-clip-text text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent mb-4 sm:mb-6 leading-tight">
          Video Editing <br /> That Works
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
          I edit videos for YouTube, Instagram, and brands. Clean cuts, good pacing, and quick turnaround.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
          <motion.button
            onClick={() => scrollToSection("portfolio")}
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-accent-blue text-white rounded-full font-medium hover:bg-accent-blue/90 transition-all duration-300 shadow-[0_0_30px_rgba(74,158,255,0.3)] hover:shadow-[0_0_40px_rgba(74,158,255,0.5)] flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-cinematic-gray text-white rounded-full font-medium hover:bg-cinematic-light transition-all duration-300 border border-cinematic-light"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </div>
      </motion.div>
    </LampContainer>
  );
}
