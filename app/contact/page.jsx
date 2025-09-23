"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black/40 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white neon-text">
            Contact Us
          </h2>
          <p className="text-slate-200 text-lg md:text-xl leading-relaxed">
            Have a question, feedback, or partnership idea?
            We’d love to hear from you. Reach out anytime!
          </p>

          <div className="mt-4 space-y-3 text-white/80">
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              support@silvent.com
            </p>
            <p>
              <span className="font-semibold text-white">Phone:</span>{" "}
              +234 900 000 0000
            </p>
            <p>
              <span className="font-semibold text-white">Address:</span>{" "}
              123 Innovation Drive, Port Harcourt
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white/10 p-8 rounded-xl shadow-xl flex flex-col gap-6 text-white"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20
                         focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20
                         focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20
                         focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <button
            type="submit"
            className="bg-pink-400 hover:bg-pink-500 px-8 py-3 rounded-lg font-bold
                       text-white transition duration-300 neon-button"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
