import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Left Image with Overlay */}
        <div className="relative h-[250px] md:col-span-2 md:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1702471897388-5d9c50ea434e?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Work With Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Right Content */}
        <div className="bg-emerald-400/95 md:col-span-3 flex flex-col justify-center px-6 py-10 md:px-16">
          <p className="text-sm font-medium text-black uppercase tracking-wide mb-3">
            — Work With Us
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
            Have Any Projects In Mind? <br /> Let’s Talk Today
          </h2>
          <p className="text-lg text-black/80 mb-10 max-w-xl">
            We’d love to hear your ideas. Share your vision and let’s create
            something extraordinary together.
          </p>

          {/* CTA Button */}
          <button className="group px-8 py-4 bg-black text-white font-semibold rounded-xl flex items-center gap-3 w-fit hover:bg-white hover:text-black border border-black transition-all duration-300 shadow-lg">
            Let’s Work Together
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
