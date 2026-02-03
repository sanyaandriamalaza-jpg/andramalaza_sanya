"use client";

import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 md:pt-0 mb-0 md:mb-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-20 md:mb-0">
        <motion.div
          className="space-y-6 order-2 md:order-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Bonjour, je suis <br />
            <span className="text-primary">Sanya Andriamalaza</span>
          </h1>

          <h3 className="text-2xl font-semibold text-primary/70">
            Développeuse web full-stack{" "}
            <span className="text-primary">orientée front-end</span>
          </h3>

          <p className="text-base text-foreground md:text-lg whitespace-pre-line">
            Passionnée par la création d'
            <span className="text-primary/70 font-medium">
              expériences utilisateur exceptionnelles
            </span>
            , je transforme des idées en{" "}
            <span className="text-primary/70 font-medium">
              solutions digitales innovantes
            </span>{" "}
            qui captivent et engagent les utilisateurs.
          </p>

          <p className="text-base md:text-lg text-muted-foreground whitespace-pre-line">
            Bienvenue dans mon{" "}
            <span className="text-primary/70 font-medium">univers digital</span>.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <a
              href="https://cvdesignr.com/p/65d3983945c43"
              className={`group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-4xl font-medium text-base overflow-hidden transition-all duration-500 bg-primary text-background hover:text-muted-foreground`}
            >
              <span className="relative z-10">Voir mon CV</span>
              <ArrowDown size={18} className="relative z-10" />

              <span
                className={`absolute inset-0 bg-background -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0 pointer-events-none rounded-4xl`}
              />
            </a>

            <a
              href="#contact"
              className={`group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-4xl font-medium text-base overflow-hidden transition-all duration-500 border-2 border-primary text-primary hover:text-background`}
            >
              <span className="relative z-10">Me contacter</span>
              <Mail size={18} className="relative z-10" />

              <span
                className={`absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out -z-10 pointer-events-none rounded-xl`}
              />
            </a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="flex justify-center md:justify-end order-1 md:order-2"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <Image
              src="/images/sanya.jpg"
              alt="Photo de Sanya Andriamalaza"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
