"use client";

import { Category } from "../types";

const CATEGORIES: Array<Category | "All"> = [
  "All",
  "Security",
  "Automation",
  "Notifications",
  "Git",
  "Utility",
  "Framework",
];

interface CategoryFilterProps {
  selected: Category | "All";
  onChange: (category: Category | "All") => void;
}

export default function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            selected === cat
              ? "bg-violet-600 text-white"
              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
