import Image from "next/image";
import Button from "./Button";
import { dmSansFont } from "@/fonts/fonts";
import Link from "next/link";

export default function Navbar(){

    return (
        <div className={`bg-tertiary-orange flex justify-between items-center px-12 pt-11 ${dmSansFont.className}`}>
            <Link href={"/"}>
                <Image
                    src={"https://images.squarespace-cdn.com/content/v1/63560ba563f3f90767df932c/0dbe9630-e839-41f7-bcf7-1b57644c514d/Learna+Logo-Black.png?format=1500w"}
                    alt="logo"
                    width={180}
                    height={100}
                />  
            </Link>
            <div className="flex items-center space-x-6">
                <div className="font-semibold">Home</div>
                <Button
                    text="Get a Demo"
                    size="md"
                    variant="secondary"
                />
            </div>
        </div>
    )
}