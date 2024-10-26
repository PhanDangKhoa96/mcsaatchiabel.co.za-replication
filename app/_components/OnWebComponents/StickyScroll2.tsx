"use client";

import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import React, {useRef} from "react";
import SectionHeading from "./SectionHeading";

const StickyScroll2 = () => {
    const containerRef = useRef(null);
    useGSAP(
        () => {
            const elements = document.querySelectorAll(".sticky");

            elements.forEach((el) => {
                gsap.to(el, {
                    yPercent: -15,
                    startAt: {filter: "brightness(100%) contrast(100%)"},
                    filter: "brightness(60%) contrast(135%)",
                    scrollTrigger: {
                        trigger: el,
                        start: "top top",
                        end: "+=100%",
                        scrub: true,
                        markers: true,
                    },
                });
            });
        },
        {scope: containerRef}
    );
    return (
        <section>
            <SectionHeading title="Sticky Scroll Variant 2" />

            <div ref={containerRef}>
                <div className="sticky top-0 grid h-screen place-items-center bg-green-500">
                    <div className="size-20 bg-black"></div>
                </div>
                <div className="sticky top-0 grid h-screen place-items-center bg-amber-500">
                    <div className="size-20 bg-black"></div>
                </div>
                <div className="sticky top-0 grid h-screen place-items-center bg-green-500">
                    <div className="size-20 bg-black"></div>
                </div>
                <div className="sticky top-0 grid h-screen place-items-center bg-purple-500">
                    <div className="size-20 bg-black"></div>
                </div>
            </div>
        </section>
    );
};

export default StickyScroll2;
