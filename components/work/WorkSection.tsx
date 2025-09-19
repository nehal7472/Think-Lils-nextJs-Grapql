"use client";

import { Search, Crosshair, BarChart3, ArrowUpRight } from "lucide-react";
import { JSX } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";

type Step = {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
};

const steps: Step[] = [
  {
    id: 1,
    icon: <Search className="w-8 h-8 text-emerald-400" />,
    title: "Research",
    description:
      "Gather insights into consumer behavior, industry trends, and competitors through in-depth research to guide smarter business decisions.",
    link: "#",
  },
  {
    id: 2,
    icon: <Crosshair className="w-8 h-8 text-emerald-400" />,
    title: "Target & Analysis",
    description:
      "Define your audience, analyze data, and optimize strategies to reach the right people with maximum efficiency.",
    link: "#",
  },
  {
    id: 3,
    icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
    title: "Get Results",
    description:
      "Turn insights into measurable growth with data-driven strategies designed to achieve long-lasting impact.",
    link: "#",
  },
];

export default function WorkSection() {
  return (
    <section className="relative bg-[#0A1019] py-20 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 font-medium mb-2">— How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Simple Steps to Get Professional Results
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              variants={fadeIn("up", i * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-md hover:shadow-emerald-400/30 transition-all hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-500/10 mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Link */}
              <a
                href={step.link}
                className="inline-flex items-center gap-2 text-emerald-400 font-medium hover:gap-3 transition-all"
              >
                Learn More <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
