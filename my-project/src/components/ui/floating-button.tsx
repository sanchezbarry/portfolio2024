'use client';

import { ReactNode, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOnClickOutside } from 'usehooks-ts';

type FloatingButtonProps = {
  className?: string;
  children: ReactNode;
  triggerContent: ReactNode;
};

type FloatingButtonItemProps = {
  children: ReactNode;
};

const list = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 5 },
};

const btn = {
  visible: { rotate: '45deg' },
  hidden: { rotate: 0 },
};

function FloatingButton({ className, children, triggerContent }: FloatingButtonProps) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center">
      <AnimatePresence>
        {isOpen && ( // Conditionally render the list only when `isOpen` is true
          <motion.ul
            className="flex flex-col items-center absolute bottom-14 gap-2"
            initial="hidden"
            animate="visible"
            exit="hidden" // Exit animation when `isOpen` becomes false
            variants={list}>
            {children}
          </motion.ul>
        )}
      </AnimatePresence>
      <motion.div
        variants={btn}
        animate={isOpen ? 'visible' : 'hidden'}
        ref={ref}
        onClick={() => setIsOpen(!isOpen)}>
        {triggerContent}
      </motion.div>
    </div>
  );
}

function FloatingButtonItem({ children }: FloatingButtonItemProps) {
  return <motion.li variants={item}>{children}</motion.li>;
}

export { FloatingButton, FloatingButtonItem };
