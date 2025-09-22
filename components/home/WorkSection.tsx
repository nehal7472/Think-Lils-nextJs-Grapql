"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";
import { workSteps } from "@/lib/workSteps";
import Link from "next/link";

export default function WorkSection() {
  return (
    <section
      id="projects"
      className="relative bg-[#0A1019] py-20 overflow-hidden"
    >
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
          {workSteps.map((step, i) => (
            <motion.div
              key={step.id}
              variants={fadeIn("up", i * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-md hover:shadow-emerald-400/30 transition-all hover:-translate-y-2"
            >
              <Link href={`/work/${step.slug}`}>
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-500/10 mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-emerald-400" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {step.description}
                </p>

                {/* Link */}
                <span className="inline-flex items-center gap-2 text-emerald-400 font-medium">
                  Learn More →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
