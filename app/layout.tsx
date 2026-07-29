import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, IBM_Plex_Mono } from "next/font/google";
import { content } from "@/lib/content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${content.brand} — A boutique hotel above Cala Serena`,
  description: content.home.intro,
  openGraph: {
    title: `${content.brand} — Boutique hotel, Mediterranean coast`,
    description: content.home.intro,
    type: "website",
  },
};

// Runs before paint. Enables JS-driven reveals + parallax only when motion is
// allowed; no-JS and reduced-motion keep content visible and static.
const boot = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js')}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${jost.variable} ${mono.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
        {children}
      </body>
    </html>
  );
}
