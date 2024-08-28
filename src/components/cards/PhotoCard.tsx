import { FilledImage } from "@/components/images/FilledImage";
import { Photo } from "@/libs/data/photos";
import dateformat from "dateformat";
import Card, { CardProps } from "./Card";
import CardOverlayAnchor from "./CardOverlayAnchor";

type PhotoCardProps = CardProps & {
  photo: Photo;
};

export default function PhotoCard({ photo, ...props }: PhotoCardProps) {
  return (
    <Card {...props}>
      <FilledImage
        placeholder="blur"
        className="object-cover"
        blurDataURL={photo.blurDataURL}
        alt={photo.place}
        src={`/photos/${photo.slug}.jpeg`}
      />
      <div className="p-2">
        <CardOverlayAnchor href={`/photography/${photo.slug}`}>
          <h1 className="font-black">{photo.place}</h1>
        </CardOverlayAnchor>
        {photo.date && (
          <p className="text-neutral-500 text-sm">
            {[dateformat(new Date(photo.date), "dd mmm yyyy"), photo.camera]
              .filter((x) => x)
              .join(" · ")}
          </p>
        )}
      </div>
    </Card>
  );
}
