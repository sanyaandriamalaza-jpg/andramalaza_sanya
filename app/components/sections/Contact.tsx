"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      e.currentTarget.reset();
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto flex flex-col mb-44">
      {/* Header */}
      <div className="mb-8 max-w-6xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-primary">
          Me contacter
        </h2>
        <p className="mt-8 text-muted-foreground">
          Une idée, un projet ou simplement envie d’échanger ? Laisse-moi un
          message, je te répondrai avec plaisir.
        </p>
      </div>

      {/* Content */}
      <div className="grid gap-12 md:grid-cols-3">
        {/* Formulaire */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-3xl w-full space-y-6 bg-foreground/50 p-8 rounded-xl shadow-lg md:col-span-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <label className="block text-sm mb-2">Nom</label>
            <input
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-background font-medium hover:opacity-90 transition disabled:opacity-50"
          >
            <Send size={18} />
            {loading ? "Envoi..." : "Envoyer le message"}
          </button>

          {success && (
            <p className="text-sm text-secondary flex items-center gap-2">
              <Mail size={16} />
              Message envoyé avec succès ✨
            </p>
          )}
        </motion.form>
        {/* Coordonnées */}
        <div className="rounded-2xl shadow-md p-8">
          <h3 className="mb-6 text-lg font-semibold">Mes Coordonnées</h3>

          <ul className="space-y-5">
            <li className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Manjakaray Antananarivo Madagascar</span>
            </li>

            <li className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-primary" />
              <a
                href="mailto:sanya.andriamalaza@gmail.com"
                className="hover:underline"
              >
                sanya.andriamalaza@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:+261345726014" className="hover:underline">
                +261 34 57 260 14
              </a>
            </li>
          </ul>

          <div className="mt-8">
            <p className="mb-4 text-sm font-medium text-muted-foreground">
              Réseaux
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/sanyaandriamalaza-jpg"
                target="_blank"
                className="rounded-full border p-3 transition hover:bg-muted hover:border-muted hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://linkedin.com/in/sanya-andriamalaza-8b6369266"
                target="_blank"
                className="rounded-full border p-3 transition hover:bg-muted hover:border-muted hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
