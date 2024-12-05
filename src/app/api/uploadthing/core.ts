import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { db, images } from "~/server/db";
import { auth } from "~/server/auth";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      const session = await auth();
      const user = session?.user;
      if (!session)
        throw new UploadThingError("You must sign in to upload images.");
      return { userId: user?.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);
      await db.insert(images).values({
        id: crypto.randomUUID(),
        name: file.name as string,
        url: file.url as string,
        uploader: metadata.userId as string,
      });
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
