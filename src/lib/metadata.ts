import type { Metadata } from "next";
import { keywords } from "./keywords";

export const meta: Metadata = {
  metadataBase: new URL("https://lollipop.pyr33x.ir"),

  openGraph: {
    siteName: "Lollipop",
    url: "https://pyr33x.ir/opengraph-image",
    locale: "en_US",
  },
  twitter: {
    title: "Lollipop",
    card: "summary_large_image",
    creator: "@pyr33x",
    site: "https://lollipop.pyr33x.ir",
  },

  applicationName: "Lollipop",
  appleWebApp: {
    statusBarStyle: "default",
    title: "Lollipop",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
  formatDetection: {
    telephone: false,
  },

  title: {
    default: "Lollipop",
    template: "%s | Lollipop",
  },
  description: "A clean fullstack uploader.",
  creator: "Mehdi Parandak",
  authors: {
    url: "https://github.com/pyr33x",
    name: "Mehdi Parandak",
  },

  keywords: keywords,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
