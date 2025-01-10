"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { XIcon } from "lucide-react";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="w-full h-full bg-black/50 fixed top-0 left-0 z-50 backdrop-blur-md">
      <dialog ref={dialogRef} className="relative" onClose={onDismiss}>
        {children}
        <button
          onClick={onDismiss}
          className="top-2 right-2 absolute p-1 bg-rose-500 rounded-full"
        >
          <XIcon className="size-6" />
        </button>
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
