import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);
  return (
    <button
      type="button"
      onClick={() => setLight((v) => !v)}
      aria-label="Toggle theme"
      className="glass inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:ring-glow"
    >
      {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}
