"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Monitor, Sparkles } from "lucide-react";
import projects from "@/app/lib/project";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto flex flex-col mb-44"
    >
    
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projets
      </motion.h2>

      {/* INTRO */}
      <motion.p
        className="text-base md:text-lg text-muted max-w-6xl mb-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Les projets présentés ici sont des projets de stage ou académiques,
        réalisés dans une démarche d’apprentissage et d’évolution continue.
        Même s’ils ne sont pas tous déployés, ils reflètent mon approche,
        mes compétences techniques et mon sens du détail.
      </motion.p>

      {/* GRID */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {projects.map((project, idx) => (
          <motion.article
            key={idx}
            className="group rounded-xl overflow-hidden bg-foreground/50 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* IMAGE */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3">
                <Monitor className="text-primary" size={22} />
                <h3 className="font-semibold text-lg">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm text-muted mb-4">
                {project.description}
              </p>

              <ul className="space-y-1 text-sm text-muted mb-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Sparkles size={14} className="text-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <span className="mt-4 text-xs text-secondary font-medium">
                {project.type}
              </span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
