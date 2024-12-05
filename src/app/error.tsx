"use client";

import { CornerDownLeft, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui";

export default function NotFound({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  return (
    <section>
      <h1 className="text-2xl md:text-4xl font-bold text-foreground text-center">
        Internal Server Error
      </h1>
      <p className=" text-xl md:text-2xl mt-1 font-medium text-muted-foreground text-center">
        {error.message}
      </p>
      <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-2">
        <Button onClick={reset}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            router.push("/");
          }}
        >
          Return Home
          <CornerDownLeft className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
