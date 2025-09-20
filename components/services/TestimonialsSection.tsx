"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";

const testimonials = [
  {
    id: 1,
    name: "Sophia Carter",
    role: "Marketing Manager",
    message:
      "Working with Think & LilaTech was a game-changer! Our online presence skyrocketed, and the team truly understood our brand’s vision.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 2,
    name: "James Lee",
    role: "Startup Founder",
    message:
      "They didn’t just build us a website, they built a digital experience that our customers love. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Creative Director",
    message:
      "Professional, creative, and results-driven. They turned our ideas into reality better than we could imagine.",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        What Our Clients Say
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.id}
            variants={fadeIn("up", idx * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#1E293B] p-8 rounded-2xl shadow-lg"
          >
            <p className="text-gray-300 mb-6">“{t.message}”</p>
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full border-2 border-emerald-500/30"
              />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
