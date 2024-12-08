"use client";

import { usePathname } from "next/navigation";
import type { Session } from "next-auth";
import { cn } from "~/utils/cn";
import Link from "next/link";

const routes = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    session: true,
  },
];

type Route = (typeof routes)[number];

export function NavLinks({
  session,
  className,
}: {
  session: Session | null;
  className?: string;
}) {
  const pathname = usePathname();

  const renderLink = (route: Route) => (
    <Link
      key={route.path}
      href={route.path}
      className={cn(
        "text-foreground/80 transform hover:text-foreground",
        pathname === route.path ? "text-foreground" : "",
        className
      )}
    >
      {route.title}
    </Link>
  );

  return (
    <>{routes.filter((route) => !route.session || session).map(renderLink)}</>
  );
}
