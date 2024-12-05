import { getImages } from "~/app/(root)/_components/getImages";
import Image from "next/image";
import { Separator } from "~/components/ui";

export const dynamic = "force-dynamic";

export default async function Home() {
  const images = await getImages({ searchParams: { asc: "id" } });
  return (
    <section>
      <h1 className="text-2xl md:text-4xl font-bold text-foreground text-center">
        Lolipop
      </h1>
      <p className=" text-xl md:text-2xl mt-1 font-medium text-muted-foreground text-center">
        Clean Full-Stack Uploader App
      </p>
      <Separator className="my-6" />
      <div className="grid grid-cols-3 gap-2">
        {images.map((img) => (
          <Image
            key={img.id}
            src={img.url ?? ""}
            alt={img.name ?? ""}
            width={200}
            height={200}
          />
        ))}
      </div>
    </section>
  );
}
