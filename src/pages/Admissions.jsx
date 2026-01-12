import { School, Search, FileText, Handshake, Calendar } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Admissions() {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Step 1: Explore",
      description:
        "Discover our programs, philosophy, and campus. We encourage you to request a prospectus to learn more about us.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Step 2: Apply",
      description:
        "Complete our online application form. It’s a straightforward process to provide us with the necessary information.",
    },
    {
      icon: <Handshake className="h-10 w-10 text-primary" />,
      title: "Step 3: Welcome",
      description:
        "Upon acceptance, you'll receive a welcome package with all the details for starting your journey with us.",
    },
  ];

  const admissionDates = [
    { date: "September 1, 2023", label: "Applications Open" },
    { date: "January 15, 2024", label: "Application Deadline" },
    { date: "March 1, 2024", label: "Decision Notifications Sent" },
  ];

  return (
    <div className="mx-auto max-w-7xl bg-background-light px-4 font-display text-text-light sm:px-6 lg:px-8 dark:bg-background-dark dark:text-text-dark">
      <Navbar />

      <main className="py-16 md:py-24">
        {/* Intro */}
        <section className="mb-16 text-center md:mb-24">
          <h1 className="text-navy-DEFAULT mb-4 text-4xl font-bold md:text-6xl dark:text-white">
            Admissions Process
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl dark:text-gray-400">
            Your child's educational journey starts here. Our process is
            designed to be simple, clear, and welcoming for every family.
          </p>
        </section>

        {/* Steps */}
        <section className="mb-16 grid grid-cols-1 gap-8 text-center md:mb-24 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 dark:bg-primary/30">
                {step.icon}
              </div>
              <h3 className="text-navy-DEFAULT mb-2 text-2xl font-semibold dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </section>

        {/* Key Admission Dates */}
        <section className="mb-16 rounded-lg bg-gray-50 p-8 md:mb-24 md:p-12 dark:bg-gray-800/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:pr-12">
              <h2 className="text-navy-DEFAULT mb-3 text-3xl font-bold md:text-4xl dark:text-white">
                Key Admission Dates
              </h2>
              <p className="max-w-2xl text-gray-600 dark:text-gray-400">
                Stay informed about important deadlines. Mark your calendar to
                ensure a smooth application process for the 2024 academic year.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <ul>
                {admissionDates.map(({ date, label }) => (
                  <li
                    key={date}
                    className="flex items-start space-x-4 border-b border-border-light py-3 dark:border-border-dark"
                  >
                    <Calendar className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">{date}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {label}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-navy-DEFAULT mb-4 text-3xl font-bold md:text-4xl dark:text-white">
            Ready to Begin?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-gray-600 dark:text-gray-400">
            Take the first step towards an exceptional education for your child.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              className="text-navy-DEFAULT inline-block w-full rounded-lg bg-primary px-8 py-3 font-semibold transition-colors hover:bg-yellow-500 sm:w-auto"
              href="#"
            >
              Apply Now
            </a>
            <a
              className="text-navy-DEFAULT border-navy-light inline-block w-full rounded-lg border bg-transparent px-8 py-3 font-semibold transition-colors hover:bg-gray-100 sm:w-auto dark:border-gray-600 dark:text-white dark:hover:bg-gray-800"
              href="#"
            >
              Request Prospectus
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
