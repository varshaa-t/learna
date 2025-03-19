import { dmSansFont, manropeFont } from "@/fonts/fonts";

interface TopSectionProps{
    title: string;
    text: string;
    variant: "left" | "center";
}

const variantClasses = {
    "left": "text-left",
    "center": "items-center text-center"
}

const titleClasses = {
    "left": "max-w-52 xs:max-w-[490px] sm:max-w-60 md:max-w-60 lg:max-w-96 xl:max-w-[410px] 2xl:max-w-[450px]",
    "center": "max-w-full"
}

const textClasses = {
    "left": "max-w-96 xs:max-w-[450px] sm:max-w-[600px] md:max-w-56 lg:max-w-80 xl:max-w-[460px] 2xl:max-w-[480px]",
    "center": "max-w-80 xs:max-w-[460px] sm:max-w-[580px] md:max-w-[440px] lg:max-w-[580px] xl:max-w-[725px]"
}

export default function TopSection({title, text, variant}: TopSectionProps){

    return (
        <div className={`${variantClasses[variant]} flex flex-col space-y-20 pb-20 md:space-y-10 md:pb-0`}>
            <div className={`text-2xl xs:text-2xl sm:text-[27px] md:text-3xl lg:text-4xl xl:text-[42px] ${titleClasses[variant]} ${manropeFont.className}`}>{title}</div>
            <div className={`text-sm xs:text-sm sm:text-[15px] md:text-[15px] lg:text-base xl:text-[17px] font-semibold md:tracking-tight ${textClasses[variant]} ${dmSansFont.className}`}>{text}</div>
        </div>
    )
}