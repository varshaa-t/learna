"use client";

import ContactForm from "@/components/ContactForm";
import { dmSansFont, manropeFont } from "@/fonts/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import _ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, _ScrollTrigger);

export default function FormSection(){

    const formSectionImageOneRef = useRef<HTMLDivElement | null>(null);
    const formSectionImageTwoRef = useRef<HTMLDivElement | null>(null);
    const formSectionTitleRef = useRef<HTMLDivElement | null>(null);
    const formSectionTextRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if(!formSectionImageOneRef.current || !formSectionImageTwoRef.current || !formSectionTitleRef.current || !formSectionTextRef.current) return;

        gsap.from([formSectionImageOneRef.current, formSectionImageTwoRef.current], {
            opacity: 0,
            y: 150,
            autoAlpha: 0,
            scrollTrigger: {
                trigger: formSectionImageOneRef.current,
                start: "top 80%"
            }
        })

        gsap.from(formSectionTitleRef.current, {
            opacity: 0,
            y: 50,
            autoAlpha: 0,
            scrollTrigger: {
                trigger: formSectionTitleRef.current,
                start: "top 80%"
            }
        })

        gsap.from(formSectionTextRef.current, {
            opacity: 0,
            autoAlpha: 0,
            duration: 1,
            scrollTrigger: {
                trigger: formSectionTitleRef.current,
                start: "top 80%"
            }
        })

        ScrollTrigger.refresh();
    }, []);

    return (
        <div className={`bg-tertiary-orange flex justify-between md:items-center lg:items-end 2xl:items-start pt-52 pb-36 px-1 font-semibold ${dmSansFont.className}`}>
            <div 
                ref={formSectionImageOneRef}
                className="invisible hidden md:block"
            >
                <Image
                    src={"/images/links-section-1.png"}
                    alt="left-img"
                    width={360}
                    height={670}
                    className="h-auto md:w-[30vw] lg:w-[25vw] xl:w-80 2xl:w-96"
                />
            </div>
            <div className={`flex flex-col items-center mx-auto -mt-36 xs:-mt-28`}>
                <div className="flex flex-col text-center w-72 space-y-20 pb-12 md:pb-28 xs:space-y-16 xs:w-96 md:space-y-12 md:w-[400px] xl:w-[600px]">
                    <div 
                        ref={formSectionTitleRef}
                        className={`${manropeFont.className} invisible font-light text-3xl xs:text-4xl sm:text-[5vw] xl:text-[4.5vw] 2xl:text-[5vw]`}
                    >
                        Get a Demo
                    </div>
                    <div 
                        ref={formSectionTextRef}
                        className={`${dmSansFont.className} invisible font-semibold text-sm xs:tracking-wide xs:text-base md:text-[17px] xl:text-lg`}
                    >
                        See for yourself how Learna can create better workplaces by changing the way people learn.
                    </div>
                </div>
                <ContactForm/>
            </div>
            <div 
                ref={formSectionImageTwoRef}
                className="invisible hidden md:block"
            >
                <Image
                    src={"/images/links-section-2.png"}
                    alt="right-img"
                    width={360}
                    height={670}
                    className="h-auto md:w-[30vw] lg:w-[25vw] xl:w-80 2xl:w-96"
                />
            </div>
        </div>
    )
}