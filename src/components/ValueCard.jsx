export const ValueCard = ({ icon: Icon, title, desc }) => (
  <div className="rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-xl shadow-purple-50 transition-transform hover:-translate-y-2">
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3e8ff] text-[#7c3aed]">
      {Icon && <Icon size={28} />}
    </div>
    <h3 className="mb-3 text-xl font-bold">{title}</h3>
    <p className="text-sm leading-relaxed text-gray-500">{desc}</p>
  </div>
);
