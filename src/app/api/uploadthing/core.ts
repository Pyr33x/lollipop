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
      return {
        userId: user?.id,
        userName: user?.name,
        userAvatar: user?.image,
      };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await db.insert(images).values({
        id: crypto.randomUUID(),
        name: file.name as string,
        url: file.url as string,
        userId: metadata.userId as string,
        userName: metadata.userName as string,
        userImage: metadata.userAvatar as string,
      });
      return {
        uploadedBy: {
          id: metadata.userId,
          name: metadata.userName,
          avatar: metadata.userAvatar,
        },
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
