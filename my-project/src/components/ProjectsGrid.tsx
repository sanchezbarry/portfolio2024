"use client";
import Image from "next/image";
import Link from "next/link"
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function ProjectsGrid() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Featured Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      <div

        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <Image
              src="/coffee.gif"
              alt="Macbook mockup from Aceternity UI"
              height="500" 
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            <p className="pt-5 text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Coffee has many, many permutations.
              </span>{" "}
              From the bean used, to the grind size, the temperature, time and more! This website helps baristas and coffee enthusiats alike to keep track of what permutations they've done, and what works best. This website features a full CRUD and user authentication system. Users can read, create, edit and delete recepies. Note: This website takes awhile to load, please be patient!
            </p>

      </div>
      <Link href="https://github.com/sanchezbarry/coffee">
        <button className="mr-3 shadow-[inset_0_0_0_2px_#616467] text-black px-10 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          
          GitHub
          
        </button>
        </Link>

        <Link href="https://coffee-cu87.onrender.com/">
        <button className="shadow-[inset_0_0_0_2px_#616467] text-white px-10 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#dde0e4] hover:text-black transition duration-200">
          Website
        </button>
        </Link>
    </>
  );
};

const data = [
  {
    category: "Coffee has many, many permutations.",
    tech: "MongoDB Express JS Node JS JavaScript CSS (Bootstrap) CRUD",
    title: "Bean there, Done that",
    src: "/coffee.jpg",
    content: <DummyContent />,
  },
  {
    category: "Got alcohol but no inspiration?",
    title: "Tipsy Bartender",
    src: "/alcohol.jpg",
    content: <DummyContent />,
  },
  {
    category: "A job portal of all job portals.",
    title: "Software Engineered",
    src: "/software.jpg",
    content: <DummyContent />,
  },

  {
    category: "An app to plan, track and build workouts.",
    title: "Workouteer (App)",
    src: "/workout.jpg",
    content: <DummyContent />,
  },
  {
    category: "A simple one-pager for sermons to be hosted and played.",
    title: "CCK Sermons",
    src: "/church.jpg",
    content: <DummyContent />,
  },
  {
    category: "A website to show off my skills and projects.",
    title: "sanchezbarry.com (This Website)",
    src: "/sanchez.png",
    content: <DummyContent />,
  },
  {
    category: "A website to show off my skills and projects.",
    title: "sanchezbarry 1.0",
    src: "/sanchez.png",
    content: <DummyContent />,
  },
];
