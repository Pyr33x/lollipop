type Route = {
  id: number;
  title: string;
  path: string;
};

export const routes: Route[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Gallery",
    path: "/gallery",
  },
];
