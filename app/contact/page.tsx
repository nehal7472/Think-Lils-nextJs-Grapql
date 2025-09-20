import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import GoogleMap from "@/components/contact/GoogleMap";
import React from "react";

export default function ContactPage() {
  return (
    <main className="bg-[#0A1019] text-white min-h-screen">
      {/* Hero */}
      <section className="py-24 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6">Get in Touch</h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          We’d love to hear from you. Whether you have a project idea, a
          partnership opportunity, or just want to say hello — let’s talk!
        </p>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Info */}
      <ContactInfo />

      {/* Google Map */}
      <GoogleMap />
    </main>
  );
}
