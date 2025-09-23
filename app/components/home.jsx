"use client";


import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Video,
  MessageSquare,
  Shield,
  Users,
  Star,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

const faqs = [
  {
    q: "Is my data secure?",
    a: "Yes, all calls and messages use end-to-end encryption for maximum privacy.",
  },
  {
    q: "Can I use it on mobile?",
    a: "Absolutely! Our platform works seamlessly on iOS, Android, and desktop browsers.",
  },
  {
    q: "How many participants can join a video call?",
    a: "You can host up to 100 participants in a single call on all plans.",
  },
  {
    q: "Do I need to install software?",
    a: "No installation required—join or host calls directly from any modern web browser.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes, enjoy a 14-day free trial with full access to all premium features.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept major credit cards, PayPal, and selected local payment options.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    image: "/testimony/imageone.png",
    quote:
      "This app changed how I connect with my team. The calls are crystal clear and messaging is instant.",
  },
  {
    id: 2,
    name: "Michael Smith",
    image: "/testimony/imagetwo.png",
    quote:
      "Reliable and easy to use. I can stay in touch with clients anywhere, anytime.",
  },
  {
    id: 3,
    name: "Aisha Bello",
    image: "/testimony/imagethree.png",
    quote:
      "The interface is beautiful and the call quality is unmatched. Highly recommended!",
  },
];

// plans.js or inside the same file
export const plans = [
  {
    id: 1,
    name: "Basic",
    price: 10,
    description: "Great for individual or starter usage."
  },
  {
    id: 2,
    name: "Pro",
    price: 20,
    description: "Perfect for small teams and growing projects."
  },
  {
    id: 3,
    name: "Enterprise",
    price: 30,
    description: "Advanced features for large organizations."
  }
];


export const Homepage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isLoggin, setIsLoggin] = useState(false)
    
    useEffect(() => {
      const updateLogin = () => {
        const token = localStorage.getItem("access_token")
      setIsLoggin(!!token)
      }
      // check initail login state
      updateLogin()
  
      // listen for manual auth change
      window.addEventListener("authChange", updateLogin)
      return () => window,removeEventListener("authChange", updateLogin);
    }, [])

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? undefined : idx));
  };
  return (
    <div className="bg-gradient-to-br from-black via-black to-red-950 text-white pt-0">

      {/* ================= HERO SECTION ================= */}
        <section className="relative flex items-center 
        justify-center aspect-4/5 sm:aspect-3/4 
        md:aspect-4/4 xl:aspect-4/3">
        <Image
          src="/stack/hero.png"
          alt="Hero Background"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 neon-text">
            Connect Instantly with Video & Text Messaging
          </h1>
          <p className="text-lg md:text-2xl mb-6 text-white/80">
            Experience seamless communication with your friends, family, and colleagues.
          </p>
          {isLoggin ? ("") : (
            <Link href={"/register"}>
          <button className="bg-pink-400 hover:bg-pink-500 px-8 py-3 rounded-lg font-bold text-white neon-button transition">
            Get Started
          </button>
          </Link>
          )}
          
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24 px-6 md:px-12 flex flex-col md:flex-row items-center md:gap-12 xl:justify-center">
        <Image
          src="/stack/about.png"
          alt="Smiling woman holding a book"
          width={280}
          height={280}
          className="bg-contain rounded-full shadow-xl mb-10 md:mb-0"
        />
        <div className="flex flex-col gap-6 max-w-2xl xl:max-w-7xl text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            About Our Platform
          </h2>
          <p className="text-lg md:text-xl xl:text-4xl text-slate-200 leading-relaxed">
            Our platform delivers innovative video calling and instant messaging features
            that keep you connected anytime, anywhere. Enjoy crystal-clear calls,
            secure chats, and a seamless, user-friendly interface built for everyone.
          </p>
          <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-xl text-white font-medium transition-colors duration-300 w-max mx-auto md:mx-0 xl:text-3xl">
            Learn More
          </button>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="bg-white/10 backdrop-blur-md neon-glass py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          <div className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-white/20 transition">
            <div className="bg-pink-400 p-4 rounded-full">
              <Video className="w-10 h-10 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold neon-text">Video Calling</h3>
            <p className="text-white/80">
              Enjoy high-quality video calls with friends and family across the globe.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-white/20 transition">
            <div className="bg-purple-400 p-4 rounded-full">
              <MessageSquare className="w-10 h-10 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold neon-text">Instant Messaging</h3>
            <p className="text-white/80">
              Send secure messages instantly with text, images, and files.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-white/20 transition">
            <div className="bg-indigo-400 p-4 rounded-full">
              <Shield className="w-10 h-10 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold neon-text">Secure &amp; Private</h3>
            <p className="text-white/80">
              All your calls and messages are encrypted end-to-end for maximum privacy.
            </p>
          </div>

        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-extrabold mb-12 neon-text">What Users Say</h2>

    <div className="grid md:grid-cols-3 gap-10">
      {testimonials.map((t) => (
        <div key={t.id} className="bg-white/10 p-6 rounded-xl">
          <Image
            src={t.image}
            alt={t.name}
            width={160}               // intrinsic size (for Next.js optimisation)
            height={160}
            className="border-white/30 border-2 w-40 h-40 mx-auto mb-4 rounded-full object-cover"
          />
          <p className="text-white/80 mb-4">“{t.quote}”</p>
          <p className="font-bold">{t.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ================= PRICING ================= */}
      <section className="py-24 bg-white/10">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-extrabold mb-12 neon-text">Affordable Plans</h2>

    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className="group bg-black/60 p-8 rounded-xl flex flex-col items-center 
                     transform transition-transform duration-300 ease-out 
                     hover:scale-105"
        >
          <Users className="w-10 h-10 text-pink-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
          <p className="text-white/80 mb-4">{plan.description}</p>
          <p className="text-3xl font-extrabold mb-6">${plan.price}/mo</p>
          <button className="bg-pink-400 hover:bg-pink-500 px-6 py-2 rounded-lg font-bold text-white">
            Choose Plan
          </button>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ================= FAQ ================= */}
      <section className="py-24 bg-black/40">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-12 text-center neon-text">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-white/20 rounded-xl bg-white/5 backdrop-blur-md">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx}>
                {/* Question row */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center text-left p-5 hover:bg-white/10 transition"
                >
                  <span className="flex items-center gap-2 text-xl font-bold">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-white transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    isOpen ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="p-5 text-white/70">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
      {/* ================= CALL TO ACTION ================= */}
      <section className="text-center py-20 neon-glass">
        <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">
          Join the Future of Communication
        </h2>
        <p className="text-white/80 text-lg md:text-xl mb-8">
          Sign up now and experience next-level video calling and messaging.
        </p>
        <button className="bg-pink-400 hover:bg-pink-500 px-8 py-3 rounded-lg font-bold text-white neon-button transition">
          Get Started
        </button>
      </section>
    </div>
  );
}
