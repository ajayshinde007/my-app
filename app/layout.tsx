import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hookup — Discover open-source Claude Code hooks",
  description:
    "A browsable directory of open-source Claude Code hooks. Find hooks for security, automation, notifications, git, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-zinc-950 text-zinc-100 antialiased`}
      >
        <header className="border-b border-zinc-800 px-6 py-4">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <div>
              <span className="text-lg font-bold tracking-tight text-white">
                Hookup
              </span>
              <span className="ml-3 hidden text-sm text-zinc-500 sm:inline">
                Discover open-source Claude Code hooks
              </span>
            </div>
            <a
              href="https://docs.anthropic.com/en/docs/claude-code/hooks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              What are hooks?
            </a>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>

        <footer className="border-t border-zinc-800 px-6 py-6 text-center text-xs text-zinc-600">
          Built for the Claude Code community
        </footer>
      </body>
    </html>
  );
}
