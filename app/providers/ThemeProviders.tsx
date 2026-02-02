"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {children}
    </NextThemeProvider>
  );
}
