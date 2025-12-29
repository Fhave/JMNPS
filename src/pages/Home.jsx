import { Link } from "react-router-dom";
import { School, Users, Library, Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-display bg-background-light text-text-light">

      {/* Navbar */}
      <header className="flex justify-between items-center py-6">
        <div className="flex items-center space-x-3">
          <div className="bg-brand-light p-2.5 rounded-lg">
            <School className="h-6 w-6 text-primary" />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Academics", "/academics"],
            ["Admissions", "/admissions"],
            ["Calendar", "/calendar"],
            ["News & Updates", "/news"],
            ["Contact", "/contact"],
          ].map(([label, to]) => (
            <Link
              key={label}
              to={to}
              className="text-brand-light font-medium hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <button className="md:hidden p-2 rounded-md text-brand-light hover:bg-subtle-light">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Hero Section */}
      <main>
        <section className="py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-light leading-tight">
            Welcome to [School Name]
          </h1>
          <p className="mt-4 text-lg md:text-xl text-secondary-text-light max-w-2xl mx-auto">
            Nurturing young minds with a balanced curriculum
          </p>

          <div className="mt-10 flex justify-center items-center gap-4">
            <Link
              to="/admissions"
              className="bg-primary text-brand-light font-semibold px-8 py-3 rounded-lg shadow-md hover:opacity-90"
            >
              Apply Now
            </Link>
            <Link
              to="/about"
              className="border border-border-light text-brand-light font-semibold px-8 py-3 rounded-lg hover:bg-subtle-light transition-colors"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <School className="text-primary text-3xl" />,
                title: "Established",
                subtitle: "1990",
              },
              {
                icon: <Users className="text-primary text-3xl" />,
                title: "150+ Students",
                subtitle: "Learning & Growing",
              },
              {
                icon: <Library className="text-primary text-3xl" />,
                title: "18 Primary Years",
                subtitle: "of Excellence",
              },
            ].map(({ icon, title, subtitle }) => (
              <div key={title} className="bg-subtle-light p-8 rounded-lg flex items-center space-x-4">
                <div className="bg-primary/20 p-3 rounded-lg">{icon}</div>
                <div>
                  <p className="text-lg font-semibold text-brand-light">{title}</p>
                  <p className="text-secondary-text-light">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About & Admissions Section */}
        <section className="py-16 md:py-24 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-light">About Our School</h2>
              <p className="mt-4 text-secondary-text-light leading-relaxed">
                A nurturing environment dedicated to providing a high-quality education for young children.
                Play-based early years learning that prepares students for strong primary academics.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-light">Admissions Open for 2024</h2>
              <p className="mt-2 text-secondary-text-light">Tours by appointment</p>
              <Link
                to="/admissions"
                className="mt-6 inline-block bg-primary text-brand-light font-semibold px-8 py-3 rounded-lg shadow-md hover:opacity-90"
              >
                Request Prospectus
              </Link>
            </div>
          </div>

          {/* Image - Use your provided one, fallback to a dummy */}
          <img
            className="rounded-xl shadow-2xl w-full h-auto object-cover"
            alt="Happy student smiling in classroom"
            src={
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAetnkmZJhO2xkWbArpBD70m1Uj7aniMJPZlLdhFvgzTdBXwl3gOkaoBzzMOEdOts-HYDfUFP5a2XLGTAvjBlWKtZiFaHvmI8yie_sxmNdjTiEBr-azY3g1yNa9kjkgzPXUISPySE8tlV5jyxpyw7xdMO2p8Mu8q_YA5RI_mVvHGF82NMPEd1QflYRq6v7qPIa6mQlx2g-_IkZ1Gv3TErBpyg71QmI5i_RRrHUscQAPGmlbDd8GvVvK3_0AeAde9aBwo_vUbbcuYd6i"
              // || "https://via.placeholder.com/800x500"
            }
          />
        </section>

        {/* News & Newsletter */}
        <section className="py-16 md:py-24 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-8">Latest News</h2>
            <div className="space-y-8">
              {[
                ["02", "Feb", "New Outdoor Playground", "Our newly renovated outdoor playground is now open."],
                ["15", "Jan", "Achievements", "We are proud to announce the achievements of our top students."],
              ].map(([day, month, title, text]) => (
                <div key={title} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 text-center bg-brand-light text-white rounded-lg p-3 w-16">
                    <span className="block text-3xl font-bold">{day}</span>
                    <span className="text-xs uppercase">{month}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-light">{title}</h3>
                    <p className="mt-1 text-secondary-text-light">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-light">Newsletter</h2>
            <p className="mt-4 text-secondary-text-light">Stay up-to-date with our latest news</p>
            <form className="mt-8 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow w-full px-4 py-3 rounded-lg bg-subtle-light border-border-light focus:ring-primary focus:border-primary"
              />
              <button type="submit" className="bg-primary text-brand-light font-semibold px-8 py-3 rounded-lg shadow-md hover:opacity-90">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
