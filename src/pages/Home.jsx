import { Link } from "react-router-dom";
import { School, Users, Library, Menu } from "lucide-react";
import Navbar from "../components/Navbar"; // added

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl bg-background-light px-4 font-display text-text-light sm:px-6 lg:px-8">
      {/* use shared navbar */}
      <Navbar />

      {/* Hero Section */}
      <main>
        <section className="py-20 text-center md:py-32">
          <h1 className="text-4xl leading-tight font-bold text-brand-light md:text-6xl">
            Welcome to [School Name]
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-text-light md:text-xl">
            Nurturing young minds with a balanced curriculum
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              to="/admissions"
              className="rounded-lg bg-primary px-8 py-3 font-semibold text-brand-light shadow-md hover:opacity-90"
            >
              Apply Now
            </Link>
            <Link
              to="/about"
              className="rounded-lg border border-border-light px-8 py-3 font-semibold text-brand-light transition-colors hover:bg-subtle-light"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="pb-16 md:pb-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <School className="text-3xl text-primary" />,
                title: "Established",
                subtitle: "1990",
              },
              {
                icon: <Users className="text-3xl text-primary" />,
                title: "150+ Students",
                subtitle: "Learning & Growing",
              },
              {
                icon: <Library className="text-3xl text-primary" />,
                title: "18 Primary Years",
                subtitle: "of Excellence",
              },
            ].map(({ icon, title, subtitle }) => (
              <div
                key={title}
                className="flex items-center space-x-4 rounded-lg bg-subtle-light p-8"
              >
                <div className="rounded-lg bg-primary/20 p-3">{icon}</div>
                <div>
                  <p className="text-lg font-semibold text-brand-light">
                    {title}
                  </p>
                  <p className="text-secondary-text-light">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About & Admissions Section */}
        <section className="grid items-center gap-16 py-16 md:grid-cols-2 md:py-24">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-light md:text-4xl">
                About Our School
              </h2>
              <p className="mt-4 leading-relaxed text-secondary-text-light">
                A nurturing environment dedicated to providing a high-quality
                education for young children. Play-based early years learning
                that prepares students for strong primary academics.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-brand-light md:text-4xl">
                Admissions Open for 2024
              </h2>
              <p className="mt-2 text-secondary-text-light">
                Tours by appointment
              </p>
              <Link
                to="/admissions"
                className="mt-6 inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-brand-light shadow-md hover:opacity-90"
              >
                Request Prospectus
              </Link>
            </div>
          </div>

          {/* Image - Use your provided one, fallback to a dummy */}
          <img
            className="h-auto w-full rounded-xl object-cover shadow-2xl"
            alt="Happy student smiling in classroom"
            src={
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAetnkmZJhO2xkWbArpBD70m1Uj7aniMJPZlLdhFvgzTdBXwl3gOkaoBzzMOEdOts-HYDfUFP5a2XLGTAvjBlWKtZiFaHvmI8yie_sxmNdjTiEBr-azY3g1yNa9kjkgzPXUISPySE8tlV5jyxpyw7xdMO2p8Mu8q_YA5RI_mVvHGF82NMPEd1QflYRq6v7qPIa6mQlx2g-_IkZ1Gv3TErBpyg71QmI5i_RRrHUscQAPGmlbDd8GvVvK3_0AeAde9aBwo_vUbbcuYd6i"
              // || "https://via.placeholder.com/800x500"
            }
          />
        </section>

        {/* News & Newsletter */}
        <section className="grid gap-16 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h2 className="mb-8 text-3xl font-bold text-brand-light md:text-4xl">
              Latest News
            </h2>
            <div className="space-y-8">
              {[
                [
                  "02",
                  "Feb",
                  "New Outdoor Playground",
                  "Our newly renovated outdoor playground is now open.",
                ],
                [
                  "15",
                  "Jan",
                  "Achievements",
                  "We are proud to announce the achievements of our top students.",
                ],
              ].map(([day, month, title, text]) => (
                <div key={title} className="flex items-start space-x-6">
                  <div className="w-16 flex-shrink-0 rounded-lg bg-brand-light p-3 text-center text-white">
                    <span className="block text-3xl font-bold">{day}</span>
                    <span className="text-xs uppercase">{month}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-light">
                      {title}
                    </h3>
                    <p className="mt-1 text-secondary-text-light">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-brand-light md:text-4xl">
              Newsletter
            </h2>
            <p className="mt-4 text-secondary-text-light">
              Stay up-to-date with our latest news
            </p>
            <form className="mt-8 flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full flex-grow rounded-lg border-border-light bg-subtle-light px-4 py-3 focus:border-primary focus:ring-primary"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-8 py-3 font-semibold text-brand-light shadow-md hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
