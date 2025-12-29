import {
  School,
  Search,
  FileText,
  Handshake,
  Calendar
} from "lucide-react";

export default function Admissions() {
  const steps = [
    {
      icon: <Search className="w-10 h-10 text-primary" />,
      title: "Step 1: Explore",
      description: "Discover our programs, philosophy, and campus. We encourage you to request a prospectus to learn more about us."
    },
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: "Step 2: Apply",
      description: "Complete our online application form. It’s a straightforward process to provide us with the necessary information."
    },
    {
      icon: <Handshake className="w-10 h-10 text-primary" />,
      title: "Step 3: Welcome",
      description: "Upon acceptance, you'll receive a welcome package with all the details for starting your journey with us."
    }
  ];

  const admissionDates = [
    { date: "September 1, 2023", label: "Applications Open" },
    { date: "January 15, 2024", label: "Application Deadline" },
    { date: "March 1, 2024", label: "Decision Notifications Sent" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-display bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">

      {/* Header */}
      <header className="py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-primary p-2 rounded-lg">
            <School className="w-7 h-7 text-navy-DEFAULT" />
          </div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a className="hover:text-primary transition-colors" href="/">Home</a>
          <a className="hover:text-primary transition-colors" href="/about">About</a>
          <a className="hover:text-primary transition-colors" href="/academics">Academics</a>
          <a className="text-primary font-semibold" href="/admissions">Admissions</a>
          <a className="hover:text-primary transition-colors" href="/calendar">Calendar</a>
          <a className="hover:text-primary transition-colors" href="/news">News & Updates</a>
          <a className="hover:text-primary transition-colors" href="/contact">Contact</a>
        </nav>
      </header>

      <main className="py-16 md:py-24">

        {/* Intro */}
        <section className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-bold text-navy-DEFAULT dark:text-white mb-4">Admissions Process</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            Your child's educational journey starts here. Our process is designed to be simple, clear, and welcoming for every family.
          </p>
        </section>

        {/* Steps */}
        <section className="mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {steps.map(step => (
            <div key={step.title} className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-primary/20 dark:bg-primary/30 rounded-full w-20 h-20 mb-4">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold text-navy-DEFAULT dark:text-white mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
            </div>
          ))}
        </section>

        {/* Key Admission Dates */}
        <section className="bg-gray-50 dark:bg-gray-800/50 p-8 md:p-12 rounded-lg mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-DEFAULT dark:text-white mb-3">Key Admission Dates</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                Stay informed about important deadlines. Mark your calendar to ensure a smooth application process for the 2024 academic year.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <ul>
                {admissionDates.map(({ date, label }) => (
                  <li key={date} className="flex items-start space-x-4 py-3 border-b border-border-light dark:border-border-dark">
                    <Calendar className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">{date}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-DEFAULT dark:text-white mb-4">Ready to Begin?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Take the first step towards an exceptional education for your child.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              className="w-full sm:w-auto inline-block bg-primary text-navy-DEFAULT font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors"
              href="#"
            >
              Apply Now
            </a>
            <a
              className="w-full sm:w-auto inline-block bg-transparent text-navy-DEFAULT dark:text-white border border-navy-light dark:border-gray-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
