import { cn } from "@/lib/utils";


"use client";

import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function TestimonialsGrid() {
  const [items, setItems] = useState<Item[]>([]);

  interface Item {
    title: string;
    description: string;
    header: string;
  }

  useEffect(() => {
    interface Testimonial {
      pathname: string;
      downloadUrl: string;
    }

    fetch("/api/testimonials")
      .then((res) => res.json() as Promise<Testimonial[]>)
      .then((data) =>
      setItems(
        data.map((blob: Testimonial): Item => ({
        title: blob.pathname,
        description: "Click to view the image",
        header: blob.downloadUrl,
        }))
      )
      );
  }, []);

  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={
            <img
              src={item.header}
              alt={item.title}
              className="w-full h-full object-cover rounded-xl"
            />
          }
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}


const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);