"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export const AboutHeroVideo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const blurVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const loadVideo = async () => {
      if (!videoRef.current || !blurVideoRef.current) return;

      try {
        const playPromises = [
          videoRef.current.play(),
          blurVideoRef.current.play(),
        ];
        await Promise.all(playPromises);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error playing video:", error);
      }
    };

    loadVideo();
  }, []);

  useEffect(() => {
    const mainVideo = videoRef.current;
    const blurVideo = blurVideoRef.current;

    if (!mainVideo || !blurVideo) return;

    const syncVideos = () => {
      blurVideo.currentTime = mainVideo.currentTime;
    };

    mainVideo.addEventListener("timeupdate", syncVideos);

    return () => {
      mainVideo.removeEventListener("timeupdate", syncVideos);
    };
  }, []);

  const videoProps = {
    width: "1920",
    height: "1080",
    controls: false,
    muted: true,
    preload: "metadata",
    loop: true,
    playsInline: true,
    className: cn(
      "relative z-10 h-full w-full aspect-square md:aspect-16/6 rounded-lg border object-cover"
    ),
  };

  const blurVideoProps = {
    ...videoProps,
    className: cn(
      "absolute inset-0 h-full w-full object-cover",
      "blur-xl sm:blur-2xl opacity-20"
    ),
    "aria-hidden": true,
  };

  return (
    <div className="relative">
      <div className={cn("relative", !isLoaded && "opacity-0")}>
        <video
          ref={videoRef}
          {...videoProps}
          aria-label="Maxline logistics services showcase video"
        >
          <source src="/videos/about-piptan.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <video ref={blurVideoRef} {...blurVideoProps}>
          <source src="/videos/about-piptan.webm" type="video/webm" />
        </video>
      </div>

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="border-primary h-12 w-12 animate-spin rounded-full border-4 border-t-transparent sm:h-16 sm:w-16" />
        </div>
      )}
    </div>
  );
};
