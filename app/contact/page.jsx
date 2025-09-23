"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-extrabold">Get in Touch</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Have questions, feedback, or partnership ideas?  
            We’d love to hear from you.  
            Our team is available 24/7 to assist with technical, billing,
            or product inquiries.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <ContactCard
            icon={<Phone className="w-8 h-8 text-pink-400 mb-3" />}
            title="Call Us"
            text="+234 800 000 0000"
          />
          <ContactCard
            icon={<Mail className="w-8 h-8 text-indigo-400 mb-3" />}
            title="Email"
            text="support@silvent.com"
          />
          <ContactCard
            icon={<MapPin className="w-8 h-8 text-green-400 mb-3" />}
            title="Office"
            text="Silvent HQ, 45 Marina Road, Lagos, Nigeria"
          />
          <ContactCard
            icon={<Clock className="w-8 h-8 text-purple-400 mb-3" />}
            title="Working Hours"
            text="Mon – Fri: 9am – 8pm (WAT)"
          />
        </div>

        {/* Social Links */}
        <div className="text-center space-y-4">
          <p className="text-lg text-white/70">Follow us on social media</p>
          <div className="flex justify-center gap-6">
            <Social icon={<Facebook />} link="https://facebook.com/silvent" />
            <Social icon={<Twitter />} link="https://twitter.com/silvent" />
            <Social icon={<Linkedin />} link="https://linkedin.com/company/silvent" />
            <Social icon={<Instagram />} link="https://instagram.com/silvent" />
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center">Send a Message</h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid gap-6 bg-white/10 p-8 rounded-xl shadow-lg"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-md p-3 bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-md p-3 bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full rounded-md p-3 bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 transition text-white font-semibold py-3 px-6 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Embed */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-6 text-center">Find Us</h3>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Silvent HQ Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.357... (your-map-code)"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Reusable Components --- */
function ContactCard({ icon, title, text }) {
  return (
    <div className="bg-white/10 p-8 rounded-xl text-center hover:bg-white/20 transition">
      {icon}
      <h4 className="text-2xl font-bold mb-2">{title}</h4>
      <p className="text-white/70">{text}</p>
    </div>
  );
}

function Social({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
    >
      {icon}
    </a>
  );
}
