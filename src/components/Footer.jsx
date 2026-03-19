import { Facebook, Twitter, Mail, Send, MapPin, Phone } from "lucide-react";

export const Footer = () => (
  <footer className="bg-[#1e1b4b] px-6 pt-20 pb-10 text-white">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-4">
      {/* School Info */}
      <div className="space-y-6">
        <h2 className="text-3xl font-black tracking-tight">
          JonMay Nursery and Primary Schools
        </h2>
        <p className="max-w-xs leading-relaxed text-gray-400">
          A joyful place where little minds grow, explore, and shine. We nurture
          curiosity, creativity, and confidence every day.
        </p>

        <div className="flex items-start">
          <div className="flex items-center">
            <MapPin size={14} className="mt-1 mr-2" />
          </div>
          <div className="text-sm text-gray-400">
            2, Lateef Musa Street, Off LASU road, Opposite Winners' Chapel, Near
            Akesan Bus-Stop, Akesan, Lagos
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex items-center">
            <Phone size={14} className="mt-1 mr-2" />
          </div>
          <div className="text-sm text-gray-400">
            +234 803 303 9284, +234 803 302 2278
          </div>
        </div>

        <div className="flex gap-4 pt-2">
          {[Facebook, Twitter, Mail].map((Icon, i) => (
            <button
              key={i}
              aria-label="Social link"
              className="rounded-xl bg-white/5 p-3 transition-all hover:scale-105 hover:bg-[#7c3aed]"
            >
              <Icon size={20} />
            </button>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="mb-6 text-lg font-bold text-[#facc15]">School Life</h4>
        <ul className="space-y-4 font-medium text-gray-400">
          <li className="cursor-pointer transition-colors hover:text-white">
            Admissions
          </li>
          <li className="cursor-pointer transition-colors hover:text-white">
            Our Classes
          </li>
          <li className="cursor-pointer transition-colors hover:text-white">
            School Calendar
          </li>
          <li className="cursor-pointer transition-colors hover:text-white">
            Photo Gallery
          </li>
        </ul>
      </div>

      {/* Parent Resources */}
      <div>
        <h4 className="mb-6 text-lg font-bold text-[#facc15]">For Parents</h4>
        <ul className="space-y-4 font-medium text-gray-400">
          <li className="cursor-pointer transition-colors hover:text-white">
            Parent Portal
          </li>
          <li className="cursor-pointer transition-colors hover:text-white">
            School Policies
          </li>
          <li className="cursor-pointer transition-colors hover:text-white">
            Uniform Guide
          </li>
          <li className="cursor-pointer transition-colors hover:text-white">
            Contact Us
          </li>
        </ul>
      </div>

      {/* Newsletter */}
      <div className="mb-auto rounded-4xl border border-[#7c3aed]/20 bg-[#7c3aed]/10 p-8">
        <h4 className="mb-4 text-lg font-bold">Stay Updated</h4>
        <p className="mb-4 text-sm text-gray-300">
          Subscribe to receive school news, event reminders, and important
          announcements.
        </p>

        <div className="flex rounded-2xl bg-white p-1 shadow-inner">
          <input
            type="email"
            placeholder="Parent email address"
            className="w-full border-0 bg-transparent px-4 text-sm text-gray-900 outline-none"
            aria-label="Email address"
          />
          <button
            aria-label="Subscribe"
            className="rounded-xl bg-[#ec4899] p-3 shadow-lg transition-all hover:bg-pink-600"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mx-auto mt-10 max-w-7xl text-center text-xs font-semibold tracking-wider text-gray-500">
      © 2026 JonMay Nursery and Primary Schools. All rights reserved.
    </div>
  </footer>
);
