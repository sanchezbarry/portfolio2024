"use client";

import { FloatingButton, FloatingButtonItem } from '@/components/ui/floating-button';
import { cn } from "@/utils/cn";
import { PhoneOutgoing, Github, LinkedinIcon, PlusIcon, ArrowUp } from 'lucide-react';
import Link from "next/link";
import Button from "next";
import React, { useState, useEffect } from "react";
import { useTheme } from 'next-themes';

export default function FloatingButtonExample() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const iconColor = (theme === 'dark' || resolvedTheme === 'dark') ? 'black' : 'white';

  const isBrowser = () => typeof window !== 'undefined'; // The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const items = [
    {
      icon: <ArrowUp onClick={scrollToTop} />,
      bgColor: 'bg-[#707070]',
      isLink: false, // indicates this is not a link but a button
    },
    {
      icon: <Github />,
      bgColor: 'bg-[#171515]',
      isLink: true, // link to GitHub
      href: "https://github.com/sanchezbarry"
    },
    {
      icon: <LinkedinIcon />,
      bgColor: 'bg-[#0a66c2]',
      isLink: true, // link to LinkedIn
      href: "https://www.linkedin.com/in/sanchez-barry/"
    },
    {
      icon: <PhoneOutgoing />,
      bgColor: 'bg-[#25D366]',
      isLink: true, // link to WhatsApp
      href: "https://wa.me/6596962639"
    },
  ];

  return (
    <FloatingButton
      triggerContent={
        <button className="flex items-center justify-center h-12 w-12 rounded-full bg-black dark:bg-white text-black/100 z-10">
          <PlusIcon color={iconColor}/>
        </button>
      }>
      {items.map((item, key) => (
        <FloatingButtonItem key={key}>
          <div className={cn('h-12 w-12 rounded-full flex items-center justify-center text-white/80', item.bgColor)}>
            {/* Conditionally render a Link or Button depending on the type */}
            {item.isLink && item.href ? (
              <Link href={item.href} target="_blank" className="h-full w-full flex items-center justify-center">
                {item.icon}
              </Link>
            ) : (
              <button
                onClick={item.icon.props.onClick}
                className="h-full w-full flex items-center justify-center"
              >
                {item.icon}
              </button>
            )}
          </div>
        </FloatingButtonItem>
      ))}
    </FloatingButton>
  );
}

