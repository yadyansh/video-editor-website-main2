"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoLoad = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
  };

  useEffect(() => {
    // Force play when component mounts
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.log("Video autoplay prevented:", error);
        });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-cinematic-dark relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-blue/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Video Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative max-w-md lg:max-w-none mx-auto lg:mx-0"
          >
            <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden relative group shadow-2xl border border-accent-blue/30 hover:border-accent-blue/60 transition-all duration-500">
              {/* Video */}
              <video
                key="day1-editor-video"
                ref={videoRef}
                src="/videos/day1-editor.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onLoadedData={handleVideoLoad}
                className="w-full h-full object-cover"
              />
              
              {/* Video Overlay with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black/80 via-transparent to-cinematic-black/40 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Mute Toggle Button - Larger on mobile for touch */}
              <button
                onClick={toggleMute}
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 bg-cinematic-dark/80 hover:bg-accent-blue/90 backdrop-blur-sm p-2.5 sm:p-3 rounded-full transition-all duration-300 border border-white/20 hover:border-accent-blue shadow-lg active:scale-95 sm:hover:scale-110 group/btn"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                ) : (
                  <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                )}
              </button>

              {/* Play Indicator Badge - Responsive sizing */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 bg-accent-blue/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 shadow-lg border border-white/20">
                <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white fill-white animate-pulse" />
                <span className="text-white text-xs sm:text-sm font-semibold">Showcase Reel</span>
              </div>
              
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/30 to-accent-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
            </div>
            
            {/* Decorative Elements - Hidden on small mobile, subtle on larger screens */}
            <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-24 h-24 sm:w-40 sm:h-40 bg-accent-gold/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
            <div className="hidden sm:block absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-20 h-20 sm:w-32 sm:h-32 bg-accent-blue/20 rounded-full blur-2xl sm:blur-3xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hi, I&apos;m Yadyansh
              <span className="block bg-gradient-to-r from-accent-blue to-accent-gold bg-clip-text text-transparent">
                a Video Editor
              </span>
            </motion.h2>

            <motion.div 
              className="space-y-4 sm:space-y-5 text-gray-300 text-base sm:text-lg font-normal leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                I edit Instagram Reels, YouTube Shorts, and videos up to 10 minutes. Fast cuts, good pacing, and beat-synced transitions.
              </p>
              
              <p>
                <span className="text-white font-medium">Tools:</span> Canva, CapCut, DaVinci Resolve
                <br />
                <span className="text-white font-medium">What I do:</span> Captions, text animations, music, sound effects, basic color correction
              </p>
              
              <p>
                Quick turnaround. Happy to share samples or do a test edit.
              </p>

              <div className="flex flex-col gap-3 mt-6 p-4 sm:p-6 bg-cinematic-light/50 border border-cinematic-light rounded-xl">
                <p className="text-white font-medium text-sm sm:text-base">
                  📞 <a href="tel:9350955622" className="text-accent-blue hover:text-accent-gold transition-colors">9350955622</a>
                </p>
                <p className="text-white font-medium text-sm sm:text-base break-all">
                  📧 <a href="mailto:growwitheditor@gmail.com" className="text-accent-blue hover:text-accent-gold transition-colors">growwitheditor@gmail.com</a>
                </p>
              </div>
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
