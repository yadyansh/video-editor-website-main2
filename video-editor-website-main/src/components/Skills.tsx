"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Film, Scissors, Palette, Music, Zap, Image as ImageIcon } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-cinematic-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
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
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-900 dark:to-cyan-900">
    <video
      src="/videos/day1-editor.mp4"
      className="object-cover w-full h-full rounded-xl opacity-50"
      autoPlay
      loop
      muted
      playsInline
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
    icon: <Film className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Beat Sync",
    description: "Perfect timing with music for engaging content",
    header: <Skeleton gradient="bg-gradient-to-br from-pink-500 to-purple-500 dark:from-pink-900 dark:to-purple-900" />,
    icon: <Music className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Thumbnail Design",
    description: "Canva designs that get clicks",
    header: <Skeleton gradient="bg-gradient-to-br from-orange-500 to-yellow-500 dark:from-orange-900 dark:to-yellow-900" />,
    icon: <ImageIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Quick Turnaround",
    description: "Fast delivery without compromising quality. Most projects done within 24-48 hours.",
    header: <Skeleton gradient="bg-gradient-to-br from-green-500 to-emerald-500 dark:from-green-900 dark:to-emerald-900" />,
    icon: <Zap className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Color Correction",
    description: "Basic color grading for consistent look",
    header: <Skeleton gradient="bg-gradient-to-br from-red-500 to-rose-500 dark:from-red-900 dark:to-rose-900" />,
    icon: <Palette className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Smooth Cuts",
    description: "Clean transitions and proper pacing",
    header: <Skeleton gradient="bg-gradient-to-br from-indigo-500 to-blue-500 dark:from-indigo-900 dark:to-blue-900" />,
    icon: <Scissors className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Social Media Ready",
    description: "Optimized for Instagram, YouTube, TikTok. Vertical and horizontal formats with captions and effects.",
    header: <Skeleton gradient="bg-gradient-to-br from-violet-500 to-purple-500 dark:from-violet-900 dark:to-purple-900" />,
    icon: <Film className="h-4 w-4 text-neutral-500" />,
  },
];
