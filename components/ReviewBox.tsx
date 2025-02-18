import { dmSansFont, manropeFont } from "@/fonts/fonts";

interface ReviewBoxProps{
    review: string;
    reviewer: string;
}

export default function ReviewBox({review, reviewer}: ReviewBoxProps){

    return (
        <div className="flex flex-col space-y-1 bg-secondary-orange text-white max-w-[350px] xs:max-w-[360px] sm:w-[360px] md:w-40 lg:w-60 xl:w-72 2xl:w-[310px] py-8 px-6">
            <div className={`${manropeFont.className} sm:text-base md:text-lg lg:text-xl`}>{review}</div>
            <div className={`${dmSansFont.className} text-sm font-semibold text-right md:w-[130px] lg:w-[185px] xl:w-60 2xl:w-64 text-gray-200`}>{reviewer}</div>
        </div>
    )
}