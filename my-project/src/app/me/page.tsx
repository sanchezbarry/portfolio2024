import Image from "next/image";
import Hello from "@/components/Hello"
import ComingSoon from "@/components/ComingSoon"

export default function Me() {
  return (
    <>
      <div className="mt-32 pb-10 flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Me.
        </div>
      </div>
      <div className="flex justify-center items-center md:px-40 px-10">
        <p className="text-lg">This space is planned for personal projects, and other things I&apos;m working. Stay tuned!
          In the meantime, here&apos;s a PayNow QR code to suport my work.
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