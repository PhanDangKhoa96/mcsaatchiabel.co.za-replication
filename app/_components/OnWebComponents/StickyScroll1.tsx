"use client";

import {useGSAP} from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import React, {useRef} from "react";
import SectionHeading from "./SectionHeading";

const contentArray = [
    {
        title: "CLARITY IN DESIGN",
        description:
            "Our mission is clear: to communicate effectively. We strip away the noise, revealing only the essence of the message, so that what remains is impactful and unforgettable.",
        bgColor: "#1d1ae5",
        image: "/sticky-scroll-1-1.jpeg", // Replace with the path to your silhouette image
        isWhiteText: true,
    },
    {
        title: "FOCUSED ON PURPOSE",
        description:
            "Every idea we craft serves a single purpose—meaningful impact. By aligning every element with this goal, we create work that resonates deeply with audiences.",
        bgColor: "#e46ba1",
        image: "/sticky-scroll-1-2.jpeg", // Replace with the path to your silhouette image
        isWhiteText: true,
    },
    {
        title: "IN PURSUIT OF AUTHENTICITY",
        description:
            "Authenticity is our compass. We create with intent, bringing genuine messages that people connect with, leaving a lasting impression beyond the surface.",
        bgColor: "#ffe600",
        image: "/sticky-scroll-1-3.jpeg", // Replace with the path to your silhouette image
        isWhiteText: false,
    },
    {
        title: "THE ART OF SIMPLICITY",
        description:
            "Simplicity is powerful. By distilling every message to its core, we produce work that is both memorable and universally understood, making complex ideas accessible to everyone.",
        bgColor: "#1d1ae5",
        image: "/sticky-scroll-1-4.jpeg", // Replace with the path to your silhouette image
        isWhiteText: true,
    },
];

const StickyScroll1 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            const elements =
                containerRef.current &&
                containerRef.current?.querySelectorAll(".screen");

            elements?.forEach((el, index) => {
                const isLastItem = index + 1 === elements.length;
                gsap.to(el, {
                    yPercent: isLastItem ? 0 : -100,
                    scrollTrigger: {
                        trigger: el,
                        start: () => `+=${index * 100}% top`,
                        end: "+=100%",
                        scrub: true,
                    },
                });
            });
        },
        {scope: containerRef}
    );
    return (
        <section>
            <SectionHeading title="Sticky Scroll Variant 1" />
            <div
                style={{height: `${contentArray.length * 100}vh`}}
                ref={containerRef}>
                <div className="sticky top-0 h-screen">
                    {contentArray.map(
                        (
                            {bgColor, description, image, isWhiteText, title},
                            index
                        ) => {
                            const isLastItem =
                                index + 1 === contentArray.length;
                            return (
                                <div
                                    key={index}
                                    style={{
                                        backgroundColor: bgColor,
                                        zIndex: contentArray.length - index,
                                    }}
                                    className={clsx(
                                        "screen absolute left-0 block h-screen w-full py-20",
                                        isLastItem ? "bottom-0" : "top-0"
                                    )}>
                                    <div
                                        className={clsx(
                                            "container flex h-full flex-col lg:flex-row lg:flex-wrap",
                                            isWhiteText
                                                ? "text-white"
                                                : "text-black"
                                        )}>
                                        <div className="mb-8 w-full lg:mb-12">
                                            <h3
                                                className={
                                                    "heading-70-170 max-w-3xl text-balance"
                                                }>
                                                {title}
                                            </h3>
                                        </div>

                                        <div className="lg:w-1/2">
                                            <p className="text-balance lg:max-w-md lg:text-lg">
                                                {description}
                                            </p>
                                        </div>

                                        {image && (
                                            <img
                                                src={image}
                                                className="ml-auto mt-auto aspect-square w-2/3 max-w-md object-cover sm:w-1/3"
                                                alt=""
                                                loading="lazy"
                                            />
                                        )}
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </section>
    );
};

export default StickyScroll1;
