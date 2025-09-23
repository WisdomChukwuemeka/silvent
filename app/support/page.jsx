"use client";

import React from "react";
import {
  LifeBuoy,
  Mail,
  Phone,
  MessageSquare,
  FileText,
  Users,
} from "lucide-react";

export default function SupportSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white neon-text mb-6">
          Need Help? We’re Here for You
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-12">
          Our dedicated team provides round-the-clock assistance.  
          Choose the support option that fits your needs.
        </p>

        {/* Support Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Knowledge Base */}
          <div className="bg-white/10 rounded-xl p-8 hover:bg-white/20 transition">
            <LifeBuoy className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Knowledge Base
            </h3>
            <p className="text-white/70 mb-4">
              Step-by-step guides, FAQs, and troubleshooting tips.
            </p>
            <a href="/docs" className="text-pink-400 font-medium hover:underline">
              View Articles →
            </a>
          </div>

          {/* Email Support */}
          <div className="bg-white/10 rounded-xl p-8 hover:bg-white/20 transition">
            <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Email Support
            </h3>
            <p className="text-white/70 mb-4">
              Get detailed help—our team responds within 24 hours.
            </p>
            <a
              href="mailto:support@silvent.com"
              className="text-pink-400 font-medium hover:underline"
            >
              support@silvent.com
            </a>
          </div>

          {/* Phone Support */}
          <div className="bg-white/10 rounded-xl p-8 hover:bg-white/20 transition">
            <Phone className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              24/7 Phone Line
            </h3>
            <p className="text-white/70 mb-4">
              Speak directly with a specialist any time, any day.
            </p>
            <a
              href="tel:+2349000000000"
              className="text-pink-400 font-medium hover:underline"
            >
              +234 900 000 0000
            </a>
          </div>

          {/* Live Chat */}
          <div className="bg-white/10 rounded-xl p-8 hover:bg-white/20 transition">
            <MessageSquare className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
            <p className="text-white/70 mb-4">
              Instant answers from our support agents right in your browser.
            </p>
            <button className="text-pink-400 font-medium hover:underline">
              Start Chat →
            </button>
          </div>

          {/* Documentation */}
          <div className="bg-white/10 rounded-xl p-8 hover:bg-white/20 transition">
            <FileText className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Developer Docs
            </h3>
            <p className="text-white/70 mb-4">
              API references, integration examples, and SDK downloads.
            </p>
            <a href="/developer" className="text-pink-400 font-medium hover:underline">
              Explore Docs →
            </a>
          </div>

          {/* Community Forum */}
          <div className="bg-white/10 rounded-xl p-8 hover:bg-white/20 transition">
            <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Community Forum
            </h3>
            <p className="text-white/70 mb-4">
              Share tips, ask questions, and collaborate with other users.
            </p>
            <a href="/community" className="text-pink-400 font-medium hover:underline">
              Join the Forum →
            </a>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-white/60 text-sm">
          Response times may vary during high traffic periods, but we’ll always
          get back to you as soon as possible.
        </p>
      </div>
    </section>
  );
}
