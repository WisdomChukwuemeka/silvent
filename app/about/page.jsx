"use client";

import React from "react";
import {
  Users,
  Globe,
  HeartHandshake,
  Sparkles,
  Cpu,
  ShieldCheck,
  Leaf,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* --- Mission & Vision --- */}
        <section className="grid md:grid-cols-2 gap-12">
          <Card
            icon={<HeartHandshake className="w-12 h-12 text-pink-400 mb-4" />}
            title="Our Mission"
            text="Empower everyone to communicate effortlessly, breaking distance and cost barriers while providing crystal-clear audio and lifelike video."
          />
          <Card
            icon={<Globe className="w-12 h-12 text-indigo-400 mb-4" />}
            title="Our Vision"
            text="A world where real-time video communication feels as natural as face-to-face conversation—secure, inclusive, and accessible to all."
          />
        </section>

        {/* --- Core Values --- */}
        <section>
          <h3 className="text-4xl font-bold text-center mb-12">Core Values</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <ValueCard
              icon={<Users className="w-10 h-10 text-purple-400 mx-auto mb-3" />}
              title="Community"
              text="Designed for people first, fostering deeper connections."
            />
            <ValueCard
              icon={<Sparkles className="w-10 h-10 text-pink-400 mx-auto mb-3" />}
              title="Innovation"
              text="Constantly evolving to deliver cutting-edge experiences."
            />
            <ValueCard
              icon={<ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto mb-3" />}
              title="Trust & Security"
              text="End-to-end encryption and strict privacy standards."
            />
            <ValueCard
              icon={<Globe className="w-10 h-10 text-sky-400 mx-auto mb-3" />}
              title="Accessibility"
              text="Works flawlessly across devices and networks worldwide."
            />
          </div>
        </section>

        {/* --- Technology --- */}
        <section>
          <h3 className="text-4xl font-bold text-center mb-12">Technology</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              icon={<Cpu className="w-12 h-12 text-pink-400 mb-4" />}
              title="Real-Time Engine"
              text="Custom WebRTC infrastructure with minimal lag and HD video."
            />
            <Card
              icon={<ShieldCheck className="w-12 h-12 text-emerald-400 mb-4" />}
              title="Advanced Security"
              text="Rotating keys and zero-knowledge protocols for all calls."
            />
            <Card
              icon={<Sparkles className="w-12 h-12 text-indigo-400 mb-4" />}
              title="AI Enhancements"
              text="Noise removal, auto-framing, and live transcription."
            />
          </div>
        </section>

        {/* --- Sustainability & Privacy --- */}
        <section className="grid md:grid-cols-2 gap-12">
          <Card
            icon={<Leaf className="w-12 h-12 text-green-400 mb-4" />}
            title="Sustainability"
            text="Hosted on renewable energy data centers and optimized for low energy usage."
          />
          <Card
            icon={<ShieldCheck className="w-12 h-12 text-purple-400 mb-4" />}
            title="Privacy by Design"
            text="We never sell data and follow strict GDPR compliance."
          />
        </section>

        {/* --- Global Impact --- */}
        <section>
          <h3 className="text-4xl font-bold text-center mb-12">Global Impact</h3>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <Impact stat="120+" text="Countries actively using Silvent." />
            <Impact stat="99.99%" text="Platform uptime for reliable calls." />
            <Impact stat="1M+" text="Daily calls and messages delivered." />
          </div>
        </section>
      </div>
    </section>
  );
}

/* ---- Small Reusable Components ---- */
function Card({ icon, title, text }) {
  return (
    <div className="bg-white/10 rounded-xl p-8 hover:bg-white/20 transition text-center">
      {icon}
      <h4 className="text-2xl font-bold mb-2">{title}</h4>
      <p className="text-white/70">{text}</p>
    </div>
  );
}

function ValueCard({ icon, title, text }) {
  return (
    <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 text-center">
      {icon}
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-white/70 text-sm">{text}</p>
    </div>
  );
}

function Impact({ stat, text }) {
  return (
    <div className="bg-white/10 rounded-xl p-8 hover:bg-white/20">
      <p className="text-5xl font-extrabold text-pink-400 mb-3">{stat}</p>
      <p className="text-white/70">{text}</p>
    </div>
  );
}
