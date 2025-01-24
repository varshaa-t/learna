import { dmSansFont } from "@/fonts/fonts";

interface ButtonProps{
    text: string;
    size: "sm" | "md" | "lg" | "xl";
    variant: "primary" | "secondary" | "tertiary";
    type?: "submit";
}

const sizeClasses = {
    "sm": "w-20 p-2",
    "md": "w-40 px-4 py-6",
    "lg": "w-48 py-9 font-extrabold tracking-tighter text-2xl",
    "xl": "w-56 py-8 text-xl"
}

const variantClasses = {
    "primary": "bg-primary-orange",
    "secondary": "bg-secondary-orange",
    "tertiary": "bg-tertiary-orange"
}

const defaultClasses = `rounded-full font-semibold hover:bg-opacity-80 ${dmSansFont.className}`;

export default function Button({text, size, variant, type}: ButtonProps){

    return (
        <button type={type} className={`${sizeClasses[size]} ${variantClasses[variant]} ${defaultClasses}`}>
            {text}
        </button>
    )
}