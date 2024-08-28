import { FilledImage } from "@/components/images/FilledImage";
import { getPlaceholderImageCache } from "@/libs/data/posts";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

const defaultPlaceholderImage =
  "data:image/jpeg;base64,/9j/2wBDAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKf/2wBDAQYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKf/wgARCAANAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMEBv/EABUBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAADMNtGT/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAIDFBP/2gAIAQEAAT8ASzndzNMzof/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPwBNv//EABURAQEAAAAAAAAAAAAAAAAAABEA/9oACAEDAQE/AEv/2Q==";

export default async function MDXImage({
  src,
  alt,
}: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
  const placeholderImage = src ? await getPlaceholderImageCache(src) : null;
  const blurDataURL = placeholderImage || undefined;
  const placeholder = blurDataURL ? "blur" : defaultPlaceholderImage;

  return src && alt ? (
    <figure>
      <FilledImage
        src={src}
        alt={alt}
        className="object-contain"
        placeholder={placeholder}
        blurDataURL={blurDataURL}
      />
      <figcaption className="text-center">{alt}</figcaption>
    </figure>
  ) : null;
}
