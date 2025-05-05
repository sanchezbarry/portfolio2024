// import React from "react";
// import { fetchTestimonials } from "@/components/TestimonialsGrid.server";
// import { TestimonialsGrid } from "@/components/TestimonialsGrid";

// export async function getServerSideProps() {
//   const items = await fetchTestimonials();

//   return {
//     props: {
//       items: items.length > 0 ? items : [], // Ensure items is always an array
//     },
//   };
// }

// export default function TestimonialsPage({ items }: { items: { title: string; description: string; header: string }[] }) {
//   return (


//       <TestimonialsGrid items={items} />

//   );
// } 