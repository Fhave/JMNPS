import { Calendar, User, ArrowRight, Share2 } from "lucide-react";

export const NewsCard = ({
  category,
  date,
  title,
  author,
  image,
  featured = false,
}) => (
  <article
    className={`group cursor-pointer ${featured ? "lg:col-span-2" : ""}`}
  >
    <div
      className={`overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white transition-all duration-500 hover:shadow-2xl ${
        featured ? "flex h-full flex-col lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${featured ? "h-64 lg:h-auto lg:w-1/2" : "h-64"}`}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-black tracking-widest text-[#ec4899] uppercase backdrop-blur-md">
          {category}
        </div>
      </div>

      <div
        className={`flex flex-col justify-center p-8 ${featured ? "lg:w-1/2" : ""}`}
      >
        <div className="mb-4 flex items-center gap-4 text-xs font-bold text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar size={14} /> {date}
          </span>
          <span className="flex items-center gap-1">
            <User size={14} /> By {author}
          </span>
        </div>
        <h3
          className={`${
            featured ? "text-3xl lg:text-4xl" : "text-xl"
          } mb-4 leading-tight font-black transition-colors group-hover:text-[#7c3aed]`}
        >
          {title}
        </h3>
        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-500">
          Stay updated with heartwarming stories, exciting activities, and
          important announcements from our vibrant school family.
        </p>
        <div className="mt-auto flex items-center justify-between">
          {/* Read More button hidden/commented out as requested */}
          {/* <button className="group/btn flex items-center gap-2 text-sm font-black tracking-wider text-[#7c3aed] uppercase">
            Read More
            <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-2" />
          </button>
          */}
          {/* <div className="flex gap-2">
            <button className="rounded-full p-2 text-gray-400 hover:bg-gray-50">
              <Share2 size={18} />
            </button>
            <button className="rounded-full p-2 text-gray-400 hover:bg-gray-50">
              <Bookmark size={18} />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  </article>
);
