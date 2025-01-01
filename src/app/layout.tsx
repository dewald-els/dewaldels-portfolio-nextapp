import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "nes.css/css/nes.min.css";
import "./globals.css";

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "Dewald Els - Portfolio",
  description: "Full Stack web developer Porfolio for Dewald Els",
  keywords: ["developer", "portfolio", "full-stack", "godot", "react", "node"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.jpg" sizes="any" />
      </head>
      <body className={`${pressStart.variable}`}>{children}</body>
    </html>
  );
}
