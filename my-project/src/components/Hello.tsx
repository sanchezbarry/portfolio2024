import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image"

export default function Hello() {
  const words = ["Software Engineer", "Frontend Dev", "Backend Builder"];

  return (
    <>
    <div className="h-[27rem] flex justify-center items-center px-4 pt-20">
      <div className="text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <div>
        <Image
            src="/headshot.jpeg"
            width={200}
            height={200}
            alt={"logo"}
            className="mx-auto flex-shrink-0 rounded-full shadow-2xl pb-2"
        />
        Hi, I'm
        <Image
            src="/Sanchez_Logo_white-Full.svg"
            width={170}
            height={170}
            alt={"logo"}
            className="inline flex-shrink-0 rounded-md shadow-2xl"
        />. I'm a 
        <br />
        <FlipWords className="mx-auto" words={words} /> 
        </div>

      </div>

    </div>
          <div className="max-w-4xl text-md mx-auto font-normal text-neutral-600 dark:text-neutral-400 justify-center items-center px-4">
          <p>
          A marketer turned software engineer, after discovering my love for coding after dabbling with a few websites. I'm excited to use my experience as a marketer to build apps that are intuitive and feel like second nature to use.
          <br />
          <br />
          Here some things I've created, and the technologies I'm familiar with.
          </p>
      </div>
      </>
  );
}
