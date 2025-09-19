import { Mail, Phone, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] text-gray-300">
      {/* Top Section */}
      <div className="py-16 px-6 md:px-12 border-b border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={150}
              height={50}
              className="mb-6"
            />
            <p className="text-gray-400 leading-relaxed">
              We provide world-class digital marketing services and help brands
              grow with innovative strategies, technology, and design solutions.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-5">
            <h3 className="text-white font-semibold text-lg mb-3">
              Contact Us
            </h3>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-green-400" />
              <span>thinklilatech@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-400" />
              <span>+880 176 6913 719</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-green-400" />
              <span>Mon - Fri, 10am - 5pm</span>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Subscribe Newsletter
            </h3>
            <form className="flex flex-col gap-4">
              <div className="flex bg-gray-900 rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-transparent text-gray-300 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 bg-green-500 hover:bg-green-600 text-black font-semibold transition"
                >
                  Subscribe
                </button>
              </div>
              <label className="flex items-start gap-2 text-sm text-gray-400">
                <input
                  type="checkbox"
                  className="mt-1 accent-green-500 cursor-pointer"
                />
                <span>
                  I agree to the{" "}
                  <a href="#" className="underline text-green-400">
                    Privacy Policy
                  </a>
                </span>
              </label>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-6 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          {/* Left */}
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-green-400 font-semibold">
              Think&Lila Tech
            </span>
            . All Rights Reserved.
          </p>

          {/* Right */}
          <div className="flex gap-6">
            {["Home", "About", "Services", "Contact"].map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                className="hover:text-green-400 transition-colors duration-200"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
