"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Line(){

    const lineRef = useRef<SVGSVGElement | null>(null);

    useGSAP(() => {
        if(!lineRef.current) return ;

        gsap.from(lineRef.current, {
            opacity: 0, 
            autoAlpha: 0,
            clipPath: "inset(0% 2% 0% 0%)",
            scrollTrigger: {
                trigger: lineRef.current,
                start: "top 80%"
            }
        })

        ScrollTrigger.refresh();
    }, [])

    return(
        <svg ref={lineRef} height="50" width="700" className="invisible 2xs:max-w-[350px] xs:max-w-[450px] sm:max-w-[610px] md:max-w-56 lg:max-w-[350px] xl:max-w-[460px] 2xl:max-w-[480px] h-[50px]">
            <line x1="0" y1="20" x2="100%" y2="20" className="stroke-black stroke-[1px]" />
        </svg>
    )
}