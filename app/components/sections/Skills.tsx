"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Code, Layout, Database, Palette, Terminal } from "lucide-react";

const skills = [
  { icon: Code, title: "React.js", level: 90, desc: "Composants, Hooks, State Management" },
  { icon: Layout, title: "Next.js", level: 85, desc: "SSR, SSG, API Routes" },
  { icon: Database, title: "Node.js / Express", level: 75, desc: "REST API, Middleware, Auth" },
  { icon: Code, title: "Laravel", level: 50, desc: "REST API, Middleware, Auth" },
  { icon: Terminal, title: "Git & GitHub", level: 90, desc: "Versioning, Branching, PRs" },
  { icon: Database, title: "MySQL / PostgreSQL", level: 70, desc: "Schemas, Queries, Relations" },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section
      id="skills"
      ref={ref}
      className="max-w-6xl mx-auto flex flex-col mb-44"
    >
      {/* TITRE */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
      >
        Compétences
      </motion.h2>

      {/* TEXTE */}
      <motion.p
        className="text-base md:text-lg text-muted mb-12 max-w-6xl text-center"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{ visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } } }}
      >
        Voici un aperçu de mes compétences techniques et créatives, utilisées pour
        concevoir des applications web modernes et performantes.
      </motion.p>

      {/* CARDS / SKILLS */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="relative flex flex-col p-6 bg-[rgb(var(--color-foreground)/0.05)] rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 group"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <skill.icon className="text-primary" size={28} />
              <h3 className="font-semibold text-lg">{skill.title}</h3>
            </div>

            {/* BARRE DE PROGRESSION ANIMÉE */}
            <div className="w-full bg-muted/20 h-3 rounded-full">
              <motion.div
                className="h-3 rounded-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <span className="text-sm text-muted mt-2">{skill.level}%</span>

            {/* TOOLTIP */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[rgb(var(--color-foreground)/0.9)] text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {skill.desc}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
