"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-[#1E293B] p-10 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Send Us a Message
        </h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-[#0A1019] border border-gray-700 text-white focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0A1019] border border-gray-700 text-white focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">Subject</label>
              <input
                type="text"
                placeholder="How can we help?"
                className="w-full px-4 py-3 rounded-xl bg-[#0A1019] border border-gray-700 text-white focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows={5}
                required
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
        ) : (
          <p className="text-center text-emerald-400 text-lg font-medium">
            ✅ Thank you for reaching out! We’ll get back to you soon.
          </p>
        )}
      </motion.div>
    </section>
  );
}
