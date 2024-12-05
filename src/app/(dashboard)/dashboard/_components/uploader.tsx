"use client";

import { UploadButton } from "~/utils/uploadthing";
import { toast } from "sonner";

export function Uploader() {
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={() => {
        toast.success("Upload complete!", {
          description: new Date().toLocaleTimeString(),
        });
      }}
      onUploadError={(error: Error) => {
        toast.error(error.message, {
          description: new Date().toLocaleTimeString(),
        });
      }}
    />
  );
}
