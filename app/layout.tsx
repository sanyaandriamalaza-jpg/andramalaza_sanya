import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./providers/ThemeProviders";
import Navbar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanya Andriamalaza - Développeuse Full-Stack JS",
  description: "Portfolio de Sanya Andriamalaza, Développeuse Full-Stack JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-linear-to-b from-gray-900 via-gray-800 to-gray-100 text-foreground transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
