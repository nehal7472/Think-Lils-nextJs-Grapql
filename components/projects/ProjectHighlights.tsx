"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";

const highlights = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Built a scalable online store with seamless checkout, boosting client sales by 40%.",
    image:
      "https://images.unsplash.com/photo-1556742400-b5b7c5121f90?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Branding & Design",
    description:
      "Created a new identity for a startup, driving engagement and establishing a strong digital presence.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ProjectHighlights() {
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
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
