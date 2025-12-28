"use client";
import { motion } from "framer-motion";
import { Play, Zap, Award, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Play,
      title: "Fast Delivery",
      description: "Most projects completed within 24-48 hours. Rush orders available.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Beat-Synced Edits",
      description: "Perfect music synchronization for engaging, rhythm-based content.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Professional Quality",
      description: "Clean cuts, color correction, and smooth transitions in every project.",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: Users,
      title: "Unlimited Revisions",
      description: "Your satisfaction is guaranteed. Free revisions until you're happy.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 bg-cinematic-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-white">
            Why Choose <span className="bg-gradient-to-r from-accent-blue to-accent-gold bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Quality video editing with quick turnaround and professional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-cinematic-dark rounded-2xl border border-cinematic-light hover:border-accent-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/10"
            >
              <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
