import React, { useState } from "react";
import {
  Calendar,
  User,
  ArrowRight,
  Filter,
  Search,
  Share2,
  Bookmark,
  Bell,
  TrendingUp,
  Newspaper,
} from "lucide-react";

const CategoryBadge = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`rounded-full border px-6 py-2 text-sm font-bold whitespace-nowrap transition-all ${
      active
        ? "border-[#7c3aed] bg-[#7c3aed] text-white shadow-lg shadow-purple-200"
        : "border-gray-100 bg-white text-gray-500 hover:border-purple-200"
    }`}
  >
    {children}
  </button>
);

const NewsCard = ({
  category,
  date,
  title,
  author,
  image,
  featured = false,
}) => (
  <article
    className={`group cursor-pointer ${featured ? "lg:col-span-2" : ""}`}
  >
    <div
      className={`overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white transition-all duration-500 hover:shadow-2xl ${
        featured ? "flex h-full flex-col lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "h-64 lg:h-auto lg:w-1/2" : "h-64"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-black tracking-widest text-[#ec4899] uppercase backdrop-blur-md">
          {category}
        </div>
      </div>

      <div
        className={`flex flex-col justify-center p-8 ${
          featured ? "lg:w-1/2" : ""
        }`}
      >
        <div className="mb-4 flex items-center gap-4 text-xs font-bold text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar size={14} /> {date}
          </span>
          <span className="flex items-center gap-1">
            <User size={14} /> By {author}
          </span>
        </div>
        <h3
          className={`${
            featured ? "text-3xl lg:text-4xl" : "text-xl"
          } mb-4 leading-tight font-black transition-colors group-hover:text-[#7c3aed]`}
        >
          {title}
        </h3>
        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-500">
          Stay updated with heartwarming stories, exciting activities, and
          important announcements from our vibrant school family.
        </p>
        <div className="mt-auto flex items-center justify-between">
          <button className="group/btn flex items-center gap-2 text-sm font-black tracking-wider text-[#7c3aed] uppercase">
            Read More
            <ArrowRight
              size={16}
              className="transition-transform group-hover/btn:translate-x-2"
            />
          </button>
          <div className="flex gap-2">
            <button className="rounded-full p-2 text-gray-400 hover:bg-gray-50">
              <Share2 size={18} />
            </button>
            <button className="rounded-full p-2 text-gray-400 hover:bg-gray-50">
              <Bookmark size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </article>
);

export default function News() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Class Activities",
    "School Events",
    "Sports Day",
    "Creative Arts",
    "Parent Updates",
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="animate-in fade-in min-h-screen bg-gray-50 duration-700">
        {/* 1. Page Title & Search */}
        <section className="border-b border-gray-100 bg-white px-6 pt-20 pb-10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="space-y-4">
              <h1 className="text-5xl font-black tracking-tighter text-gray-900 md:text-7xl">
                School <br />
                <span className="text-[#7c3aed]">News & Stories</span>
              </h1>
              <p className="max-w-md font-medium text-gray-500">
                Celebrating milestones, sharing joyful moments, and keeping our
                families informed.
              </p>
            </div>

            <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
              <div className="group relative">
                <Search
                  className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-[#7c3aed]"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search updates..."
                  className="w-full rounded-2xl border border-transparent bg-gray-50 py-4 pr-6 pl-12 transition-all outline-none focus:border-[#7c3aed] md:w-80"
                />
              </div>
              <button className="flex items-center justify-center gap-2 rounded-2xl bg-[#1e1b4b] p-4 text-white transition-colors hover:bg-[#7c3aed]">
                <Filter size={20} />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="no-scrollbar mx-auto mt-12 flex max-w-7xl gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <CategoryBadge
                key={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </CategoryBadge>
            ))}
          </div>
        </section>

        {/* 2. Content Grid */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main Feed */}
            <div className="space-y-10 lg:col-span-2">
              <NewsCard
                featured
                category="School Events"
                date="March 12, 2026"
                author="School Admin"
                title="Annual Cultural Day Celebration Brings Color and Joy to Campus"
                image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80"
              />

              <div className="grid gap-8 md:grid-cols-2">
                <NewsCard
                  category="Sports Day"
                  date="March 8, 2026"
                  author="PE Teacher"
                  title="Our Little Champions Shine at Inter-House Sports"
                  image="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80"
                />
                <NewsCard
                  category="Creative Arts"
                  date="March 3, 2026"
                  author="Art Department"
                  title="Young Artists Showcase Their Beautiful Creations"
                  image="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80"
                />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-10">
              {/* Trending */}
              <div className="rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-2 text-lg font-black">
                  <TrendingUp size={24} className="text-[#ec4899]" />
                  Popular Updates
                </div>
                <div className="space-y-6">
                  {[
                    "Term 2 Resumption Date Announcement",
                    "Parent-Teacher Meeting Schedule",
                    "New Playground Equipment Installed",
                  ].map((item, i) => (
                    <div key={i} className="group flex cursor-pointer gap-4">
                      <span className="text-2xl font-black text-gray-100 transition-colors group-hover:text-purple-100">
                        0{i + 1}
                      </span>
                      <p className="leading-tight font-bold text-gray-800 transition-colors group-hover:text-[#7c3aed]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#7c3aed] p-8 text-white">
                <div className="relative z-10">
                  <Bell size={40} className="mb-4 text-[#facc15]" />
                  <h3 className="mb-2 text-2xl font-black">Stay Connected.</h3>
                  <p className="mb-6 text-sm text-purple-100">
                    Receive important school updates and event reminders.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Parent email address"
                      className="w-full rounded-2xl border border-white/20 bg-white/10 p-4 text-white outline-none placeholder:text-white/50 focus:bg-white/20"
                    />
                    <button className="w-full rounded-2xl bg-[#facc15] py-4 font-black text-black transition-all hover:scale-105">
                      Subscribe
                    </button>
                  </div>
                </div>
                <Newspaper className="absolute -right-10 -bottom-10 h-48 w-48 -rotate-12 opacity-10" />
              </div>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}
