import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function WhatPeopleSay() {
  const testimonials = [
    {
      quote: "I had the pleasure of working with Sanchez on a couple front-end projects at InvestCloud. He brings strong technical skills and a deep understanding of design, user experience, and performance optimization. Sanchez consistently delivered and was always proactive in suggesting improvements that enhanced the product and workflow. Beyond technical ability, Sanchez is a genuine team player — communicative, reliable, and always willing to support others. Any team would be lucky to have Sanchez.",
      name: "Yileen",
      designation: "Project Manager, InvestCloud",
      src: "/yileen.jfif",
    },
    {
      quote: "Sanchez is a whiz when it comes to marketing! He is my go-to when it comes to running brand, social media and eCommerce campaigns. He is more than just a marketing person — hidden behind his marketing talents is his ability to code, which has proven useful in many situations like improving our website or fixing bugs.",
      name: "Dawn",
      designation: "Sales Manager",
      src: "/dawn.jfif",
    },
    {
      quote: "Even when timelines are tight and workloads are heavy, Sanchez remains calm and composed, helping the team stay focused and steady under pressure. What stands out is his willingness to step in and help wherever needed, always without complaint. Sanchez is a talented developer who approaches every task with skill and care, consistently delivering strong results.",
      name: "SJ",
      designation: "Web Developer, InvestCloud",
      src: "/sj.jfif",
    },
    {
      quote: "Sanchez was responsible for content creation, including articles, posts, and short video production. He has a good eye for design and was able to gather input from various stakeholders to get the key messages across. He works well with others, has a good sense of humour, and was a reliable member of the team — never hesitating to commit the extra time and effort needed to get a job done.",
      name: "Kevin",
      designation: "COO, plano",
      src: "/kevin.jfif",
    },
    // {
    //   quote: "Sanchez is an amazing person to work with and he has a lot of knowledge in FB ads and Instagram ads. His knowledge and passion to write viral content makes him a great marketing person to work with.",
    //   name: "Govind",
    //   designation: "Marketing Professional",
    //   src: "/kevin.jfif",
    // },
    // {
    //   quote: "Replace this with a real quote from Dovanson.",
    //   name: "Dovanson",
    //   designation: "Their Role, Their Company",
    //   src: "/kevin.jfif",
    // },
  ];

  return (
    <div className="w-full py-10 dark:bg-neutral-950">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl mb-4 font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        What People Say
      </h2>
      <p className="max-w-7xl pl-4 mx-auto text-neutral-700 mb-8 dark:text-neutral-300 text-sm md:text-base">
        Kind words from colleagues and clients I&apos;ve worked with.
      </p>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
