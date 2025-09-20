"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";

const services = [
  {
    id: 1,
    title: "Digital Marketing",
    description:
      "Boost your online presence with targeted campaigns, SEO, and content strategies.",
    icon: "📈",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Custom, scalable, and fast websites built with modern technologies.",
    icon: "💻",
  },
  {
    id: 3,
    title: "Brand Strategy",
    description:
      "Crafting memorable brands that connect emotionally with your audience.",
    icon: "🎨",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Intuitive and user-friendly designs that enhance digital experiences.",
    icon: "🖌️",
  },
  {
    id: 5,
    title: "E-commerce Solutions",
    description:
      "High-performing e-commerce platforms that drive sales and growth.",
    icon: "🛒",
  },
  {
    id: 6,
    title: "Consulting",
    description:
      "Expert advice and strategies to transform your business digitally.",
    icon: "🤝",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        What We Offer
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            variants={fadeIn("up", idx * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#1E293B] p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
