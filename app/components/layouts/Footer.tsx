import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Identité */}
          <div>
            <p className="text-lg font-semibold">
              Sanya Andriamalaza
            </p>
            <p className="text-sm text-muted-foreground">
              Développeuse web full-stack orientée front-end
            </p>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap gap-6 text-sm font-medium">
              <li>
                <Link
                  href="#home"
                  className="transition hover:text-primary"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="transition hover:text-primary"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="transition hover:text-primary"
                >
                  Compétences
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="transition hover:text-primary"
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="transition hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Réseaux */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:sanya.andriamalaza@email.com"
              aria-label="Email"
              className="rounded-full border p-2 transition hover:bg-muted hover:border-muted hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>

            <a
              href="https://github.com/sanyaandriamalaza"
              target="_blank"
              aria-label="GitHub"
              className="rounded-full border p-2 transition hover:bg-muted hover:border-muted hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href="https://linkedin.com/in/sanya-andriamalaza"
              target="_blank"
              aria-label="LinkedIn"
              className="rounded-full border p-2 transition hover:bg-muted hover:border-muted hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="mt-12 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sanya Andriamalaza — Portfolio personnel
        </div>
      </div>
    </footer>
  );
}
