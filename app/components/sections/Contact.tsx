"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse e-mail invalide"),
  message: z.string().min(5, "Le message est trop court"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      setLoading(false);

      if (res.ok) {
        toast.success("Message envoyé avec succès !");
        form.reset();
      } else {
        const text = await res.text().catch(() => "Erreur serveur");
        toast.error(text || "Une erreur est survenue");
      }
    } catch (err) {
      setLoading(false);
      toast.error("Impossible d'envoyer le message");
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto flex flex-col mb-20 sm:mb-36 px-4 sm:px-0">
      {/* Header */}
      <div className="mb-8 max-w-6xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-primary">
          Me contacter
        </h2>
        <p className="mt-8 text-muted">
          Une idée, un projet ou simplement envie d’échanger ? Laisse-moi un
          message, je te répondrai avec plaisir.
        </p>
      </div>

      {/* Content */}
      <div className="grid gap-12 md:grid-cols-3">
        {/* Formulaire */}
        <Form {...form}>
          <motion.form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-3xl w-full space-y-6 bg-foreground/5 p-8 rounded-xl shadow-lg md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Ton nom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="toi@exemple.com" {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea rows={4} placeholder="Ton message..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <Button type="submit" disabled={loading} className="flex items-center rounded-md">
                <Send size={18} />
                {loading ? "Envoi..." : "Envoyer le message"}
              </Button>
            </div>
          </motion.form>
        </Form>

        {/* Coordonnées */}
        <div className="rounded-2xl shadow-lg p-8">
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
                className="rounded-full border p-3 transition hover:bg-muted/10 hover:border-muted/10 hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://linkedin.com/in/sanya-andriamalaza-8b6369266"
                target="_blank"
                className="rounded-full border p-3 transition hover:bg-muted/10 hover:border-muted/10 hover:text-foreground"
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
