import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  Filter,
  Search,
  Share2,
  Bookmark,
  Bell,
  TrendingUp,
  Newspaper,
  ChevronsRight,
  ChevronsLeft,
} from "lucide-react";
import { NewsCard } from "../components/NewsCard";
import { CategoryBadge } from "../components/CategoryBadge";
import newsData from "../data/newsCard.json";

const categories = [
  "All",
  "Class Activities",
  "School Events",
  "Sports Day",
  "Creative Arts",
  "Parent Updates",
];

export default function News() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const filteredNews = useMemo(() => {
    const now = new Date();

    return newsData
      .filter((item) => {
        const eventDate = new Date(item.date);
        const matchesCategory =
          activeCategory === "All" || item.category === activeCategory;
        const matchesSearch = item.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch && eventDate <= now;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);
  }, [activeCategory, searchQuery]);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const handleCategoryClick = (cat, e) => {
    setActiveCategory(cat);
    e.currentTarget.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="animate-in fade-in min-h-screen bg-gray-50 duration-700">
        {/* 1. Header & Controls */}
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
          <div className="mx-auto mt-12 flex max-w-7xl items-center">
            <div
              className={`transition-opacity duration-300 ${showLeftArrow ? "opacity-100" : "opacity-0"}`}
            >
              <ChevronsLeft
                size={24}
                className="animate-pulse text-[#7c3aed]"
              />
            </div>

            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="no-scrollbar flex flex-1 gap-3 overflow-x-auto scroll-smooth py-2"
            >
              {categories.map((cat) => (
                <div
                  key={cat}
                  className="shrink-0 cursor-pointer"
                  onClick={(e) => handleCategoryClick(cat, e)}
                >
                  <CategoryBadge active={activeCategory === cat}>
                    {cat}
                  </CategoryBadge>
                </div>
              ))}
            </div>

            <div
              className={`transition-opacity duration-300 ${showRightArrow ? "opacity-100" : "opacity-0"}`}
            >
              <ChevronsRight
                size={24}
                className="animate-pulse text-[#7c3aed]"
              />
            </div>
          </div>
        </section>

        {/* 2. Content Grid */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main Feed */}
            <div className="space-y-10 lg:col-span-2">
              {filteredNews.length > 0 ? (
                <>
                  {/* 1. Show the most recent item as Featured if it exists */}
                  {filteredNews
                    .filter((n) => n.featured)
                    .map((item) => (
                      <NewsCard key={item.id} {...item} />
                    ))}

                  {/* 2. Show the rest in the grid */}
                  <div className="grid gap-8 md:grid-cols-2">
                    {filteredNews
                      .filter((n) => !n.featured)
                      .map((item) => (
                        <NewsCard key={item.id} {...item} />
                      ))}
                  </div>
                </>
              ) : (
                <div className="flex h-64 flex-col items-center justify-center rounded-[2.5rem] border-2 border-dashed border-gray-200 text-gray-400">
                  <p className="text-lg font-bold">No recent updates found.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-10">
              {/* Trending Updates */}
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
