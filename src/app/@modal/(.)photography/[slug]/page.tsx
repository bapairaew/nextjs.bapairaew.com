import PhotoContent from "@/components/contents/singles/PhotoContent";

type Props = { params: { slug: string } };

export default function PhotoModal({ params: { slug } }: Props) {
  return <PhotoContent slug={slug} />;
}
