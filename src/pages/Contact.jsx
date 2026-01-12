import React from "react";
import { Menu, Mail, Phone } from "lucide-react";
import Navbar from "../components/Navbar"; // added

export default function ContactUsPage() {
  return (
    <div className="text-text-light-primary dark:text-text-dark-primary min-h-screen bg-background-light font-display dark:bg-background-dark">
      <Navbar />
      {/* Main */}
      <main className="container mx-auto grid grid-cols-1 gap-12 px-6 py-16 sm:py-24 lg:grid-cols-3">
        {/* Left Column */}
        <div className="space-y-12 lg:col-span-2">
          {/* Hero */}
          <section className="mx-auto max-w-3xl text-center">
            <h1 className="text-text-light-primary dark:text-text-dark-primary text-4xl font-bold md:text-6xl">
              Get in Touch
            </h1>
            <p className="text-text-light-secondary dark:text-text-dark-secondary mt-4 text-lg">
              We're here to help and answer any question you might have. We look
              forward to hearing from you.
            </p>
          </section>

          {/* Contact Methods */}
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-brand-purple/10 dark:bg-brand-purple/20 rounded-full p-3">
                  <Mail className="text-brand-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  <p className="text-text-light-secondary dark:text-text-dark-secondary">
                    info@schoolname.edu
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-brand-purple/10 dark:bg-brand-purple/20 rounded-full p-3">
                  <Phone className="text-brand-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <p className="text-text-light-secondary dark:text-text-dark-secondary">
                    (123) 456-7890
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section>
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
              <form className="space-y-6" method="POST">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="text-text-light-secondary dark:text-text-dark-secondary mb-1 block text-sm font-medium"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      placeholder="John"
                      className="focus:ring-brand-purple focus:border-brand-purple block w-full rounded border-border-light bg-background-light dark:border-border-dark dark:bg-background-dark dark:focus:border-primary dark:focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="text-text-light-secondary dark:text-text-dark-secondary mb-1 block text-sm font-medium"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      placeholder="Doe"
                      className="focus:ring-brand-purple focus:border-brand-purple block w-full rounded border-border-light bg-background-light dark:border-border-dark dark:bg-background-dark dark:focus:border-primary dark:focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-text-light-secondary dark:text-text-dark-secondary mb-1 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="focus:ring-brand-purple focus:border-brand-purple block w-full rounded border-border-light bg-background-light dark:border-border-dark dark:bg-background-dark dark:focus:border-primary dark:focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-text-light-secondary dark:text-text-dark-secondary mb-1 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message here..."
                    rows="5"
                    className="focus:ring-brand-purple focus:border-brand-purple block w-full rounded border-border-light bg-background-light dark:border-border-dark dark:bg-background-dark dark:focus:border-primary dark:focus:ring-primary"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="text-brand-purple w-full rounded bg-primary px-8 py-3 font-semibold transition-opacity hover:opacity-90 sm:w-auto"
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
          <div className="bg-surface-light dark:bg-surface-dark h-full rounded-lg p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">Our Location</h2>
            <div className="mb-4">
              <img
                className="h-64 w-full rounded object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB26QTOwqNARB92cK8LMMNmMoBXufDgQZYJs8C4j6O2hFLFrWMv21d6sTPm1IoxQ7tXRo4SNmv7zmD83xrMW9_7j8PERQ7zvfxzDiSp4SlEEzjfkNe81YkjwWMVA39Xh-x2v3y9Ec52sS4Y31b5eq4px-qEc1xUa-9P9oWLJL_EzrnOUrp5iLRjzw9vK7fexiX7vyRRNxC6za9dkRItXhabBgxbs2NsOf6G16EoUm4c1uYHf05UjiUOtRwIu8ZIPM2p_pfkErQebHta"
                alt="Map showing the school's location"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">School Address</h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                123 Education Lane
                <br />
                Knowledge City, ST 12345
                <br />
                United States
              </p>
              <h3 className="pt-2 text-lg font-semibold">School Hours</h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                Monday - Friday: 8:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
