import { Modal } from "~/app/@modal/(.)photos/[id]/modal";
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
    <Modal>
      <Image
        src={image.url ?? ""}
        alt={image.name ?? ""}
        width={500}
        height={500}
      />
    </Modal>
  );
}
