"use client";
import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "../api/uploadthing/core";
import { useRouter } from "next/navigation";

export function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>

      <div className="flex flex-row">
        <SignedOut>
          <SignInButton/>
        </SignedOut>

        <SignedIn>
          <UploadButton<OurFileRouter, "imageUploader"> endpoint="imageUploader" onClientUploadComplete={() => {
            router.refresh();
            }}
            onUploadError={(error: Error) => {
              console.error("Upload failed:", error);
            }}
            />
          <UserButton/>
        </SignedIn>
      </div>
    </nav>
  );
}