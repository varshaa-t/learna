import { dmSansFont } from "@/fonts/fonts";

interface ButtonProps{
    text: string;
    size: "sm" | "md" | "lg" | "xl" | "2xl";
    variant: "primary" | "secondary" | "tertiary";
    type?: "submit";
}

const sizeClasses = {
    "sm": "w-20 p-2",
    "md": "w-40 md:py-6 text-[15px]",
    "lg": "w-56 py-5 tracking-tighter text-lg",
    "xl": "w-48 py-9 font-extrabold tracking-tighter text-2xl",
    "2xl": "max-w-44 tracking-tighter font-semibold py-6 text-lg px-10 md:px-12 md:text-xl md:max-w-52 md:py-7 lg:px-12 lg:py-8 xl:px-14 xl:max-w-56 2xl:px-14 2xl:max-w-60 2xl:text-2xl"
}

const variantClasses = {
    "primary": "bg-primary-orange",
    "secondary": "bg-secondary-orange",
    "tertiary": "bg-tertiary-orange"
}

const defaultClasses = `rounded-full hover:bg-opacity-80 ${dmSansFont.className}`;

export default function Button({text, size, variant, type}: ButtonProps){

    return (
        <button type={type} className={`${sizeClasses[size]} ${variantClasses[variant]} ${defaultClasses} ${type == "submit" ? "!font-bold" : ""}`}>
            {text}
        </button>
    )
}