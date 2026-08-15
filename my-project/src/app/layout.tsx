import type { Metadata } from "next";
import { Bricolage_Grotesque, Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./provider";
import FloatingButtonExample from "@/components/FloatingAction"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque" });

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
  keywords: ["Sanchez Barry", "Frontend Developer", "Software Engineer Singapore", "React Developer", "Next.js Developer", "InvestCloud"],
  authors: [{ name: "Sanchez Barry", url: "https://www.sanchezbarry.com" }],
  creator: "Sanchez Barry",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
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
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sanchez Barry",
    url: "https://www.sanchezbarry.com",
    image: "https://www.sanchezbarry.com/headshot.jpeg",
    jobTitle: "Frontend Developer",
    worksFor: {
      "@type": "Organization",
      name: "InvestCloud",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Singapore",
    },
    sameAs: [
      "https://www.linkedin.com/in/sanchez-barry/",
      "https://github.com/sanchezbarry",
    ],
  };

  return (
    <html lang="en">
      <body className={`${cormorantGaramond.variable} ${poppins.variable} ${bricolageGrotesque.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>
          <Navbar />
            <FloatingButtonExample />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
