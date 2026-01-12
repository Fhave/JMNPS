import {
  GraduationCap,
  Volleyball,
  Music,
  Palette,
  Theater,
  Microscope,
  CheckCircle,
} from "lucide-react";
import Navbar from "../components/Navbar"; // added

export default function Academics() {
  return (
    <div className="mx-auto max-w-7xl bg-background-light px-4 font-display text-text-light sm:px-6 lg:px-8 dark:bg-background-dark dark:text-text-dark">
      <Navbar />
      <main className="py-16 sm:py-24">
        {/* Academic Programs Intro */}
        <section className="mb-16 text-center sm:mb-24">
          <h1 className="text-heading-light dark:text-heading-dark text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Our Academic Programs
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-text-light sm:text-xl dark:text-text-dark">
            Fostering curiosity and a love for learning through a balanced,
            engaging, and comprehensive curriculum from nursery to primary
            levels.
          </p>
        </section>

        {/* Nursery Program */}
        <section className="mb-16 flex flex-col items-center gap-8 sm:mb-20 md:flex-row md:gap-12">
          <div className="flex-shrink-0 md:w-1/2">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHb_A-Ov5JA_D5t6eUwFwLN6KZTS9FPWkfFsgB2vujMY011s0M-IUlqPmwpgaKh33K3kdk29oy0eea3SMIDJIjQn2p8gD7qBTb2XbcxoJg9qjuHcIBqIsco2DMqXtzzxaJ6lAXX-mrG_5dT63AgGqqHdtqNf9KNrmgE9sRbH7C56CUrI7nKMJVr5yk2o-L_xf7GfEnVqz-ECoTlibOn9Y2eH6yx5Sg8WBGaJ_jom0IODGFv9SVsVJ3GstZXkZLgwQaM2em5lmqjsXP"
              alt="Young children engaged in playful learning activities in a colorful classroom."
              className="h-auto w-full rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-heading-light dark:text-heading-dark mb-4 text-3xl font-bold sm:text-4xl">
              Nursery Program
            </h2>
            <p className="mb-6 text-text-light dark:text-text-dark">
              Our nursery program is designed to provide a safe, nurturing, and
              stimulating environment where young children can learn through
              play and exploration. We focus on developing foundational skills
              in literacy, numeracy, and social interaction.
            </p>
            <ul className="space-y-3">
              {[
                "Play-based learning to encourage creativity and problem-solving.",
                "Early literacy and language development through storytelling and songs.",
                "Development of fine and gross motor skills.",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle className="mt-1 mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Primary Education */}
        <section className="mb-16 flex flex-col items-center gap-8 sm:mb-20 md:flex-row-reverse md:gap-12">
          <div className="flex-shrink-0 md:w-1/2">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB9TiUB9Qr80ogxJFYdRyKD2LvLlM0l9JNg_Yf14tqkd4Ju9n6-PG7trT4yQqjpRf91pQ_p8VIxliHGib0cPnGzc-P2nKpi_Yjs0MBUOfqnFA516WIra0TTwgHEBBevC3eHVniA2AVYmQNiJ5us0pavjPd1qZW7KCzJlVo9VZ_Qcix8hRe78rat2ZIWbhHFZHXb0lqVzcgNC48PJ97EuKAboRv_CguqKzBcZbHxrwj5NpULLkDHRvo5iitELSsH_SLsVng68urv4Ea"
              alt="Primary school students actively participating in a science lesson with their teacher."
              className="h-auto w-full rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-heading-light dark:text-heading-dark mb-4 text-3xl font-bold sm:text-4xl">
              Primary Education
            </h2>
            <p className="mb-6 text-text-light dark:text-text-dark">
              Our primary curriculum builds upon the foundations of early
              learning, offering a comprehensive education that balances
              academic rigor with personal development. We aim to equip students
              with the knowledge and skills they need for future success.
            </p>
            <ul className="space-y-3">
              {[
                "Core subjects including Mathematics, Science, and Language Arts.",
                "Introduction to Social Studies, Arts, and Physical Education.",
                "Focus on critical thinking, collaboration, and communication skills.",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle className="mt-1 mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Co-curricular Activities */}
        <section className="rounded-lg bg-gray-50 p-8 text-center sm:p-12 dark:bg-brand-dark/50">
          <h2 className="text-heading-light dark:text-heading-dark mb-4 text-3xl font-bold sm:text-4xl">
            Co-curricular Activities
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-text-light dark:text-text-dark">
            We believe in holistic development. Our wide range of co-curricular
            activities helps students discover new passions, build confidence,
            and develop important life skills beyond the classroom.
          </p>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {[
              {
                icon: <Volleyball className="h-8 w-8 text-primary" />,
                label: "Sports",
              },
              {
                icon: <Music className="h-8 w-8 text-primary" />,
                label: "Music",
              },
              {
                icon: <Palette className="h-8 w-8 text-primary" />,
                label: "Art & Craft",
              },
              {
                icon: <Theater className="h-8 w-8 text-primary" />,
                label: "Drama",
              },
              {
                icon: <Microscope className="h-8 w-8 text-primary" />,
                label: "Science Club",
              },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center">
                <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  {icon}
                </div>
                <span className="text-heading-light text-sm font-medium dark:text-gray-200">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
