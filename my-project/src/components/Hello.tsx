'use client';
import React, { useState, useEffect } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import { useTheme } from 'next-themes';
import { Tooltip } from "@/components/ui/tooltip-card";
import { HomeNav } from "./HomeNav";

export default function Hello() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const logoSrc = (theme === 'dark' || resolvedTheme === 'dark') 
  ? '/Sanchez_Logo_white-Full.svg' 
  : '/Sanchez_Logo_Black-Full.svg';

  const words = ["Software Engineer", "Frontend Dev", "Backend Builder"];

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-10">
        <div className="bg-neutral-100 dark:bg-neutral-950 rounded-2xl p-8 shadow-xl">
          <div className="h-[27rem] flex justify-center items-center">
            <div className="text-3xl mx-auto font-normal text-neutral-800 dark:text-neutral-200">
              <div>
                <Image
                  src="/headshot.jpeg"
                  width={200}
                  height={200}
                  alt={"logo"}
                  className="mx-auto flex-shrink-0 rounded-full pb-2"
                />
                Hi, I&apos;m
                <Image
                  src={logoSrc}
                  width={170}
                  height={170}
                  alt={"logo"}
                  className="inline flex-shrink-0 rounded-md"
                />.
                I&apos;m a
                <br />
                <FlipWords className="mx-auto" words={words} />
              </div>
            </div>
          </div>
          <div className="flex justify-space gap-1 items-start text-md font-normal text-neutral-600 dark:text-neutral-400 justify-center">
            <p>
              <Tooltip content="Throughout my site I use this style to explain the technologies and thought that goes behind this site.">
                <span className="cursor-help underline decoration-dotted">Frontend</span>
              </Tooltip>{" "}
              developer at InvestCloud with a background in marketing — I build things that are easy to use, not just easy to build. In my spare time I help small businesses get online properly. Need a site? Click <a href="#anchor_form"><u>here.</u></a>
              <br />
              <br />
              Here are some things I&apos;ve created, and the technologies I work with.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <HomeNav />
          </div>
        </div>
      </div>
     </>
  );
}