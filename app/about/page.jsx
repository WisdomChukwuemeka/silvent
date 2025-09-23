"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-black via-black to-red-950 text-white py-24 px-6 md:px-12 flex flex-col md:flex-row items-center md:gap-16 xl:justify-center">
      {/* ===== Left Image ===== */}
      <Image
        src="/stack/about.png"       // replace with your image path
        alt="Team collaborating"
        width={320}
        height={320}
        className="bg-contain rounded-full shadow-2xl mb-10 md:mb-0"
        priority
      />

      {/* ===== Right Text Content ===== */}
      <div className="flex flex-col gap-6 max-w-2xl xl:max-w-4xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          About Our Platform
        </h1>

        <p className="text-lg md:text-xl xl:text-2xl text-slate-200 leading-relaxed">
          We built this application to make real-time communication simple,
          secure, and fun. Enjoy crystal-clear video calls, instant messaging,
          and a beautifully intuitive interface—whether you’re connecting with
          friends, family, or a global audience.
        </p>

        <p className="text-lg md:text-xl xl:text-2xl text-slate-200 leading-relaxed">
          Your privacy is our top priority: all calls and messages are protected
          with end-to-end encryption. Connect from any device, anywhere, with no
          software downloads required.
        </p>

        <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-xl text-white font-medium transition-colors duration-300 w-max mx-auto md:mx-0">
          Learn More
        </button>
      </div>
    </section>
  );
}
