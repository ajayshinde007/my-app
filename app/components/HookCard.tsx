import { Hook, categoryColors } from "../types";

export default function HookCard({ hook }: { hook: Hook }) {
  return (
    <a
      href={hook.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-xl border border-zinc-800 p-5 transition-all hover:border-zinc-600"
      style={{ backgroundColor: "#FFF9E3" }}
    >
      <div className="flex items-start justify-between gap-2">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[hook.category]}`}
        >
          {hook.category}
        </span>
        <svg
          className="h-4 w-4 shrink-0 text-zinc-600 transition-colors group-hover:text-zinc-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>

      <div>
        <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white">
          {hook.name}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-zinc-400 line-clamp-2">
          {hook.description}
        </p>
      </div>

      {hook.hookEvents && hook.hookEvents.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {hook.hookEvents.map((event) => (
            <span
              key={event}
              className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs font-mono text-zinc-400 group-hover:bg-zinc-700"
            >
              {event}
            </span>
          ))}
        </div>
      )}

      {hook.author && (
        <p className="mt-auto text-xs text-zinc-600">@{hook.author}</p>
      )}
    </a>
  );
}
