import { useState } from "react";
import Alert from "./Alert";
import { Facebook, Instagram, Mail, Send, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const clearStatus = () => setStatus({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearStatus();
    setLoading(true);

    const SCRIPT_URL = import.meta.env.VITE_NEWSLETTER_URL;

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          type: "newsletter",
          email,
        }),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Welcome! You've been subscribed.",
        });
        setEmail("");
      } else {
        throw new Error();
      }
    } catch {
      setStatus({ type: "error", message: "Oops! Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#1e1b4b] px-6 pt-20 pb-10 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 border-b border-white/10 pb-16 lg:grid-cols-4">
        {/* School Info - Spans 2 columns on large screens for better balance */}
        <div className="space-y-8 lg:col-span-2">
          <div>
            <h2 className="mb-4 text-3xl font-black tracking-tight">
              JonMay Nursery and Primary Schools
            </h2>
            <p className="max-w-md leading-relaxed text-gray-400">
              A joyful place where little minds grow, explore, and shine. We
              nurture curiosity, creativity, and confidence every day, building
              the future leaders of Nigeria.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 shrink-0 text-[#facc15]" />
              <div className="text-sm leading-relaxed text-gray-400">
                2, Lateef Musa Street, Off LASU road, Opposite Winners' Chapel,
                Near Akesan Bus-Stop, Akesan, Lagos
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-[#facc15]" />
              <div className="text-sm font-bold text-gray-400">
                +234 803 303 9284, +234 803 302 2278
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {[
              { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
              { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
              {
                icon: <Mail size={20} />,
                label: "Email",
                href: "mailto:jonmayschools@gmail.com",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                aria-label={social.label}
                className="rounded-xl bg-white/5 p-3 text-gray-400 transition-all hover:scale-110 hover:bg-[#7c3aed] hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* School Life - Commented out for now */}
        {/* <div>
          <h4 className="mb-6 text-lg font-bold text-[#facc15]">School Life</h4>
          <ul className="space-y-4 font-medium text-gray-400">
            <li className="cursor-pointer transition-colors hover:text-white">Admissions</li>
            <li className="cursor-pointer transition-colors hover:text-white">Our Classes</li>
            <li className="cursor-pointer transition-colors hover:text-white">School Calendar</li>
            <li className="cursor-pointer transition-colors hover:text-white">Photo Gallery</li>
          </ul>
        </div>
        */}

        {/* Parent Resources - Commented out for now */}
        {/* <div>
          <h4 className="mb-6 text-lg font-bold text-[#facc15]">For Parents</h4>
          <ul className="space-y-4 font-medium text-gray-400">
            <li className="cursor-pointer transition-colors hover:text-white">Parent Portal</li>
            <li className="cursor-pointer transition-colors hover:text-white">School Policies</li>
            <li className="cursor-pointer transition-colors hover:text-white">Uniform Guide</li>
            <li className="cursor-pointer transition-colors hover:text-white">Contact Us</li>
          </ul>
        </div>
        */}

        {/* Newsletter - Positioned to the right */}
        <div className="lg:col-span-2">
          <div className="rounded-[2.5rem] border border-[#7c3aed]/20 bg-[#7c3aed]/5 p-8 lg:ml-auto lg:max-w-md">
            <h4 className="mb-4 text-xl font-black text-white">
              Join Our Newsletter
            </h4>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Get the latest updates on school events, term dates, and student
              achievements delivered to your inbox.
            </p>

            <div className="relative">
              <Alert
                type={status.type}
                message={status.message}
                onClose={clearStatus}
              />

              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-1.5 transition-all focus-within:bg-white/10"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Parent email address"
                  className="w-full border-0 bg-transparent px-4 text-sm text-white outline-none placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="flex aspect-square h-12 items-center justify-center rounded-xl bg-[#d1277c] shadow-lg transition-all hover:scale-105 hover:bg-pink-600 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <Send size={18} className="text-white" />
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-4 text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase md:flex-row">
        <p>© 2026 JonMay Nursery and Primary Schools</p>
        <div className="flex gap-8">
          <span className="cursor-pointer transition-colors hover:text-white">
            Privacy Policy
          </span>
          <span className="cursor-pointer transition-colors hover:text-white">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
};
