"use client";

import HomeContent from "@/components/content/home";
import ThemeProvider from "@/lib/context/theme-context";

import "nes.css/css/nes.min.css";

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}
