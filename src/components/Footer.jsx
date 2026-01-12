import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 bg-subtle-light text-secondary-text-light dark:bg-subtle-dark dark:text-secondary-text-dark">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h4 className="text-primary-dark mb-2 font-semibold dark:text-text-dark">
            [School Name]
          </h4>
          <p className="text-sm">
            Nurturing young minds since 1990 — excellence in early years and
            primary education.
          </p>
        </div>

        <div className="flex gap-8">
          <div>
            <h5 className="mb-2 font-semibold">Explore</h5>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:underline">
                  Academics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-2 font-semibold">Support</h5>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/admissions" className="hover:underline">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="hover:underline">
                  Calendar
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:underline">
                  News
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-sm">
          <h5 className="mb-2 font-semibold">Contact</h5>
          <p>
            123 Education Lane
            <br />
            Knowledge City, ST 12345
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} [School Name]. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
