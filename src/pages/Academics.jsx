import React from "react";
import {
  Palette,
  Globe,
  Calculator,
  Music,
  Languages,
  Download,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Layers,
  Heart,
  Puzzle,
} from "lucide-react";
import { DepartmentCard } from "../components/DepartmentCard";

export default function Academics() {
  return (
    <div className="min-h-screen bg-white">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* 1. Header Section */}
        <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 text-center">
          <span className="text-sm font-black tracking-[0.3em] text-[#ec4899] uppercase">
            Our Learning Programs
          </span>
          <h1 className="mt-4 mb-6 text-5xl font-black tracking-tighter text-gray-900 md:text-7xl">
            Building Bright <span className="text-[#7c3aed]">Young Minds</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-500">
            Our curriculum is designed to inspire curiosity, creativity, and
            confidence in every child — from their very first classroom
            experience.
          </p>
        </section>

        {/* 2. Learning Areas Grid */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <DepartmentCard
              title="Early Literacy"
              icon={BookOpen}
              color="bg-blue-500"
              subjects={[
                "Phonics",
                "Reading",
                "Storytelling",
                "Creative Writing",
              ]}
              image="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80"
            />

            <DepartmentCard
              title="Numeracy & Logic"
              icon={Calculator}
              color="bg-green-500"
              subjects={[
                "Counting",
                "Basic Math",
                "Problem Solving",
                "Patterns",
              ]}
              image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80"
            />

            <DepartmentCard
              title="Creative Arts"
              icon={Palette}
              color="bg-pink-500"
              subjects={["Drawing", "Painting", "Crafts", "Imagination Play"]}
              image="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80"
            />

            <DepartmentCard
              title="Music & Movement"
              icon={Music}
              color="bg-purple-600"
              subjects={["Singing", "Dance", "Rhythm", "Drama"]}
              image="https://images.unsplash.com/photo-1514525253361-bee8718a74a2?auto=format&fit=crop&q=80"
            />

            <DepartmentCard
              title="Social Studies"
              icon={Globe}
              color="bg-orange-500"
              subjects={["Community", "Culture", "Citizenship", "Environment"]}
              image="https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&q=80"
            />

            <DepartmentCard
              title="Languages"
              icon={Languages}
              color="bg-amber-500"
              subjects={["English", "French Basics", "Conversation Skills"]}
              image="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80"
            />
          </div>
        </section>

        {/* 3. Development Focus Section */}
        <section className="px-6 py-24">
          <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 overflow-hidden rounded-[3.5rem] bg-[#1e1b4b] p-8 text-white md:p-20 lg:flex-row">
            <div className="absolute top-0 right-0 -mt-48 -mr-48 h-96 w-96 bg-[#7c3aed] opacity-20 blur-[150px]" />

            <div className="relative z-10 space-y-8 lg:w-1/2">
              <h2 className="text-4xl leading-tight font-black md:text-5xl">
                Learning Through <br />
                <span className="text-[#facc15]">Discovery & Play</span>
              </h2>

              <div className="cursor-pointer space-y-4">
                {[
                  {
                    t: "Play-Based Learning",
                    d: "Children explore, create, and discover through guided play.",
                  },
                  {
                    t: "Small Class Sizes",
                    d: "Personalized attention to help every child thrive.",
                  },
                  {
                    t: "Holistic Development",
                    d: "We nurture academic, emotional, and social growth.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 rounded-2xl p-4 transition-colors hover:bg-white/5"
                  >
                    <CheckCircle2 className="shrink-0 text-[#facc15]" />
                    <div>
                      <h4 className="text-lg font-bold">{item.t}</h4>
                      <p className="text-sm text-gray-400">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* <button className="flex items-center gap-3 rounded-2xl bg-white px-10 py-5 font-black text-[#1e1b4b] shadow-2xl transition-all hover:scale-105">
                <Download size={20} /> Download School Brochure
              </button> */}
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-4 lg:w-1/2">
              <div className="space-y-4 pt-12">
                <div className="flex aspect-square flex-col justify-end rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                  <Heart className="mb-4 text-[#facc15]" size={32} />
                  <div className="text-3xl font-black">10:1</div>
                  <div className="text-xs font-bold uppercase opacity-60">
                    Student-Teacher Ratio
                  </div>
                </div>

                <div className="flex aspect-square flex-col justify-end rounded-3xl bg-[#7c3aed] p-8 shadow-xl shadow-[#7c3aed]/20">
                  <Puzzle className="mb-4 text-white" size={32} />
                  <div className="text-3xl font-black">20+</div>
                  <div className="text-xs font-bold uppercase opacity-80">
                    Weekly Activities
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex aspect-square flex-col justify-end rounded-3xl bg-[#ec4899] p-8 shadow-xl shadow-[#ec4899]/20">
                  <Layers className="mb-4 text-white" size={32} />
                  <div className="text-3xl font-black">100%</div>
                  <div className="text-xs font-bold uppercase opacity-80">
                    Safe Learning Environment
                  </div>
                </div>

                <div className="flex aspect-square flex-col justify-end rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                  <Globe className="mb-4 text-[#facc15]" size={32} />
                  <div className="text-3xl font-black">5+</div>
                  <div className="text-xs font-bold uppercase opacity-60">
                    Cultural Celebration Days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
