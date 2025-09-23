"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  MessageSquare,
  LifeBuoy,
  Phone,
  Mail,
  BookOpen,
  Settings,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function SupportSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 text-white">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Intro */}
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold">Support & Help Center</h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Welcome to the Silvent Support Center.  
            Whether you’re troubleshooting a video call, managing your account, or
            exploring advanced features, this page connects you with everything you need.
          </p>
        </header>

        {/* Quick Help Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <QuickCard icon={<HelpCircle />} title="FAQ" text="Find answers to the most common questions quickly." />
          <QuickCard icon={<LifeBuoy />} title="Live Chat" text="Talk to a real person 24/7 for urgent issues." />
          <QuickCard icon={<BookOpen />} title="User Guides" text="Step-by-step documentation for every feature." />
          <QuickCard icon={<Settings />} title="Troubleshooting" text="Detailed fixes for call quality and device setup." />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <FAQList />
        </div>

        {/* Troubleshooting Checklist */}
        <div className="bg-white/10 rounded-xl p-8 space-y-4 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Basic Troubleshooting Steps</h2>
          <ul className="list-decimal list-inside space-y-3 text-white/80">
            <li>Check your internet connection (minimum 5 Mbps recommended).</li>
            <li>Update your browser or Silvent app to the latest version.</li>
            <li>Restart your device and close unnecessary background apps.</li>
            <li>Allow microphone and camera permissions in browser settings.</li>
            <li>Disable VPN or firewall temporarily if calls won’t connect.</li>
            <li>Test your audio and video in <strong>Settings → Devices</strong>.</li>
          </ul>
        </div>

        {/* Community + Live Support */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/10 p-8 rounded-xl shadow-lg space-y-4">
            <h3 className="text-2xl font-bold">Community Forum</h3>
            <p className="text-white/70">
              Join our active community to ask questions, share tips, and vote on new features.  
              Get answers from both Silvent engineers and other power users.
            </p>
            <a
              href="https://community.silvent.com"
              className="inline-block mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Visit Forum
            </a>
          </div>
          <div className="bg-white/10 p-8 rounded-xl shadow-lg space-y-4">
            <h3 className="text-2xl font-bold">24/7 Live Chat</h3>
            <p className="text-white/70">
              Need immediate help? Our support specialists are available any time.
              Average response time is under 2 minutes.
            </p>
            <a
              href="https://silvent.com/live-chat"
              className="inline-block mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Start Live Chat
            </a>
          </div>
        </div>

        {/* Direct Contact */}
        <div className="grid md:grid-cols-3 gap-8">
          <ContactCard icon={<Phone />} title="Call Us" text="+234 800 000 0000" />
          <ContactCard icon={<Mail />} title="Email Support" text="support@silvent.com" />
          <ContactCard icon={<MessageSquare />} title="WhatsApp" text="+234 900 111 2222" />
        </div>
      </div>
    </section>
  );
}

/* --- Reusable Components --- */
function QuickCard({ icon, title, text }) {
  return (
    <div className="bg-white/10 p-8 rounded-xl text-center hover:bg-white/20 transition">
      <div className="flex justify-center text-pink-400 mb-3">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-white/70">{text}</p>
    </div>
  );
}

function ContactCard({ icon, title, text }) {
  return (
    <div className="bg-white/10 p-8 rounded-xl text-center hover:bg-white/20 transition">
      <div className="flex justify-center text-indigo-400 mb-3">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-white/70">{text}</p>
    </div>
  );
}

/* Accordion FAQ */
function FAQList() {
  const faqs = [
    {
      q: "Why can’t I connect to a call?",
      a: "Check your network speed and ensure your firewall or VPN is not blocking WebRTC traffic."
    },
    {
      q: "How do I reset my password?",
      a: "Click 'Forgot Password' on the login page and follow the email instructions."
    },
    {
      q: "Is my video call encrypted?",
      a: "Yes, Silvent uses end-to-end encryption for all calls and messages."
    },
    {
      q: "Can I record a meeting?",
      a: "Hosts can enable recording from the control panel. All participants will be notified."
    },
    {
      q: "Which browsers are supported?",
      a: "Latest versions of Chrome, Edge, Safari, and Firefox are fully supported."
    },
    {
      q: "How do I contact billing support?",
      a: "Email billing@silvent.com or open a ticket through your account dashboard."
    },
  ];
  return (
    <div className="space-y-4">
      {faqs.map((item, idx) => (
        <FAQ key={idx} question={item.q} answer={item.a} />
      ))}
    </div>
  );
}

function FAQ({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white/10 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold hover:bg-white/20 transition"
      >
        {question}
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>
      {open && (
        <div className="px-6 pb-4 text-white/80">
          {answer}
        </div>
      )}
    </div>
  );
}
