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
    <div id="projects" className="w-full h-full py-10">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Featured Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const CoffeeContent = () => {
  return (
    <>
      <div

        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <Image
              src="/coffee.gif"
              alt="Coffee Website Preview"
              height="500" 
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            <p className="pt-5 text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Coffee has many, many permutations.
              </span>{" "}
              From the bean used, to the grind size, the temperature, time and more! This website helps baristas and coffee enthusiats alike to keep track of what permutations they&apos;ve done, and what works best. This website features a full CRUD and user authentication system. Users can read, create, edit and delete recepies. Note: This website takes awhile to load, please be patient!
            </p>

      </div>
      <Link href="https://github.com/sanchezbarry/coffee" target="_blank" rel="noopener noreferrer">
        <button className="mr-3 shadow-[inset_0_0_0_2px_#616467] text-black px-10 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          
          GitHub
          
        </button>
        </Link>



        <Link href="https://coffee-cu87.onrender.com/" target="_blank" rel="noopener noreferrer">
        <button className="mr-3 shadow-[inset_0_0_0_2px_#616467] text-black px-10 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          
          Website
          
        </button>
        </Link>
    </>
  );
};

const AlcoholContent = () => {
  return (
    <>
      <div

        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <Image
              src="/tipsy.gif"
              alt="Alcohol Website Preview"
              height="500" 
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            <p className="pt-5 text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Feeling Boozy?
              </span>{" "}
              This website makes use of an API database (https://www.thecocktaildb.com/) to recommend drink recipes based on what booze you have lying around!
            </p>

      </div>
      <Link href="https://github.com/sanchezbarry/sanchezbarry" target="_blank" rel="noopener noreferrer">
        <button className="mr-3 shadow-[inset_0_0_0_2px_#616467] text-black px-10 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          
          GitHub
          
        </button>
        </Link>



        <Link href="https://sanchezbarry.github.io/sanchezbarry/#" target="_blank" rel="noopener noreferrer">
        <button className="mr-3 shadow-[inset_0_0_0_2px_#616467] text-black px-10 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          
          Website
          
        </button>
        </Link>
    </>
  );
};

const SoftwareContent = () => {
  return (
    <>
      <div

        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <Image
              src="/software.gif"
              alt="Software Jobs Website Preview"
              height="500" 
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            <p className="pt-5 text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Need a new job in tech?
              </span>{" "}
              Software-Engineered is a job-portal that pulls in various APIs from other job-portals like Nodeflair and other people who create jobs in the portal to display to potential job seeking software engineers. This job portal has the best of multiple job portals as it aggregates them and takes in other peoples created job to give a plethora of job opportunities for anyone interested in the field of tech. Backend is temporarily down.
            </p>

      </div>
      <Link href="https://github.com/sanchezbarry/Software-Engineer-Job-Portal-Frontend" target="_blank" rel="noopener noreferrer">
        <button className="mr-3 shadow-[inset_0_0_0_2px_#616467] text-black px-10 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          
          GitHub
          
        </button>
        </Link>

        <Link href="https://lunfy.github.io/Software-Engineer-Job-Portal-Frontend/" target="_blank" rel="noopener noreferrer">
        <button className="mr-3 shadow-[inset_0_0_0_2px_#616467] text-black px-10 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          
          Website
          
        </button>
        </Link>


        
    </>
  );
};

const WorkoutContent = () => {
  return (
    <>
      <div

        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <Image
              src="/workout.png"
              alt="Workout App Preview"
              height="500" 
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            <p className="pt-5 text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Lost count of your reps or sets?
              </span>{" "}
              For my capstone project at General Assembly (coding bootcamp), I wanted to challenge myself and create something completely new from the course. Workouter is a mobile app built on Flutter with a full CRUD, and authentication with Firebase.
            </p>

      </div>
      <Link href="https://github.com/sanchezbarry/Workouter-App" target="_blank" rel="noopener noreferrer">
        <button className="mr-3 shadow-[inset_0_0_0_2px_#616467] text-black px-10 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          
          GitHub
          
        </button>
        </Link>

    </>
  );
};

const ChurchContent = () => {
  return (
    <>
      <div

        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <Image
              src="/church.gif"
              alt="Software Jobs Website Preview"
              height="500" 
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            <p className="pt-5 text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Missed a service? 
              </span>{" "}
              A simple one-pager for a church&apos;s sermons to be hosted and played. The sermons are also searchable by sermon title, and a random verse can also be generated.
            </p>

      </div>
      <Link href="https://github.com/sanchezbarry/cck" target="_blank" rel="noopener noreferrer">
        <button className="mr-3 shadow-[inset_0_0_0_2px_#616467] text-black px-10 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          
          GitHub
          
        </button>
        </Link>



        <Link href="https://cck.org.sg/sermons.html" target="_blank" rel="noopener noreferrer">
        <button className="mr-3 shadow-[inset_0_0_0_2px_#616467] text-black px-10 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          
          Website
          
        </button>
        </Link>
    </>
  );
};

const SanchezOneContent = () => {
  return (
    <>
      <div

        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <Image
              src="/sanchez.gif"
              alt="Software Jobs Website Preview"
              height="500" 
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            <p className="pt-5 text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              My first ever portfolio website.
              </span>{" "}
              This portfolio website to show off my skills and projects. React, with react router to navigatae between pages and beautified with Material UI. I had also wanted to attempt using a custom domain for the first time.
              For this, I used GH-pages for the deployment and Google domains for my custom domain.
              Vanilla react, React Router and beautified with MUI and Framer Motion for animations. So in the next version, I decided to really customise the site to how I wanted it to look like
              with animated components and a blog with a backend to both showcase the journey of building this website and my overall learning journey as a software engineer.
            </p>

      </div>
      <Link href="https://github.com/sanchezbarry/portfolio" target="_blank" rel="noopener noreferrer">
        <button className="mr-3 shadow-[inset_0_0_0_2px_#616467] text-black px-10 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          
          GitHub
          
        </button>
        </Link>

        {/* <Link href="https://cck.org.sg/sermons.html">
        <button className="shadow-[inset_0_0_0_2px_#616467] text-white px-10 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#dde0e4] hover:text-black transition duration-200">
          Website
        </button>
        </Link> */}
    </>
  );
};

const SanchezTwoContent = () => {
  return (
    <>
      <div

        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <Image
              src="/sanchez2.png"
              alt="This Portfolio Website Preview"
              height="500" 
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            <p className="pt-5 text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              I wanted to make a new, improved version of my website.
              </span>{" "}
              NextJS, with industry standard TypeScript over vanilla JS. In this version, I decided to really customise the site to how I wanted it to look like
              with animated components and a blog with a backend to both showcase the journey of building this website and my overall learning journey as a software engineer. 
              Some parts of this website are still WIP.
            </p>

      </div>
      <Link href="https://github.com/sanchezbarry/portfolio2024" target="_blank" rel="noopener noreferrer">
        <button className="mr-3 shadow-[inset_0_0_0_2px_#616467] text-black px-10 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          
          GitHub
          
        </button>
        </Link>

        <Link href="https://sanchezbarry.com" target="_blank" rel="noopener noreferrer">
        <button className="mr-3 shadow-[inset_0_0_0_2px_#616467] text-black px-10 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          
          Website
          
        </button>
        </Link>

    </>
  );
};

const FPL = () => {
  return (
    <>
      <div

        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <Image
              src="/FPL.png"
              alt="This Portfolio Website Preview"
              height="500" 
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            <p className="pt-5 text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              I wanted to create a website to give ma breakdown of my fantasy premier league.
              </span>{" "}
              The main technology behind this project is making API calls to the Fantasy Premier League API, and displaying the data in a user-friendly way.
              Players can enter which gameweek they want to view, and the website will display the players in their team, their points, and what transfers their opponents have made.
              This project is still a work in progress, and I plan to add more features in the future, such as an input field so anyone can enter their league id and view their league data.
            </p>

      </div>
      <Link href="https://github.com/sanchezbarry/fplstats" target="_blank" rel="noopener noreferrer">
        <button className="mr-3 shadow-[inset_0_0_0_2px_#616467] text-black px-10 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          
          GitHub
          
        </button>
        </Link>

        <Link href="https://fplstats-e611.vercel.app/" target="_blank" rel="noopener noreferrer">
        <button className="mr-3 shadow-[inset_0_0_0_2px_#616467] text-black px-10 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          
          Website
          
        </button>
        </Link>

    </>
  );
};

const data = [
    {
    category: "an FPL League data breakdown.",
    tech: "NextJS | React | TailwindCSS | Shadcn | TypeScript | API",
    title: "FPL League Viewer",
    src: "/football.jpg",
    content: <FPL />,
  },
  {
    category: "A website to show off my skills and projects.",
    tech: "NextJS | React | TailwindCSS | Aceternity UI | TypeScript | CRUD",
    title: "sanchezbarry.com (This Website)",
    src: "/sanchezbarry2.jpg",
    content: <SanchezTwoContent />,
  },
  {
    category: "Coffee has many, many permutations.",
    tech: "MongoDB | ExpressJS | NodeJS | JavaScript | CSS (Bootstrap) | CRUD",
    title: "Bean there, Done that",
    src: "/coffee.jpg",
    content: <CoffeeContent />,
  },
  {
    category: "Got alcohol but no inspiration?",
    tech: "JavaScript | CSS (Bootstrap) | HTML | API Calls",
    title: "Tipsy Bartender",
    src: "/alcohol.jpg",
    content: <AlcoholContent />,
  },
  {
    category: "A job portal of all job portals.",
    tech: "MongoDB | ExpressJS | React | NodeJS | MERN | CRUD | API Calls",
    title: "Software Engineered",
    src: "/software.jpg",
    content: <SoftwareContent />,
  },

  {
    category: "An app to plan, track and build workouts.",
    tech: "Flutter | Dart | Firebase | Firestore | CRUD",
    title: "Workouteer (App)",
    src: "/workout.jpg",
    content: <WorkoutContent />,
  },
  {
    category: "A simple one-pager for sermons to be hosted and played.",
    tech: "JavaScript | HTML | CSS (Bootstrap) | API Calls",
    title: "CCK Sermons",
    src: "/church.jpg",
    content: <ChurchContent />,
  },
  {
    category: "A website to show off my skills and projects.",
    tech: "React | JSX | GH-Pages | JavaScript | HTML | MUI | API Calls",
    title: "sanchezbarry 1.0",
    src: "/sanchezbarry1.jpg",
    content: <SanchezOneContent />,
  },
];
