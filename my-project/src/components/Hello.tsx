// 'use client';
// import React from "react";
// import { FlipWords } from "@/components/ui/flip-words";
// import Image from "next/image"
// import { useTheme } from 'next-themes';

// // let logoSrc = '/Sanchez_Logo_white-Icon.svg';

// export default function Hello() {

//   const words = ["Software Engineer", "Frontend Dev", "Backend Builder"];

//   const { theme } = useTheme();
//   const logoSrc = theme === 'dark' 
//   ? '/Sanchez_Logo_white-Full.svg' 
//   : '/Sanchez_Logo_Black-Full.svg';

//   return (
//     <>
//     <div className="h-[27rem] flex justify-center items-center px-4 pt-20">
//       <div className="text-3xl mx-auto font-normal text-neutral-800 dark:text-neutral-300">
//         <div>
//         <Image
//             src="/headshot.jpeg"
//             width={200} 
//             height={200}
//             alt={"logo"}
//             className="mx-auto flex-shrink-0 rounded-full pb-2"
//         />
//         Hi, I&apos;m 
//         <Image
            
//             src={logoSrc}
//             width={170}
//             height={170}
//             alt={"logo"}
//             className="inline flex-shrink-0 rounded-md"
//         />. 
//          I&apos;m a 
//         <br />
//         <FlipWords className="mx-auto" words={words} /> 
//         </div>

//       </div>

//     </div>
//           <div className="max-w-4xl text-md mx-auto font-normal text-neutral-600 dark:text-neutral-400 justify-center items-center px-4">
//           <p>
//           A marketer turned software engineer, after discovering my love for coding after dabbling with a few websites. I&apos;m excited to use my experience as a marketer to build apps that are intuitive and feel like second nature to use.
//           <br />
//           <br />
//           Here some things I&apos;ve created, and the technologies I&apos;m familiar with.
//           </p>
//       </div>
//       </>
//   );
// }
'use client';
import React, { useState, useEffect } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import { useTheme } from 'next-themes';

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
      <div className="h-[27rem] flex justify-center items-center px-4 pt-20">
        <div className="text-3xl mx-auto font-normal text-neutral-800 dark:text-neutral-300">
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
      <div className="max-w-4xl text-md mx-auto font-normal text-neutral-600 dark:text-neutral-400 justify-center items-center px-4">
        <p>
          A marketer turned software engineer, after discovering my love for coding after dabbling with a few websites. I&apos;m excited to use my experience as a marketer to build apps that are intuitive and feel like second nature to use.
          <br />
          <br />
          Here some things I&apos;ve created, and the technologies I&apos;m familiar with.
        </p>
      </div>
    </>
  );
}