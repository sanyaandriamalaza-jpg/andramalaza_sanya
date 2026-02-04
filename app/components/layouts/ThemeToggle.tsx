"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-muted/10 transition"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={25} className="hover:text-yellow-400"/> : <Moon size={25} className="hover:text-blue-900"/>}
    </button>
  );
}
