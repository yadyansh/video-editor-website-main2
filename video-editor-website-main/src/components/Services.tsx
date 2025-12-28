"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Film, Palette, Sparkles, Share2, Zap } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Video Editing",
    description: "YouTube videos, Instagram Reels, and short-form content. Clean cuts, good pacing.",
    features: ["YouTube Videos", "Instagram Reels", "Short Films", "Commercial Ads"]
  },
  {
    icon: Palette,
    title: "Thumbnail Design",
    description: "Custom thumbnails for YouTube that get clicks.",
    features: ["YouTube Thumbnails", "Custom Graphics", "Quick Delivery", "Revision Included"]
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Animated text, titles, and simple effects.",
    features: ["Animated Titles", "Lower Thirds", "Text Effects", "Simple VFX"]
  },
  {
    icon: Share2,
    title: "Social Media Content",
    description: "Vertical and horizontal edits for social platforms.",
    features: ["Instagram Reels", "TikTok Videos", "YouTube Shorts", "LinkedIn Videos"]
  },
  {
    icon: Zap,
    title: "Transitions",
    description: "Smooth transitions and effects that keep the flow going.",
    features: ["Beat Sync", "Speed Ramps", "Smooth Cuts", "Creative Wipes"]
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 sm:py-32 bg-cinematic-black relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-blue rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            What I <span className="bg-gradient-to-r from-accent-blue to-accent-gold bg-clip-text text-transparent">Do</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Video editing services for content creators and businesses
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 bg-cinematic-dark border border-cinematic-light rounded-2xl hover:border-accent-blue/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(74,158,255,0.15)]">
                {/* Icon */}
                <div className="w-14 h-14 mb-6 rounded-xl bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-accent-blue" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-blue transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-blue/0 to-accent-gold/0 group-hover:from-accent-blue/5 group-hover:to-accent-gold/5 transition-all duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-6">
            Need a custom package or have a unique project in mind?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-blue/80 hover:from-accent-blue/90 hover:to-accent-blue/70 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,158,255,0.5)]"
          >
            Let&apos;s Discuss Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
