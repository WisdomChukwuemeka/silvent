"use client"
import Link from "next/link"
import Image from "next/image"

export default function Footer () {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-950 to-red-950 text-gray-300 py-10 mt-20 w-full">
      <div className="px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo / Brand */}
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/stack/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full w-20"
            />
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            Connecting friends, family, employers and employee together.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange-500">About</Link></li>
            <li><Link href="/projects" className="hover:text-orange-500">Contact</Link></li>
            <li><Link href="/contact" className="hover:text-orange-500">Support</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2">
            <li>Live Call</li>
            <li>Voice Call</li>
            <li>Messages</li>
            <li>Consulting</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
          <div className="flex space-x-4">
              <Image src="/stack/logo.png" alt="GitHub" width={30} height={30} />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Wisdom Dev. All rights reserved.
      </div>
    </footer>
  )
}
