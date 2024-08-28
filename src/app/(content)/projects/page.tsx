import ProjectsList from "@/components/contents/lists/ProjectsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "(Almost) every Dom's software projects.",
};

export default function ProjectsPage() {
  return <ProjectsList />;
}
