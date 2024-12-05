import { NavLinks } from "~/components/shared/nav-links";
import { auth } from "~/server/auth";

import { cn } from "~/utils/cn";

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
        <NavLinks session={session!} />
      </nav>
    </header>
  );
}
