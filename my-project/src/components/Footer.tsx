import Link from "next/link";
import {
  IconBrandWhatsapp,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/6596962639",
    icon: IconBrandWhatsapp,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sanchez-barry/",
    icon: IconBrandLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/sanchezbarry",
    icon: IconBrandGithub,
  },
  {
    label: "Email",
    href: "mailto:sanchezbarry@gmail.com",
    icon: IconMail,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          &copy; {year} Sanchez Barry. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 dark:text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
            >
              <Icon className="h-5 w-5" stroke={1.75} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
