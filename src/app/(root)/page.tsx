import { getImages } from "~/app/(root)/_components/getImages";
import { Separator, Skeleton } from "~/components/ui";
import { Suspense } from "react";
import Image from "next/image";

export const dynamic = "force-dynamic";
export const revalidate = 30;

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
      <Suspense fallback={<Skeleton className="w-full h-20" />}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
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
      </Suspense>
    </section>
  );
}
