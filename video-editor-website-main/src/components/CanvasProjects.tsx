"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { Film, Video, Play, Scissors, ExternalLink } from "lucide-react";

const projectVideos = [
  { 
    title: "Project 1", 
    videoUrl: "https://drive.google.com/file/d/1ug29Eib9NnXrKsWVAuigSrG7tcyvnkGC/view",
    description: "Professional video editing showcase",
    color: "emerald",
    icon: <Film className="h-10 w-10" />
  },
  { 
    title: "Project 2", 
    videoUrl: "https://drive.google.com/file/d/1lJV9u-8kaeRMtKjP49Nmf1AHXNh8pwDo/view",
    description: "Dynamic content creation",
    color: "pink",
    icon: <Video className="h-10 w-10" />
  },
  { 
    title: "Project 3", 
    videoUrl: "https://drive.google.com/file/d/1hMDXdOGy4v9FfCZLGj2oqobCzsUDmSz5/view",
    description: "Creative editing techniques",
    color: "purple",
    icon: <Play className="h-10 w-10" />
  },
  { 
    title: "Project 4", 
    videoUrl: "https://drive.google.com/file/d/1g2n0vboLA5QG-udL-kmoFyRjdhv4HAun/view",
    description: "Cinematic storytelling",
    color: "sky",
    icon: <Scissors className="h-10 w-10" />
  },
];

export default function CanvasProjects() {
  const handleProjectClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="canvas-projects" className="py-8 sm:py-10 md:py-12 bg-cinematic-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
            My <span className="bg-gradient-to-r from-accent-blue to-accent-gold bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            <span className="hidden sm:inline">Click on</span><span className="sm:hidden">Tap</span> any card to watch the full video
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 max-w-sm sm:max-w-none mx-auto">
          {projectVideos.map((project, index) => (
            <Card 
              key={project.title}
              title={project.title}
              description={project.description}
              color={project.color}
              icon={project.icon}
              onClick={() => handleProjectClick(project.videoUrl)}
              index={index}
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName={
                  project.color === "emerald" ? "bg-emerald-900" :
                  project.color === "pink" ? "bg-black" :
                  project.color === "sky" ? "bg-sky-600" :
                  "bg-purple-900"
                }
                colors={
                  project.color === "pink" ? [[236, 72, 153], [232, 121, 249]] :
                  project.color === "sky" ? [[125, 211, 252]] :
                  project.color === "purple" ? [[168, 85, 247], [147, 51, 234]] :
                  undefined
                }
                dotSize={2}
              />
              {project.color === "pink" && (
                <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
              )}
        </div>
      </div>
    </section>
  );
}

const Card = ({
  title,
  description,
  color,
  icon,
  children,
  onClick,
  index,
}: {
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  index: number;
}) => {
  const [hovered, setHovered] = React.useState(false);
  
  const gradients = {
    emerald: "from-emerald-500 to-teal-500",
    pink: "from-pink-500 to-purple-500",
    sky: "from-sky-500 to-cyan-500",
    purple: "from-purple-500 to-indigo-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      onTouchStart={() => setHovered(true)}
      className="group border border-white/[0.2] hover:border-accent-blue/50 active:border-accent-blue rounded-xl sm:rounded-2xl flex flex-col relative h-[260px] sm:h-[280px] lg:h-[300px] cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-accent-blue/20 active:scale-[0.98] sm:active:scale-100"
    >
      {/* Background Canvas Effect */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thumbnail Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 z-10 transition-all duration-300">
        {/* Icon with gradient background */}
        <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${gradients[color as keyof typeof gradients]} p-3 sm:p-4 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300`}>
          <div className="text-white transform group-hover:rotate-12 transition-transform duration-300">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-white text-base sm:text-lg lg:text-xl font-bold text-center mb-1 sm:mb-2 transform group-hover:-translate-y-2 transition-all duration-300">
          {title}
        </h3>

        {/* Description - Show on mobile tap, hover on desktop */}
        <p className="text-gray-300 text-xs sm:text-sm text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-2 line-clamp-2">
          {description}
        </p>

        {/* Play Button Indicator */}
        <div className="mt-2 sm:mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <div className="flex items-center gap-1.5 sm:gap-2 text-accent-blue font-semibold text-xs sm:text-sm">
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Watch Video</span>
          </div>
        </div>
      </div>

      {/* Corner decorations - Subtle on mobile */}
      <Icon className="absolute h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6 -top-1.5 sm:-top-2 -left-1.5 sm:-left-2 text-white opacity-30 sm:opacity-50 group-hover:opacity-100 transition-opacity" />
      <Icon className="absolute h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6 -bottom-1.5 sm:-bottom-2 -left-1.5 sm:-left-2 text-white opacity-30 sm:opacity-50 group-hover:opacity-100 transition-opacity" />
      <Icon className="absolute h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6 -top-1.5 sm:-top-2 -right-1.5 sm:-right-2 text-white opacity-30 sm:opacity-50 group-hover:opacity-100 transition-opacity" />
      <Icon className="absolute h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6 -bottom-1.5 sm:-bottom-2 -right-1.5 sm:-right-2 text-white opacity-30 sm:opacity-50 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
