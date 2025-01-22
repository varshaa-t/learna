import { dmSansFont } from "@/fonts/fonts";

interface BulletPointProps{
    text: string;
}

export default function BulletPoint({text}: BulletPointProps){

    return (
        <div className="w-[480px] flex space-x-2 pl-10">
            <div>•</div> 
            <div className={`${dmSansFont.className} text-[17px] font-semibold`}>{text}</div>
        </div>
    )
}