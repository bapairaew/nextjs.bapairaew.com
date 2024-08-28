import ProjectContent from "@/components/contents/singles/ProjectContent";

type Props = { params: { slug: string } };

export default function ProjectModal({ params: { slug } }: Props) {
  return <ProjectContent slug={slug} />;
}
