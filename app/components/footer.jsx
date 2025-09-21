"use client";

import {
  Home,
  Info,
  Phone,
  MessageSquare,
  Mail,
  Users,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", icon: Home, link: "/" },
    { name: "About", icon: Info, link: "/about" },
    { name: "Contact", icon: Phone, link: "/contact" },
    { name: "Support", icon: MessageSquare, link: "/support" },
  ];

  const socialLinks = [
    { name: "Partners", icon: Users, link: "/partners" },
    { name: "Email", icon: Mail, link: "mailto:support@example.com" },
  ];

  return (
    <footer className="bg-black backdrop-blur-md border-t border-white/20 neon-glass mt-10">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white">
        {/* Logo & Description */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              L
            </div>
            <span className="text-xl font-bold">Logo</span>
          </div>
          <p className="text-white/70 text-sm">
            Your company tagline or short description goes here. Build trust and connect with your users.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.link} className="flex items-center gap-2 hover:text-pink-400 transition">
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social / Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="flex flex-col gap-2">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a href={link.link} className="flex items-center gap-2 hover:text-pink-400 transition">
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
          <p className="text-white/70 text-sm">Subscribe for updates, news, and offers.</p>
          <div className="flex gap-2 mt-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 p-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-4 rounded-lg transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-white/20 mt-8 py-4 text-center text-white/70 text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
