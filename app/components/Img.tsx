import Image from "next/image";

/**
 * Cover image that fills its (positioned) parent slot. Example photos are from
 * Unsplash (free under the Unsplash License) — replace the IDs in lib/content.ts.
 */
export default function Img({
  src,
  alt,
  sizes = "100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      style={{ objectFit: "cover" }}
    />
  );
}
