import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReVibe — good things deserve another go",
  description: "Discover thoughtful pre-loved finds and give your own favourites a second life.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
