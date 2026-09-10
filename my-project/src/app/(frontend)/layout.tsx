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

// The body font (Mirat-Masson after Sora Sagano, SIL OFL). 418 codepoints,
// em and en dash included, so body copy needs no second family behind it.
//
// The family jumps Light 300 → Regular 400 → Black 900 with nothing between,
// and the site asks for 500/600/700. Black is declared here as 700 so that
// `font-bold` matches a real face outright: left at 900 the browser would pick
// it for 600 and 700 anyway, and the point is that nothing gets synthesised.
// 500 resolves down to Regular. No italics.
//
// Light 300 is the resting weight for body copy — see the `body` rule in
// globals.css. Regular read a shade heavy at paragraph sizes, and this family
// has no 350 to split the difference.
const amiamie = localFont({
  src: [
    { path: "../../fonts/Amiamie-Light.woff2", weight: "300", style: "normal" },
    { path: "../../fonts/Amiamie-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/Amiamie-Black.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-amiamie",
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
      className={`${amiamie.variable} ${bricolageGrotesque.variable}`}
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
