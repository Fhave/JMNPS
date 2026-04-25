import React from "react";
import { useNavigate } from "react-router-dom";
import { InfoCard } from "../components/InfoCard";
import { EventItem } from "../components/EventItem";
import {
  Sparkles,
  ArrowRight,
  Play,
  Award,
  Users,
  BookOpen,
  Download,
  Target,
} from "lucide-react";
import children from "../assets/images/children.jpg";
import infoCardData from "../data/infoCard.json";
import eventItemData from "../data/eventItem.json";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative flex h-[80vh] items-center overflow-hidden lg:h-[90vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={children}
            className="h-full w-full object-cover brightness-50"
            alt="Happy Children at School"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="animate-in slide-in-from-left max-w-3xl space-y-6 duration-700">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#facc15] px-4 py-2 text-xs font-black tracking-widest text-black uppercase">
              <Award size={14} /> Best Kids' School 2026
            </span>
            <h1 className="text-5xl leading-[1.05] font-black tracking-tight text-white md:text-6xl lg:text-7xl">
              Learning is <br />
              <span className="bg-linear-to-r from-[#facc15] to-orange-400 bg-clip-text text-transparent">
                Fun
              </span>{" "}
              Every Day
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-gray-200 md:text-xl">
              A happy place where children explore, play, and grow into
              confident learners.
            </p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <button
                className="cursor-pointer rounded-2xl bg-[#ec4899] px-10 py-5 text-lg font-black text-white shadow-2xl transition-all hover:-translate-y-1 hover:bg-pink-600"
                onClick={() => navigate("/contact")}
              >
                Enroll Now
              </button>
              {/* <button className="flex items-center justify-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-10 py-5 text-lg font-black text-white backdrop-blur-md transition-all hover:bg-white/20">
                <Play size={20} fill="currentColor" /> Watch Video
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Quick Stats */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Combined Vision & Mission Card */}
          <div className="grid overflow-hidden rounded-[3.5rem] border border-gray-100 bg-white shadow-2xl shadow-purple-200/40 lg:col-span-8 lg:grid-cols-2 lg:divide-x lg:divide-gray-100">
            {/* Vision Section */}
            <div className="relative flex flex-col justify-center p-10 transition-colors hover:bg-purple-50/30 md:p-16">
              <div className="absolute top-0 left-0 h-24 w-24 bg-gradient-to-br from-purple-100/50 to-transparent blur-3xl" />
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-purple-100 p-2 text-purple-600">
                  <Sparkles size={24} />
                </div>
                <span className="text-sm font-black tracking-[0.2em] text-purple-600 uppercase">
                  Our Vision
                </span>
              </div>
              <blockquote className="relative">
                <p className="font-serif text-3xl leading-snug text-gray-900 italic md:text-4xl">
                  "To raise a{" "}
                  <span className="font-bold text-purple-600 not-italic">
                    total child
                  </span>{" "}
                  who will be ambitious and God-fearing"
                </p>
              </blockquote>
            </div>

            {/* Mission Section */}
            <div className="relative flex flex-col justify-center p-10 transition-colors hover:bg-pink-50/30 md:p-16">
              <div className="absolute right-0 bottom-0 h-24 w-24 bg-gradient-to-tl from-pink-100/50 to-transparent blur-3xl" />
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-pink-100 p-2 text-pink-600">
                  <Target size={24} />
                </div>
                <span className="text-sm font-black tracking-[0.2em] text-pink-600 uppercase">
                  Our Mission
                </span>
              </div>
              <blockquote className="relative">
                <p className="font-serif text-3xl leading-snug text-gray-900 italic md:text-4xl">
                  "To promote qualitative and{" "}
                  <span className="font-bold text-pink-600 not-italic">
                    ambitious
                  </span>{" "}
                  educational guide and transformational mind"
                </p>
              </blockquote>
            </div>
          </div>

          {/* Quick Stats Column */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-4 lg:grid-cols-1">
            <div className="flex flex-col items-center justify-center rounded-[2.5rem] bg-[#7c3aed] p-8 text-center text-white">
              <Users size={40} className="mb-4 text-[#facc15]" />
              <div className="text-4xl font-black">100+</div>
              <div className="text-sm font-bold tracking-widest uppercase opacity-80">
                Happy Kids
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-[2.5rem] bg-[#1e1b4b] p-8 text-center text-white">
              <BookOpen size={40} className="mb-4 text-[#ec4899]" />
              <div className="text-4xl font-black">100%</div>
              <div className="text-sm font-bold tracking-widest uppercase opacity-80">
                Fun Learning
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. News & Highlights */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div>
              <h2 className="mb-4 text-4xl font-black tracking-tighter text-gray-900 md:text-5xl">
                School Highlights
              </h2>
              <div className="h-2 w-24 rounded-full bg-[#ec4899]"></div>
            </div>
            <button
              className="group flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-black shadow-sm transition-all hover:shadow-md"
              onClick={() => {
                navigate("/news");
                window.scrollTo({ top: 0 });
              }}
            >
              Explore News{" "}
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-2"
              />
            </button>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {infoCardData
              .filter((item) => new Date(item.date) <= new Date())
              .sort((a, b) => new Date(a.date) - new Date(b.date))
              .slice(-3)
              .map((item, index) => (
                <InfoCard
                  key={`${item.date}-${index}`}
                  category={item.category}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  path={item.path}
                />
              ))}
          </div>
        </div>
      </section>

      {/* 4. Upcoming Events */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-start gap-16 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <h2 className="text-4xl font-black tracking-tighter text-gray-900">
              Mark Your Calendars
            </h2>
            <p className="font-medium text-gray-500">
              Don't miss our activities, parent-teacher meetups, and holiday
              celebrations.
            </p>

            <div className="rounded-3xl border-2 border-[#7c3aed]/10 bg-[#f3e8ff] p-8 transition-transform hover:scale-[1.02]">
              <h4 className="mb-2 font-bold text-[#7c3aed]">
                Full School Year
              </h4>
              <p className="mb-4 text-sm leading-relaxed text-purple-900/60">
                Download the 2026 Academic Calendar for all activities and
                holidays.
              </p>

              <a
                href="/documents/2026-academic-calendar.pdf"
                download="2026-School-Calendar.pdf"
                className="inline-flex cursor-pointer items-center gap-2 text-sm font-black text-[#7c3aed] underline underline-offset-4 transition-colors hover:text-[#6d28d9]"
              >
                <Download size={16} />
                Download PDF
              </a>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-2">
            {eventItemData
              .filter((item) => {
                const year = item.year || 2026;
                const eventDate = new Date(
                  `${item.month} ${item.date}, ${year}`,
                );
                return eventDate >= new Date().setHours(0, 0, 0, 0);
              })
              .sort((a, b) => {
                const dateA = new Date(
                  `${a.month} ${a.date}, ${a.year || 2026}`,
                );
                const dateB = new Date(
                  `${b.month} ${b.date}, ${b.year || 2026}`,
                );
                return dateA - dateB;
              })
              .slice(0, 3)
              .map((item, index) => (
                <EventItem
                  key={`${item.date}-${item.month}-${index}`}
                  date={item.date}
                  month={item.month}
                  title={item.title}
                  time={item.time}
                  location={item.location}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
