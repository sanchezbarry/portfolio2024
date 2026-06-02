import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./provider";
import FloatingButtonExample from "@/components/FloatingAction"

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
  title: {
    default: "Sanchez | Frontend Developer",
    template: "%s | Sanchez",
  },
  description: "Frontend developer at InvestCloud based in Singapore, with a background in marketing. I build things that are easy to use, not just easy to build.",
  metadataBase: new URL("https://www.sanchezbarry.com"),
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.sanchezbarry.com",
    siteName: "Sanchez Barry",
    title: "Sanchez Barry | Frontend Developer",
    description: "Frontend developer at InvestCloud based in Singapore, with a background in marketing. I build things that are easy to use, not just easy to build.",
    images: [
      {
        url: "/headshot.jpeg",
        width: 800,
        height: 800,
        alt: "Barry Sanchez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barry Sanchez | Frontend Developer",
    description: "Frontend developer at InvestCloud based in Singapore.",
    images: ["/headshot.jpeg"],
  },
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
            <FloatingButtonExample />
          {children}
        </Providers>
      </body>
    </html>
  );
}
