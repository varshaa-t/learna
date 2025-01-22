import { dmSansFont, manropeFont } from "@/fonts/fonts";

interface ReviewBoxProps{
    review: string;
    reviewer: string;
}

export default function ReviewBox({review, reviewer}: ReviewBoxProps){

    return (
        <div className="flex flex-col space-y-1 bg-secondary-orange text-white w-[310px] py-8 px-6">
            <div className={`${manropeFont.className} text-xl`}>{review}</div>
            <div className={`${dmSansFont.className} text-sm font-semibold text-right w-66 text-gray-200`}>{reviewer}</div>
        </div>
    )
}