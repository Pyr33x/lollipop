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
