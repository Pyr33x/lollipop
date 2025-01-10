"use server";

import "server-only";
import { db, images } from "~/server/db";
import { sql } from "drizzle-orm";

export async function getImages({
  searchParams,
}: {
  searchParams?: { asc: string };
}) {
  const imgs = await db
    .select()
    .from(images)
    .orderBy(
      searchParams?.asc ? sql`${images.id} ASC` : sql`${images.id} DESC`
    );
  return imgs;
}

export async function getImage({ id }: { id: string }) {
  const img = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });
  if (!img) throw new Error("Not Found");
  return img;
}
