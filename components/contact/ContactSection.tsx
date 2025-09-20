"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";

export default function ContactSection() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
      {/* Form */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-[#1E293B] p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-[#0A1019] border border-gray-700 text-white focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-[#0A1019] border border-gray-700 text-white focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-xl bg-[#0A1019] border border-gray-700 text-white focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition-all"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Illustration / Image */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex items-center justify-center"
      >
        <img
          src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=900&q=80"
          alt="Contact illustration"
          className="rounded-2xl shadow-xl"
        />
      </motion.div>
    </section>
  );
}
