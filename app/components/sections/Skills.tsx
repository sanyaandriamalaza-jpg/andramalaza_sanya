"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Code,
  Layout,
  Database,
  Github,
  Hexagon,
  Atom,
  Triangle,
  FileCode,
  Wind,
  Figma,
} from "lucide-react";

const skills = [
  {
    icon: Atom,
    title: "React.js",
    level: 80,
    desc: "Composants, Hooks, State Management",
  },
  { icon: Triangle, title: "Next.js", level: 70, desc: "SSR, SSG, API Routes" },
  {
    icon: Hexagon,
    title: "Node.js / Express",
    level: 65,
    desc: "REST API, Middleware, Auth",
  },
  {
    icon: Code,
    title: "Laravel",
    level: 50,
    desc: "REST API, Middleware, Auth",
  },
  {
    icon: Github,
    title: "Git & GitHub",
    level: 80,
    desc: "Versioning, Branching, PRs",
  },
  {
    icon: Database,
    title: "MySQL / PostgreSQL",
    level: 70,
    desc: "Schemas, Queries, Relations",
  },
  {
    icon: FileCode,
    title: "TypeScript",
    level: 50,
    desc: "Types, Interfaces, Generics",
  },
  {
    icon: Wind,
    title: "Tailwind CSS",
    level: 75,
    desc: "Design System, Utility-First, Responsive Design",
  },
  {
    icon: Figma,
    title: "Figma",
    level: 40,
    desc: "Wireframing, Prototyping, Design Systems",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mql = window.matchMedia("(min-width: 768px)");
      setShowAll(mql.matches);

      const handle = (e: MediaQueryListEvent) => setShowAll(e.matches);
      if (mql.addEventListener) {
        mql.addEventListener("change", handle);
      } else {
        mql.addListener(handle);
      }

      return () => {
        if (mql.removeEventListener) {
          mql.removeEventListener("change", handle);
        } else {
          mql.removeListener(handle);
        }
      };
    }
  }, []);

  const skillsToShow = showAll ? skills : skills.slice(0, 3);

  return (
    <section
      id="skills"
      ref={ref}
      className="max-w-6xl mx-auto flex flex-col mb-20 sm:mb-36 px-4 sm:px-0"
    >
      {/* TITRE */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-primary mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        Compétences
      </motion.h2>

      {/* TEXTE */}
      <motion.p
        className="text-sm md:text-lg text-muted mb-8 max-w-6xl text-center"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
        }}
      >
        Voici un aperçu de mes compétences techniques et créatives, utilisées
        pour concevoir des applications web modernes et performantes.
      </motion.p>

      {/* CARDS / SKILLS */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {skillsToShow.map((skill, idx) => (
          <motion.div
            key={idx}
            className="relative flex flex-col p-4 sm:p-6 bg-foreground/10 rounded-xl shadow-sm hover:shadow-2xl hover:scale-105 transition-transform duration-300 group"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <skill.icon className="text-primary w-5 h-5 sm:w-7 sm:h-7" />
              <h3 className="font-semibold text-sm sm:text-lg">
                {skill.title}
              </h3>
            </div>

            {/* BARRE DE PROGRESSION ANIMÉE */}
            <div className="w-full bg-muted/20 h-2 sm:h-3 rounded-full">
              <motion.div
                className="h-2 sm:h-3 rounded-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <span className="text-xs text-muted mt-2">{skill.level}%</span>

            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-foreground/9 text-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
              {skill.desc}
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-4 text-center sm:hidden">
        <button
          className="text-primary font-medium text-sm"
          onClick={() => setShowAll((s) => !s)}
        >
          {showAll ? "Voir moins" : "Voir plus"}
        </button>
      </div>
    </section>
  );
}
