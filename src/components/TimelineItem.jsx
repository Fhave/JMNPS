export const TimelineItem = ({ year, title, desc, isLast }) => (
  <div className="group flex gap-8">
    <div className="flex flex-col items-center">
      <div className="h-4 w-4 rounded-full bg-[#7c3aed] ring-4 ring-purple-100" />
      {!isLast && (
        <div className="h-full w-0.5 bg-gray-100 transition-colors group-hover:bg-purple-200" />
      )}
    </div>
    <div className="pb-12">
      <span className="text-lg font-black text-[#ec4899]">{year}</span>
      <h4 className="mt-1 mb-2 text-2xl font-bold text-gray-900">{title}</h4>
      <p className="max-w-md text-gray-500">{desc}</p>
    </div>
  </div>
);
