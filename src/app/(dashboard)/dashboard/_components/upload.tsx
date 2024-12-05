"use client";

import { UploadDropzone } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

export function Upload() {
  const router = useRouter();
  return (
    <UploadDropzone
      endpoint="imageUploader"
      onClientUploadComplete={() => {
        router.refresh();
      }}
      onUploadError={(error) => {
        console.error(error);
      }}
    />
  );
}
