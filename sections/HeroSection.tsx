"use client";

import Button from "@/components/Button";
import StoreButton from "@/components/Store-Button";
import AppleIcon from "@/icons/AppleIcon";
import GooglePlayIcon from "@/icons/GooglePlayIcon";
import Image from "next/image";
import { dmSansFont, manropeFont } from "@/fonts/fonts";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HeroSection(){

    const heroSectionTitleRef = useRef<HTMLDivElement | null>(null);
    const heroSectionTextRef = useRef<HTMLDivElement | null>(null);
    const heroSectionImageRef = useRef<HTMLImageElement | null>(null);
    const heroSectionButtonOneRef = useRef<HTMLAnchorElement | null>(null);
    const heroSectionButtonTwoRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if(!heroSectionTitleRef.current || !heroSectionTextRef.current || !heroSectionImageRef.current) return ;

        gsap.from(heroSectionTitleRef.current, {
            opacity: 0,
            autoAlpha: 0,
            y: 25
        })

        gsap.from(heroSectionTextRef.current, {
            opacity: 0,
            autoAlpha: 0,
            duration: 1,
            clipPath: "inset(0% 0% 10% 0%)"
        })

        gsap.from(heroSectionImageRef.current, {
            opacity: 0,
            autoAlpha: 0,
            y: 200,
            ease: "slow",
            duration: 0.5
        })
    }, []);

    useGSAP(() => {
        if(!heroSectionButtonOneRef.current || !heroSectionButtonTwoRef.current) return ;

        gsap.from([heroSectionButtonOneRef.current, heroSectionButtonTwoRef.current], {
            opacity: 0,
            autoAlpha: 0,
            y: 25,
            scrollTrigger: {
                trigger: heroSectionButtonTwoRef.current,
                start: "top 100%"
            }
        })

        ScrollTrigger.refresh();
    }, []);

    return (
        <div className="bg-tertiary-orange border-b-2 border-black flex flex-col md:flex-row md:items-end md:justify-between 
                        pt-24 pl-6 pb-36 xs:pb-48 sm:pl-10 sm:pt-28 md:pl-20 md:pt-24 md:pb-36
                        lg:pl-24 lg:pt-28 lg:pb-40 xl:pt-20 xl:pl-32 xl:pr-16 xl:pb-40 2xl:pl-36 2xl:pt-20 2xl:pr-20 2xl:pb-44"
        >
            <div className="flex flex-col justify-between space-y-24 md:space-y-5 lg:space-y-6 2xl:space-y-20">
                <div className="flex flex-col space-y-[450px] md:space-y-5 lg:space-y-16">
                    <div    
                        ref={heroSectionTitleRef}
                        className={`invisible flex flex-col text-3xl xs:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[65px] space-y-7 md:space-y-8 lg:space-y-7 ${manropeFont.className}`}
                    >
                        <div className="relative md:block w-72 md:w-52 lg:w-auto">Work smarter,</div>
                        <div className="w-80 lg:w-auto">not harder</div>
                    </div>
                    <div 
                        ref={heroSectionTextRef}
                        className={`invisible max-w-full pr-8 md:pr-0 md:max-w-60 lg:max-w-[350px] xl:max-w-sm 2xl:max-w-lg text-md lg:text-lg 2xl:text-xl lg:tracking-wide font-semibold ${dmSansFont.className}`}
                    >
                        Learna is a microlearning app designed to transform how people learn, grow and engage at work. Focused on the most in-demand soft skills and supported by actionable insights, Learna makes it simple to build a future-fit workforce.
                    </div>
                </div>
                <Link 
                    ref={heroSectionButtonOneRef}
                    className="invisible"
                    href={'/demo'}
                >
                    <Button
                        text="Get a Demo"
                        size="2xl"
                        variant="primary"
                    />
                </Link>
            </div>
            <div>
                <Image
                    ref={heroSectionImageRef}
                    className="invisible absolute top-[310px] left-0 xs:left-[7vw] sm:left-[20vw] w-[400px] md:top-[50vh] md:left-[50vw] md:w-[340px] lg:top-[40vh] lg:left-[48vw] lg:w-[480px] xl:static xl:w-[600px] 2xl:w-[650px] h-auto"
                    src={"/images/hero-section-image.png"}
                    alt="explore-section-on-app"
                    width={670}
                    height={659}
                />
            </div>
            <div 
                ref={heroSectionButtonTwoRef}
                className="invisible absolute top-[1100px] sm:top-[1050px] sm:left-[6vw] md:left-auto md:top-[750px] lg:top-[780px] xl:top-[830px] 2xl:top-[900px] flex space-x-4"
            >
                <StoreButton
                    icon={<AppleIcon/>}
                    textOne="GET IT ON"
                    textTwo="App Store"
                />
                <StoreButton
                    icon={<GooglePlayIcon/>}
                    textOne="GET IT ON"
                    textTwo="Google Play"
                />
            </div>
        </div>
    )
}