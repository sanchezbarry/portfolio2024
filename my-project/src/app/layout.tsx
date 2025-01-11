import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes"
import { Providers } from "./provider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter" });

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["400"]
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600"]
})

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
    <html lang="en">
      <body className={`${cormorantGaramond.variable} ${poppins.variable} ${inter.variable}`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
