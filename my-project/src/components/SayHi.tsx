// "use client";
// import { Label } from "../components/ui/label";
// import { Input } from "../components/ui/input";
// import { InfoPopover } from "../components/ui/info-popover";
// import { cn } from "@/utils/cn";
// import React, { useRef, useState  } from 'react';
// import emailjs from 'emailjs-com';
// import ReCAPTCHA from "react-google-recaptcha";

// export function SayHi() {
//   const [capVal, setCapVal] = useState();
//   const form = useRef<HTMLFormElement>(null);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();



//     if (form.current) {
//       emailjs.sendForm('service_mj7djes', 'template_cr8vpyo', form.current, 'Uhr95mJdb1211miPp')
//         .then((result) => {
//           console.log(result.text);
//           alert('Message sent successfully!');
//         }, (error) => {
//           console.log(error.text);
//           alert('Failed to send the message, please try again.');
//         });
//     }
//   };




//   return (
//     <div id="anchor_form" className="md:mt-10 mt-28 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
//       <div className="flex justify-between">
      
//       <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
//         Let&apos;s work together.
//       </h2> 

//       <InfoPopover title="EmailJS" description="This form uses EmailJS - a free easy to use service"/>
//       </div>

//       <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
//         Contact me in anyway - email, WhatsApp, or a good old fashioned form like the one below.
//       </p>

//       <form ref={form} className="my-8" onSubmit={handleSubmit}>
//         <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
//           <LabelInputContainer>
//             <Label htmlFor="firstname">First name</Label>
//             <Input id="firstname" name="firstname" placeholder="Tyler" type="text" />
//           </LabelInputContainer>
//           <LabelInputContainer>
//             <Label htmlFor="lastname">Last name</Label>
//             <Input id="lastname" name="lastname" placeholder="Durden" type="text" />
//           </LabelInputContainer>
//         </div>
//         <LabelInputContainer className="mb-4">
//           <Label htmlFor="email">Email address</Label>
//           <Input id="email" name="email" placeholder="projectmayhem@fc.com" type="email" />
//         </LabelInputContainer>
//         <LabelInputContainer className="mb-4">
//           <Label htmlFor="message">Message</Label>
//           <textarea
//             id="message"
//             name="message"
//             placeholder="Hey, I'm interested in working with you on a project. Let's chat!"
//             className="flex h-20 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
//           />
//         </LabelInputContainer>

//         <ReCAPTCHA
//          sitekey="your-sitekey-here"
//          onChange={(val) => setCapVal(val)}          
//        />
//         <button
//           className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
//           disabled={!capVal}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// const BottomGradient = () => {
//   return (
//     <>
//       <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
//       <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
//     </>
//   );
// };

// const LabelInputContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div className={cn("flex flex-col space-y-2 w-full", className)}>
//       {children}
//     </div>
//   );
// };

"use client";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { InfoPopover } from "../components/ui/info-popover";
import { cn } from "@/utils/cn";
import React, { useRef, useState  } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

export function SayHi() {
  const [capVal, setCapVal] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!capVal) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    try {
      // Verify reCAPTCHA token on server
      const verifyRes = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: capVal }),
      });

      const verifyJson = await verifyRes.json();

      if (!verifyJson.success) {
        console.error("reCAPTCHA verification failed:", verifyJson);
        alert("reCAPTCHA verification failed. Please try again.");
        setCapVal(null);
        return;
      }

      // Send email via EmailJS
      if (form.current) {
        emailjs.sendForm('service_mj7djes', 'template_cr8vpyo', form.current, 'Uhr95mJdb1211miPp')
          .then((result) => {
            console.log(result.text);
            alert('Message sent successfully!');
            form.current?.reset();
            setCapVal(null);
          }, (error) => {
            console.log(error.text);
            alert('Failed to send the message, please try again.');
          });
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div id="anchor_form" className="md:mt-10 mt-28 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <div className="flex justify-between">
      
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Let&apos;s work together.
      </h2> 

      <InfoPopover title="EmailJS" description="This form uses EmailJS - a free easy to use service"/>
      </div>

      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Contact me in anyway - email, WhatsApp, or a good old fashioned form like the one below.
      </p>

      <form ref={form} className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" name="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" name="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" name="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Hey, I'm interested in working with you on a project. Let's chat!"
            className="flex h-20 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
          />
        </LabelInputContainer>

        <ReCAPTCHA
         sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
         onChange={(val) => setCapVal(val)}          
       />
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          disabled={!capVal}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};