import { Navigation } from "~/components/shared";
import { jetBrains, inter } from "~/lib/fonts";
import { Toaster } from "~/components/ui";
import { meta } from "~/lib/metadata";
import type { Metadata } from "next";
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
        className={`${jetBrains.variable} ${inter.className} antialiased w-full h-full bg-background scroll-smooth`}
      >
        <Navigation />
        <main className="min-h-screen flex flex-col items-center justify-center px-8 py-36">
          {children}
        </main>
        <Toaster richColors closeButton />
      </body>
    </html>
  );
}
