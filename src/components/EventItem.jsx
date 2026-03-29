import { ArrowRight, Clock, MapPin } from "lucide-react";

// Event Card
export const EventItem = ({ date, month, title, time, location }) => {
  return (
    <div className="group flex cursor-pointer flex-col items-start gap-6 rounded-4xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-xl sm:flex-row sm:items-center">
      <div className="min-w-22.5 rounded-2xl bg-[#f3e8ff] px-6 py-4 text-center transition-colors group-hover:bg-[#7c3aed]">
        <div className="text-3xl leading-none font-black text-[#7c3aed] group-hover:text-white">
          {date}
        </div>
        <div className="mt-1 text-xs font-bold text-gray-500 uppercase group-hover:text-purple-200">
          {month}
        </div>
      </div>
      <div className="flex-1">
        <h4 className="mb-2 text-xl font-extrabold text-gray-900">{title}</h4>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-400">
          <span className="flex items-center gap-1.5">
            <Clock size={16} /> {time}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={16} /> {location}
          </span>
        </div>
      </div>
      {/* <div className="hidden -translate-x-2.5 text-[#7c3aed] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 md:block">
        <ArrowRight size={28} />
      </div> */}
    </div>
  );
};
