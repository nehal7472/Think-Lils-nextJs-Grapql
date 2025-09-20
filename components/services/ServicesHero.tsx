"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";

export default function ServicesHero() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-emerald-600/10 via-transparent to-[#0A1019] text-center">
      <motion.h1
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        className="text-5xl md:text-6xl font-extrabold"
      >
        Our <span className="text-emerald-400">Services</span>
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
      >
        From branding to web development, we craft digital experiences that
        drive results and leave lasting impressions.
      </motion.p>
    </section>
  );
}
