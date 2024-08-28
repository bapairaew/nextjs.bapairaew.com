import PhotosSection from "@/components/contents/sections/PhotosSection";
import PostsSection from "@/components/contents/sections/PostsSection";
import ProjectsSection from "@/components/contents/sections/ProjectsSection";
import HeroSection from "@/components/contents/static/HeroSection";

export default async function AboutPage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <PostsSection />
      <PhotosSection />
    </>
  );
}
