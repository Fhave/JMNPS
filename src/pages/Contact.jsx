import React from "react";
import { Menu, Mail, Phone } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-text-light-primary dark:text-text-dark-primary font-display">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 container mx-auto">
        <div className="flex items-center gap-3">
          <div className="bg-brand-purple p-2 rounded-lg">
            <svg
              className="w-8 h-8 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L3 7V17L12 22L21 17V7L12 2ZM12 4.145L18.42 8L12 11.855L5.58 8L12 4.145ZM4 8.78V16.22L11 20.36V12.64L4 8.78Z" />
            </svg>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary">
          {["Home", "About", "Academics", "Admissions", "Calendar", "News & Updates"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="hover:text-brand-purple dark:hover:text-primary transition-colors"
              >
                {link}
              </a>
            )
          )}
          <a href="#" className="text-brand-purple dark:text-primary font-semibold">
            Contact
          </a>
        </nav>
        <button className="md:hidden">
          <Menu className="text-text-light-primary dark:text-text-dark-primary" />
        </button>
      </header>

      {/* Main */}
      <main className="py-16 sm:py-24 px-6 container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-12">
          {/* Hero */}
          <section className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-text-light-primary dark:text-text-dark-primary">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-text-light-secondary dark:text-text-dark-secondary">
              We're here to help and answer any question you might have. We look forward to
              hearing from you.
            </p>
          </section>

          {/* Contact Methods */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-brand-purple/10 dark:bg-brand-purple/20 p-3 rounded-full">
                  <Mail className="text-brand-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-text-light-secondary dark:text-text-dark-secondary">
                    info@schoolname.edu
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-brand-purple/10 dark:bg-brand-purple/20 p-3 rounded-full">
                  <Phone className="text-brand-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-text-light-secondary dark:text-text-dark-secondary">
                    (123) 456-7890
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section>
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      placeholder="John"
                      className="block w-full rounded border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-brand-purple focus:border-brand-purple dark:focus:ring-primary dark:focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      placeholder="Doe"
                      className="block w-full rounded border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-brand-purple focus:border-brand-purple dark:focus:ring-primary dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="block w-full rounded border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-brand-purple focus:border-brand-purple dark:focus:ring-primary dark:focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message here..."
                    rows="5"
                    className="block w-full rounded border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-brand-purple focus:border-brand-purple dark:focus:ring-primary dark:focus:border-primary"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-primary px-8 py-3 rounded text-brand-purple font-semibold hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside>
          <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm h-full">
            <h2 className="text-2xl font-bold mb-4">Our Location</h2>
            <div className="mb-4">
              <img
                className="w-full h-64 object-cover rounded"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB26QTOwqNARB92cK8LMMNmMoBXufDgQZYJs8C4j6O2hFLFrWMv21d6sTPm1IoxQ7tXRo4SNmv7zmD83xrMW9_7j8PERQ7zvfxzDiSp4SlEEzjfkNe81YkjwWMVA39Xh-x2v3y9Ec52sS4Y31b5eq4px-qEc1xUa-9P9oWLJL_EzrnOUrp5iLRjzw9vK7fexiX7vyRRNxC6za9dkRItXhabBgxbs2NsOf6G16EoUm4c1uYHf05UjiUOtRwIu8ZIPM2p_pfkErQebHta"
                alt="Map showing the school's location"
              />
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">School Address</h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                123 Education Lane
                <br />
                Knowledge City, ST 12345
                <br />
                United States
              </p>
              <h3 className="font-semibold text-lg pt-2">School Hours</h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                Monday - Friday: 8:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};
