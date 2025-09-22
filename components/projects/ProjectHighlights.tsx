"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";
import { projects } from "@/lib/projects"; // ✅ use shared data
import Link from "next/link";

export default function ProjectHighlights() {
  // Pick the first 2 projects as "featured"
  const highlights = projects.slice(0, 2);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {highlights.map((project, idx) => (
          <motion.div
            key={project.id}
            variants={fadeIn("up", idx * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#1E293B] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <Link href={`/projects/${project.id}`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
