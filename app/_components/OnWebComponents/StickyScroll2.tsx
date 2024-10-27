"use client";

import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import React, {useRef, useState} from "react";
import SectionHeading from "./SectionHeading";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import clsx from "clsx";

const contentArray = [
    {
        title: "RESILIENT",
        description:
            "We stand tall, unshaken by challenges. Where others see obstacles, we see stepping stones. Our commitment to persevere, no matter the odds, defines who we are and fuels our progress.",
        image: "/sticky-scroll-2-1.jpeg", // Replace with your actual image path
    },
    {
        title: "CURIOUS",
        description:
            "We question, we explore, we learn. Curiosity drives us to discover the unknown, fueling innovation and creativity. We welcome new ideas and fresh perspectives to stay ahead.",
        image: "/sticky-scroll-2-2.jpeg", // Replace with your actual image path
    },
    {
        title: "INSPIRED",
        description:
            "Inspiration is everywhere, if we’re willing to see it. Our journey is powered by a vision to make an impact and leave a mark. Each step we take brings us closer to something greater.",
        image: "/sticky-scroll-2-3.jpeg", // Replace with your actual image path
    },
    {
        title: "BOLD",
        description:
            "We take risks, embracing uncertainty to make meaningful change. Boldness isn’t about recklessness—it’s about having the courage to pursue the extraordinary and bring it to life.",
        image: "/sticky-scroll-2-4.jpeg", // Replace with your actual image path
    },
    {
        title: "OPTIMISTIC",
        description:
            "We look to the future with hope and determination. Believing in possibilities allows us to create the unimaginable. With every challenge, we grow, and with every success, we soar.",
        image: "/sticky-scroll-2-5.jpeg", // Replace with your actual image path
    },
];

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
                    start: () => `top-=100% top`,
                    end: "bottom-=100%",
                    onToggle: (self) => {
                        if (self.isActive) {
                            setActiveIndex(index);
                        }
                    },
                });
            });
        },
        {scope: containerRef}
    );
    return (
        <section>
            <SectionHeading title="Sticky Scroll Variant 2" />
            <div className="h-px bg-black"></div>
            <div ref={containerRef}>
                <div className="container sticky top-0 grid h-screen place-items-center bg-white">
                    <div className="w-full space-y-5 lg:flex">
                        <h3 className="heading-70-170 flex flex-col lg:text-[200px]">
                            <span>Values</span>
                            <span className="inline-flex items-stretch gap-x-2">
                                <span className="relative inline-block w-56 -translate-y-1.5 overflow-hidden py-1">
                                    <img
                                        src="/sticky-scroll-2-thumb.jpeg"
                                        loading="lazy"
                                        className="absolute inset-0 h-full w-full object-cover"></img>
                                </span>
                                <span>we</span>
                            </span>
                            <span>value</span>
                        </h3>

                        <div className="ml-auto max-w-sm space-y-2 font-medium lg:max-w-md">
                            <p>
                                We champion creativity and authenticity. We’re a
                                space for innovative and bold thinkers. Yet,
                                there are five core values that we hold dear,
                                shaping our culture and our identity.
                            </p>
                            <p>
                                Resilient. Curious. Driven. Thoughtful.
                                Inclusive.
                            </p>
                            <p>
                                These are the principles we strive to live by
                                every day.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative bg-yellow">
                    <div className="sticky top-0 h-screen">
                        {contentArray.map(({image, title}, index) => {
                            const isActive = activeIndex == index;
                            return (
                                <div
                                    className={clsx(
                                        "container absolute inset-0 flex flex-col justify-between py-10 transition-opacity duration-500 lg:pb-6",
                                        !isActive && "invisible"
                                    )}>
                                    <h3 className="heading-70-170">{title}</h3>

                                    <div className="aspect-square w-full max-w-60 overflow-hidden lg:max-w-sm">
                                        <img
                                            src={image}
                                            className="h-full w-full object-cover"
                                            alt=""
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {contentArray.map(({description}, index) => {
                        const isActive = activeIndex == index;
                        return (
                            <div
                                key={index}
                                className="screen container h-screen w-full">
                                <div className="flex gap-x-10 sm:ml-64 lg:ml-[500px] lg:justify-between">
                                    <h4 className="font-bebasNeue text-2xl font-bold lg:text-5xl">
                                        0{index + 1}
                                    </h4>
                                    <p className="max-w-md font-medium lg:max-w-lg lg:text-xl">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
};

export default StickyScroll2;
