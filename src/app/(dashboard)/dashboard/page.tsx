import { Uploader } from "~/app/(dashboard)/dashboard/_components/uploader";
import { GithubIcon } from "~/components/icons";
import { CornerDownLeft } from "lucide-react";
import { auth, signIn } from "~/server/auth";
import { Button } from "~/components/ui";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Lollipop Dashboard",
};

async function handleSignIn() {
  "use server";
  await signIn("github", { redirectTo: "/dashboard" });
}

export default async function Dashboard() {
  const session = await auth();
  if (!session) {
    return (
      <>
        <h1 className="text-center text-3xl font-black tracking-tight text-foreground lg:text-5xl">
          Restricted
        </h1>
        <p className="mt-2 max-w-2xl text-wrap text-center text-lg font-medium tracking-tight text-foreground/60 lg:text-xl">
          You must sign in to your github account to access the dashboard.
        </p>
        <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-2">
          <form action={handleSignIn}>
            <Button className="group">
              <GithubIcon className="mr-2 h-4 w-4 fill-white" />
              Continue with Github
            </Button>
          </form>
          <Link href="/">
            <Button variant="secondary">
              Return Home
              <CornerDownLeft className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <section>
      <Uploader />
    </section>
  );
}
