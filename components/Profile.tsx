import { dmSansFont, manropeFont } from "@/fonts/fonts";
import Image from "next/image";

interface ProfileProps{
    img: string;
    name: string;
    title: string;
}

export default function Profile({img, name, title}: ProfileProps){

    return (
        <div className="flex flex-col items-center space-y-4">
            <Image 
                src={img}
                alt="profile_pic"
                width={200}
                height={150}
                className="rounded-full w-[90vw] sm:w-[40vw] md:w-[25vw] lg:w-[18vw] xl:w-[12vw]"
            />
            <div className="flex flex-col text-center space-y-2">
                <div className={`text-lg leading-7 sm:text-xl lg:text-2xl xl:w-36 ${manropeFont.className}`}>{name}</div>
                <div className={`font-semibold text-[13px] sm:text-sm xl:w-36 ${dmSansFont.className}`}>{title}</div>
            </div>
        </div>
    )
}