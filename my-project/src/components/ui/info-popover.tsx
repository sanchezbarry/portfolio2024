import { IconInfoCircle } from "@tabler/icons-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

export function InfoPopover({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative flex items-center group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Info Icon */}
      <IconInfoCircle className="w-5 h-5 text-gray-400 cursor-pointer" />

      {/* Popover */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute z-10 w-64 p-3 text-sm text-white bg-black rounded-md shadow-lg bottom-full -mb-2"
        >
          <h3 className="font-semibold mb-1">{title}</h3>
          <p>{description}</p>
          {children && <div className="mt-2">{children}</div>}
        </motion.div>
      )}
    </div>
  );
}