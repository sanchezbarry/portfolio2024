"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function PaidProjects() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="my-10">
          <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl mb-4 font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Commercial Projects
      </h2>
              <p className="max-w-7xl pl-4 mx-auto text-neutral-700 mb-8 dark:text-neutral-300 text-sm md:text-base">
          Professional projects I have worked on for clients.
        </p>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-gray-500 dark:bg-gray-600 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row align-center justify-center">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top mx-auto"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 dark:bg-neutral-700 hover:bg-gray-500 dark:hover:bg-neutral-600 hover:text-white text-black dark:text-white mt-4 md:mt-0"
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black dark:text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Next.js, TailwindCSS, Supabase, Auth, Keystatic CMS, RSS Feed",
    title: "Chapel of Christ the King Website",
    src: "/cck.png",
    ctaText: "Visit",
    ctaLink: "https://cck.org.sg/",
    content: () => {
      return (
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm mb-1">The Challenge</p>
            <p>CCK&apos;s existing site was outdated and difficult for staff to maintain. They needed a modern, approachable design that could be updated without developer involvement.</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm mb-1">The Solution</p>
            <p>Rebuilt from the ground up with Next.js and TailwindCSS. Keystatic CMS gives church staff full control over content — no code required. Supabase handles authentication and data, and an RSS feed pulls the latest sermons directly from their Spotify podcast.</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm mb-1">Stack</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Next.js · TailwindCSS · Supabase · Keystatic CMS · RSS</p>
          </div>
        </div>
      );
    },
  },
  {
    description: "WordPress, JS, HTML, CSS",
    title: "Spartans Advisors Website",
    src: "/spartans.png",
    ctaText: "Visit",
    ctaLink: "https://spartansadvisors.com/",
    content: () => {
      return (
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm mb-1">The Challenge</p>
            <p>Spartans Advisors needed a credible, professional online presence to attract and convert potential clients in the financial advisory space.</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm mb-1">The Solution</p>
            <p>Built on WordPress for easy self-managed updates. The design is clean and trust-building, with clear service pages, a blog for thought leadership, and a lead-capture contact form. Fully responsive across all devices.</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm mb-1">Stack</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">WordPress · JavaScript · HTML · CSS</p>
          </div>
        </div>
      );
    },
  },
  {
    description: "Next.js, TailwindCSS, Framer Motion",
    title: "DCMO Law Firm Website",
    src: "/fish.png",
    ctaText: "Visit",
    ctaLink: "https://www.dcmolaw.com.sg/",
    content: () => {
      return (
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm mb-1">The Challenge</p>
            <p>DCMO Law needed a website that conveyed professionalism and expertise while standing out from the template-heavy look of most law firm sites.</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm mb-1">The Solution</p>
            <p>A custom Next.js build with polished Framer Motion animations that give the site a premium feel without sacrificing load performance. Fully responsive and SEO-optimised, with structured service pages and a contact form for lead capture.</p>
          </div>
          <div>
            <p className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm mb-1">Stack</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Next.js · TailwindCSS · Framer Motion</p>
          </div>
        </div>
      );
    },
  },
];
