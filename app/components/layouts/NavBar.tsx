"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
  <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-background/70 border-b border-muted">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-bold text-4xl text-primary">
          S<span className="text-primary text-4xl">.</span>
        </a>

        <ul className="hidden md:flex gap-8 text-md font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile burger button (before theme toggle) */}
        <div className="flex items-center gap-3">
          <button
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((s) => !s)}
            className="md:hidden p-2 rounded-md hover:bg-muted/10"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-muted md:hidden">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-lg font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
