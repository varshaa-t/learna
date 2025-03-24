"use client";

import Button from "@/components/Button";
import FooterIcon from "@/components/FooterIcon";
import { dmSansFont } from "@/fonts/fonts";
import LinkedinIcon from "@/icons/LinkedinIcon";
import MailIcon from "@/icons/MailIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FooterSection(){

    const footerLogoRef = useRef<HTMLImageElement | null>(null);
    const socialsRef = useRef<HTMLDivElement | null>(null);
    const footerButtonRef = useRef<HTMLAnchorElement | null>(null);
    const footerTextRef = useRef<HTMLDivElement | null>(null);
    const footerLinkRef = useRef<HTMLAnchorElement | null>(null);

    useGSAP(() => {
        if(!footerLogoRef.current || !socialsRef.current || !footerButtonRef.current || !footerTextRef.current || !footerLinkRef.current) return ;

        gsap.from(footerLogoRef.current, {
            opacity: 0,
            y: 50,
            delay: 0.3,
            scrollTrigger: {
                trigger: footerLogoRef.current,
                start: "top 60%"
            }
        })

        gsap.from(socialsRef.current, {
            opacity: 0,
            y: 50,
            delay: 0.6,
            scrollTrigger: {
                trigger: socialsRef.current,
                start: "top 60%"
            }
        })

        gsap.from(footerButtonRef.current, {
            opacity: 0,
            y: 50,
            delay: 0.9,
            scrollTrigger: {
                trigger: footerButtonRef.current,
                start: "top 60%"
            }
        })

        gsap.from([footerTextRef.current, footerLinkRef.current], {
            opacity: 0,
            y: 50,
            delay: 1.2,
            scrollTrigger: {
                trigger: footerTextRef.current,
                start: "top 70%"
            }
        })

        ScrollTrigger.refresh();
    }, []);

    return (
        <div className={`bg-light-peach flex justify-between pt-6 font-semibold pb-8 pl-6 pr-8 xs:pb-16 xs:pl-10 xs:pr-8 sm:pl-12 md:pl-10 md:pr-10 md:pb-2 lg:pr-20 lg:pl-14 lg:pb-3 xl:pl-20 xl:pr-40 xl:pb-4 2xl:pt-10 2xl:pb-6 ${dmSansFont.className}`}>
            <div className="flex flex-col space-y-10 xs:space-y-10 sm:space-y-16 md:space-y-14 lg:space-y-12 xl:space-y-14">
                <Image
                    ref={footerLogoRef}
                    src={"/images/logo.png"}
                    alt="footer-logo"
                    width={120}
                    height={40}
                    className="mt-8 pb-28 xs:w-40 xs:mt-6 xs:pb-32 sm:pb-24 md:pb-0 md:w-20 md:mt-4 lg:w-24 lg:mt-4 xl:w-28 xl:mt-6 2xl:w-32"
                />
                <div ref={footerTextRef} className="flex flex-col space-y-4 tracking-tight text-sm w-80 xs:text-[13.5px] xs:w-[420px] sm:text-sm sm:w-[525px] md:mt-0 md:text-[15px] md:w-[280px] lg:text-base lg:w-[370px] xl:w-[450px] 2xl:w-[550px]">
                    <div>Learna wishes to acknowledge the Traditional Custodians of the land on which we work and gather, Naarm (Melbourne, Australia), on Wurundjeri Woi Wurrung Country. </div>
                    <div>We pay our respects to the Wurundjeri Woi Wurrung people, as well as their Elders, past, present, and emerging.</div>
                </div>
                <Link 
                    ref={footerLinkRef}
                    href={"/privacy-policy"} 
                    className="underline underline-offset-4 text-sm lg:text-[15px] xl:text-base"
                >
                    Privacy Policy
                </Link>
            </div>
            <div className="flex lg:space-x-2 xl:space-x-8 2xl:space-x-16">
                <div 
                    ref={socialsRef}
                    className="flex pt-6 space-x-3 -ml-28 xs:-ml-32 md:ml-0"
                >
                    <div>
                        <FooterIcon
                            icon={<LinkedinIcon/>}
                        />
                    </div>
                    <div>
                        <FooterIcon
                            icon={<MailIcon/>}
                        />
                    </div>
                </div>
                <Link 
                    ref={footerButtonRef}
                    href={'/demo'} 
                    className="self-center -ml-52 -mt-32 xs:-ml-52 xs:-mt-24 sm:-mt-28 sm:-ml-60 md:mt-0 md:self-auto md:ml-0">
                    <Button
                        text="Get a Demo"
                        size="2xl"
                        variant="secondary"
                    />
                </Link>
            </div>
        </div>
    )
}