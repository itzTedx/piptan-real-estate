"use client";

import Image from "next/image";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import { cn } from "@/lib/utils";

interface ImageViewerProps {
  className?: string;
  classNameImageViewer?: string;
  classNameThumbnailViewer?: string;
  imageTitle?: string;
  imageUrl: string;
  thumbnailUrl?: string;
}

const ImageViewer = ({
  className,
  classNameImageViewer,
  classNameThumbnailViewer,
  imageTitle,
  imageUrl,
  thumbnailUrl,
}: ImageViewerProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={cn("cursor-pointer", className)}>
          {/* You can swap this with your preferred image optization technique, like using  next/image */}
          <Image
            src={thumbnailUrl || imageUrl}
            alt={`${imageTitle} - Preview`}
            fill
            quality={50}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn(
              "rounded-lg object-cover transition-opacity hover:opacity-90",
              classNameThumbnailViewer
            )}
          />
        </div>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="motion-preset-fade motion-duration-150 fixed inset-0 z-50 bg-black/80" />
        <DialogContent className="bg-background motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-150 motion-duration-150/scale motion-duration-150/translate motion-duration-[0.00s]/rotate fixed inset-0 z-50 flex flex-col items-center justify-center p-0">
          <DialogTitle className="sr-only">{imageTitle}</DialogTitle>
          <div className="relative flex h-screen w-screen items-center justify-center">
            <TransformWrapper
              initialScale={1}
              initialPositionX={0}
              initialPositionY={0}
            >
              {() => (
                <>
                  <TransformComponent>
                    {/* You can swap this with your preferred image optimization technique, like using  next/image */}
                    <div className="h-dvh w-dvw overflow-hidden p-9">
                      <div className="relative aspect-auto h-full w-full overflow-hidden rounded-md">
                        <Image
                          src={imageUrl}
                          alt={imageTitle ?? ""}
                          className={classNameImageViewer}
                          fill
                          quality={100}
                        />
                      </div>
                    </div>
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
            <DialogClose asChild>
              <button
                className="absolute top-4 right-4 z-10 cursor-pointer rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                aria-label="Close"
              >
                <X className="size-6" />
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default ImageViewer;
