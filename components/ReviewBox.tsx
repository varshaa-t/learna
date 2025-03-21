"use client";

import { dmSansFont, manropeFont } from "@/fonts/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

interface ReviewBoxProps{
    review: string;
    reviewer: string;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ReviewBox({review, reviewer}: ReviewBoxProps){

    const reviewBoxContainerRef = useRef<HTMLDivElement | null>(null);
    const reviewRef = useRef<HTMLDivElement | null>(null);
    const reviewerRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if(!reviewRef.current || !reviewBoxContainerRef.current || !reviewerRef.current) return ;

        gsap.from(reviewRef.current, {
            opacity: 0,
            y: 25,
            delay: 0.1,
            clipPath: "inset(0% 0% 100% 0%)",
            scrollTrigger: {
                trigger: reviewRef.current,
                start: "top 80%"
            }
        })

        gsap.from([reviewBoxContainerRef.current, reviewerRef.current], {
            opacity: 0,
            y: 15,
            delay: 0.1,
            scrollTrigger: {
                trigger: reviewBoxContainerRef.current,
                start: "top 80%"
            }
        })
    }, []);

    return (
        <div ref={reviewBoxContainerRef} className="flex flex-col space-y-1 bg-secondary-orange text-white max-w-[350px] xs:max-w-[360px] sm:w-[360px] md:w-40 lg:w-60 xl:w-72 2xl:w-[310px] py-8 px-6">
            <div ref={reviewRef} className={`${manropeFont.className} sm:text-base md:text-lg lg:text-xl`}>{review}</div>
            <div ref={reviewerRef} className={`${dmSansFont.className} text-sm font-semibold text-right md:w-[130px] lg:w-[185px] xl:w-60 2xl:w-64 text-gray-200`}>{reviewer}</div>
        </div>
    )
}