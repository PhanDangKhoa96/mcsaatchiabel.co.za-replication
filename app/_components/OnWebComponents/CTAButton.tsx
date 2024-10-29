"use client";

import React, {useRef} from "react";
import SectionHeading from "./SectionHeading";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const CTAButton = () => {
    const containerRef = useRef(null);
    const buttonRef = useRef(null);

    const {contextSafe} = useGSAP({scope: containerRef});

    const onMouseOver = contextSafe(() => {
        gsap.to(buttonRef.current, {
            "--cta-target": "0%",
            ease: "power1.inOut",
            duration: 0.4,
        });
    });

    const onMouseOut = contextSafe(() => {
        gsap.to(buttonRef.current, {
            "--cta-target": "100%",
            ease: "power1.inOut",
            duration: 0.4,
        });
    });

    return (
        <section ref={containerRef}>
            <SectionHeading title="CTA Button" />

            <div className="container grid min-h-[50vh] place-items-center py-10 lg:py-20">
                <div>
                    <button
                        ref={buttonRef}
                        className="peer relative isolate pt-1"
                        onMouseOver={onMouseOver}
                        onMouseOut={onMouseOut}
                        style={{
                            background: `linear-gradient(to bottom, #fff var(--cta-target), #000 var(--cta-target))`,
                        }}>
                        <span className="heading-60-150 inline-block bg-[linear-gradient(to_bottom,#000_var(--cta-target),#fff_var(--cta-target))] pt-1 text-white [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] lg:pt-2 lg:text-[200px]">
                            Contact Us
                        </span>
                    </button>

                    <div className="grid grid-cols-3 overflow-hidden peer-hover:[&_div]:-translate-y-full">
                        <div className="ease-power-1-in-out duration-400 relative aspect-[3/1] overflow-hidden transition-transform">
                            <img
                                src="/cta-1.jpeg"
                                className="absolute inset-0 h-full w-full object-cover"
                                alt=""
                                loading="lazy"
                            />
                        </div>
                        <div className="ease-power-1-in-out duration-400 relative aspect-[3/2] h-2/3 overflow-hidden transition-transform">
                            <img
                                src="/cta-2.jpeg"
                                className="absolute inset-0 h-full w-full object-cover"
                                alt=""
                                loading="lazy"
                            />
                        </div>
                        <div className="ease-power-1-in-out duration-400 relative aspect-square h-full overflow-hidden transition-transform">
                            <img
                                src="/cta-3.jpeg"
                                className="absolute inset-0 h-full w-full object-cover"
                                alt=""
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTAButton;
