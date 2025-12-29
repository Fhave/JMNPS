import React from "react";
import { ChevronLeft, ChevronRight, Search, Globe } from "lucide-react";

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
  { title: "Winter Break (No School)", date: "December 23, 2024 - January 3, 2025" },
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
    <div className="flex flex-col min-h-screen bg-slate-50 font-['Lexend','Noto Sans',sans-serif]">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-200 px-10 py-3">
        <div className="flex items-center gap-4 text-black">
          <div className="w-10 h-10 text-2xl">
            {/* Logo Placeholder */}
            <svg
              viewBox="0 0 48 48"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" />
              <path d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819Z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold">Evergreen School</h2>
        </div>

        <div className="flex flex-1 justify-end items-center gap-6">
          <nav className="flex gap-6">
            {["About","Academics","Admissions","Calendar","News & Events","Contact"].map(item => (
              <a key={item} href="#" className="text-sm font-medium text-black">{item}</a>
            ))}
          </nav>
          <div className="flex gap-2">
            <button className="p-2 bg-gray-200 rounded-lg">
              <Search size={20} />
            </button>
            <button className="p-2 bg-gray-200 rounded-lg">
              <Globe size={20} />
            </button>
          </div>
          <div
            className="w-10 h-10 rounded-full bg-cover bg-center"
            style={{backgroundImage: "url('https://via.placeholder.com/40')"}}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="px-10 py-5 flex flex-col items-center flex-1">
        <div className="max-w-4xl w-full flex flex-col gap-4">
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
          <h2 className="text-xl font-bold pt-5">Key Dates</h2>
          <div className="flex flex-col gap-2 mt-2">
            {keyDates.map((event, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-1 bg-slate-50 px-4 py-2 min-h-[72px]"
              >
                <p className="text-black font-medium">{event.title}</p>
                <p className="text-blue-800 text-sm">{event.date}</p>
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
    <div className="flex flex-col w-80 gap-2">
      <div className="flex items-center justify-between px-1">
        <button><ChevronLeft size={18} /></button>
        <p className="text-base font-bold text-center flex-1">{month.name}</p>
        <button><ChevronRight size={18} /></button>
      </div>
      <div className="grid grid-cols-7 text-center gap-1">
        {weekdays.map((day) => (
          <p key={day} className="text-[13px] font-bold">{day}</p>
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

