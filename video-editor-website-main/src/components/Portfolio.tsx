"use client";

import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export const products = [
  {
    title: "Saksham - YouTube Video",
    link: "#",
    thumbnail: "/videos/saksham.mp4",
  },
  {
    title: "Swift Desk - Commercial",
    link: "#",
    thumbnail: "/videos/swift-desk.mp4",
  },
  {
    title: "Task 12 - Short Film",
    link: "#",
    thumbnail: "/videos/task12.mp4",
  },
  {
    title: "Day 1 Editor - Showcase",
    link: "#",
    thumbnail: "/videos/day1-editor.mp4",
  },
  {
    title: "Instagram Reel Edit",
    link: "#",
    thumbnail: "/videos/saksham.mp4",
  },
  {
    title: "YouTube Short",
    link: "#",
    thumbnail: "/videos/swift-desk.mp4",
  },
  {
    title: "Commercial Project",
    link: "#",
    thumbnail: "/videos/task12.mp4",
  },
  {
    title: "Video Editing Demo",
    link: "#",
    thumbnail: "/videos/day1-editor.mp4",
  },
  {
    title: "Content Creation",
    link: "#",
    thumbnail: "/videos/saksham.mp4",
  },
  {
    title: "Quick Edit",
    link: "#",
    thumbnail: "/videos/swift-desk.mp4",
  },
  {
    title: "Thumbnail Design Sample",
    link: "#",
    thumbnail: "/videos/task12.mp4",
  },
  {
    title: "Social Media Content",
    link: "#",
    thumbnail: "/videos/day1-editor.mp4",
  },
  {
    title: "Promo Video",
    link: "#",
    thumbnail: "/videos/saksham.mp4",
  },
  {
    title: "Brand Content",
    link: "#",
    thumbnail: "/videos/swift-desk.mp4",
  },
  {
    title: "Final Cut",
    link: "#",
    thumbnail: "/videos/task12.mp4",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-cinematic-dark relative overflow-hidden">
      <HeroParallax products={products} />
    </section>
  );
}
