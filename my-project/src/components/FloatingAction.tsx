import { FloatingButton, FloatingButtonItem } from '@/components/ui/floating-button';
import { cn } from "@/utils/cn";
import { PhoneOutgoing, Github, LinkedinIcon, PlusIcon } from 'lucide-react';
import Link from "next/link";

export default function FloatingButtonExample() {
  const items = [
    {
      icon: <Link href="https://github.com/sanchezbarry" target="_blank"><Github /></Link>,
      bgColor: 'bg-[#171515]'
    },
    {
      icon: <Link href="https://wa.me/6596962639" target="_blank"><PhoneOutgoing /></Link>,
      bgColor: 'bg-[#25D366]'
    },
    {
      icon: <Link href="https://www.linkedin.com/in/sanchez-barry/" target="_blank"><LinkedinIcon /></Link>,
      bgColor: 'bg-[#0a66c2]'
    }
  ];

  return (
    <FloatingButton
      triggerContent={
        <button className="flex items-center justify-center h-12 w-12 rounded-full bg-black dark:bg-slate-800 text-white/80 z-10">
          <PlusIcon />
        </button>
      }>
      {items.map((item, key) => (
        <FloatingButtonItem key={key}>
          <button
            className={cn(
              'h-12 w-12 rounded-full flex items-center justify-center text-white/80',
              item.bgColor
            )}>
            {item.icon}
          </button>
        </FloatingButtonItem>
      ))}
    </FloatingButton>
  );
}