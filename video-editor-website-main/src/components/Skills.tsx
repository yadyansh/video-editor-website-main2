"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Film, Scissors, Palette, Music, Zap, Image as ImageIcon } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-white">
            What I&apos;m <span className="bg-gradient-to-r from-accent-blue to-accent-gold bg-clip-text text-transparent">Good At</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tools and skills I use for video editing
          </p>
        </div>
        <BentoGrid className="max-w-7xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const VideoHeader = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600">
    <video
      src="/videos/day1-editor.mp4"
      className="object-cover w-full h-full opacity-80"
      autoPlay
      loop
      muted
      playsInline
    />
  </div>
);

const ImageHeader = ({ imageUrl, gradient }: { imageUrl: string; gradient: string }) => (
  <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative ${gradient}`}>
    <div 
      className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  </div>
);

const Skeleton = ({ gradient }: { gradient: string }) => (
  <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl ${gradient}`}></div>
);

const items = [
  {
    title: "Video Editing",
    description: "DaVinci Resolve, CapCut for fast and clean edits",
    header: <VideoHeader />,
    icon: <Film className="h-4 w-4 text-accent-blue" />,
  },
  {
    title: "Beat Sync",
    description: "Perfect timing with music for engaging content",
    header: <ImageHeader 
      imageUrl="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop" 
      gradient="bg-gradient-to-br from-pink-600 to-purple-600" 
    />,
    icon: <Music className="h-4 w-4 text-pink-400" />,
  },
  {
    title: "Thumbnail Design",
    description: "Canva designs that get clicks",
    header: <ImageHeader 
      imageUrl="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop" 
      gradient="bg-gradient-to-br from-orange-600 to-yellow-600" 
    />,
    icon: <ImageIcon className="h-4 w-4 text-orange-400" />,
  },
  {
    title: "Quick Turnaround",
    description: "Fast delivery without compromising quality. Most projects done within 24-48 hours.",
    header: <Skeleton gradient="bg-gradient-to-br from-green-600 to-emerald-600 animate-pulse" />,
    icon: <Zap className="h-4 w-4 text-green-400" />,
  },
  {
    title: "Color Correction",
    description: "Basic color grading for consistent look",
    header: <ImageHeader 
      imageUrl="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop" 
      gradient="bg-gradient-to-br from-red-600 to-rose-600" 
    />,
    icon: <Palette className="h-4 w-4 text-red-400" />,
  },
  {
    title: "Smooth Cuts",
    description: "Clean transitions and proper pacing",
    header: <ImageHeader 
      imageUrl="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop" 
      gradient="bg-gradient-to-br from-indigo-600 to-blue-600" 
    />,
    icon: <Scissors className="h-4 w-4 text-indigo-400" />,
  },
  {
    title: "Social Media Ready",
    description: "Optimized for Instagram, YouTube, TikTok. Vertical and horizontal formats with captions and effects.",
    header: <ImageHeader 
      imageUrl="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop" 
      gradient="bg-gradient-to-br from-violet-600 to-purple-600" 
    />,
    icon: <Film className="h-4 w-4 text-violet-400" />,
  },
];

