import hooks from "../data/hooks.json";
import { Hook } from "./types";
import HookGrid from "./components/HookGrid";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Hooks</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Browse community-built hooks and click through to install them.
        </p>
      </div>
      <HookGrid hooks={hooks as Hook[]} />
    </div>
  );
}
