import Image from "next/image";
import Hello from "@/components/Hello"
import { ProjectsGrid } from "@/components/ProjectsGrid";

export default function Home() {
  return <>
  <Hello />
  <ProjectsGrid />
  
  </>;
}