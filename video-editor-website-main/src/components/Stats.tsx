"use client";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Clock, Award } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: Sparkles,
      number: "50+",
      label: "Projects Completed",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      number: "100K+",
      label: "Views Generated",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      number: "24-48h",
      label: "Average Turnaround",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Award,
      number: "5★",
      label: "Client Satisfaction",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-cinematic-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-2xl bg-gradient-to-br ${stat.color} p-3 sm:p-4 flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <motion.h3
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2"
              >
                {stat.number}
              </motion.h3>
              <p className="text-sm sm:text-base text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
