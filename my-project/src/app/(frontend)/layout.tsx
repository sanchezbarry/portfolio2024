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

// The body font (Chris Simpson, CC0). One real face per weight the site uses,
// so nothing is synthesised — the browser never has to fake a bold, which is
// what made weights render differently from one machine to the next.
// No italics and no 300: the site's only `font-light` body element is the
// /blog intro, and next/font preloads every declared face, so carrying it
// would cost 26KB on every page for one paragraph. It resolves to 400.
// 307 codepoints, em and en dash included, so body copy needs no second
// family behind it to fill in missing punctuation.
const metropolis = localFont({
  src: [
    { path: "../../fonts/Metropolis-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/Metropolis-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../fonts/Metropolis-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../fonts/Metropolis-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-metropolis",
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
  //
  // The font variables go on <html>, not <body>: Tailwind's preflight sets
  // `font-family` on html from `fontFamily.sans`, and a custom property defined
  // on body is not visible there. Declared any lower, the var() in that rule is
  // undefined, the whole declaration is dropped as invalid at computed-value
  // time, and text without a `font-sans` class falls back to the browser serif.
  return (
    <html
      lang="en"
      className={`${metropolis.variable} ${bricolageGrotesque.variable}`}
      suppressHydrationWarning
    >
      <body>
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
