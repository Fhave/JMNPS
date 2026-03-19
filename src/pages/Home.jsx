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
} from "lucide-react";
import children from "../assets/images/children.jpg";

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
          <div className="flex flex-col justify-center rounded-[3rem] border border-gray-100 bg-white p-8 shadow-2xl shadow-purple-100/50 md:p-16 lg:col-span-8">
            <div className="mb-8 flex items-center gap-3 text-xl font-black text-[#7c3aed]">
              <Sparkles className="text-[#facc15]" size={32} />
              OUR MISSION
            </div>
            <p className="font-serif text-3xl leading-[1.2] text-gray-800 italic md:text-5xl">
              "We make learning{" "}
              <span className="font-sans font-black text-[#7c3aed] not-italic">
                exciting
              </span>
              , playful, and full of wonder."
            </p>
          </div>

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
            <InfoCard
              category="Programs"
              title="Christmas Concert"
              description="Our little artists painted and created colorful masterpieces."
              image="https://images.unsplash.com/photo-1583337130417-8e0427f460aa?auto=format&fit=crop&q=80"
            />
            <InfoCard
              category="Programs"
              title="Valentine Day"
              description="Kids enjoyed friendly games of soccer and relay races."
              image="https://images.unsplash.com/photo-1596495577886-d920f00f785b?auto=format&fit=crop&q=80"
            />
            <InfoCard
              category="Programs"
              title="Mothers' Day"
              description="Engaging stories that spark imagination and curiosity."
              image="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* 4. Upcoming Events */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-start gap-16 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <h2 className="text-4xl font-black tracking-tighter">
              Mark Your Calendars
            </h2>
            <p className="font-medium text-gray-500">
              Don't miss our activities, parent-teacher meetups, and holiday
              celebrations.
            </p>
            <div className="rounded-3xl border-2 border-[#7c3aed]/10 bg-[#f3e8ff] p-8">
              <h4 className="mb-2 font-bold text-[#7c3aed]">
                Full School Year
              </h4>
              <p className="mb-4 text-sm text-purple-900/60">
                Download the 2026 Academic Calendar for all activities and
                holidays.
              </p>
              <button className="cursor-pointer text-sm font-black text-[#7c3aed] underline underline-offset-4">
                Download PDF
              </button>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <EventItem
              date="2"
              month="APR"
              title="Cultural Day"
              time="09:00 AM - 11:00 AM"
              location="School Playground"
            />
            <EventItem
              date="18"
              month="MAR"
              title="Spring Art & Craft Fair"
              time="10:00 AM - 02:00 PM"
              location="Main Hall"
            />
            <EventItem
              date="05"
              month="APR"
              title="Parent-Teacher Fun Day"
              time="01:00 PM - 04:00 PM"
              location="School Campus"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
