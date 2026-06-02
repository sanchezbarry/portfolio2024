import {
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandTailwind,
  IconBrandMongodb,
  IconBrandFirebase,
  IconBrandFlutter,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandGit,
  IconBrandSupabase,
  IconBrandVercel,
} from "@tabler/icons-react";

const stack = [
  { icon: IconBrandJavascript, label: "JavaScript", color: "text-yellow-400" },
  { icon: IconBrandTypescript, label: "TypeScript", color: "text-blue-500" },
  { icon: IconBrandReact, label: "React", color: "text-cyan-400" },
  { icon: IconBrandNextjs, label: "Next.js", color: "text-neutral-800 dark:text-neutral-200" },
  { icon: IconBrandNodejs, label: "Node.js", color: "text-green-500" },
  { icon: IconBrandTailwind, label: "Tailwind CSS", color: "text-cyan-500" },
  { icon: IconBrandMongodb, label: "MongoDB", color: "text-green-600" },
  { icon: IconBrandSupabase, label: "Supabase", color: "text-emerald-500" },
  { icon: IconBrandFirebase, label: "Firebase", color: "text-orange-400" },
  { icon: IconBrandFlutter, label: "Flutter", color: "text-blue-400" },
  { icon: IconBrandHtml5, label: "HTML5", color: "text-orange-500" },
  { icon: IconBrandCss3, label: "CSS3", color: "text-blue-600" },
  { icon: IconBrandGit, label: "Git", color: "text-orange-600" },
  { icon: IconBrandVercel, label: "Vercel", color: "text-neutral-800 dark:text-neutral-200" },
];

export function TechStack() {
  return (
    <div className="my-10">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl mb-4 font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Tech Stack
      </h2>
      <p className="max-w-7xl pl-4 mx-auto text-neutral-700 mb-8 dark:text-neutral-300 text-sm md:text-base">
        Technologies I work with day-to-day.
      </p>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-6">
        {stack.map(({ icon: Icon, label, color }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
              <Icon size={28} className={color} />
            </div>
            <span className="text-xs text-neutral-600 dark:text-neutral-400 text-center leading-tight">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
