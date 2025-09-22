"use client";

import Image from "next/image";

export const Homepage = () => {
  return (
    <>
    <div className="bg-gradient-to-br from-black via-black to-red-950 text-white pt-0">
      {/* HERO SECTION */}
      <section className=" relative flex items-center justify-center aspect-2/2 sm:aspect-3/4 md:aspect-4/4 lx:aspect-4/3">
        <Image
          src="/stack/hero.png" // replace with your hero image
          alt="Hero Background"
          fill
          className=" object-cover brightness-75"
        />
         {/* Black overlay with slight opacity */}
  <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 neon-text">
            Connect Instantly with Video & Text Messaging
          </h1>
          <p className="text-lg md:text-2xl mb-6 text-white/80">
            Experience seamless communication with your friends, family, and colleagues.
          </p>
          <button className="bg-pink-400 hover:bg-pink-500 px-8 py-3 rounded-lg font-bold text-white neon-button transition">
            Get Started
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-8 flex flex-col md:flex-row justify-center items-center md:gap-3 xl:gap-4 bg-white/5">
        {/* Image on Left */}
          <Image
            src="/stack/about.png" // replace with your image
            alt="Woman holding a book"
            width={250}
            height={250}
            className="rounded-full"
          />
        {/* Text on Right */}
        <div className="flex flex-col gap-6 md:max-w-4xl md:mx-auto xl:max-w-7xl xl:mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold neon-text">About Our Platform</h2>
          <p className="text-white/80 text-lg md:text-xl">
            Our website offers innovative video calling and instant messaging features that
            allow you to stay connected anytime, anywhere. Enjoy crystal-clear calls, secure
            chats, and a user-friendly interface designed for everyone.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold text-white neon-button transition w-max">
            Learn More
          </button>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-white/10 backdrop-blur-md neon-glass py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-white/20 transition">
            <div className="bg-pink-400 p-4 rounded-full">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h2l1 2h10l1-2h2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold neon-text">Video Calling</h3>
            <p className="text-white/80">
              Enjoy high-quality video calls with friends and family across the globe.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-white/20 transition">
            <div className="bg-purple-400 p-4 rounded-full">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h8m-8 4h6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold neon-text">Instant Messaging</h3>
            <p className="text-white/80">
              Send secure messages instantly with text, images, and files.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 rounded-lg hover:bg-white/20 transition">
            <div className="bg-indigo-400 p-4 rounded-full">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.38 0-2.5 1.12-2.5 2.5S10.62 13 12 13s2.5-1.12 2.5-2.5S13.38 8 12 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold neon-text">Secure & Private</h3>
            <p className="text-white/80">
              All your calls and messages are encrypted end-to-end for maximum privacy.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="text-center py-20 neon-glass">
        <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">Join the Future of Communication</h2>
        <p className="text-white/80 text-lg md:text-xl mb-8">
          Sign up now and experience next-level video calling and messaging.
        </p>
        <button className="bg-pink-400 hover:bg-pink-500 px-8 py-3 rounded-lg font-bold text-white neon-button transition">
          Get Started
        </button>
      </section>
    </div>
    </>
  );
}
