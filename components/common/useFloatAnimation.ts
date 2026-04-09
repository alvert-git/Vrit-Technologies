"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject } from "react";

export const useFloatAnimation = (containerRef: RefObject<HTMLDivElement | null>) => {
    useGSAP(() => {
        if (!containerRef.current) return;

        gsap.fromTo(
            containerRef.current.querySelector(".image-main"),
            { y: 5 },
            {
                y: -5,
                duration: 2,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
            }
        );
    }, { scope: containerRef });
};