"use client";

import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import React, {useRef, useState} from "react";
import SectionHeading from "./SectionHeading";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const StickyScroll2 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    useGSAP(
        () => {
            const elements =
                containerRef.current &&
                containerRef.current?.querySelectorAll(".screen");

            elements?.forEach((el, index) => {
                ScrollTrigger.create({
                    trigger: el,
                    start: () => `top top`,
                    end: "+=100%",
                    markers: true,
                    onToggle: (self) => {
                        if (self.isActive) setActiveIndex(index + 1);
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
                <div className="bg-yellow relative">
                    <div className="heading-70-170 sticky top-0 grid h-screen place-items-center">
                        {activeIndex}
                    </div>

                    <div className="screen h-screen w-full">a</div>
                    <div className="screen h-screen w-full">b</div>
                    <div className="screen h-screen w-full">c</div>
                    <div className="screen h-screen w-full">d</div>
                    <div className="h-[50vh] w-full">E</div>
                </div>
            </div>
        </section>
    );
};

export default StickyScroll2;
