// "use client";
// import { Label } from "../components/ui/label";
// import { Input } from "../components/ui/input";
// import { cn } from "@/utils/cn";
// import React, { useRef, useState } from 'react';
// import emailjs from 'emailjs-com';
// import { PhotoUpload } from "./PhotoUpload";

// import type { PutBlobResult } from '@vercel/blob';


// export function SaySomethingNice() {
//   const form = useRef<HTMLFormElement>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [blob, setBlob] = useState<PutBlobResult | null>(null);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!fileInputRef.current?.files) {
//       throw new Error('No file selected');
//     }

//     const file = fileInputRef.current.files[0];

//     const response = await fetch(
//       `/api/avatar/upload?filename=${file.name}`,
//       {
//         method: 'POST',
//         body: file,
//       },
//     );

//     const newBlob = (await response.json()) as PutBlobResult;

//     setBlob(newBlob);
//     // if (form.current) {
//     //   emailjs.sendForm('service_mj7djes', 'template_cr8vpyo', form.current, 'Uhr95mJdb1211miPp')
//     //     .then((result) => {
//     //       console.log(result.text);
//     //       alert('Message sent successfully!');
//     //     }, (error) => {
//     //       console.log(error.text);
//     //       alert('Failed to send the message, please try again.');
//     //     });
//     // }
//   };


//   // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();
//   //   console.log("Form submitted");
//   // };

//   return (


//     <div id="anchor_form" className="md:mt-10 mt-28 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
//       <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
//         Want to leave a review, too?
//       </h2> 
//       <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
//         Just fill in the form below. 
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
//           <Label htmlFor="title">Title</Label>
//           <Input id="title" name="title" placeholder="Great Frontend Developer" type="text" />
//         </LabelInputContainer>
//         <LabelInputContainer className="mb-4">
//           <Label htmlFor="message">Review</Label>
//           <textarea
//             id="message"
//             name="message"
//             placeholder="Hey, the website you built for me is awesome!"
//             className="flex h-20 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
//           />
//         </LabelInputContainer>

//         <LabelInputContainer className="mb-4">
//         <PhotoUpload />
//         </LabelInputContainer>
//         <button
//           className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
//         >
//           Submit
//         </button>
//       </form>

//       {blob && (
//         <div>
//           Blob url: <a href={blob.url}>{blob.url}</a>
//         </div>
//       )}
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
import React, { useRef, useState } from "react";
import { PhotoUpload } from "./PhotoUpload";

import type { PutBlobResult } from "@vercel/blob";

export function SaySomethingNice() {
  const form = useRef<HTMLFormElement>(null);
  const [file, setFile] = useState<File | null>(null); // State to store the selected file
  const [blob, setBlob] = useState<PutBlobResult | null>(null);// State to store the uploaded blob result

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file before submitting.");
      return;
    }

    // Send the selected file to the API endpoint for upload
    const response = await fetch(`/api/testimonialphoto/upload?filename=${file.name}`, {
      method: "POST",
      body: file, // Send the file as the request body
    });

    if (!response.ok) {
      alert("Failed to upload the file.");
      return;
    }

    const newBlob = (await response.json()) as PutBlobResult;
    setBlob(newBlob); // Store the uploaded blob result

    alert("File uploaded successfully!"); // Alert on successful upload
  };

  return (
    <div id="anchor_form" className="mb-8 md:mt-10 mt-28 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Want to leave a review, too?
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Just fill in the form below.
      </p>

      <form ref={form} className="my-84" onSubmit={handleSubmit}>
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
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" placeholder="Great Frontend Developer" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Review</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Hey, the website you built for me is awesome!"
            className="flex h-20 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
           {/* Pass the selected file from PhotoUpload to the parent component */}
          <PhotoUpload onFileSelect={(selectedFile) => setFile(selectedFile)} />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium"
        >
          Submit
        </button>
      </form>

      {blob && (
        <div>
          Blob URL: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </div>
  );
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`flex flex-col space-y-2 w-full ${className}`}>{children}</div>;
};