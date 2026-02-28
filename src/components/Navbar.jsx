import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  User,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import Logo from "../assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Determine active page based on current path
  const activePage =
    location.pathname === "/" ? "home" : location.pathname.slice(1);

  const navLinks = [
    { name: "Home", id: "home", path: "/" },
    { name: "About", id: "about", path: "/about" },
    { name: "Academics", id: "academics", path: "/academics" },
    { name: "News", id: "news", path: "/news" },
    { name: "Contact", id: "contact", path: "/contact" },
  ];

  // Close on ESC key and lock scroll when drawer is open
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-[#7c3aed] px-4 py-4 text-white shadow-lg md:px-8">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            className="rounded-lg p-1 transition-colors hover:bg-white/10 lg:hidden"
          >
            <Menu size={28} />
          </button>

          {/* Logo */}
          <div className="flex cursor-pointer items-center gap-2">
            <Link to="/" className="">
              <img
                src={Logo}
                alt="Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden gap-8 font-semibold lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`transition-colors hover:text-[#facc15] ${
                activePage === link.id ? "text-[#facc15]" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        {/* <div className="flex items-center gap-4">
          <Search
            size={22}
            aria-label="Search"
            className="cursor-pointer hover:opacity-80"
          />
          <div
            aria-label="User profile"
            className="cursor-pointer rounded-full bg-[#ec4899] p-2 transition-transform hover:scale-105"
          >
            <User size={20} fill="currentColor" />
          </div>
        </div> */}
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-60 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 left-0 z-70 h-full w-full max-w-xs transform bg-white shadow-2xl transition-transform duration-500 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="mb-10 flex items-center justify-between">
            <span className="flex items-center">
              <img
                src={Logo}
                alt="Logo"
                className="h-8 w-auto object-contain"
              />
            </span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="rounded-xl bg-gray-100 p-2 hover:bg-gray-200"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex w-full items-center justify-between rounded-2xl p-4 text-lg font-bold transition-all ${
                  activePage === link.id
                    ? "bg-[#f3e8ff] text-[#7c3aed]"
                    : "text-gray-800 hover:bg-[#f3e8ff] hover:text-[#7c3aed]"
                }`}
              >
                {link.name}
                <ChevronRight size={20} className="text-gray-300" />
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};
