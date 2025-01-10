import { getImages } from "~/server/queries/getImage";
import Image from "next/image";
import Link from "next/link";

export async function Images() {
  const images = await getImages({ searchParams: { asc: "id" } });
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {images.map((image) => (
        <Link href={`/photos/${image.id}`} key={image.id}>
          <Image
            src={image.url ?? ""}
            alt={image.name ?? ""}
            width={200}
            height={200}
            className="select-none transition ease-in-out duration-200 hover:scale-105 active:scale-95 rounded-sm aspect-square"
            priority
          />
        </Link>
      ))}
    </div>
  );
}
