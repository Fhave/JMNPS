import React from "react";
import {
  Quote,
  Target,
  Heart,
  Shield,
  Award,
  ChevronRight,
} from "lucide-react";
import { ValueCard } from "../components/ValueCard";
import { TimelineItem } from "../components/TimelineItem";
import timelineData from "../data/timelineItem.json";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Page Header */}
      <section className="relative overflow-hidden bg-[#1e1b4b] px-6 py-20 text-center text-white md:py-32">
        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="mb-6 text-5xl font-black tracking-tight md:text-6xl">
            Growing Little <span className="text-[#facc15]">Leaders</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-300">
            For over 8 years, JonMay Schools has been a joyful place where
            children learn, play, and build confidence every single day.
          </p>
        </div>
      </section>

      {/* 2. Philosophy & Mission */}
      <section className="mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[3rem] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80"
            alt="Happy students"
            className="h-150 w-full object-cover"
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-gray-900">
              Learning Through Joy
            </h2>
            <p className="text-lg leading-relaxed text-gray-500">
              We believe every child is unique and full of potential. Our
              classrooms are safe, caring spaces where curiosity is encouraged
              and creativity shines.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <ValueCard
              icon={Heart}
              title="Care"
              desc="We nurture every child with kindness and patience."
            />
            <ValueCard
              icon={Target}
              title="Growth"
              desc="Helping children build strong foundations for life."
            />
            <ValueCard
              icon={Shield}
              title="Safety"
              desc="Providing a secure and supportive learning environment."
            />
            <ValueCard
              icon={Award}
              title="Confidence"
              desc="Encouraging children to believe in themselves."
            />
          </div>
        </div>
      </section>

      {/* 3. Our Journey */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-3">
          <div className="h-fit lg:sticky lg:top-32">
            <h2 className="mb-6 text-4xl font-black">Our Journey</h2>
            <p className="mb-8 text-gray-500">
              From humble beginnings to a vibrant learning community.
            </p>
            {/* <button className="flex items-center gap-2 rounded-2xl bg-[#7c3aed] px-8 py-4 font-black text-white shadow-lg cursor-pointer">
              View School Story <ChevronRight size={20} />
            </button> */}
          </div>

          <div className="lg:col-span-2">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                desc={item.desc}
                isLast={index === timelineData.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black">Meet Our Team</h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            Passionate educators dedicated to your child's growth and happiness.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Mrs. Grace Adams",
              role: "Head Teacher",
              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
            },
            {
              name: "Mr. Daniel Scott",
              role: "Primary Coordinator",
              img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
            },
            {
              name: "Ms. Linda Brown",
              role: "Early Years Lead",
              img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
            },
            {
              name: "Mr. James Lee",
              role: "Activities Director",
              img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
            },
          ].map((leader, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative mb-4 aspect-4/5 overflow-hidden rounded-4xl shadow-lg transition-all group-hover:shadow-2xl">
                <img
                  src={leader.img}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={leader.name}
                />
              </div>
              <h4 className="text-xl font-black text-gray-900">
                {leader.name}
              </h4>
              <p className="text-sm font-bold tracking-widest text-[#ec4899] uppercase">
                {leader.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
