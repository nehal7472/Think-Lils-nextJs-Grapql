import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Content */}
      <div className="relative max-w-5xl  px-6 md:px-12 text-center md:text-left">
        <p className="text-emerald-400 font-semibold tracking-wide uppercase mb-4">
          Marketing Agency
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
          Perfect Marketing <br />
          To Grow Your Dream <br />
          Business
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0">
          We help ambitious brands scale with data-driven strategies, creative
          campaigns, and cutting-edge technology.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg shadow-lg transition-all">
            Get Started Now →
          </Button>
          <Button
            variant="outline"
            className="border-white text-black hover:bg-white  hover:emerald-700 px-8 py-4 rounded-full text-lg transition-all"
          >
            How We Work →
          </Button>
        </div>

        {/* Quality Service */}
        <div className="mt-8 flex items-center justify-center md:justify-start gap-3">
          <span className="text-sm font-medium text-gray-300">
            Trusted by 500+ Clients
          </span>
          <span className="text-emerald-400 text-lg">★★★★★</span>
        </div>
      </div>

      {/* Prev / Next Navigation */}
      <div className="absolute bottom-8 right-8 flex gap-4">
        <Button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm transition-all">
          ← Prev
        </Button>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full text-sm shadow-md transition-all">
          Next →
        </Button>
      </div>
    </section>
  );
}
