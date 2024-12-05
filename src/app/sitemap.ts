export default function sitemap() {
  let routes = [""].map((route) => ({
    url: `https://lollipop.pyr33x.ir${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
