import { Metadata } from "next";
import Image from "next/image";
import { SaySomethingNice } from "@/components/SaySomethingNice";
import KofiButton from "@/components/KofiButton";

export const metadata: Metadata = {
  title: "About Me",
  description: "I'm Sanchez, a frontend developer based in Singapore, currently at InvestCloud. My path to engineering started in marketing and copywriting.",
  alternates: {
    canonical: "/me",
  },
  openGraph: {
    title: "About Me | Sanchez",
    description: "I'm Sanchez, a frontend developer based in Singapore, currently at InvestCloud. My path to engineering started in marketing and copywriting.",
    url: "https://www.sanchezbarry.com/me",
  },
};

export default function Me() {
  return (
    <>
      <div className="mt-36 max-w-2xl mx-auto px-10">
        <h1 className="font-cormorantGaramond font-light text-5xl mb-6">About Me</h1>
        <div className="space-y-4 text-lg text-neutral-700 dark:text-neutral-300">
          <p>
            I&apos;m Sanchez - a frontend developer based in Singapore, currently working at InvestCloud building tools used by financial institutions around the world.
          </p>
          <p>
            My path to engineering wasn&apos;t conventional. I spent five years in marketing and copywriting - writing copy, running campaigns, and thinking hard about what makes something easy to understand. That background shapes how I build: I care about the user experience as much as the code underneath it.
          </p>
          <p>
            Outside of my day job, I help small businesses and organisations build clean, modern websites - the kind that look intentional rather than templated. Some of those are on the homepage.
          </p>
          <p>
            I&apos;m always looking for interesting problems to work on. If you have one, feel free to reach out.
          </p>
        </div>
      </div>

      <div className="mt-20 max-w-2xl mx-auto px-10">
        <h2 className="font-cormorantGaramond font-light text-3xl mb-4">Experimental Space</h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          This page is also where I push work-in-progress features to production. Feel free to poke around and let me know if something breaks.
        </p>
      </div>

      <SaySomethingNice />

      <div className="mt-20 max-w-2xl mx-auto px-10 pb-20">
        <h2 className="font-cormorantGaramond font-light text-3xl mb-4">Support My Work</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          If you&apos;ve found my projects or dev notes useful, here&apos;s a PayNow QR code.
        </p>
        <div className="flex flex-wrap items-center gap-8">
          <Image
            src="/paynow.jpg"
            width={300}
            height={300}
            alt="PayNow QR code"
            className="rounded-lg"
          />
          <KofiButton />
        </div>
      </div>
    </>
  );
}