"use client";

import { useParams } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";
import Link from "next/link";
import { services } from "@/lib/services";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white">
        <h2>Service not found.</h2>
      </main>
    );
  }

  return (
    <main className="bg-[#0A1019] text-white">
      <div className="pt-24">
        <PageHeader
          title={service.title}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
      </div>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          className="text-4xl font-bold mb-6"
        >
          {service.title}
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          className="text-lg text-gray-300 mb-10"
        >
          {service.description}
        </motion.p>

        {/* Example features (if you want them in lib/services.ts later) */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-[#1E293B] p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-emerald-400 mb-2">
              Why choose {service.title}?
            </h3>
            <p className="text-gray-400">
              Detailed explanation about {service.title} and how it benefits
              your business.
            </p>
          </div>
        </motion.div>

        <div className="pt-24 text-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition"
          >
            Get Started
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            with{" "}
            <span className="underline font-semibold"> {service.title}</span>
          </p>
        </div>
      </section>
    </main>
  );
}
