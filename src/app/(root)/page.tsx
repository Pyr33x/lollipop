import { Images } from "~/app/(root)/_components/images";
import { Separator, Skeleton } from "~/components/ui";
import { Hero } from "~/app/(root)/_components/hero";
import { Suspense } from "react";

export const revalidate = 30;

export default function Home() {
  return (
    <section>
      <Hero />
      <Separator className="my-6" />
      <Suspense fallback={<Skeleton className="w-full h-20" />}>
        <Images />
      </Suspense>
    </section>
  );
}
