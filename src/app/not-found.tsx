export default function NotFound() {
  return (
    <section>
      <h1 className="text-2xl md:text-4xl font-bold text-foreground text-center">
        Not Found
      </h1>
      <p className=" text-xl md:text-2xl mt-1 font-medium text-muted-foreground text-center">
        Couldn't find the requested resource.
      </p>
    </section>
  );
}
