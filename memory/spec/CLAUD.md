# Hookup — Product Spec (MVP)

**Version:** 0.1
**Status:** Draft
**Date:** 2026-03-08

---

## Overview

**Hookup** is a browsable directory of open-source Claude Code hooks. Developers can discover, explore, and find links to hooks shared on GitHub. The MVP focuses entirely on displaying hooks in a clean, grid-based interface.

---

## What Are Claude Code Hooks?

Claude Code hooks are shell scripts (or HTTP endpoints) that fire at specific points in the Claude Code lifecycle. They let developers extend, automate, and control Claude's behavior — for example:

- Blocking dangerous bash commands before they run
- Auto-formatting files after edits
- Sending notifications when a task completes
- Scanning tool output for prompt injection

**Hook events** include: `PreToolUse`, `PostToolUse`, `Notification`, `Stop`, `UserPromptSubmit`, `SessionStart`, `SessionEnd`, `Setup`.

---

## MVP Scope

The MVP is read-only. There is no user authentication, no submission form, and no database writes. Hook data is curated manually or loaded from a static data file.

### In Scope
- Display a grid of hooks on the homepage
- Each hook card shows: name, category, short description, and a GitHub link
- Filter hooks by category
- Basic search by name or description

### Out of Scope (post-MVP)
- User submissions
- Authentication / accounts
- Star / upvote system
- Hook detail pages
- Ratings or reviews
- CLI install commands

---

## Data Model

Each hook entry has the following fields:

| Field         | Type     | Required | Notes                                      |
|---------------|----------|----------|--------------------------------------------|
| `id`          | string   | yes      | Unique slug, e.g. `parry-injection-scanner` |
| `name`        | string   | yes      | Display name, e.g. `Parry`                 |
| `category`    | string   | yes      | See categories below                       |
| `description` | string   | yes      | 1–2 sentence summary                       |
| `repoUrl`     | string   | yes      | Link to the GitHub repo                    |
| `author`      | string   | no       | GitHub username of the author              |
| `hookEvents`  | string[] | no       | e.g. `["PreToolUse", "PostToolUse"]`       |
| `tags`        | string[] | no       | Extra searchable keywords                  |

### Hook Categories

| Category      | Description                                          |
|---------------|------------------------------------------------------|
| Security      | Injection scanners, secret detectors, guardrails     |
| Automation    | Auto-format, lint, test runners                      |
| Notifications | Slack, desktop, sound, TTS alerts                    |
| Git           | Commit hooks, branch rules, diff watchers            |
| Utility       | Logging, context injection, session helpers          |
| Framework     | TypeScript/SDK wrappers, reusable hook systems       |

---

## Pages

### 1. Homepage `/`

The only page in the MVP.

**Layout:**
- Header with logo ("Hookup") and tagline: _"Discover open-source Claude Code hooks"_
- Search bar (filters cards by name/description client-side)
- Category filter tabs/pills (All | Security | Automation | Notifications | Git | Utility | Framework)
- Hook grid (responsive, 3 columns on desktop → 2 on tablet → 1 on mobile)
- Footer with link to Claude Code docs and a "Submit a hook" placeholder (disabled in MVP)

**Hook Card:**
```
┌─────────────────────────────┐
│  [Category pill]            │
│  Hook Name                  │
│  Short description (2 lines)│
│                             │
│  [Author]    [→ GitHub]     │
└─────────────────────────────┘
```

Each card links out to the GitHub repo. No internal detail page in MVP.

---

## Tech Stack

Built on top of the existing Next.js app in this repo.

| Layer      | Choice                          |
|------------|---------------------------------|
| Framework  | Next.js 15 (App Router)         |
| Styling    | Tailwind CSS                    |
| Data       | Static JSON file (`/data/hooks.json`) |
| Hosting    | Vercel (assumed)                |

Data is a static JSON file checked into the repo. No database or API needed for MVP.

---

## Static Data File

Location: `/data/hooks.json`

Example shape:

```json
[
  {
    "id": "parry",
    "name": "Parry",
    "category": "Security",
    "description": "Scans tool inputs and outputs for prompt injection attacks, secrets, and data exfiltration attempts.",
    "repoUrl": "https://github.com/hesreallyhim/awesome-claude-code",
    "author": "hesreallyhim",
    "hookEvents": ["PreToolUse", "PostToolUse"],
    "tags": ["security", "injection", "scanner"]
  },
  {
    "id": "dippy",
    "name": "Dippy",
    "category": "Automation",
    "description": "Auto-approves safe bash commands using AST-based parsing while prompting for destructive operations.",
    "repoUrl": "https://github.com/hesreallyhim/awesome-claude-code",
    "author": "hesreallyhim",
    "hookEvents": ["PreToolUse"],
    "tags": ["bash", "safety", "automation"]
  }
]
```

---

## Non-Goals

- No server-side search (client-side filtering is sufficient for MVP scale)
- No pagination (load all hooks, assume < 100 entries at launch)
- No analytics
- No dark mode requirement (can be added later)

---

## Success Criteria (MVP)

- [ ] Homepage loads with a grid of hook cards
- [ ] Cards display name, category, description, author, and GitHub link
- [ ] Filtering by category works client-side
- [ ] Search by name/description works client-side
- [ ] Responsive layout works on mobile
- [ ] At least 10 real hooks seeded in the data file
