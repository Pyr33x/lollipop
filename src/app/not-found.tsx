import { GithubIcon } from "~/components/icons";
import { CornerDownLeft } from "lucide-react";
import { Button } from "~/components/ui";

export default function NotFound() {
  return (
    <section>
      <h1 className="text-2xl md:text-4xl font-bold text-foreground text-center">
        Not Found
      </h1>
      <p className=" text-xl md:text-2xl mt-1 font-medium text-muted-foreground text-center">
        {"Couldn't find the requested resource."}
      </p>
      <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-x-2">
        <Button>
          <GithubIcon className="mr-2 h-4 w-4" />
          Star on Github
        </Button>
        <Button variant="secondary">
          Return Home
          <CornerDownLeft className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
