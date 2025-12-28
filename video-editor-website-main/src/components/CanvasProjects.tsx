"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { Film, Video, Scissors, X } from "lucide-react";

const projectVideos = [
  { title: "Saksham - YouTube Video", video: "/videos/saksham.mp4" },
  { title: "Swift Desk - Commercial", video: "/videos/swift-desk.mp4" },
  { title: "Task 12 - Short Film", video: "/videos/task12.mp4" },
];

export default function CanvasProjects() {
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; video: string } | null>(null);

  return (
    <section id="canvas-projects" className="py-20 bg-cinematic-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            My <span className="bg-gradient-to-r from-accent-blue to-accent-gold bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hover over each card to see the magic
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4">
          <Card 
            title="Saksham - YouTube Video" 
            icon={<Film className="h-10 w-10" />}
            onClick={() => setSelectedVideo(projectVideos[0])}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-emerald-900"
            />
          </Card>
          <Card 
            title="Swift Desk - Commercial" 
            icon={<Video className="h-10 w-10" />}
            onClick={() => setSelectedVideo(projectVideos[1])}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>
          <Card 
            title="Task 12 - Short Film" 
            icon={<Scissors className="h-10 w-10" />}
            onClick={() => setSelectedVideo(projectVideos[2])}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
          </Card>
        </div>

        {/* Video Modal */}
        <AnimatePresence>
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
                className="relative w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute -top-12 right-0 text-white hover:text-accent-blue transition-colors"
                  aria-label="Close video"
                >
                  <X className="w-8 h-8" />
                </button>
                <h3 className="text-white text-2xl font-bold mb-4">{selectedVideo.title}</h3>
                <video
                  src={selectedVideo.video}
                  controls
                  autoPlay
                  className="w-full rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  onClick,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="border border-white/[0.2] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[30rem] cursor-pointer"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
      
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center text-white">
          {icon}
        </div>
        <h2 className="text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
      </div>
    </div>
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
