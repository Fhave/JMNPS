import React from "react";
import { ChevronLeft, ChevronRight, Search, Globe } from "lucide-react";
import Navbar from "../components/Navbar"; // added

const months = [
  {
    name: "August 2024",
    days: 31,
    startDay: 3, // 0 = Sunday, 1 = Monday ...
  },
  {
    name: "September 2024",
    days: 30,
    startDay: 3,
  },
];

const keyDates = [
  { title: "First Day of School", date: "August 26, 2024" },
  { title: "Labor Day (No School)", date: "September 2, 2024" },
  { title: "Parent-Teacher Conferences", date: "September 20, 2024" },
  { title: "Fall Break (No School)", date: "October 14, 2024" },
  { title: "Thanksgiving Break (No School)", date: "November 25-29, 2024" },
  {
    title: "Winter Break (No School)",
    date: "December 23, 2024 - January 3, 2025",
  },
  { title: "School Resumes", date: "January 6, 2025" },
  { title: "Presidents' Day (No School)", date: "February 17, 2025" },
  { title: "Spring Break (No School)", date: "March 10-14, 2025" },
  { title: "Good Friday (No School)", date: "April 18, 2025" },
  { title: "Memorial Day (No School)", date: "May 26, 2025" },
  { title: "Last Day of School", date: "June 6, 2025" },
];

const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

export default function Calendar() {
  return (
    <div className="font-['Lexend','Noto Sans',sans-serif] flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center px-10 py-5">
        <div className="flex w-full max-w-4xl flex-col gap-4">
          <div>
            <h1 className="text-2xl font-bold text-black">Academic Calendar</h1>
            <p className="text-sm text-blue-800">
              Stay up-to-date with all the important dates for the school year.
            </p>
          </div>

          {/* Calendar Months */}
          <div className="flex flex-wrap justify-center gap-6">
            {months.map((month, idx) => (
              <CalendarMonth key={idx} month={month} />
            ))}
          </div>

          {/* Key Dates */}
          <h2 className="pt-5 text-xl font-bold">Key Dates</h2>
          <div className="mt-2 flex flex-col gap-2">
            {keyDates.map((event, idx) => (
              <div
                key={idx}
                className="flex min-h-[72px] flex-col gap-1 bg-slate-50 px-4 py-2"
              >
                <p className="font-medium text-black">{event.title}</p>
                <p className="text-sm text-blue-800">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function CalendarMonth({ month }) {
  const daysArray = Array.from({ length: month.days }, (_, i) => i + 1);
  return (
    <div className="flex w-80 flex-col gap-2">
      <div className="flex items-center justify-between px-1">
        <button>
          <ChevronLeft size={18} />
        </button>
        <p className="flex-1 text-center text-base font-bold">{month.name}</p>
        <button>
          <ChevronRight size={18} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {weekdays.map((day) => (
          <p key={day} className="text-[13px] font-bold">
            {day}
          </p>
        ))}
        {/* Empty placeholders for days before month start */}
        {Array.from({ length: month.startDay }).map((_, idx) => (
          <div key={`empty-${idx}`} />
        ))}
        {daysArray.map((day) => (
          <button
            key={day}
            className={`h-12 w-full rounded-full ${
              day === 5 ? "bg-blue-600 text-white" : "text-black"
            } flex items-center justify-center`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
