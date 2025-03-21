"use client";

import { dmSansFont, manropeFont } from "@/fonts/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

interface ProfileProps{
    img: string;
    name: string;
    title: string;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Profile({img, name, title}: ProfileProps){

    const profileImageRef = useRef<HTMLImageElement | null>(null);
    const profileNameRef = useRef<HTMLDivElement | null>(null);
    const profileTitleRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if(!profileImageRef.current || !profileTitleRef.current || !profileNameRef.current) return ;

        gsap.from([profileImageRef.current, profileTitleRef.current],{
            opacity: 0,
            autoAlpha: 0,
            y: 50,
            stagger: 0.15,
            scrollTrigger: {
                trigger: profileImageRef.current,
                start: "top 90%"
            }
        })

        gsap.from(profileNameRef.current, {
            opacity: 0,
            autoAlpha: 0,
            y: 10,
            delay: 0.25,
            duration: 0.5,
            scrollTrigger: {
                trigger: profileImageRef.current,
                start: "top 80%"
            }
        })
    }, []);

    return (
        <div className="flex flex-col items-center space-y-4">
            <Image 
                ref={profileImageRef}
                src={img}
                alt="profile_pic"
                width={200}
                height={150}
                className="invisible rounded-full w-[90vw] sm:w-[40vw] md:w-[25vw] lg:w-[18vw] xl:w-[12vw]"
            />
            <div className="flex flex-col text-center space-y-2">
                <div 
                    ref={profileNameRef}
                    className={`invisible text-lg leading-7 sm:text-xl lg:text-2xl xl:w-36 ${manropeFont.className}`}
                >
                    {name}
                </div>
                <div 
                    ref={profileTitleRef}
                    className={`invisible font-semibold text-[13px] sm:text-sm xl:w-36 ${dmSansFont.className}`}
                >
                    {title}
                </div>
            </div>
        </div>
    )
}