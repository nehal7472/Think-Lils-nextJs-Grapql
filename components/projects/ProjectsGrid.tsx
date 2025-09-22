"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";
import Link from "next/link";
import { projects } from "@/lib/projects"; // ✅ import shared data

export default function ProjectsGrid() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        More of Our Work
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            variants={fadeIn("up", idx * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl shadow-lg"
          >
            <Link href={`/projects/${project.id}`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.category}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
