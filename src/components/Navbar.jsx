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
    <header className="sticky top-0 z-50 border-b border-border-light bg-background-light dark:border-border-dark dark:bg-background-dark">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-lg bg-primary/10 p-2 dark:bg-primary/20">
            <svg
              className="h-7 w-7 text-primary"
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
          <span className="text-primary-dark text-lg font-bold dark:text-text-dark">
            [School Name]
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, to]) => {
            const active = location.pathname === to;

            return (
              <Link
                key={label}
                to={to}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? "text-primary-dark bg-primary/10 dark:text-primary"
                    : "hover:text-primary-dark text-secondary-text-light dark:text-secondary-text-dark dark:hover:text-primary"
                } `}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(true)}
          className="text-primary-dark rounded-md p-2 md:hidden dark:text-text-dark"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
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
        className={`fixed top-0 right-0 h-full w-72 transform border-l border-border-light bg-background-light transition-transform duration-300 ease-in-out dark:border-border-dark dark:bg-background-dark ${open ? "translate-x-0" : "translate-x-full"} z-50 md:hidden`}
      >
        <div className="flex h-16 items-center justify-between border-b border-border-light px-4 dark:border-border-dark">
          <span className="text-primary-dark font-semibold dark:text-text-dark">
            Menu
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="rounded-md p-2"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="space-y-2 px-4 py-6">
          {links.map(([label, to]) => {
            const active = location.pathname === to;

            return (
              <Link
                key={label}
                to={to}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-primary-dark bg-primary/10 dark:text-primary"
                    : "text-text-light hover:bg-subtle-light dark:text-text-dark dark:hover:bg-subtle-dark"
                } `}
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
