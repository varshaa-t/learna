"use client";

import Image from "next/image";
import Button from "./Button";
import { dmSansFont } from "@/fonts/fonts";
import Link from "next/link";
import MenuIcon from "@/icons/MenuIcon";
import CloseIcon from "@/icons/CloseIcon";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false);
    const navbarLogoOneRef = useRef<HTMLAnchorElement | null>(null);
    const navbarHomeOneRef = useRef<HTMLAnchorElement | null>(null);
    const navbarButtonOneRef = useRef<HTMLAnchorElement | null>(null);
    const navbarLogoTwoRef = useRef<HTMLAnchorElement | null>(null);
    const navbarButtonTwoRef = useRef<HTMLButtonElement | null>(null);
    const navbarLogoThreeRef = useRef<HTMLAnchorElement | null>(null);
    const navbarButtonThreeRef = useRef<HTMLButtonElement | null>(null);
    const navbarHomeTwoRef = useRef<HTMLAnchorElement | null>(null);
    const navbarButtonFourRef = useRef<HTMLAnchorElement | null>(null);

    function toggleNavbar(){
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    useGSAP(() => {
        if(!navbarLogoOneRef.current || !navbarHomeOneRef.current || !navbarButtonOneRef.current) return ;

        gsap.from([navbarLogoOneRef.current, navbarHomeOneRef.current, navbarButtonOneRef.current], {
            opacity: 0,
            y: 25,
            autoAlpha: 0
        })
    }, []);

    useGSAP(() => {
        if(!navbarLogoTwoRef.current || !navbarButtonTwoRef.current) return ;

        gsap.from([navbarLogoTwoRef.current, navbarButtonTwoRef.current], {
            opacity: 0,
            y: 25,
            autoAlpha: 0
        })
    }, [isOpen]);

    useGSAP(() => {
        if(!navbarLogoThreeRef.current || !navbarButtonThreeRef.current || !navbarHomeTwoRef.current || !navbarButtonFourRef.current) return ;
        
        gsap.from([navbarLogoThreeRef.current, navbarButtonThreeRef.current, navbarHomeTwoRef.current, navbarButtonFourRef.current], {
            opacity: 0,
            y: 25,
            stagger: 0.1,
            autoAlpha: 0
        })
        
    }, [isOpen])

    return (
        <nav className={`bg-tertiary-orange ${dmSansFont.className}`}>
            <div className={`hidden md:flex justify-between items-center px-11 pt-11`}>
                <Link 
                    className="invisible"
                    ref={navbarLogoOneRef}
                    href={"/"}
                >
                    <Image
                        src={"/images/logo.png"}
                        alt="logo"
                        width={177}
                        height={48}
                    />  
                </Link>
                <div className="hidden md:flex items-center space-x-6">
                    <Link 
                        className="invisible"
                        ref={navbarHomeOneRef}
                        href={'/'} 
                    >
                        <div className="font-semibold">
                            Home
                        </div>
                    </Link>
                    <Link 
                        className="invisible"
                        ref={navbarButtonOneRef}
                        href={'/demo'}
                    >
                        <Button
                            text="Get a Demo"
                            size="md"
                            variant="secondary"
                        />
                    </Link>
                </div>
            </div>
            {!isOpen && (
                <div className="flex items-center justify-end pt-10 space-x-[19vw] px-4 xs:px-6 xs:space-x-[27vw] sm:px-11 sm:space-x-[28vw] md:hidden md:space-x-[28vw] md:pt-12 lg:pt-11 lg:space-x-[34vw]">
                    <Link 
                        className="invisible"
                        ref={navbarLogoTwoRef}
                        href={"/"}
                    >
                        <div className="w-[120px] md:w-auto md:h-auto">
                            <Image
                                src={"/images/logo.png"}
                                alt="logo"
                                width={177}
                                height={48}
                            />  
                        </div>
                    </Link>
                    <button 
                        className="invisible"
                        ref={navbarButtonTwoRef}
                        onClick={toggleNavbar}
                    >
                        {isOpen ? <CloseIcon size={32}/> : <MenuIcon/>}
                    </button>
                </div>
            )}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex flex-col justify-between items-center xl:hidden bg-[#f5ede3] pt-11 px-11 pb-16">
                    <div className="flex justify-end items-center">
                        <Link 
                            ref={navbarLogoThreeRef} 
                            className="invisible" 
                            href={"/"}
                        >
                            <Image
                                src={"/images/logo.png"}
                                alt="logo"
                                width={177}
                                height={48}
                                className="w-[120px] md:w-auto md:h-auto"
                            />  
                        </Link>
                        <button 
                            ref={navbarButtonThreeRef}
                            onClick={toggleNavbar}
                            className="invisible block absolute right-8 sm:right-10 lg:top-14 xl:hidden"
                        >
                            {isOpen ? <CloseIcon size={28}/> : <MenuIcon/>}
                        </button>
                    </div>
                    <Link 
                        className="invisible"
                        ref={navbarHomeTwoRef}
                        href={'/'}
                    >
                        <div className="text-2xl tracking-tighter">
                            Home
                        </div>
                    </Link>
                    <Link 
                        className="invisible"
                        ref={navbarButtonFourRef}
                        href={'/demo'}
                    >
                        <Button
                            text="Get a Demo"
                            size="lg"
                            variant="primary"
                        />
                    </Link>
                </div>
            )}
        </nav>
    )
}