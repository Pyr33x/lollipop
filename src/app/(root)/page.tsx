import { Images } from "~/app/(root)/_components/images";
import { Separator, Skeleton } from "~/components/ui";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export const revalidate = 30;

export default function Home() {
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
        <Images />
      </Suspense>
    </section>
  );
}
