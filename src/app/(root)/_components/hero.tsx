import { GithubIcon } from "~/components/icons";
import { LayoutDashboard } from "lucide-react";
import { Button } from "~/components/ui";
import { auth } from "~/server/auth";
import Link from "next/link";

export async function Hero() {
  const session = await auth();
  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold text-foreground text-center">
        Lollipop
      </h1>
      <p className=" text-xl md:text-2xl mt-1 font-medium text-muted-foreground text-center">
        Clean Full-Stack Uploader App
      </p>
      <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-2">
        <Button>
          <GithubIcon className="mr-2 h-4 w-4" />
          Star on Github
        </Button>
        {session ? (
          <Link href="/dashboard">
            <Button variant="secondary">
              Dashboard
              <LayoutDashboard className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <Button variant="secondary" disabled>
            Dashboard
            <LayoutDashboard className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </>
  );
}
