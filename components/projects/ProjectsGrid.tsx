"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";

const projects = [
  {
    id: 1,
    title: "Social Media Campaign",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Mobile App Design",
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342b4d16b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Corporate Website",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "SEO Growth Project",
    category: "SEO",
    image:
      "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Product Branding",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    category: "Data Visualization",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
  },
];

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
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
