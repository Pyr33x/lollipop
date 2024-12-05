import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
    },
    host: "https://lollipop.pyr33x.ir",
    sitemap: "https://lollipop.pyr33x.ir/sitemap.xml",
  };
}
