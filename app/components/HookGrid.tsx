"use client";

import { useState, useMemo } from "react";
import { Hook, Category } from "../types";
import HookCard from "./HookCard";
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";

export default function HookGrid({ hooks }: { hooks: Hook[] }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return hooks.filter((hook) => {
      const matchesCategory =
        selectedCategory === "All" || hook.category === selectedCategory;
      const matchesSearch =
        !q ||
        hook.name.toLowerCase().includes(q) ||
        hook.description.toLowerCase().includes(q) ||
        hook.tags?.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [hooks, search, selectedCategory]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <CategoryFilter selected={selectedCategory} onChange={setSelectedCategory} />
        <SearchBar value={search} onChange={setSearch} />
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-zinc-500">No hooks found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((hook) => (
            <HookCard key={hook.id} hook={hook} />
          ))}
        </div>
      )}

      <p className="text-right text-xs text-zinc-600">
        {filtered.length} of {hooks.length} hooks
      </p>
    </div>
  );
}
