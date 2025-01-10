import { getImage } from "~/server/queries/getImage";
import Image from "next/image";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id as string;
  const image = await getImage({ id: photoId });
  return (
    <div className="max-w-4xl">
      <Image
        src={image.url ?? ""}
        alt={image.name ?? ""}
        width={500}
        height={500}
      />
    </div>
  );
}
