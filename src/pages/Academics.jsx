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
  ShieldCheck,
  Users,
} from "lucide-react";
import { DepartmentCard } from "../components/DepartmentCard";
import departmentsData from "../data/departmentCard.json";

const iconMap = {
  BookOpen,
  Calculator,
  Palette,
  Music,
  Globe,
  Languages,
};

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
            {departmentsData.map((dept, index) => (
              <DepartmentCard
                key={index}
                title={dept.title}
                icon={iconMap[dept.iconName]}
                color={dept.color}
                subjects={dept.subjects}
                image={dept.image}
              />
            ))}
          </div>
        </section>

        {/* 3. Development Focus Section */}
        <section className="px-6 py-24">
          <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 overflow-hidden rounded-[3.5rem] bg-[#1e1b4b] p-8 text-white md:p-20 lg:flex-row">
            <div className="absolute top-0 right-0 -mt-48 -mr-48 h-96 w-96 bg-[#7c3aed] opacity-20 blur-[150px]" />

            <div className="relative z-10 space-y-8 lg:w-1/2">
              <h2 className="text-4xl leading-tight font-black md:text-5xl">
                Building a Foundation <br />
                <span className="text-[#facc15]">of Excellence & Values</span>
              </h2>

              <div className="cursor-pointer space-y-4">
                {[
                  {
                    t: "British-Nigerian Curriculum",
                    d: "A rich blend of international standards and local cultural relevance.",
                  },
                  {
                    t: "Character & Moral Training",
                    d: "Instilling discipline, respect, and integrity in every child.",
                  },
                  {
                    t: "Modern Learning Facilities",
                    d: "Smart classrooms and labs designed for the 21st-century student.",
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
                <Download size={20} /> Download School Prospectus
              </button> */}
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-4 lg:w-1/2">
              <div className="space-y-4 pt-12">
                <div className="flex aspect-square flex-col justify-end rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                  <Heart className="mb-4 text-[#facc15]" size={32} />
                  <div className="text-3xl font-black">15:1</div>
                  <div className="text-xs font-bold uppercase opacity-60">
                    Student-Teacher Ratio
                  </div>
                </div>

                <div className="flex aspect-square flex-col justify-end rounded-3xl bg-[#7c3aed] p-8 shadow-xl shadow-[#7c3aed]/20">
                  <BookOpen className="mb-4 text-white" size={32} />
                  <div className="text-3xl font-black">100%</div>
                  <div className="text-xs font-bold uppercase opacity-80">
                    Common Entrance Success
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex aspect-square flex-col justify-end rounded-3xl bg-[#ec4899] p-8 shadow-xl shadow-[#ec4899]/20">
                  <ShieldCheck className="mb-4 text-white" size={32} />
                  <div className="text-3xl font-black">Secure</div>
                  <div className="text-xs font-bold uppercase opacity-80">
                    CCTV Monitored Campus
                  </div>
                </div>

                <div className="flex aspect-square flex-col justify-end rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                  <Users className="mb-4 text-[#facc15]" size={32} />
                  <div className="text-3xl font-black">Active</div>
                  <div className="text-xs font-bold uppercase opacity-60">
                    Parent-Teacher Community
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
