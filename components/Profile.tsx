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
                className="rounded-full"
            />
            <div className="flex flex-col text-center space-y-2">
                <div className={`text-2xl w-36 leading-7 ${manropeFont.className}`}>{name}</div>
                <div className={`text-sm font-semibold w-36 ${dmSansFont.className}`}>{title}</div>
            </div>
        </div>
    )
}