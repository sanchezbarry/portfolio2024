import { cn } from "@/lib/utils";
// import React from "react";
// import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
// import {
//   IconArrowWaveRightUp,
//   IconBoxAlignRightFilled,
//   IconBoxAlignTopLeft,
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
//   IconTableColumn,
// } from "@tabler/icons-react";

// import { list } from '@vercel/blob';

// export async function TestimonialsGrid() {

//   const response = await list();
//   <>
//   {response.blobs.map((blob) => (
//     <a key={blob.pathname} href={blob.downloadUrl}>
//       {blob.pathname}
//     </a>
//   ))}
// </>
//   return (
//     <BentoGrid className="max-w-4xl mx-auto">
//       {items.map((item, i) => (
//         <BentoGridItem
//           key={i}
//           title={item.title}
//           description={item.description}
//           header={item.header}
//           icon={item.icon}
//           className={i === 3 || i === 6 ? "md:col-span-2" : ""}
//         />
//       ))}
//     </BentoGrid>
//   );
// }

// import React from "react";
// import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
// import { list } from "@vercel/blob";
// import {
//   IconArrowWaveRightUp,
//   IconBoxAlignRightFilled,
//   IconBoxAlignTopLeft,
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
//   IconTableColumn,
// } from "@tabler/icons-react";

// export async function TestimonialsGrid() {
//   // Fetch the list of blobs from the server
//   const response = await list();

//   // Map the fetched blobs into items for the BentoGrid
//   const items = response.blobs.map((blob) => ({
//     title: blob.pathname, // Use the pathname as the title
//     description: "Click to view the image", // Add a description
//     header: (
//       <img
//         src={blob.downloadUrl} // Use the blob's download URL as the image source
//         alt={blob.pathname} // Use the pathname as the alt text
//         className="w-full h-full object-cover rounded-xl"
//       />
//     ),
//     icon: null, // You can add an icon here if needed
//   }));

//   return (
//     <BentoGrid className="max-w-4xl mx-auto">
//       {items.map((item, i) => (
//         <BentoGridItem
//           key={i}
//           title={item.title}
//           description={item.description}
//           header={item.header} // Display the image in the header
//           icon={item.icon}
//           className={i === 3 || i === 6 ? "md:col-span-2" : ""} // Adjust grid span for specific items
//         />
//       ))}
//     </BentoGrid>
//   );
// }


// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );
// const items = [
//   {
//     title: "The Dawn of Innovation",
//     description: "Explore the birth of groundbreaking ideas and inventions.",
//     header: <Skeleton />,
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Digital Revolution",
//     description: "Dive into the transformative power of technology.",
//     header: <Skeleton />,
//     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Art of Design",
//     description: "Discover the beauty of thoughtful and functional design.",
//     header: <Skeleton />,
//     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Power of Communication",
//     description:
//       "Understand the impact of effective communication in our lives.",
//     header: <Skeleton />,
//     icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Pursuit of Knowledge",
//     description: "Join the quest for understanding and enlightenment.",
//     header: <Skeleton />,
//     icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Joy of Creation",
//     description: "Experience the thrill of bringing ideas to life.",
//     header: <Skeleton />,
//     icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Spirit of Adventure",
//     description: "Embark on exciting journeys and thrilling discoveries.",
//     header: <Skeleton />,
//     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
//   },
// ];

"use client";

import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { fetchTestimonials } from "./TestimonialsGrid.server";

export function TestimonialsGrid({ items = [] }: { items?: { title: string; description: string; header: string }[] }) {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.length > 0 ? (
        items.map((item, i) => (
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
            className={i === 3 || i === 6 ? "md:col-span-2" : ""} // Adjust grid span for specific items
          />
        ))
      ) : (
        // Commenting out the skeleton rendering
        /*
        Array.from({ length: 6 }).map((_, i) => (
          <BentoGridItem
            key={i}
            title="Loading..."
            description="Loading..."
            header={<Skeleton />}
          />
        ))
        */
        null // Render nothing if no items are available
      )}
    </BentoGrid>
  );
}


const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);