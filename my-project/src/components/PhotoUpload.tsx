// "use client";
// import React, { useState } from "react";
// import { FileUpload } from "@/components/ui/file-upload";

// export function PhotoUpload() {
//   const [files, setFiles] = useState<File[]>([]);
//   const handleFileUpload = (files: File[]) => {
//     setFiles(files);
//     console.log(files);
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
//       <FileUpload onChange={handleFileUpload} />
//     </div>
//   );
// }
"use client";
import React from "react";
import { FileUpload } from "@/components/ui/file-upload";

export function PhotoUpload({ onFileSelect }: { onFileSelect: (file: File) => void }) {
  // Callback function to handle file selection and pass it to the parent component
  const handleFileUpload = (files: File[]) => {
    if (files.length > 0) {
      onFileSelect(files[0]); // Pass the first file to the parent
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      {/* FileUpload component triggers the handleFileUpload callback when a file is selected */}
      <FileUpload onChange={handleFileUpload} />
    </div>
  );
}