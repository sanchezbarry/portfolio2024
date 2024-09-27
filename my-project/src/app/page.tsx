import Image from "next/image";
import Hello from "@/components/Hello"
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Career } from "@/components/Career"

export default function Home() {
  return <>
  <Hello />
  <ProjectsGrid />
  <Career />
  </>;
}