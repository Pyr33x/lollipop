import { getImages } from "~/app/(root)/_components/getImages";
import { auth } from "~/server/auth";
import Image from "next/image";

export async function Images() {
  const session = await auth();
  const user = session?.user;
  const images = await getImages({ searchParams: { asc: "id" } });
  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((image) => (
        <>
          <Image
            key={image.id}
            src={image.url ?? ""}
            alt={image.name ?? ""}
            width={200}
            height={200}
            className="select-none transition ease-in-out duration-200 hover:scale-105 active:scale-95 rounded-sm"
            title={`Uploaded by ${image.userName}`}
          />
        </>
      ))}
    </div>
  );
}
