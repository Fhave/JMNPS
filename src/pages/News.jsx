import React from "react";
import { Menu } from "lucide-react";
import Navbar from "../components/Navbar";

const newsArticles = [
  {
    date: "February 2, 2024",
    title: "New Outdoor Playground Opens!",
    description:
      "Our newly renovated outdoor playground is now open for all students. The new equipment promotes physical activity, creativity, and collaborative play.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOphRmXNQLRZFvvPz17JWjj6kh9QQf1yGqWW1MteSy0tXmo_O3ZlnmY_R7Suz269sSHh2qtS6aXA8fNcj4FxiHLNtKqeCzwxAZZ-dRTKB48aKx0b_hWaB5eOvuIxg34QXxUjord1ua32JiHCj8mBeX99EyxpVhHF3BbV8sB49to8s2Ks1SEq_cqI5Pxkx_GhgQP5LTl3j7cqTOECSXhCwu1rE_DVXceuV75bSKXpU5FY2bTJhZPu3WxWstto4Rz6f6d7Xp5j_uHP04",
  },
  {
    date: "January 15, 2024",
    title: "Celebrating Academic Achievements",
    description:
      "We are proud to announce the outstanding academic achievements of our students in the recent inter-school competitions. Congratulations to all participants!",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABp8PHnxNfysnk5Gjs0uICLB3raypU9ZPPdhAKMCAaGVzmIVXJ9evvphzL56vcoesVrQ7KNj_qo-cVwXgRfipuHtkYPvz9Ii1ayom7i244AkjLpAAZnsFecYWul2ao9d3itRIClEMILxZeFAfteQK4nXqoEG0vJ8wxdRIyM04SfLGpm7moy2ud1SgWun2TgDnyS2PUkBQprVzFkPVoUX5QqoHDkPA1g8MQQULIfwHUJaBC46wXdSWIdQk42hxY277WNOZmFSKdtInT",
  },
  {
    date: "December 20, 2023",
    title: "Recap: Annual School Day 2023",
    description:
      "Our Annual School Day was a grand success, filled with wonderful performances, awards, and community spirit. A big thank you to all who participated.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2usqsKjNc4DhUOf2_PYh9hHo-YDqemJyg2UGv2ICTS-1so4ahl-m1StXLkAfRu9BPSkZ3jt6m-_yX0uMD4FhTup4S34O6ibjLKekM5SU-7swKq6xRCMeM3cMqycs9LGZDNcMghbL3FgvZvtmWQMkcuExpMck3gXqKqA_8SVe_EK4w_OrfO1pEAF-bgHtzbwf_BqsLTWiriSPfApLNxG5YnJu-9WoM7n3WWmBGxSfoeXkX9T3GEueMNvzGXIs7zpb2ay4DqYaZqBCr",
  },
];

export default function News() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-text-light dark:text-text-dark font-display">
      <Navbar />

      {/* Main */}
      <main className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-dark dark:text-text-dark tracking-tight">
              News & Updates
            </h1>
            <p className="mt-4 text-lg md:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
              Stay informed with the latest happenings, stories, and announcements from our school community.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-primary-dark dark:text-text-dark mb-8">
            Recent News
          </h2>

          <div className="space-y-12">
            {newsArticles.map((article, idx) => (
              <article
                key={idx}
                className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <div className="w-full sm:w-1/3">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="rounded-lg object-cover w-full h-48"
                  />
                </div>
                <div className="w-full sm:w-2/3">
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-1">
                    {article.date}
                  </p>
                  <h3 className="text-2xl font-semibold text-primary-dark dark:text-white mb-2">
                    {article.title}
                  </h3>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                    {article.description}
                  </p>
                  <a
                    className="font-semibold text-primary-dark dark:text-primary hover:underline"
                    href="#"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center pt-8">
            <nav className="flex items-center space-x-2">
              {["Previous", "1", "2", "3", "Next"].map((page, idx) => (
                <a
                  key={idx}
                  className={`px-4 py-2 rounded-md ${
                    page === "1"
                      ? "bg-primary-dark text-white"
                      : "bg-background-light dark:bg-card-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-gray-600"
                  }`}
                  href="#"
                >
                  {page}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Sidebar */}
        <aside>
          <div className="bg-card-light dark:bg-card-dark p-8 rounded-lg shadow-lg sticky top-8 border border-border-light dark:border-border-dark">
            <h3 className="text-2xl font-bold text-primary-dark dark:text-white mb-2">
              Newsletter Sign-Up
            </h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
              Stay up-to-date with our latest news and events delivered right to your inbox.
            </p>
            <form className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary focus:border-primary text-text-light dark:text-text-dark"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email Address"
                  className="w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-primary focus:border-primary text-text-light dark:text-text-dark"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-dark font-bold py-3 px-4 rounded-md hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </main>
    </div>
  );
};
