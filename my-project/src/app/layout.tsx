import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanchez Barry | Software Engineer",
  description: "A marketer turned software engineer, after discovering my love for coding after dabbling with a few websites. I'm excited to use my experience as a marketer to build apps that are intuitive and feel like second nature to use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
