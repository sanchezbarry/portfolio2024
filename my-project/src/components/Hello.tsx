'use client';
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { Spotlight } from "@/components/ui/spotlight";
import { Meteors } from "@/components/ui/meteors";
import Image from "next/image";
import { Tooltip } from "@/components/ui/tooltip-card";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HomeNav } from "./HomeNav";
import { ArrowRight, ChevronDown } from "lucide-react";

// staggered entrance, driven by CSS `animate-fade-up` so it runs at first paint
// rather than waiting for framer-motion to hydrate
const stagger = (index: number) => ({ animationDelay: `${0.15 + index * 0.12}s` });

export default function Hello() {
  const words = ["Software Engineer", "Frontend Dev", "Backend Builder"];

  return (
    <section className="relative w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950">
      {/* animated background layer, spanning the full section */}
      <div className="pointer-events-none absolute inset-0">
        {/* two spotlights instead of a theme-dependent `fill` prop, so the hero can server-render */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 dark:hidden"
          fill="#4338ca"
        />
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 hidden dark:block"
          fill="white"
        />
        <div className="absolute inset-0 opacity-60 [background-size:32px_32px] [background-image:linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)]" />
        <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_90%)]" />
        <Meteors number={14} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-6 pb-16 pt-36 md:px-10 md:pb-20 md:pt-40">
        <div>
          {/* avatar sits beside the name, like a byline */}
          <div
            style={stagger(0)}
            className="flex animate-fade-up items-center gap-4 md:gap-5 motion-reduce:animate-none"
          >
            <AnimatedTooltip
              priority
              items={[
                {
                  id: 1,
                  name: "Problem Solver.",
                  designation: "Coffee chat?",
                  image: "/headshot.jpeg",
                },
              ]}
              // keep the ring the hero already used rather than the component's
              // default white border, which would disappear on a light page
              imageClassName="h-14 w-14 flex-shrink-0 border-0 object-center ring-1 ring-black/10 dark:ring-white/15 md:h-[72px] md:w-[72px]"
            />
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 dark:text-neutral-50 md:text-6xl">
              Hi, I&apos;m{" "}
              <Image
                src="/Sanchez_Logo_Black-Full.svg"
                width={170}
                height={170}
                priority
                alt="Sanchez Barry logo"
                className="inline h-auto w-[120px] align-middle md:w-[170px] dark:hidden"
              />
              <Image
                src="/Sanchez_Logo_white-Full.svg"
                width={170}
                height={170}
                priority
                alt="Sanchez Barry logo"
                className="hidden h-auto w-[120px] align-middle md:w-[170px] dark:inline"
              />
            </h1>
          </div>

          <h2
            style={stagger(1)}
            className="mt-4 animate-fade-up text-2xl font-semibold text-neutral-700 dark:text-neutral-300 md:text-4xl motion-reduce:animate-none"
          >
            I&apos;m a <FlipWords className="!text-neutral-900 dark:!text-white" words={words} />
          </h2>

          <div
            style={stagger(2)}
            className="mt-6 max-w-2xl animate-fade-up text-base text-neutral-600 dark:text-neutral-400 md:text-lg motion-reduce:animate-none"
          >
            <Tooltip content="Throughout my site I use this style to explain the technologies and thought that goes behind this site.">
              <span className="cursor-help font-semibold text-neutral-800 dark:text-neutral-200">
                Software engineer
              </span>
            </Tooltip>{" "}
            with a background in marketing — I build things that are easy to use, not
            just easy to build. In my spare time I help small businesses get online
            properly. Need a site?{" "}
            <a
              href="#anchor_form"
              className="font-medium text-neutral-800 underline dark:text-neutral-200"
            >
              Let&apos;s talk.
            </a>
          </div>

          <div
            style={stagger(3)}
            className="mt-8 flex animate-fade-up flex-wrap items-center gap-4 motion-reduce:animate-none"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-black to-neutral-700 px-6 py-2.5 text-sm font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset] transition-transform duration-200 hover:scale-[1.03] active:scale-95 dark:from-zinc-100 dark:to-zinc-300 dark:text-black"
            >
              See my work
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#anchor_form"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-2.5 text-sm font-medium text-neutral-800 transition-transform duration-200 hover:scale-[1.03] hover:bg-white/60 active:scale-95 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900/60"
            >
              Say hi
            </a>
          </div>

          <div
            style={stagger(4)}
            className="mt-8 flex animate-fade-up motion-reduce:animate-none"
          >
            <HomeNav />
          </div>
        </div>

        <div
          style={{ animationDelay: "1.6s" }}
          className="mt-16 hidden animate-fade-up justify-center md:flex motion-reduce:animate-none"
        >
          <a
            href="#projects"
            aria-label="Scroll to projects"
            className="animate-bounce text-neutral-400 dark:text-neutral-600"
          >
            <ChevronDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
