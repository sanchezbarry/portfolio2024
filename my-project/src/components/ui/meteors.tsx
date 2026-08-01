"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteors, setMeteors] = useState<
    { top: string; left: string; delay: string; duration: string }[]
  >([]);

  useEffect(() => {
    // computed on the client only so server/client markup always matches
    setMeteors(
      Array.from({ length: number }, () => ({
        top: "-5%",
        left: `${Math.floor(Math.random() * 100)}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${Math.floor(Math.random() * 4) + 6}s`,
      }))
    );
  }, [number]);

  return (
    <>
      {meteors.map((meteor, idx) => (
        <span
          key={"meteor" + idx}
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
          className={cn(
            "pointer-events-none absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-neutral-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:transform before:bg-gradient-to-r before:from-neutral-500 before:to-transparent before:content-['']",
            className
          )}
        ></span>
      ))}
    </>
  );
};
