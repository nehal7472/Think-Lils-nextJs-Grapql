"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Boost your online presence...",
    icon: "📈",
  },
  {
    id: 2,
    title: "Web Development",
    slug: "web-development",
    description: "Custom, scalable websites...",
    icon: "💻",
  },
  {
    id: 3,
    title: "Brand Strategy",
    slug: "brand-strategy",
    description: "Crafting memorable brands...",
    icon: "🎨",
  },
  {
    id: 4,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "User-friendly, modern designs...",
    icon: "🖌️",
  },
  {
    id: 5,
    title: "E-commerce Solutions",
    slug: "ecommerce-solutions",
    description: "High-performing online stores...",
    icon: "🛒",
  },
  {
    id: 6,
    title: "Consulting",
    slug: "consulting",
    description: "Expert advice for growth...",
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
            <Link href={`/services/${service.slug}`}>
              <div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
