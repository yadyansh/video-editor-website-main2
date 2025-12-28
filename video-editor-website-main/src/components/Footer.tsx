"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/grow.witheditor?igsh=bDdxZWVmazl0cmE5",
      color: "hover:text-pink-500"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/yadyansh-garg-2b1654376",
      color: "hover:text-blue-500"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-cinematic-black border-t border-cinematic-light py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand Section */}
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent-blue to-accent-gold bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Video Editor
            </motion.h3>
            <p className="text-gray-400 mb-4">
              Cinematic storytelling through professional video editing and color grading.
            </p>
            <p className="text-gray-500 text-sm">
              DaVinci Resolve Specialist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Testimonials', id: 'testimonials' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-accent-blue transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-cinematic-dark border border-cinematic-light rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:border-current hover:shadow-lg`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-6">
              Available for freelance projects
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cinematic-light my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Video Editor Portfolio. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="text-gray-500 hover:text-accent-blue transition-colors duration-300 text-sm flex items-center gap-2 group"
          >
            Back to top
            <svg 
              className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        {/* Additional Note */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-xs">
            Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
