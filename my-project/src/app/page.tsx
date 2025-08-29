import Image from "next/image";
import Hello from "@/components/Hello"
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Career } from "@/components/Career"

import { SayHi } from "@/components/SayHi";
import { Separator } from "@/components/ui/separator"
import { PaidProjects } from "@/components/PaidProjects";


export default function Home() {
  return <>
  
  <Hello />
  <ProjectsGrid />
  <PaidProjects />
  <Career />
  <SayHi />
  </>;
}