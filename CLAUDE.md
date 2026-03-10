# Hookup — Claude Instructions

## Project

**Hookup** is a browsable directory of open-source Claude Code hooks. The full product spec lives at `spec/MVP.md`.

## Stack

- **Framework:** Next.js 15, App Router
- **Styling:** Tailwind CSS
- **Data:** Static JSON at `data/hooks.json` — no database
- **Package manager:** npm

## Key Conventions

- All hook data lives in `data/hooks.json`. To add hooks, edit that file directly.
- Components go in `app/components/`.
- Keep everything client-side for MVP — no API routes needed.
- Hook cards link out to GitHub repos; there are no internal detail pages.

## Hook Data Shape

```ts
type Hook = {
  id: string;          // unique slug
  name: string;
  category: "Security" | "Automation" | "Notifications" | "Git" | "Utility" | "Framework";
  description: string; // 1–2 sentences
  repoUrl: string;     // GitHub link
  author?: string;     // GitHub username
  hookEvents?: string[]; // e.g. ["PreToolUse", "PostToolUse"]
  tags?: string[];
}
```

## MVP Scope

Read the spec before making changes. MVP is read-only — no auth, no submissions, no database writes. See `spec/MVP.md` for full scope, non-goals, and success criteria.
