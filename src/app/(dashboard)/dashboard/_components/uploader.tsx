"use client";

import { UploadButton } from "~/utils/uploadthing";

export function Uploader() {
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={() => {
        alert("Upload Completed");
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}
