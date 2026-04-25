export const CategoryBadge = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`rounded-full border px-6 py-2 text-sm font-bold whitespace-nowrap transition-all ${
      active
        ? "border-[#7c3aed] bg-[#7c3aed] text-white shadow-lg shadow-purple-200"
        : "border-gray-100 bg-white text-gray-500 hover:border-purple-200"
    }`}
  >
    {children}
  </button>
);
