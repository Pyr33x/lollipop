import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ourFileRouter } from "~/app/api/uploadthing/core";
import { extractRouterConfig } from "uploadthing/server";
import { Navigation } from "~/components/shared";
import { Toaster } from "~/components/ui";
import { meta } from "~/lib/metadata";
import type { Metadata } from "next";
import { inter } from "~/lib/fonts";
import "~/styles/globals.css";

export const metadata: Metadata = {
  ...meta,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased w-full h-full bg-background scroll-smooth`}
      >
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <Navigation />
        <main className="min-h-screen flex flex-col items-center justify-center px-8 py-36">
          {children}
        </main>
        <Toaster richColors closeButton />
      </body>
    </html>
  );
}
