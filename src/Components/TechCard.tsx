// src/components/TechCard.tsx
import type { Technology } from "./TechnologySection";

interface TechCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

const TechCard = ({ technology, isAdded, onAdd }: TechCardProps) => {
  const { name, description, category, difficulty, rating, badge, icon } =
    technology;

  return (
    <div className="flex flex-col rounded-xl border border-gray-200 p-5 shadow-sm">
      {/* Icon + badge row */}
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
          <img src={icon} alt={`${name} icon`} className="h-6 w-6" />
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
          {badge}
        </span>
      </div>

      {/* Name + description */}
      <h3 className="mt-3 text-lg font-semibold text-gray-900">{name}</h3>
      <p className="mt-1 flex-1 text-sm text-gray-600">{description}</p>

      {/* Category chip, difficulty chip, rating */}
      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700">
            {category}
          </span>
          <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700">
            {difficulty}
          </span>
        </div>
        <span className="flex items-center gap-1 text-yellow-500">
          ★ <span className="text-gray-700">{rating}</span>
        </span>
      </div>

      {/* Add to Stack button */}
      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(technology)}
        className={`mt-4 w-full rounded-lg py-2.5 text-sm font-medium text-white transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-400"
            : "bg-gray-900 hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;
