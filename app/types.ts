export type Category =
  | "Security"
  | "Automation"
  | "Notifications"
  | "Git"
  | "Utility"
  | "Framework";

export type Hook = {
  id: string;
  name: string;
  category: Category;
  description: string;
  repoUrl: string;
  author?: string;
  hookEvents?: string[];
  tags?: string[];
};

export const categoryColors: Record<Category, string> = {
  Security: "bg-red-900/50 text-red-300",
  Automation: "bg-blue-900/50 text-blue-300",
  Notifications: "bg-yellow-900/50 text-yellow-300",
  Git: "bg-orange-900/50 text-orange-300",
  Utility: "bg-zinc-700 text-zinc-300",
  Framework: "bg-violet-900/50 text-violet-300",
};
