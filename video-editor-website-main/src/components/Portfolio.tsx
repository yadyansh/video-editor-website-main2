"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Cinematic Travel Film",
    category: "Short Film",
    thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop",
    videoUrl: "", // Add your YouTube link here
    description: "Epic travel montage with dynamic transitions and storytelling"
  },
  {
    id: 2,
    title: "Product Commercial",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=800&h=600&fit=crop",
    videoUrl: "", // Add your YouTube link here
    description: "High-end product showcase with motion graphics and studio lighting"
  },
  {
    id: 3,
    title: "Music Video Edit",
    category: "Music Video",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop",
    videoUrl: "", // Add your YouTube link here
    description: "Rhythmic editing synchronized with beat, creative visual effects"
  },
  {
    id: 4,
    title: "Custom Thumbnail Designs",
    category: "Thumbnail Design",
    thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    videoUrl: "", // Add your YouTube link here
    description: "High-conversion thumbnail designs for YouTube content creators"
  },
  {
    id: 5,
    title: "Documentary Excerpt",
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
    videoUrl: "", // Add your YouTube link here
    description: "Emotional storytelling with interview cuts and b-roll integration"
  },
  {
    id: 6,
    title: "YouTube Channel Intro",
    category: "YouTube",
    thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop",
    videoUrl: "", // Add your YouTube link here
    description: "Branded intro sequence with custom motion graphics and logo reveal"
  },
];

const categories = ["All", "Short Film", "Commercial", "Music Video", "Thumbnail Design", "Documentary", "YouTube"];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-cinematic-dark relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-accent-blue to-accent-gold bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A selection of recent projects showcasing cinematic editing, color grading, and storytelling
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-accent-blue text-white shadow-[0_0_20px_rgba(74,158,255,0.4)]'
                  : 'bg-cinematic-light text-gray-400 hover:bg-cinematic-gray hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(item)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-cinematic-gray aspect-video">
                {/* Thumbnail */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.thumbnail})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(74,158,255,0.6)]">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium text-accent-gold">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent-blue transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Container */}
              <div className="aspect-video bg-black rounded-2xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Info */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
                <p className="text-gray-400">{selectedVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
