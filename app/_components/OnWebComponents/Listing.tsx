"use client";

import React, {useState} from "react";
import SectionHeading from "./SectionHeading";
import clsx from "clsx";

const contentArray = [
    {
        title: "AWARENESS",
        description:
            "Creating visibility for brands through strategic placement in high-traffic areas and across multiple media channels to maximize reach.",
    },
    {
        title: "INSIGHTS",
        description:
            "Utilizing data to understand customer behavior, preferences, and trends, helping to tailor campaigns for better engagement and results.",
    },
    {
        title: "DESIGN",
        description:
            "Developing visually appealing and impactful designs that communicate brand messages and resonate with the target audience.",
    },
    {
        title: "MARKETING",
        description:
            "Leveraging digital platforms such as social media, search engines, and email to reach and engage audiences effectively.",
    },
    {
        title: "STRATEGY",
        description:
            "Formulating a comprehensive marketing plan that aligns with business goals and ensures consistent brand messaging across all channels.",
    },
    {
        title: "DISTRIBUTION",
        description:
            "Ensuring product availability and brand presence across multiple channels, from online platforms to physical stores.",
    },
    {
        title: "RELATIONSHIP",
        description:
            "Building and nurturing long-term relationships with customers through personalized engagement and support.",
    },
    {
        title: "ACTIVATION",
        description:
            "Creating memorable experiences that bring brands to life and engage customers directly through interactive events and promotions.",
    },
];

const Listing = () => {
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const [previousIndex, setPreviousIndex] = useState<number>(-1);

    return (
        <section>
            <SectionHeading title="Listing" />

            <ul className="">
                {contentArray.map(({description, title}, index) => {
                    const isActive = index === activeIndex;
                    const isHovered =
                        activeIndex !== null && index < activeIndex;
                    const isLastItem = index === contentArray.length - 1;
                    return (
                        <li
                            onMouseOver={() => {
                                setActiveIndex(index);
                                setPreviousIndex(index - 1);
                            }}
                            onMouseLeave={() => {
                                if (isLastItem) {
                                    setActiveIndex(index + 1);
                                } else {
                                    setActiveIndex(-1);
                                }

                                setPreviousIndex(index);
                            }}
                            className="group relative isolate overflow-hidden border-b border-black py-5 first-of-type:border-t"
                            key={index}>
                            <div
                                className={clsx(
                                    "absolute inset-0 -z-10 bg-blue transition-transform duration-300 ease-linear",
                                    activeIndex === -1 &&
                                        previousIndex !== index &&
                                        "!duration-0",

                                    isActive
                                        ? "translate-y-0"
                                        : isHovered
                                          ? "translate-y-full"
                                          : "-translate-y-full"
                                )}></div>
                            <div className="container grid grid-cols-[1fr_4fr_6fr]">
                                <div className="heading-32-54 transition duration-300 ease-in-out group-hover:text-white">
                                    0{index + 1}
                                </div>
                                <h3 className="heading-32-54 transition duration-300 ease-in-out group-hover:text-white">
                                    {title}
                                </h3>
                                <p className="max-w-xl text-sm text-white">
                                    {description}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Listing;
