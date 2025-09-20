"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";

export default function CTASection() {
  return (
    <section className="py-20 bg-emerald-600 text-center text-white relative overflow-hidden">
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Let’s Build Something Great Together
      </motion.h2>
      <motion.a
        href="/contact"
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-white hover:text-black border border-black transition-all duration-300"
      >
        Start Your Project <ArrowRight className="w-5 h-5" />
      </motion.a>
    </section>
  );
}
