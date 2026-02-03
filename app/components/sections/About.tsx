"use client";

import { motion } from "framer-motion";
import { Code, Database, Cog } from "lucide-react";

const skills = [
  { icon: Code, title: "Développement Frontend", desc: "React.js, Next.js, Tailwind CSS" },
  { icon: Cog, title: "Outils", desc: "Git, Figma, Postman" },
  { icon: Database, title: "Backend & DB", desc: "Node.js, Express, MySQL, TypeScript, Laravel" },
];

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto flex flex-col mb-20 sm:mb-36 px-4 sm:px-0"
    >
      {/* TITRE */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        À propos de moi
      </motion.h2>

      {/* TEXTE */}
      <motion.div
        className="text-center max-w-6xl mb-12 space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="text-base md:text-lg text-muted whitespace-pre-line">
          Développeuse web full-stack orientée front-end, je suis passionnée par la création
          d'interfaces modernes et intuitives. Mon objectif est de transformer des idées en 
          solutions digitales performantes et engageantes pour les utilisateurs.
        </p>
        <p className="text-base md:text-lg text-muted whitespace-pre-line">
          Je travaille principalement avec <span className="text-primary font-medium">React.js</span>, 
          <span className="text-primary font-medium"> Next.js</span>, et <span className="text-primary font-medium">Tailwind CSS</span> pour construire des expériences utilisateur fluides et modernes.
        </p>
      </motion.div>

      {/* CARDS SKILLS */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center p-4 sm:p-6 bg-foreground/10 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <skill.icon className="text-primary mb-3 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
            <h3 className="font-semibold text-sm sm:text-lg mb-2">{skill.title}</h3>
            <p className="text-muted text-xs sm:text-sm">{skill.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
