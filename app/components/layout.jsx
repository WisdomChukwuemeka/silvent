"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Home,
  Info,
  Phone,
  MessageSquare,
  Settings,
  User,
  LogOut,
  Bell,
  Users,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isLoggin, setIsLoggin] = useState(false)
  
  useEffect(() => {
  const checkAuth = () => setIsLoggin(!!localStorage.getItem("access_token"));
  checkAuth();
  window.addEventListener("authChange", checkAuth);
  return () => window.removeEventListener("authChange", checkAuth);
}, []);


  const router = useRouter();

  const [dropdownOpen, setDropdownOpen] = useState(false);

   const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("is_superuser");
    setIsLoggin(false);
    router.push("/login")
  };

  const navLinks = [
    { name: "Home", icon: Home, link: "/" },
    { name: "About", icon: Info, link: "/about" },
    { name: "Contact", icon: Phone, link: "/contact" },
    { name: "Support", icon: MessageSquare, link: "/support" },
  ];

  const menuItems = [
    { name: "Live Call", icon: Phone, link: "/live-call" },
    { name: "Voice Call", icon: Phone, link: "/voice-call" },
    { name: "Messages", icon: MessageSquare, link: "/messages" },
    { name: "Monetization", icon: DollarSign, link: "/monetization" },
    { name: "Settings", icon: Settings, link: "/settings" },
    { name: "Profile", icon: User, link: "/profile" },
    { name: "Support", icon: Info, link: "/support" },
    { name: "About", icon: Info, link: "/about" },
    { name: "Notification", icon: Bell, link: "/notifications" },
    { name: "Partners", icon: Users, link: "/partners" },
  ];
  const Logoutbutton = [
      { name: "Logout", icon: LogOut, link: "/logout" },
  ]

  return (
    <header className="w-full bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg neon-glass 
    fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 gap-4">
        {/* Logo */}
        <Link href="/">
       
            <Image 
            src="/stack/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="w-20 h-10 md:w-25 md:h-15 xl:w-30 xl:h-20"
            />
            </Link>
         

        {/* Search Input */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-white font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              className="hover:text-pink-400 flex items-center gap-1"
            >
              <link.icon className="w-5 h-5" />
              {link.name}
            </a>
          ))}
        </nav>

        {/* Dropdown Menu */}
        <div className="relative">
          <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
           className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition"
            >
          <div
            className={`w-6 h-6 flex items-center justify-center neon-border ${
              dropdownOpen ? "active" : ""
            }`}
          >
            <div className="w-3 h-3 bg-white"></div>
          </div>
        </button>


          {dropdownOpen && (
  <div className="absolute right-0 mt-5 w-70 md:w-100 xl:w-140
                  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950
                  backdrop-blur-md border border-white/20
                  rounded-lg shadow-lg text-white md:h-200
                  p-3 grid grid-cols-2 md:grid-cols-2 gap-3">
    {menuItems.map((item) => (
      <a
        key={item.name}
        href={item.link}
        className="flex flex-col items-center gap-1 p-3 rounded hover:bg-white/20 transition text-center"
      >
        <item.icon className="w-6 h-6" />
        <span className="text-base sm:text-[0.8rem] md:text-[1.2rem] xl:text-[1.4rem]">{item.name}</span>
      </a>
    ))}
    
    {isLoggin ? (
      <div className="text flex justify-center items-center"
      onClick={handleLogout}>
        <div>
          {Logoutbutton.map((item) => (
            <div key={item.name} className="text flex flex-col items-center gap-1 p-3 rounded hover:bg-white/20 transition text-center">
              <item.icon />
              <span className="text">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    ) : ("")}
    
  </div>
)}

        </div>
      </div>
    </header>
  );
}
