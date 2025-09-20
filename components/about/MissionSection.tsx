"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";

export default function MissionSection() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          At <span className="text-emerald-400">Think & LilaTech</span>, we
          believe in blending creativity and technology to craft exceptional
          solutions. Our mission is to empower businesses with digital tools
          that inspire growth, strengthen connections, and drive success.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="rounded-2xl bg-emerald-500/10 p-10 text-center shadow-lg"
      >
        <h3 className="text-2xl font-semibold mb-4 text-emerald-400">
          5+ Years Experience
        </h3>
        <p className="text-gray-300">
          Delivering top-tier solutions to clients worldwide.
        </p>
      </motion.div>
    </section>
  );
}
