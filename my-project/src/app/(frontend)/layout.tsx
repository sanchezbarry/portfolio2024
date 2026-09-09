import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
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

// The body font. Self-hosted rather than pulled from fonts.cdnfonts.com, whose
// stylesheet listed `local('Alte Haas Grotesk')` ahead of its own URL — so any
// machine with the font installed rendered its own copy instead, and anyone
// whose ad blocker or DNS ate the CDN silently dropped to the OS default.
// Only 400 and 700 exist; 300/500/600 resolve to these by CSS weight matching.
const alteHaasGrotesk = localFont({
  src: [
    { path: "../../fonts/AlteHaasGroteskRegular.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/AlteHaasGroteskBold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-alte-haas-grotesk",
  display: "swap",
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

  // next-themes sets class="dark" and color-scheme on <html> from the client,
  // which the server cannot know ahead of time. suppressHydrationWarning covers
  // that one element only; it does not hide mismatches elsewhere in the tree.
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${alteHaasGrotesk.variable} ${bricolageGrotesque.variable}`}>
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
