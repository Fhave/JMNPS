import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Academics", "/academics"],
  ["Admissions", "/admissions"],
  ["Calendar", "/calendar"],
  ["News & Updates", "/news"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-border-light dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg">
            <svg
              className="w-7 h-7 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M12 2L3 7v10l9 5 9-5V7L12 2z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="font-bold text-lg text-primary-dark dark:text-text-dark">
            [School Name]
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(([label, to]) => {
            const active = location.pathname === to;

            return (
              <Link
                key={label}
                to={to}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors
                  ${
                    active
                      ? "bg-primary/10 text-primary-dark dark:text-primary"
                      : "text-secondary-text-light dark:text-secondary-text-dark hover:text-primary-dark dark:hover:text-primary"
                  }
                `}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2 rounded-md text-primary-dark dark:text-text-dark"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Slide-in drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-background-light dark:bg-background-dark
        border-l border-border-light dark:border-border-dark
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}
        md:hidden z-50`}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-border-light dark:border-border-dark">
          <span className="font-semibold text-primary-dark dark:text-text-dark">
            Menu
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="px-4 py-6 space-y-2">
          {links.map(([label, to]) => {
            const active = location.pathname === to;

            return (
              <Link
                key={label}
                to={to}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors
                  ${
                    active
                      ? "bg-primary/10 text-primary-dark dark:text-primary"
                      : "text-text-light dark:text-text-dark hover:bg-subtle-light dark:hover:bg-subtle-dark"
                  }
                `}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </header>
  );
}
