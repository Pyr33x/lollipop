export default function sitemap() {
  const routes = [""].map((route) => ({
    url: `https://lollipop.pyr33x.ir${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
