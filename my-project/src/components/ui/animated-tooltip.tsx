"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

import { cn } from "@/lib/utils";

export const AnimatedTooltip = ({
  items,
  imageClassName,
  priority = false,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
  /** Override the default avatar styling, e.g. to match an existing design. */
  imageClassName?: string;
  /** Set for above-the-fold avatars so Next preloads them. */
  priority?: boolean;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    // Read the DOM synchronously and only defer the write. Doing the read
    // inside the frame callback meant touching the node after the event had
    // passed, by which point it may have resized or unmounted.
    const halfWidth = event.currentTarget.offsetWidth / 2;
    const offsetX = event.nativeEvent.offsetX;

    animationFrameRef.current = requestAnimationFrame(() => {
      x.set(offsetX - halfWidth);
    });
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          // -mr-4 overlaps avatars into a stack; pointless for a lone avatar,
          // where it just drags the following element leftwards.
          className={cn("group relative", items.length > 1 && "-mr-4")}
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => {
            // Drop any queued frame, otherwise a position captured just before
            // leaving can land after the next hover and jerk the tooltip.
            if (animationFrameRef.current) {
              cancelAnimationFrame(animationFrameRef.current);
              animationFrameRef.current = null;
            }
            x.set(0);
            setHoveredIndex(null);
          }}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              // The wrapper owns positioning, the motion.div owns the
              // animation. They have to stay separate: motion writes `transform`
              // inline, which silently overrode the `-translate-x-1/2` centring
              // class when both lived on the same element — that is what pushed
              // the tooltip out to the right of the avatar.
              // The key is required too; AnimatePresence tracks children by key,
              // and without one a quick leave/re-enter could leave the exiting
              // copy mounted so the new one never appeared.
              <div
                key={item.id}
                className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-3 -translate-x-1/2"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  className="relative flex flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
                >
                  <div className="text-base font-bold text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-white">{item.designation}</div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            priority={priority}
            className={cn(
              "relative !m-0 h-14 w-14 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105",
              imageClassName,
            )}
          />
        </div>
      ))}
    </>
  );
};
