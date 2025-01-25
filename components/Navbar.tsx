"use client";

import Image from "next/image";
import Button from "./Button";
import { dmSansFont } from "@/fonts/fonts";
import Link from "next/link";
import MenuIcon from "@/icons/MenuIcon";
import CloseIcon from "@/icons/CloseIcon";
import { useState } from "react";

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    function toggleNavbar(){
        setIsOpen(!isOpen);
    }

    return (
        <nav className={`bg-tertiary-orange  ${dmSansFont.className}`}>
            <div className={`hidden md:flex justify-between items-center px-12 pt-11`}>
                <Link href={"/"}>
                    <Image
                        src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/0dbe9630-e839-41f7-bcf7-1b57644c514d/Learna+Logo-Black.png?format=1500w"}
                        alt="logo"
                        width={180}
                        height={100}
                    />  
                </Link>
                <div className="hidden md:flex items-center space-x-6">
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
                <div className="block relative md:hidden">
                    <Link href={"/"} className="absolute top-7 sm:top-12 left-[35vw] sm:left-[40vw]">
                        <Image
                            src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/0dbe9630-e839-41f7-bcf7-1b57644c514d/Learna+Logo-Black.png?format=1500w"}
                            alt="logo"
                            width={120}
                            height={100}
                        />  
                    </Link>
                    <button 
                            className="block md:hidden absolute top-8 sm:top-12 right-8 sm:right-10"
                            onClick={toggleNavbar}
                        >
                            {isOpen ? <CloseIcon size={32}/> : <MenuIcon/>}
                    </button>
                </div>
            )}
            {isOpen && (
                <div className="block relative md:hidden bg-[#f5ede3] h-screen">
                    <div>
                        <Link href={"/"} className="absolute top-7 left-[35vw] sm:top-12 sm:left-[40vw]">
                            <Image
                                src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/0dbe9630-e839-41f7-bcf7-1b57644c514d/Learna+Logo-Black.png?format=1500w"}
                                alt="logo"
                                width={120}
                                height={100}
                            />  
                        </Link>
                        <button 
                            onClick={toggleNavbar}
                            className="block md:hidden absolute top-8 right-8 sm:top-12 sm:right-10"
                        >
                            {isOpen ? <CloseIcon size={28}/> : <MenuIcon/>}
                        </button>
                    </div>
                    <Link href={'/'} className="absolute top-[45vh] left-[44vw]">
                        <div className="text-2xl tracking-tighter">
                            Home
                        </div>
                    </Link>
                    <Link href={'/demo'} className="absolute bottom-10 left-[25vw] sm:left-[33vw]">
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