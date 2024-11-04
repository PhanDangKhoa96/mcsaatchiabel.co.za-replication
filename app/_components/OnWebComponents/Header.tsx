"use client";

import {useGSAP} from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import Link from "next/link";
import React, {PropsWithChildren, useRef, useState} from "react";

const pages = [
    {name: "home", img: "page-img-1.jpeg"},
    {name: "work", img: "page-img-2.jpeg"},
    {name: "story", img: "page-img-3.jpeg"},
    {name: "think", img: "page-img-4.jpeg"},
    {name: "service", img: "page-img-5.jpeg"},
    {name: "art", img: "page-img-6.jpeg"},
    {name: "contact", img: "page-img-7.jpeg"},
    {name: "join us", img: "page-img-8.jpeg"},
];

const socialLinks = ["instagram", "twitter", "youtube", "facebook", "linkedin"];
const privatePages = ["privacy policy", "cookie policy"];

const menuThemes = [
    {
        bg: "black",
        text: "white",
    },
    {
        bg: "#1d1ae5",
        text: "white",
    },
    {
        bg: "#ffe600",
        text: "black",
    },

    {
        bg: "#e46ba1",
        text: "white",
    },
];

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLAnchorElement>(null);
    const themeIndex = useRef(0);
    const timeline = useRef<GSAPTimeline | null>(null);
    const theme = menuThemes[themeIndex.current];
    const [pageActiveIndex, setPageActiveIndex] = useState<number | null>(null);

    const {contextSafe} = useGSAP(
        () => {
            gsap.set(".overlay", {
                clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
            });

            // Set theme background
            gsap.set(".overlay", {
                background: theme.bg,
                color: theme.text,
            });

            themeIndex.current += 1;
        },
        {scope: headerRef}
    );

    const toggleMenu = contextSafe(() => {
        const mm = gsap.matchMedia();
        setOpenMenu(!openMenu);

        timeline.current = gsap.timeline({
            onComplete: () => {
                if (openMenu) {
                    gsap.set(menuRef.current, {
                        display: "none",
                    });

                    gsap.set(".overlay", {
                        background: theme.bg,
                        color: theme.text,
                    });

                    themeIndex.current += 1;

                    if (themeIndex.current > menuThemes.length - 1) {
                        themeIndex.current = 0;
                    }
                }
            },
        });

        mm.add(
            {
                small: "(max-width: 767px)",
                large: "(min-width: 768px)",
            },
            (ctx) => {
                const {small}: any = ctx.conditions;

                gsap.set(menuRef.current, {
                    display: "block",
                });

                // For all screens
                timeline.current?.to(
                    menuRef.current,
                    {
                        color: theme.text,
                        duration: 0.3,
                    },
                    0
                );
                timeline.current
                    ?.to(
                        ".menu-btn",
                        {
                            color: openMenu ? "black" : theme.text,
                            duration: 0.3,
                        },
                        0
                    )
                    .to(
                        logoRef.current,
                        {
                            autoAlpha: openMenu ? 1 : 0,
                            duration: 0.3,
                        },
                        0
                    );

                // For small screen animation
                if (small) {
                    timeline.current
                        ?.to(
                            menuRef.current,
                            {
                                xPercent: openMenu ? 0 : -100,
                                ease: "expo.inOut",
                            },
                            0
                        )
                        .to(".panel", {
                            opacity: openMenu ? 0 : 1,
                            duration: openMenu ? 0.3 : 0.5,
                            stagger: 0.1,
                        });

                    return;
                }

                // For large screen animation
                timeline.current
                    ?.to(
                        ".overlay",
                        {
                            clipPath: openMenu
                                ? "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
                                : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                            ease: "expo.inOut",
                        },
                        0
                    )
                    .to(
                        ".panel",
                        {
                            opacity: openMenu ? 0 : 1,
                            duration: openMenu ? 0.3 : 0.5,
                            stagger: 0.1,
                        },
                        openMenu ? "<" : 0.25
                    );
            }
        );
    });

    const onMouseEnter = (index: number) => {
        setPageActiveIndex(index);
    };

    const onMouseOut = () => {
        setPageActiveIndex(null);
    };
    return (
        <header
            ref={headerRef}
            className="fixed z-10 w-full overflow-x-clip pt-5">
            <div className="container pointer-events-none relative z-10 flex w-full justify-between font-bebasNeue text-3xl font-bold">
                <Link
                    ref={logoRef}
                    href={"/"}
                    className={clsx(
                        "relative z-10",
                        openMenu ? "pointer-events-none" : "pointer-events-auto"
                    )}>
                    Logo
                </Link>
                <button
                    onClick={toggleMenu}
                    className="menu-btn pointer-events-auto relative z-10">
                    {openMenu ? "CLOSE" : "MENU"}
                </button>
            </div>

            <div
                ref={menuRef}
                className="absolute left-full top-0 hidden w-full md:left-0">
                <div className="relative isolate h-full min-h-svh w-full lg:min-h-screen">
                    <div className="absolute inset-0 -z-10 grid grid-cols-[1.6fr_1fr_1fr] md:w-[calc(100%+2px)]">
                        <div className="overlay border-r border-solid border-current"></div>
                        <div className="overlay border-r border-solid border-current"></div>
                        <div className="overlay"></div>
                    </div>
                    <nav className="container grid pt-24 md:grid-cols-[1.6fr_1fr_1fr] lg:pt-7">
                        <div className="hidden md:mx-5 md:block">
                            <div className="relative aspect-square max-w-sm overflow-hidden">
                                {pages.map((page, index) => {
                                    const isActive = index === pageActiveIndex;
                                    return (
                                        <img
                                            key={index}
                                            src={page.img}
                                            className={clsx(
                                                "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
                                                !isActive && "opacity-0"
                                            )}
                                            loading="lazy"
                                            alt=""
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div className="panel mb-20 flex flex-col items-start justify-start gap-y-2 opacity-0 md:mb-0 md:pl-7">
                            {pages.map((page, index) => {
                                return (
                                    <Link
                                        onMouseEnter={() => onMouseEnter(index)}
                                        onMouseOut={onMouseOut}
                                        className="group relative isolate font-bebasNeue text-6xl font-bold leading-[0.8] transition-all duration-300 hover:invert"
                                        key={index}
                                        href={"#"}>
                                        {page.name}

                                        <span className="absolute -top-1 left-0 -z-10 h-full w-full origin-bottom scale-y-0 bg-current transition-all duration-300 group-hover:scale-100 group-hover:invert"></span>
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="panel grid grid-cols-2 gap-x-2 pr-10 opacity-0 md:grid-cols-1 md:pl-7 md:pr-0">
                            <div className="flex flex-col items-start gap-y-1">
                                {socialLinks.map((link, index) => {
                                    return (
                                        <LinkWithUnderline key={index}>
                                            {link}
                                        </LinkWithUnderline>
                                    );
                                })}
                            </div>
                            <div className="flex flex-col items-start gap-y-1">
                                {privatePages.map((link, index) => {
                                    return (
                                        <LinkWithUnderline key={index}>
                                            {link}
                                        </LinkWithUnderline>
                                    );
                                })}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

const LinkWithUnderline = ({children}: PropsWithChildren) => {
    return (
        <Link
            className="group relative isolate font-bebasNeue text-xl font-bold leading-[0.9]"
            href={"#"}>
            {children}
            <span className="absolute bottom-0 left-0 -z-10 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100"></span>
        </Link>
    );
};

export default Header;
