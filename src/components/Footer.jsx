import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 bg-subtle-light dark:bg-subtle-dark text-secondary-text-light dark:text-secondary-text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold text-primary-dark dark:text-text-dark mb-2">[School Name]</h4>
          <p className="text-sm">Nurturing young minds since 1990 — excellence in early years and primary education.</p>
        </div>

        <div className="flex gap-8">
          <div>
            <h5 className="font-semibold mb-2">Explore</h5>
            <ul className="text-sm space-y-1">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/academics" className="hover:underline">Academics</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Support</h5>
            <ul className="text-sm space-y-1">
              <li><Link to="/admissions" className="hover:underline">Admissions</Link></li>
              <li><Link to="/calendar" className="hover:underline">Calendar</Link></li>
              <li><Link to="/news" className="hover:underline">News</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-sm">
          <h5 className="font-semibold mb-2">Contact</h5>
          <p>123 Education Lane<br/>Knowledge City, ST 12345</p>
          <p className="mt-2">© {new Date().getFullYear()} [School Name]. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
