import Image from "next/image";
import Hello from "@/components/Hello"
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Career } from "@/components/Career"
import FloatingButtonExample from "@/components/FloatingAction"
import { SayHi } from "@/components/SayHi";


export default function Home() {
  return <>
  
  <Hello />
  <ProjectsGrid />
  <Career />
  <FloatingButtonExample />

  <SayHi />
  </>;
}