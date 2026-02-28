import { ArrowRight, Clock, MapPin } from "lucide-react";

// Highlight/News Card
export const InfoCard = ({ category, title, description, image }) => {
  return (
    <div className="group overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-black tracking-widest text-[#ec4899] uppercase backdrop-blur">
          {category}
        </div>
      </div>
      <div className="p-8">
        <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-[#7c3aed]">
          {title}
        </h3>
        <p className="mb-6 line-clamp-2 leading-relaxed text-gray-500">
          {description}
        </p>
        <button className="group/btn flex items-center gap-2 font-bold text-[#7c3aed]">
          Read Story{" "}
          <ArrowRight
            size={18}
            className="transition-transform group-hover/btn:translate-x-2"
          />
        </button>
      </div>
    </div>
  );
};
