import { dmSansFont } from "@/fonts/fonts";

interface BulletPointProps{
    text: string;
}

export default function BulletPoint({text}: BulletPointProps){

    return (
        <div className="w-[90vw] xs:w-[70vw] md:w-[20vw] lg:w-[30vw] flex space-x-2 pl-10 pb-10 xs:pb-16 md:pb-0">
            <div>•</div> 
            <div className={`${dmSansFont.className} text-sm md:text-[15px] lg:text-base xl:text-[17px] font-semibold tracking-tight`}>{text}</div>
        </div>
    )
}