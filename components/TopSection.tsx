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
    "left": "w-[490px]",
    "center": "w-full"
}

const textClasses = {
    "left": "w-[470px]",
    "center": "w-[725px]"
}

export default function TopSection({title, text, variant}: TopSectionProps){

    return (
        <div className={`${variantClasses[variant]} flex flex-col space-y-4`}>
            <div className={`text-[44px] ${titleClasses[variant]} ${manropeFont.className}`}>{title}</div>
            <div className={`text-[17px] font-semibold tracking-tight ${textClasses[variant]} ${dmSansFont.className}`}>{text}</div>
        </div>
    )
}