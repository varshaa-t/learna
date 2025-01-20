
interface TopSectionProps{
    title: string;
    text: string;
    variant: "left" | "center";
}

const variantClasses = {
    "left": "text-left",
    "center": "flex flex-col items-center text-center"
}

const titleClasses = {
    "left": "w-[490px]",
    "center": "w-full"
}

const textClasses = {
    "left": "w-[460px]",
    "center": "w-[765px]"
}

export default function TopSection({title, text, variant}: TopSectionProps){

    return (
        <div className={`${variantClasses[variant]} space-y-4`}>
            <div className={`text-[44px] ${titleClasses[variant]}`}>{title}</div>
            <div className={`text-lg ${textClasses[variant]}`}>{text}</div>
        </div>
    )
}