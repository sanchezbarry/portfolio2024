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
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
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
                    className="px-4 py-3 text-sm rounded-full font-bold bg-gray-500 text-white"
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
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-gray-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
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
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Wordpress, JS, HTML, CSS",
    title: "Spartans Advisors Website",
    src: "/spartans.png",
    ctaText: "Visit",
    ctaLink: "https://spartansadvisors.com/",
    content: () => {
      return (
        <p>
          Spartans Advisors required a professional and modern website to
          showcase their financial advisory services. The website features a clean, professional design with easy navigation and clear calls to action. <br />{" "}<br />
          The site is built on WordPress, allowing for easy updates and blog content management. It is fully responsive, ensuring a seamless experience across all devices. <br /> <br />
          Key features include service pages, a blog section, and a contact form to capture leads.
        </p>
      );
    },
  },
  {
    description: "NextJs, TailwindCSS, Framer Motion",
    title: "DCMO Law Firm Website",
    src: "/fish.png",
    ctaText: "Visit",
    ctaLink: "https://www.dcmolaw.com.sg/",
    content: () => {
      return (
        <p>
          DCMO Law Firm needed a sleek, modern website to represent their legal
          services. The website features a clean, professional design with smooth
          animations and transitions using Framer Motion. <br /> <br /> Built
          with Next.js and TailwindCSS, the site is fully responsive and optimized
          for performance and SEO. <br /> <br /> Key features include service pages, an
          about us section, and a contact form to capture leads.
        </p>
      );
    },
  },

//   {
//     description: "Metallica",
//     title: "For Whom The Bell Tolls",
//     src: "https://assets.aceternity.com/demos/metallica.jpeg",
//     ctaText: "Play",
//     ctaLink: "https://ui.aceternity.com/templates",
//     content: () => {
//       return (
//         <p>
//           Metallica, an iconic American heavy metal band, is renowned for their
//           powerful sound and intense performances that resonate deeply with
//           their audience. Formed in Los Angeles, California, they have become a
//           cultural icon in the heavy metal music industry. <br /> <br /> Their
//           songs often reflect themes of aggression, social issues, and personal
//           struggles, capturing the essence of the heavy metal genre. With a
//           career spanning over four decades, Metallica has released numerous hit
//           albums and singles that have garnered them a massive fan following
//           both in the United States and abroad.
//         </p>
//       );
//     },
//   },
//   {
//     description: "Led Zeppelin",
//     title: "Stairway To Heaven",
//     src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
//     ctaText: "Play",
//     ctaLink: "https://ui.aceternity.com/templates",
//     content: () => {
//       return (
//         <p>
//           Led Zeppelin, a legendary British rock band, is renowned for their
//           innovative sound and profound impact on the music industry. Formed in
//           London in 1968, they have become a cultural icon in the rock music
//           world. <br /> <br /> Their songs often reflect a blend of blues, hard
//           rock, and folk music, capturing the essence of the 1970s rock era.
//           With a career spanning over a decade, Led Zeppelin has released
//           numerous hit albums and singles that have garnered them a massive fan
//           following both in the United Kingdom and abroad.
//         </p>
//       );
//     },
//   },
//   {
//     description: "Mustafa Zahid",
//     title: "Toh Phir Aao",
//     src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
//     ctaText: "Play",
//     ctaLink: "https://ui.aceternity.com/templates",
//     content: () => {
//       return (
//         <p>
//           &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
//           renowned for its intense storyline and powerful performances. Directed
//           by Mohit Suri, the film has become a significant work in the Indian
//           film industry. <br /> <br /> The movie explores themes of love,
//           redemption, and sacrifice, capturing the essence of human emotions and
//           relationships. With a gripping narrative and memorable music,
//           &quot;Aawarapan&quot; has garnered a massive fan following both in
//           India and abroad, solidifying Emraan Hashmi&apos;s status as a
//           versatile actor.
//         </p>
//       );
//     },
//   },
];
