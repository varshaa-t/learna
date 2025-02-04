"use client";

import Image from "next/image";
import Button from "./Button";
import { dmSansFont } from "@/fonts/fonts";
import Link from "next/link";
import MenuIcon from "@/icons/MenuIcon";
import CloseIcon from "@/icons/CloseIcon";
import { useEffect, useState } from "react";

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

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

    return (
        <nav className={`bg-tertiary-orange ${dmSansFont.className}`}>
            <div className={`hidden xl:flex justify-between items-center px-11 pt-11`}>
                <Link href={"/"}>
                    <Image
                        src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/0dbe9630-e839-41f7-bcf7-1b57644c514d/Learna+Logo-Black.png?format=1500w"}
                        alt="logo"
                        width={177}
                        height={48}
                    />  
                </Link>
                <div className="hidden xl:flex items-center space-x-6">
                    <Link href={'/'}>
                        <div className="font-semibold">
                            Home
                        </div>
                    </Link>
                    <Link href={'/demo'}>
                        <Button
                            text="Get a Demo"
                            size="md"
                            variant="secondary"
                        />
                    </Link>
                </div>
            </div>
            {!isOpen && (
                <div className="flex items-center justify-end pt-6 space-x-[19vw] px-6 sm:px-11 sm:space-x-[28vw] md:space-x-[28vw] sm:pt-10 md:pt-12 lg:pt-11 lg:space-x-[34vw] xl:hidden">
                    <Link href={"/"}>
                        <div className="w-[120px] md:w-auto md:h-auto">
                            <Image
                                src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/0dbe9630-e839-41f7-bcf7-1b57644c514d/Learna+Logo-Black.png?format=1500w"}
                                alt="logo"
                                width={177}
                                height={48}
                            />  
                        </div>
                    </Link>
                    <button 
                            onClick={toggleNavbar}
                        >
                            {isOpen ? <CloseIcon size={32}/> : <MenuIcon/>}
                    </button>
                </div>
            )}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex flex-col justify-between items-center xl:hidden bg-[#f5ede3] pt-11 px-11 pb-16">
                    <div className="flex justify-end items-center">
                        <Link href={"/"}>
                            <Image
                                src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/0dbe9630-e839-41f7-bcf7-1b57644c514d/Learna+Logo-Black.png?format=1500w"}
                                alt="logo"
                                width={177}
                                height={48}
                            />  
                        </Link>
                        <button 
                            onClick={toggleNavbar}
                            className="block xl:hidden absolute top-8 right-8 sm:top-12 sm:right-10"
                        >
                            {isOpen ? <CloseIcon size={28}/> : <MenuIcon/>}
                        </button>
                    </div>
                    <Link href={'/'}>
                        <div className="text-2xl tracking-tighter">
                            Home
                        </div>
                    </Link>
                    <Link href={'/demo'}>
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