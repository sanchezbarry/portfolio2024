import Image from "next/image";
import Hello from "@/components/Hello"
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Career } from "@/components/Career"

import { SayHi } from "@/components/SayHi";
import { Separator } from "@/components/ui/separator"


export default function Home() {
  return <>
  
  <Hello />
  <ProjectsGrid />
  <Career />

  {/* <Separator /> */}
  <SayHi />
  </>;
}