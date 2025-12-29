import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 mt-20 bg-subtle-light dark:bg-subtle-dark text-center text-secondary-text-light dark:text-secondary-text-dark">
      <p className="text-sm">© {new Date().getFullYear()} [School Name]. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
