import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./(homepageLoggedin)/Navbar";
import PageFooter from "./(homepage)/PageFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disney+ | Streaming movies & shows",
  description:
    "It's movie night at Disney+. Stream now for access to hit movies, original releases, epic adventures, animated classics, and favourite TV series.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
