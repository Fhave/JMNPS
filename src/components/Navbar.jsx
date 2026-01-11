import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  return (
    <header className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg">
            {/* simple icon */}
            <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-bold text-lg text-primary-dark dark:text-text-dark">[School Name]</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {links.map(([label, to]) => (
            <Link key={label} to={to} className="text-secondary-text-light dark:text-secondary-text-dark hover:text-primary-dark dark:hover:text-primary transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden p-2 rounded-md text-primary-dark dark:text-text-dark"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-4 pb-4">
          <div className="flex flex-col space-y-2">
            {links.map(([label, to]) => (
              <Link
                key={label}
                to={to}
                onClick={() => setOpen(false)}
                className="block py-2 px-2 rounded-md text-text-light dark:text-text-dark hover:bg-subtle-light dark:hover:bg-subtle-dark"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}