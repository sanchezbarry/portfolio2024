"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const TOOLTIP_WIDTH = 240; // min-w-[15rem]
const OFFSET = 12;
const EDGE = 8;

export const Tooltip = ({
  content,
  children,
  containerClassName,
}: {
  content: string | React.ReactNode;
  children: React.ReactNode;
  containerClassName?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const contentRef = useRef<HTMLDivElement>(null);
  const lastPointer = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => setMounted(true), []);

  // viewport coordinates, since the tooltip is portalled to <body> and fixed-positioned
  const place = useCallback((clientX: number, clientY: number) => {
    lastPointer.current = { x: clientX, y: clientY };
    const tooltipHeight = contentRef.current?.offsetHeight ?? 0;

    let x = clientX + OFFSET;
    if (x + TOOLTIP_WIDTH > window.innerWidth - EDGE) x = clientX - TOOLTIP_WIDTH - OFFSET;
    if (x < EDGE) x = EDGE;

    let y = clientY + OFFSET;
    if (tooltipHeight && y + tooltipHeight > window.innerHeight - EDGE) {
      y = clientY - tooltipHeight - OFFSET;
    }
    if (y < EDGE) y = EDGE;

    setPosition({ x, y });
  }, []);

  // the first placement runs before the tooltip has been measured, so re-place once it exists
  useEffect(() => {
    if (isVisible) place(lastPointer.current.x, lastPointer.current.y);
  }, [isVisible, content, place]);

  const handleMouseEnter = (e: React.MouseEvent) => {
    place(e.clientX, e.clientY);
    setIsVisible(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isVisible) place(e.clientX, e.clientY);
  };

  const hide = () => setIsVisible(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    place(touch.clientX, touch.clientY);
    setIsVisible(true);
  };

  const handleTouchEnd = () => {
    setTimeout(hide, 2000);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (window.matchMedia("(hover: none)").matches) {
      e.preventDefault();
      if (isVisible) {
        hide();
      } else {
        place(e.clientX, e.clientY);
        setIsVisible(true);
      }
    }
  };

  return (
    <span
      className={cn("relative inline", containerClassName)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={hide}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      {children}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, y: 4, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.97 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                style={{ top: position.y, left: position.x }}
                className="pointer-events-none fixed z-[9999] min-w-[15rem] max-w-[18rem] overflow-hidden rounded-lg border border-black/5 bg-white shadow-lg shadow-black/5 dark:border-white/10 dark:bg-neutral-900 dark:shadow-black/40"
              >
                <div
                  ref={contentRef}
                  className="p-3 text-sm text-neutral-600 md:p-4 dark:text-neutral-400"
                >
                  {content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </span>
  );
};
