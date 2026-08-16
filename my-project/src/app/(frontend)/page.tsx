import Hello from "@/components/Hello"
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Career } from "@/components/Career"
import { SayHi } from "@/components/SayHi";
import { PaidProjects } from "@/components/PaidProjects";
import { WhatPeopleSay } from "@/components/WhatPeopleSay";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return <>
  <Hello />
  <ProjectsGrid />
  <PaidProjects />
  <WhatPeopleSay />
  <TechStack />
  <Career />
  <SayHi />
  </>;
}