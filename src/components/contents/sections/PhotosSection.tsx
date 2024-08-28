import PhotoCard from "@/components/cards/PhotoCard";
import { getPhotos } from "@/libs/data/photos";
import { Link } from "react-transition-progress/next";

export default async function PhotosSection() {
  const photos = (await getPhotos()).slice(0, 8);

  return (
    <section className="container mx-auto px-2 py-8">
      <h2 className="font-black text-2xl pb-8">Photography</h2>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {photos.map((p) => (
          <li key={p.slug}>
            <PhotoCard photo={p} />
          </li>
        ))}
      </ul>
      <Link className="w-full text-center block p-4 mt-4" href="/photography">
        All photography →
      </Link>
    </section>
  );
}
