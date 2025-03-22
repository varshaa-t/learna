"use client";

import { dmSansFont } from "@/fonts/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

interface BulletPointProps{
    text: string;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function BulletPoint({text}: BulletPointProps){

    const bulletPointTextRef = useRef<HTMLDivElement | null>(null);
    const bulletPointRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if(!bulletPointTextRef.current) return ;

        gsap.from([bulletPointTextRef.current, bulletPointRef.current], {
            opacity: 0, 
            autoAlpha: 0,
            clipPath: "inset(0% 10% 0% 0%)",
            scrollTrigger: {
                trigger: bulletPointTextRef.current,
                start: "top 80%"
            }
        })

        ScrollTrigger.refresh();
    }, []);

    return (
        <div className="w-[90vw] xs:w-[75vw] sm:w-[80vw] md:w-[20vw] lg:w-[30vw] flex space-x-2 pl-10 pb-6 xs:pb-16 md:pb-0">
            <div
                ref={bulletPointRef}
                className="invisible"
            >
                •
            </div> 
            <div 
                ref={bulletPointTextRef}
                className={`${dmSansFont.className} invisible text-sm md:text-[15px] lg:text-base xl:text-[17px] font-semibold tracking-tight`}
            >
                {text}
            </div>
        </div>
    )
}