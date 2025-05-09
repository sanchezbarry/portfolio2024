import Image from "next/image";
import Hello from "@/components/Hello"
import ComingSoon from "@/components/ComingSoon"
import { WhatPeopleSay } from "@/components/WhatPeopleSay";
import { SaySomethingNice } from "@/components/SaySomethingNice";

export default function Me() {
  return (
    <>

      <div className="mt-36 flex justify-center items-center md:px-56 px-10">
        <p className="text-lg">Hi there! This is an experimental space, where work-in-progress parts of my projects gets pushed to production.
          Feel free to test out the stuff here, and let me know if you find any bugs or have any suggestions.
        </p>
      </div>

      <div className="mt-24 pb-10 flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          What People Say About Me.
        </div>
      </div>

      <WhatPeopleSay />
      <SaySomethingNice />

      <div className="flex justify-center items-center md:px-40 px-10">
        <p className="text-lg">
          Like the work you see? Here&apos;s a PayNow QR code to support my work.
        </p>
      </div>
      <div className="flex justify-center items-center pt-10 px-10">
        <Image
        src="/paynow.jpg"
        width={500}
        height={500}
        alt="PayNow QR code"
        className="rounded-lg"
        />
      </div>

      
    </>
  ) 
}