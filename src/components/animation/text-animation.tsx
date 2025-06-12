"use client";

import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextEffectProps {
  text: string;
  duration?: number;
}

export const TextEffect: React.FC<TextEffectProps> = ({
  text,
  duration = 1,
}) => {
  const scope = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const wrapElements = (
    elems: NodeListOf<Element> | Element[],
    wrapType: string,
    wrapClass: string
  ) => {
    if (typeof window === "undefined") return;
    Array.from(elems).forEach((elem) => {
      const wrapEl = document.createElement(wrapType);
      wrapEl.className = wrapClass;
      elem.parentNode?.insertBefore(wrapEl, elem);
      wrapEl.appendChild(elem);
    });
  };

  useGSAP(
    () => {
      if (!scope.current || typeof window === "undefined") return;
      const words = scope.current?.querySelectorAll(".word");
      if (!words?.length) return;

      timelineRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: "top bottom-=100",
          end: "bottom top+=100",
          toggleActions: "play none none reset",
        },
      });

      if (!timelineRef.current) return;

      words.forEach((word, index) => {
        const chars = word.querySelectorAll(".char");
        wrapElements(chars, "span", "char-wrap");

        timelineRef.current?.fromTo(
          chars,
          {
            willChange: "transform",
            xPercent: -250,
            rotationZ: 45,
            scaleX: 6,
            transformOrigin: "100% 50%",
            opacity: 0,
          },
          {
            duration: duration,
            ease: "power2",
            xPercent: 0,
            rotationZ: 0,
            scaleX: 1,
            opacity: 1,
            stagger: 0.06,
          },
          index * 0.3 // Add delay between words
        );
      });
    },
    { scope }
  );

  return (
    <span
      ref={scope}
      className="[&_.char]:inline-block [&_.char-wrap]:inline-grid [&_.char-wrap]:overflow-hidden [&_.char-wrap]:leading-[1.1] [&_.space]:inline-block [&_.word]:inline-block [&_.word]:whitespace-nowrap"
    >
      {text.split(" ").map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          <span className="word">
            {[...word].map((char, charIndex) => (
              <span key={`${wordIndex}-${charIndex}`} className="char">
                {char}
              </span>
            ))}
          </span>
          {wordIndex < text.split(" ").length - 1 && (
            <span className="space">
              <span className="char">&nbsp;</span>
            </span>
          )}
        </React.Fragment>
      ))}
    </span>
  );
};
