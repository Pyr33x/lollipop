import {
  Button,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Separator,
} from "~/components/ui";
import { auth, signIn, signOut } from "~/server/auth";
import { routes } from "~/lib/routes";
import { cn } from "~/utils/cn";
import Image from "next/image";
import Link from "next/link";

const ROUTE_STYLE = "text-foreground/80 transform hover:text-neutral-200";

async function handleSignIn() {
  "use server";
  await signIn("github", { redirectTo: "/dashboard" });
}

async function handleSignOut() {
  "use server";
  await signOut({ redirectTo: "/" });
}

export async function Navigation() {
  const session = await auth();
  return (
    <header>
      <nav
        className={cn(
          "fixed top-0 z-50",
          "h-16 w-full",
          "border-b border-neutral-800 bg-background/50 backdrop-blur-lg"
        )}
      >
        <div className="flex h-full w-full select-none items-center justify-between px-6">
          <div className="flex flex-row items-center gap-x-4">
            <h1 className="neutral-200 mr-3 text-2xl font-bold">Lollipop</h1>
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path.toString()}
                className={cn(ROUTE_STYLE, "hidden md:block")}
              >
                {route.title}
              </Link>
            ))}
            {session && (
              <Link
                href="/dashboard"
                className={cn(ROUTE_STYLE, "hidden md:block")}
              >
                Dashboard
              </Link>
            )}
          </div>

          <div className="flex items-center">
            {session?.user?.image ? (
              <Drawer>
                <DrawerTrigger>
                  <Image
                    src={session.user.image}
                    alt="avatar"
                    width={40}
                    height={40}
                    className="transform rounded-full transition hover:scale-105 active:scale-95"
                    priority
                  />
                </DrawerTrigger>

                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Lollipop</DrawerTitle>
                    <DrawerDescription>
                      You logged in as {session.user?.email}
                    </DrawerDescription>
                  </DrawerHeader>

                  <Separator className="my-2" />

                  <div className="my-4 flex flex-col gap-y-2 text-center">
                    <form action={handleSignOut}>
                      <Button
                        type="submit"
                        size="default"
                        // variant="destructive"
                      >
                        Logout
                      </Button>
                    </form>
                  </div>

                  <div className="mb-8 flex flex-col gap-y-2 text-center md:hidden">
                    <Separator className="my-2" />
                    {routes.map((route) => (
                      <Link
                        key={route.path}
                        href={route.path.toString()}
                        className={ROUTE_STYLE}
                      >
                        {route.title}
                      </Link>
                    ))}
                    <Link href="/dashboard" className={ROUTE_STYLE}>
                      Dashboard
                    </Link>
                  </div>
                </DrawerContent>
              </Drawer>
            ) : (
              <form action={handleSignIn}>
                <Button type="submit" size="default" variant="outline">
                  Login
                </Button>
              </form>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
