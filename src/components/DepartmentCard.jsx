import { ArrowRight } from "lucide-react";

export const DepartmentCard = ({
  icon: Icon,
  title,
  subjects,
  color,
  image,
}) => (
  <div className="group relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl">
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover brightness-75 transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90"
      />
      <div
        className={`absolute top-4 right-4 rounded-2xl p-3 text-white shadow-lg ${color}`}
      >
        {Icon && <Icon size={24} />}
      </div>
    </div>
    <div className="p-8">
      <h3 className="mb-4 text-2xl font-black text-gray-900">{title}</h3>
      <div className="mb-6 flex flex-wrap gap-2">
        {subjects.map((s) => (
          <span
            key={s}
            className="rounded-full border border-gray-100 bg-gray-50 px-3 py-1 text-xs font-bold text-gray-500"
          >
            {s}
          </span>
        ))}
      </div>
      {/* <button className="flex items-center gap-2 text-sm font-black tracking-widest text-[#7c3aed] uppercase transition-all group-hover:gap-4">
        Learn More <ArrowRight size={16} />
      </button> */}
    </div>
  </div>
);
